import Image from "next/image";
import classes from "./card.module.css";

const myLoader: any = ({ src, width, quality }: any) => {
  return `https://res.cloudinary.com/${src}?w=${width}&q=${quality || 75}`;
};
export default function Card({ data }: any) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`d-flex align-items-center gap-2 mb-0 text-decoration-none ${classes.card__mobile}`}
    >
      <div className={classes.card}>
        <Image
          loader={myLoader}
          src={data.image}
          width={400}
          height={200}
          layout="responsive"
          alt="blog"
        />
        <div className={classes.card__body}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h5>{data.author}</h5>
        </div>
      </div>
    </a>
  );
}
