import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import React, {useState, useEffect } from "react";
import ThemeToggleButton from 'components/Layout/ThemeToggleButton'
import ThemeToggle from 'components/Layout/ThemeToggle'
import { withTranslation,useTranslation } from 'react-i18next';
import Header from 'components/header/header'
export default Home

function Home() {
  const navList = [
    {
        src: '/',
        nav: 'WAVE'
    },
    {
        src: '/',
        nav: 'FEATURES'
    },
    {
        src: '/',
        nav: 'COMMUNITY'
    },
    {
        src: '/',
        nav: 'FAQ'
    },
    {
        src: '/',
        nav: 'DOWNLOAD'
    }
]
  const logo  = '/assets/image/logo.png'
  const [date] = useState(navList)
  return (
    <div className={styles.container}>
      <Header date={date} logo={logo} />
      <Main />
      <Footer />
    </div>
  )
}

function Main() {
  return (
    <main className={styles.main}>
      <article className="prose dark:prose-invert md:prose-lg lg:prose-xl">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </article>
    </main>
  )
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>
}
