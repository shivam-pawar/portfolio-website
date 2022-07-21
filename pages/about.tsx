import { Container, Col, Row } from "reactstrap";
import classes from "../styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <Container>
      <Row className={`${classes.about__background}`}>
        <Col lg="6" md="6">
          <h3 className="mt-4">I&apos;m here</h3>
          <h3 className="mb-4">to help your next project</h3>
          <p>
            A skilled, competent, and diligent individual, specializing in the
            modern web development (React js - Redux) and Machine Learning
            algorithms. For the last 2.8 years, I have been developing
            applications using JavaScript, C# and Python programming languages.
          </p>
          <p>
            I’m hands on in all stages of the programming cycle, from planning
            to design and deployment. No two days are the same for me; my tasks
            may involve analyzing algorithms, altering code, fixing bugs,
            brainstorming ideas or integrating new systems.
          </p>
          <div className=" d-flex align-items-center gap-5">
            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Search A Lot
              </h6>
            </div>

            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                High Quality
              </h6>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" className={`${classes.heroImage}`}>
          <Image
            alt="hero-image"
            src="/me-circle.png"
            width="408"
            height="408"
          />
        </Col>
      </Row>
      <Row className={`${classes.mobile__landingPage}`}>
        <Col lg="6" md="6" className={`${classes.mobile__landingPage_logo}`}>
          <Image
            alt="hero-image"
            src="/me-circle.png"
            width="218"
            height="218"
          />
        </Col>
      </Row>
    </Container>
  );
}
