import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={`${classes.footer}`}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={classes.social}>
              <a
                href="https://www.linkedin.com/in/shivam-prakash-pawar/"
                className="text-priamry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a
                href="https://github.com/shivam-pawar/"
                className={classes.githubIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.facebook.com/shivam.pawar.94214"
                className="text-priamry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-box-line"></i>
              </a>
              <a
                href="mailto: shivampawar1038@gmail.com"
                className="text-success"
              >
                <i className="ri-mail-send-fill"></i>
              </a>
              <a
                href="https://twitter.com/Shivampawar1038/"
                className="text-priamry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://stackoverflow.com/users/12633305/shivam-pawar"
                className={classes.stckoverflow__icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-stack-overflow-fill"></i>
              </a>
              <a
                href="https://dev.to/shivampawar"
                className="text-priamry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/devto.png"
                  width={30}
                  height={30}
                  alt="DevTo"
                ></Image>
              </a>
            </div>
          </Col>
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Shivam Pawar. All right
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
