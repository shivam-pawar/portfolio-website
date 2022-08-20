import { Container, Col, Row } from "reactstrap";
import classes from "../styles/about.module.css";
import Image from "next/image";
import { techStack } from "../constants/technology_stack";
import { LetMeDown } from "let-me-down";
import Footer from "../components/Footer/Footer";
export default function About() {
  return (
    <LetMeDown footerComponent={<Footer />}>
      <Container>
        <Row className={`${classes.about__background}`}>
          <Col lg="6" md="6">
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              A skilled, competent, and diligent individual, specializing in the
              modern web development (React js - Redux) and Machine Learning
              algorithms. For the last 2.8 years, I have been developing
              applications using JavaScript, C# and Python programming
              languages.
            </p>
            <p>
              I’ve hands on in all stages of the programming cycle, from
              planning to design and deployment. No two days are the same for
              me; my tasks may involve analyzing algorithms, altering code,
              fixing bugs, brainstorming ideas or integrating new systems.
            </p>
            <div className=" d-flex align-items-center gap-4">
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
              <Row className={`${classes.mobile__landingPage}`}>
                <Col
                  lg="6"
                  md="6"
                  className={`${classes.mobile__landingPage_logo}`}
                >
                  <Image
                    alt="hero-image"
                    src="/me-circle.png"
                    width="218"
                    height="218"
                  />
                </Col>
              </Row>
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
          <Col lg="12" md="12">
            <h3 className="mb-4 mt-5">Technology Stack</h3>
            <div className={classes.technology__stack}>
              {techStack.map((tech) => (
                <img src={tech.url} alt={tech.alt} key={tech.id} />
              ))}
            </div>
          </Col>
          <Col lg="6" md="6">
            <h3 className="mb-4">Certifications</h3>
            <div className={classes.certification__stack}>
              <ul>
                <li>
                  <a href="https://www.credly.com/badges/e9010a98-7990-4035-87e5-fe7ea5769903?source=linked_in_profile">
                    Microsoft Certified: Azure Fundamentals
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://rhtapps.redhat.com/verify?certId=180-127-532">
                    Red Hat Certified System Administrator - EX200
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/react-ecosystems">
                    React: Ecosystems
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/react-server-side-rendering-8539269">
                    React: Server-Side Rendering
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://www.linkedin.com/learning/asp-dot-net-mvc-5-essential-training-4">
                    ASP.NET MVC 5 Essential Training
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/42ecc868-4ec4-41d5-affc-4137107bea2d?source=linked_in_profile">
                    Python for Data Science and AI
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
                <li>
                  <a href="https://www.coursera.org/account/accomplishments/verify/6AXMSKRR48W8">
                    Data Visualization with Plotly Express
                  </a>
                  &nbsp;<i className="ri-links-line"></i>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="6" className={classes.certificate__image}>
            <Image
              src="/certificate.svg"
              width={280}
              height={280}
              alt="certificate"
            />
          </Col>
        </Row>
      </Container>
    </LetMeDown>
  );
}
