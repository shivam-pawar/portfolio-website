import Head from "next/head";
import styles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LetMeDown } from "let-me-down";
interface Props {
  children?: React.ReactNode;
  pageTitle?: String;
}
export default function Layout({
  children,
  pageTitle = "Shivam Pawar",
}: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div id={`${styles.bodyContainer}`}>
        <Header />
        <div className={`${styles.bodyContainer}`}>{children}</div>
      </div>
    </>
  );
}
