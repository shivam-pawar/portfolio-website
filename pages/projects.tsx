import { LetMeDown } from "let-me-down";
import { Container, Row, Col, Card, CardFooter, CardBody } from "reactstrap";
import Footer from "../components/Footer/Footer";
import classes from "../styles/project.module.css";
function projects() {
  return (
    <LetMeDown footerComponent={<Footer />}>
      <Container>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                Customized and Dedicated Gold and Silver Report Printing and
                Record Maintaining Software
              </h5>
            </div>
          </div>
          <Col lg="6" md="6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vXLNM-un8HA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col lg="6" md="6">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  In market, there are many Gold assaying machines available.
                  The problem is that they come with a default report printing
                  format/layout with 0 customization.
                </p>
                <p>
                  Gold assayers wants to personalize their reports based on the
                  local market or as per their choice. There must be a way to
                  reduce paper work and the efforts required to keep large
                  record books.
                </p>
                <p>
                  Presenting 'Customized and Dedicated Gold and Silver Report
                  Printing and Record Maintaining Software' I used React.Js,
                  Firebase Authentication, Material-Ui kit, Firebase real time
                  database, Netlify and Progressive Web App (PWA) technology.
                </p>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/MPGOLD-WEB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                let-me-down : NPM Package for React.js
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  LetMeDown is a React component to always keep Footer component
                  of your application at bottom of screen and below the content
                  on page.
                </p>
                <p></p>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/let-me-down"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.npmjs.com/package/let-me-down"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-npmjs-line m-3"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                Prediction of time to consume food contained in cold supply
                chain using Machine Learning and RaspberryPi.
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  Cold chain is a significant part in interfacing the customers
                  and providers, it ensures that the production network of
                  freezing and frozen food is in great characteristics.
                </p>
                <p>
                  The requirement for food is a preoccupation on that human
                  share with all other species, it is one of the worries that
                  lie at the centre of all the presence. The project will grow
                  new creative displaying instruments that join nourishment
                  quality and prediction time to consume food products like
                  milk, meat, fish, etc. For this purpose, a machine learning
                  algorithm is used with hardware support of RaspberryPi
                  embedded with temperature sensor which will detect room
                  temperature with particular timespan and machine learning
                  algorithm predict the lifetime of food.
                </p>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/Cold-Supply-Chain---ML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                Automated Supervision System
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  The online automation provides the ease access which connects
                  the operations coherently and handles effectively. The
                  objective of it to maintain assignment module, which assigns
                  duties for faculty and handles deform module- keeps track on
                  the number of students absent for a particular exam. This
                  system keeps track of all records of faculty, exams, time
                  tables and allotment of invigilation duties.
                  <p>
                    Technologies used: ASP.NET, Javascript, MS SQL Server, CSS.
                  </p>
                </p>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/Automation-ExamManagement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                Marionette - Student Managemenent System MVC
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  This is Online Student Information Management System project
                  developed using Marionette.Js and SQL server as backend. In
                  admin dashboard, you can:
                </p>
                <ol>
                  <li>Read student records</li>
                  <li>Insert student records</li>
                  <li>Update student records</li>
                  <li>Delete student records</li>
                </ol>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/Marionette-Student-Managemenent-System-MVC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                Backbone - Student Management System
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  This is Online Student Information Management System project
                  developed using Backbone.Js and SQL server as backend. In
                  admin dashboard, you can:
                </p>
                <ol>
                  <li>Read student records</li>
                  <li>Insert student records</li>
                  <li>Update student records</li>
                  <li>Delete student records</li>
                </ol>
              </CardBody>
              <CardFooter className={`${classes.card__footer}`}>
                <a
                  href="https://github.com/shivam-pawar/Backbone-Student-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center gap-5">
            <div className={`${classes.project__heading}`}>
              <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.project__icon}`}>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
                React - Student Management System
              </h5>
            </div>
          </div>
          <Col lg="12" md="12">
            <Card className={`${classes.project__body}`}>
              <CardBody>
                <p>
                  This is Online Student Information Management System project
                  developed using React.Js and SQL server as backend. In admin
                  dashboard, you can:
                </p>
                <ol>
                  <li>Read student records</li>
                  <li>Insert student records</li>
                  <li>Update student records</li>
                  <li>Delete student records</li>
                </ol>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </LetMeDown>
  );
}

export default projects;
