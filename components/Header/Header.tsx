import { useRef, useEffect, useState, Children } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/testimonials",
    display: "Testimonials",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/projects",
    display: "Projects",
  },
];

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeMenuRef = useRef<HTMLDivElement>(null);
  const [darkTheme, setDarkTheme] = useState(Boolean);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current?.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue.toString() === "dark");
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme == true) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle(`${classes.menu__active}`);
  };

  const toggleMode = () => {
    setDarkTheme(!darkTheme);
  };

  const handleActiveMenu = (e: any) => {
    activeMenuRef.current?.childNodes.forEach(function (n) {
      //@ts-ignore
      n.classList.remove(`${classes.nav__menu__active}`);
    });
    e.target?.classList.add(`${classes.nav__menu__active}`);
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={`${classes.header}`} ref={headerRef}>
        <Container className={`${classes.header__text_color}`}>
          <div className={`${classes.nav__wrapper}`}>
            <Link href="/">
              <div className={`${classes.logo}`}>
                <h1>
                  <span>S</span>hivam <span>P</span>awar
                </h1>
              </div>
            </Link>
            <div
              className={`${classes.navigation}`}
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className={`${classes.nav__menu}`} ref={activeMenuRef}>
                {NAV__LINK.map((item, index) => (
                  <Link href={item.path} key={index}>
                    <span onClick={(e) => handleActiveMenu(e)}>
                      {item.display}
                    </span>
                  </Link>
                ))}
                <div className={`${classes.nav__right}`}>
                  <p
                    className={`d-flex align-items-center gap-2 mb-0 ${classes.darkMode}`}
                  >
                    <Image
                      src={darkTheme ? "/moon.png" : "/sun.png"}
                      width={50}
                      height={50}
                      title="Switch Mode"
                      className={`${classes.darkMode}`}
                      onClick={toggleMode}
                      alt="Switch Mode"
                    ></Image>
                    <a
                      href="https://github.com/shivam-pawar/portfolio-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`d-flex align-items-center gap-2 mb-0 ${classes.githubIcon}`}
                    >
                      <Image
                        src={
                          darkTheme ? "/github-icon-dark.png" : "/github.png"
                        }
                        width={darkTheme ? 40 : 70}
                        height={darkTheme ? 40 : 70}
                        title="Github Repo"
                        className={`${classes.darkMode}`}
                        alt="github"
                      ></Image>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <span>
              <div className={`${classes.nav__right__mobile}`}>
                <p
                  className={`d-flex align-items-center gap-2 mb-0 ${classes.darkMode}`}
                >
                  <Image
                    src={darkTheme ? "/moon.png" : "/sun.png"}
                    width={50}
                    height={50}
                    title="Switch Mode"
                    className={`${classes.darkMode}`}
                    onClick={toggleMode}
                    alt="switch mode"
                  ></Image>
                  <a
                    href="https://github.com/shivam-pawar/portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`d-flex align-items-center gap-2 mb-0 ${classes.githubIcon}`}
                  >
                    <Image
                      src={darkTheme ? "/github-icon-dark.png" : "/github.png"}
                      width={darkTheme ? 40 : 70}
                      height={darkTheme ? 40 : 70}
                      title="Github Repo"
                      className={`${classes.darkMode}`}
                      alt="Github Repo"
                    ></Image>
                  </a>
                </p>
              </div>
            </span>
            <span className={`${classes.mobile__menu}`}>
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
