import styles from "@/styles/Card.module.css";
import ImageInCard from "./imageInCard";

const Card = () => {
  return (
    <div className={styles.card}>
      <ImageInCard className={styles.image}></ImageInCard>
      <div className={styles.fold}></div>
    </div>
  );
};

export default Card;
