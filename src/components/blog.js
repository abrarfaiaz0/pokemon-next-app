import styles from "@/styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blogcontainer}>
      <div className={styles.left}>
        <div>
          <img src="assets/Left.png"></img>
          <img src="assets/Left.png"></img>
        </div>
      </div>
      <div className={styles.blog}>
        <div className={styles.blogtitle}>
          Ash & Pikachu Arrive in <br></br>Pokemon Universe
        </div>
        <div className={styles.blogtext}>
          <div className={styles.blogtextleft}></div>
          <div className={styles.blogtextright}></div>
        </div>
      </div>
      <div className={styles.left}>
        <div>
          <img src="assets/Left.png"></img>
          <img src="assets/Left.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Blog;
