import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogposter</title>
        <meta name="description" content="Latest tech news you should know" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://captainkrishna.netlify.com">Blogposter</a>
        </h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2 className={styles.mt}>Get start &rarr;</h2>
            <p></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://captainkrishna.netlify.com">
          Powered by{' '}captainkrishna
        </a>
      </footer>
    </div>
  )
}
