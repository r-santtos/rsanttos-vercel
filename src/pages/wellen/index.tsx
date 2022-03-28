import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import styles from '../../../styles/Wellen.module.css'

const Home: NextPage = () => {
  const [escolha, setEscolha] = useState(0);

  const handleEscolhaOne = () => {
    setEscolha(1);
  }

  const handleEscolhaTwo = () => {
    setEscolha(2);
  }

  const Paragrafo = () => {
    if (escolha === 0) {
      return (
        <div className={styles.p}>
          <p>
            Escolhas<br /> 
            Eles são importantes<br />
            em nossas vidas,<br />
            então faça isso com<br />
            cuidado, você quer ver o:
          </p>
          <div className={styles.row}>
            <button className={styles.btn} onClick={() => handleEscolhaOne()}>passado</button>
            <button className={styles.btn} onClick={() => handleEscolhaTwo()}>futuro</button>
          </div>
        </div>
      )
    } else if (escolha === 1) {
      return (
        <p className={styles.p}>
          Wellen<br /> 
          Esse são meus planos para você.<br /><br />
          De tudo, ao meu amor serei atento<br />
          Antes, e com tal zelo, e sempre, e tanto<br /><br />
          Que mesmo em face do maior encanto<br /><br />
          Dele se encante mais meu pensamento<br />
        </p>
      )
    } else {
      return (
        <p className={styles.p}>
          Wellen<br />
          Feliz por ter escolhido o futuro<br /><br />
          Onde cuidarei de você por<br />
          todos os momentos de sua vida,<br /><br />
          sempre procurando fazer de<br />
          cada dia o seu mais feliz.
        </p>
      )
    }
  }

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

      <Paragrafo />
    
    </div>
  )
}

export default Home
