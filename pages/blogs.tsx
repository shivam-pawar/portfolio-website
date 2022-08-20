import { LetMeDown } from "let-me-down";
import { Container } from "reactstrap";
import { blogsData } from "../blogs/blogs";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import classes from "../styles/blogs.module.css";
function blogs() {
  return (
    <LetMeDown footerComponent={<Footer />}>
      <Container>
        <div className={classes.cards}>
          {blogsData.map((blog) => (
            <Card data={blog} key={blog.id} />
          ))}
        </div>
      </Container>
    </LetMeDown>
  );
}

export default blogs;
