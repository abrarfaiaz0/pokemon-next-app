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
        <div className={styles.blogtext}>assd asdassdassdasdasd</div>
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
