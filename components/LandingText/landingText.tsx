import Head from "next/head";
import styles from "./landingText.module.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

export default function LandingText() {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Row className={`${styles.landingPage}`}>
        <Col lg="12" md="12" className={`${styles.landingText}`}>
          <h1 className="mt-5 mb-2">
            Hey, I'm Shivam Pawar!<br></br> Frontend Developer<br></br> from{" "}
            <br></br>
            India<br></br>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
