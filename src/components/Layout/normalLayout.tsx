/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-13 11:34:40
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-28 17:45:06
 * @FilePath: /nextjs-starter-boilerplate/src/components/layout/normalLayout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import { PageModel } from 'model/navModel'

export default function NormalLayout(children: React.ReactNode, pageModel: PageModel = null): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageModel?.title}</title>
        <meta name="keywords" content="Coinlight" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageModel?.title} />
        <meta property="twitter:title" content={pageModel?.title} />
        <meta property="og:description" content={pageModel?.description || 'Coinlight'} />
        <meta property="twitter:description" content={pageModel?.description || 'Coinlight'} />
        <meta
          property="og:image"
          content={pageModel?.image || 'https://ipfs.wavemall.io/ipfs/QmRwwGq91m3Q4euzLshLrra4m1p1QTUwmNS8h6epqiEZTL'}
        />
        <meta
          property="twitter:image"
          content={pageModel?.image || 'https://ipfs.wavemall.io/ipfs/QmRwwGq91m3Q4euzLshLrra4m1p1QTUwmNS8h6epqiEZTL'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <div className={pageModel.name}>
        <Footer />
      </div>
    </>
  )
}
