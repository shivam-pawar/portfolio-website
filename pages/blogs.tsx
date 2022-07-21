import Image from "next/image";
import { Container } from "reactstrap";
import { blogsData } from "../blogs/blogs";
import Card from "../components/Card/Card";
import classes from "../styles/blogs.module.css";
function blogs() {
  return (
    <Container>
      <div className={classes.cards}>
        {blogsData.map((blog) => (
          <Card data={blog} key={blog.id} />
        ))}
      </div>
    </Container>
  );
}

export default blogs;
