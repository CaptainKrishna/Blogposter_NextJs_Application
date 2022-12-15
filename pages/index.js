import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
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
          Welcome to <a href="https://captainkrishna.tech">Blogposter</a>
        </h1>
        <Link href="/Homepage" style={{ marginTop: "100px", padding: "10px", color: "#fff", fontSize: "20px", background: "none", border: "none", }}>
          Get Started
        </Link>
      </main>

      <footer className={styles.footer}>
        <a href="https://captainkrishna.netlify.com">
          Powered by{' '}captainkrishna
        </a>
      </footer>
    </div>
  )
}
