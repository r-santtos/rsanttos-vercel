import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../../styles/Wellen.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Wellen</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main id={styles.main} className={styles.glowing}>
      <span></span>
      <span></span>
      <span></span>
    </main>

    <p className={styles.p}>
      Wellen<br /> 
      Esse são meus planos para você.<br /><br />
      De tudo, ao meu amor serei atento<br />
      Antes, e com tal zelo, e sempre, e tanto<br /><br />
      Que mesmo em face do maior encanto<br /><br />
      Dele se encante mais meu pensamento<br />
    </p>
    </div>
  )
}

export default Home
