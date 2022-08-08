import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/fabiojdantas1.png' />
          <div className={styles.authorInfo}>
            <strong>Fábio Dantas</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='August 07, 2022 at 08:44 PM' dateTime='2022-08-07 08:44:00'>Posted 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋</p>
        <p>I just uploaded another project in my portfolio. It is a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀</p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p><a href=''>#newproject #nlw #rocketseat</a></p>
      </div>

    </article>
  );
}