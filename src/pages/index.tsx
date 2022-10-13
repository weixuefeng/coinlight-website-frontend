/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:08:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-12 20:26:16
 * @FilePath: /nextjs-starter-boilerplate/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
 */
import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import React, { useState, useEffect } from 'react'
import ThemeToggleButton from 'components/layout/themeToggleButton'
import ThemeToggle from 'components/layout/themeToggle'
import { withTranslation, useTranslation } from 'react-i18next'
import Header from 'components/header/header'
export default Home

function Home() {
  const navList = [
    {
      src: '/',
      nav: 'WAVE',
    },
    {
      src: '/',
      nav: 'FEATURES',
    },
    {
      src: '/',
      nav: 'COMMUNITY',
    },
    {
      src: '/',
      nav: 'FAQ',
    },
    {
      src: '/',
      nav: 'DOWNLOAD',
    },
  ]
  const logo = '/assets/image/logo.png'
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
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error')
        }}
      >
        Throw error
      </button>
      <footer className={styles.footer}>footer</footer>
    </>
  )
}
