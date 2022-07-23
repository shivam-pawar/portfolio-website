import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Slider from "react-slick";
import classes from "../styles/testimonial.module.css";
function Testimonial() {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    infinite: true,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row className={`${classes.testimonial__color}`}>
          <Col lg="6" md="6">
            <Image
              src="/ConnectedWorld.png"
              width="400"
              height="400"
              alt="connected world"
            ></Image>
          </Col>
          <Col lg="6" md="6">
            <h4 className="mt-4 mb-5">What people says about me</h4>
            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Sumit Kharche
                        </a>
                      </h5>
                    </div>
                    <h6>Sr Software Development Engineer at Emtec Inc.</h6>
                  </div>
                </div>

                <p>
                  <i className="ri-double-quotes-l"></i>
                  Shivam is a fantastic person to work with. He is very thorough
                  in everything he does and can be depended upon to get job
                  done. Shivam is dedicated, methodical and very capable. Shivam
                  is exceptionally dedicated at his work. During the period I
                  worked with him I noticed his eye for details, teamwork spirit
                  and objectivity in every assignment. Certainly worth
                  recommending.<i className="ri-double-quotes-r"></i>
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Rajjab Nadaf
                        </a>
                      </h5>
                    </div>
                    <h6>Engineer | Founder @OneDotTech</h6>
                  </div>
                </div>
                <p>
                  <i className="ri-double-quotes-l"></i>
                  As a student of same class, I've observed Shivam work on
                  different technologies. He's been keen to the learning process
                  from the very first day. He has a great knowledge of Python
                  and Machine Learning Concepts. Also, decent knowledge of
                  Object Oriented Concept and Programming Languages. He has been
                  one of the bright students from the class and we could see him
                  enjoying throughout the deadlines.
                  <i className="ri-double-quotes-r"></i>
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Swati Pusawale
                        </a>
                      </h5>
                    </div>
                    <h6>
                      Assistant Professor at Rajarambapu institute of
                      Technology, Sakharale
                    </h6>
                  </div>
                </div>
                <p>
                  <i className="ri-double-quotes-l"></i>I have taught Shivam in
                  the First Year. He is good at academics. He is sincere and
                  hardworking. I am certain that he is going to do great and
                  creative things in his future.
                  <i className="ri-double-quotes-r"></i>
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Shailesh Shirguppikar, Ph.D.
                        </a>
                      </h5>
                    </div>
                    <h6>
                      Head - Office of International Relations and Education at
                      Rajarambapu Institute of Technology.
                    </h6>
                  </div>
                </div>
                <p>
                  <i className="ri-double-quotes-l"></i>I know Shivam and I
                  taught him Basic Mechanical Enginering course. He is sensible
                  and sincere student. I am happy to recommend his for future
                  avenues.<i className="ri-double-quotes-r"></i>
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Amol Jagtap
                        </a>
                      </h5>
                    </div>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>
                  <i className="ri-double-quotes-l"></i>I have mentoring Shivam.
                  He is having good programming skills as well as Hard working.
                  <i className="ri-double-quotes-r"></i>
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__people}`}>
                  <div>
                    <div>
                      <h5 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                        <span className={`${classes.linkedin__icon}`}>
                          <i className="ri-linkedin-box-fill"></i>
                        </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-prakash-pawar/details/recommendations/?detailScreenTabIndex=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-decoration-none text-secondary ${classes.user__name}`}
                        >
                          Suhel Zende
                        </a>
                      </h5>
                    </div>
                    <h6>Software Engineer at Persistent Systems</h6>
                  </div>
                </div>
                <p>
                  <i className="ri-double-quotes-l"></i>
                  Shivam is really a good team player, and has great technical
                  skills too.He has very good programming skills specially
                  Python and .NET. Also he is head of machine learning club of
                  RIT.<i className="ri-double-quotes-r"></i>
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
