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
          <div className={styles.blogtextleft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            diam gravida, lobortis sem in, scelerisque odio. Pellentesque
            maximus a erat a hendrerit. Sed sagittis eros in nulla tincidunt, at
            vestibulum arcu consectetur. Integer efficitur pretium sem vel
            bibendum. Aliquam in egestas mauris. Donec sodales dui ac nunc
            fermentum, auctor pretium leo dapibus. Cras suscipit ligula mollis
            volutpat consequat. Praesent eu ultricies urna. Vivamus ac
            ullamcorper lacus. Pellentesque facilisis erat nec sem molestie
            fringilla. Integer dictum neque in libero semper commodo
            <br></br>
            <br></br>
            Praesent luctus ullamcorper turpis, quis sollicitudin nunc viverra
            in. Mauris eleifend odio vitae est scelerisque, et convallis ex
            lobortis. Nunc iaculis porta risus, quis consectetur sem bibendum
            eu. Mauris sagittis justo elit, ut ornare nisi posuere eget.
            Suspendisse potenti. Etiam ac nisl maximus justo pharetra
            sollicitudin at sit amet erat. Quisque a augue ut libero
            sollicitudin fermentum. Vestibulum ornare rutrum augue a consequat.
            Mauris maximus sapien purus, quis vulputate lacus tincidunt eget.
          </div>
          <div className={styles.blogtextright}>
            Nam ultricies porttitor mauris, non consectetur risus dignissim ut.
            Nunc arcu metus, consectetur in lacinia porttitor, auctor id risus.
            Nam condimentum neque eget metus porttitor faucibus. Sed varius elit
            nec pretium hendrerit. In non accumsan risus. Quisque tellus urna,
            congue vestibulum commodo eu, blandit ac quam. Proin ut magna
            consequat, commodo purus vel, placerat mi. Donec fermentum, odio eu
            ultrices varius, sapien metus dapibus odio, in dignissim magna enim
            non orci. Nulla elit elit, auctor quis lectus in, rhoncus blandit
            quam. Vestibulum placerat, nibh eu mollis accumsan, nulla orci
            mattis nisi, vel euismod eros dolor suscipit enim. Integer accumsan
            vehicula nisi, sit amet sagittis erat pulvinar ut. Donec in dictum
            turpis. Donec nec arcu vitae lorem feugiat scelerisque sed et dui.
            Morbi dictum urna a diam accumsan tempor. Maecenas vel sapien ac mi
            ultrices accumsan.
            <br></br>
            <br></br>
            Nulla mollis scelerisque est pulvinar rhoncus. Fusce mollis eleifend
            enim. Duis imperdiet neque vitae dapibus placerat. Nullam quam
            tellus, pellentesque nec aliquam vel, lobortis non leo. Nam quis
            libero aliquam, convallis lacus et, cursus elit. Nam rhoncus, diam
            ac vulputate tristique, lorem urna pulvinar odio, nec venenatis leo
            risus sit amet massa. Integer egestas est ut sapien hendrerit, non
            dictum metus bibendum. Quisque dapibus consequat porttitor. Nullam
            semper aliquam eros non interdum. Aliquam dapibus lectus gravida
            ligula hendrerit dignissim. Fusce odio felis, fringilla ac nisi non,
            semper rutrum tortor. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nunc molestie
            purus nec nibh ultrices aliquet. Nam porta dolor sem, non consequat
            turpis placerat sed.
          </div>
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
