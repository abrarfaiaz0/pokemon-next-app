import styles from "@/styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.card}>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Card;
