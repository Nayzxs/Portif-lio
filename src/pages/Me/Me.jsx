import React from 'react'
import styles from "./Me.module.css"

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naécia</h1>
        <p className={styles.description}>Junior front-end and back-end developer</p>
        <a href="mailto:naeciassirqueira@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img 
      src={'/img/capa.png'} 
      alt='a picture of me' className={styles.meImg}/>
    </section>
  );
}
