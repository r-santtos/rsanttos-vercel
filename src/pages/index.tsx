import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Images from '../componets/Images';
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const newDateT = new Date();
  const yearT = newDateT.getFullYear();
  const monthT = newDateT.getMonth();
  const daysT = newDateT.getDate();
  
  const date1 = new Date("1/1/2017");
  const date2 = new Date(`"${monthT}/${daysT}/${yearT}"`);
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

  /** STATES TIMES */
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [porcOne, setPorcOne] = useState(0);
  const [porcTwo, setPorcTwo] = useState(0);

  const realTime = () => {
    let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
    let countDownDateStart = new Date("Dec 31, 2021 23:59:59").getTime();
    
    let totalDayYear = countDownDate - countDownDateStart
    let totalDay = Math.floor(totalDayYear / (1000 * 60 * 60 *24)); 
    let porcDay = 100 / totalDay;
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setPorcOne(days * porcDay); 
    setPorcTwo(Math.round((100 / 60)*seconds)); 

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    return clearInterval();
  }

  useEffect(() => {setInterval(realTime)},[])

  useEffect(() => {
    const src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5323896371528279"
    const crossorigin="anonymous"
  },[])

  return (
    <div>
      <Head>
        <title>RSANTTOS - Programmer</title>
        <meta name="description" content="Desenvolvedor de aplivativos web, mobile e desktop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main} className={styles.container}>
        {/** HOME */}
        <section id={styles.home} className={styles.container}>
          <Image src={Images.Profile} alt="profile" className={styles.img} width={80} height={80}/>
          <h2>rsanttos</h2>
          <a href="https://www.instagram.com/rsanttos89/" target="_blank" rel="noopener noreferrer">programador mobile</a>

          {/** SOCIAL CONTAINER */}
          <div className={`${styles.container} ${styles.social}`}>
            <a title="instagram" href="https://www.instagram.com/rsanttos89/" target="_blank" rel="noopener noreferrer">
              <Image src={Images.Instagram} alt="profile" width={80} height={80}/>
            </a>

            <a title="github" href="https://github.com/r-santtos" target="_blank" rel="noopener noreferrer">
              <Image src={Images.GitHub} alt="profile" width={80} height={80}/>
            </a>

            <a title="linkedin" href="https://www.linkedin.com/in/rsanttos89/" target="_blank" rel="noopener noreferrer">
              <Image src={Images.Linkedin} alt="profile" width={80} height={80}/>
            </a>
          </div>
        </section>

        {/** TIMES CONTAINER */}
        <section id={styles.times} className={styles.container}>
          {/** TIME BOX */}
          <div className={`${styles.container}, ${styles.timeBox}`}>
            {/** TIME BAR */}
            <div className={`${styles.container} ${styles.timeBar}`}>
              <p>Dias como programador</p>
              <span className={`${styles.container} ${styles.lineOne}`}>
                <span
                  style={{width: `${porcOne}%`}}
                  id={styles.lineTwos}
                  className={`${styles.container} ${styles.lineTwo}`}>
                  </span>
              </span>
              <p id={styles.dayss}>{diffDays}</p>
            </div>
          </div>
        </section>

        {/** TIMES CONTAINER */}
        <h3 className={styles.h3}>Final do ano &#10097;&#10097;</h3>
        <section id={styles.times} className={styles.container}>
          {/** TIME BOX */}
          <div className={`${styles.container}, ${styles.timeBox}`}>
            {/** BOX RIGHT */}
            <div className={`${styles.container} ${styles.right}`}>
              <div className={`${styles.container} ${styles.boxRight}`}>
                {/** <!-- DAYS --> */}
                <div className={`${styles.container} ${styles.number}`}>
                  <p id={styles.days}>{days}</p>
                  <p>dias</p>
                </div>

                <span className={`${styles.container} ${styles.points}`}>:</span>

                {/** HOURS */}
                <div className={`${styles.container} ${styles.number}`}>
                  <p id={styles.hours}>{hours}</p>
                  <p>horas</p>
                </div>

                <span className={`${styles.container} ${styles.points} ${styles.last}`}>:</span>

                {/** MINUTES */}
                <div className={`${styles.container} ${styles.number}`}>
                  <p id={styles.minutes}>{minutes}</p>
                  <p>minutos</p>
                </div>

                <span className={`${styles.container} ${styles.points}`}>:</span>

                {/** SECONDS */}
                <div className={`${styles.container} ${styles.number}`}>
                  <p id={styles.seconds}>{seconds}</p>
                  <p>segundos</p>
                </div>
              </div>

              {/** TIME BAR */}
              <div className={`${styles.container} ${styles.timeBar}`}>
                <p>Regressiva</p>
                <span className={`${styles.container} ${styles.lineOne}`}>
                  <span 
                    style={{width: `${porcTwo}%`}}
                    id={styles.lineTwo} 
                    className={`${styles.container} ${styles.lineTwo}`}
                  ></span>
                </span>
                <p>{yearT}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id={styles.footer} className={styles.container}>
        <p>ricardo santtos&copy;{yearT}</p>
      </footer>
    </div>
  )
}

export default Home
