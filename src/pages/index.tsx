/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:08:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-31 13:14:33
 * @FilePath: /nextjs-starter-boilerplate/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
 */
import React, { useState } from 'react'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import ListContent from '../components/listContent'
import Header from 'components/header'
import { getLocalData } from '../localstorage/localstorage'

export default Home

function Home(props) {
  let pageModel = new PageModel('HOME', '', '')
  return <>{NormalLayout(Main(props), pageModel)}</>
}

function Main(props) {
  const token = getLocalData('language', 'zh')
  const [languageVal, setLanguageVal] = useState(token)
  const langfun = val => {
    setLanguageVal(val)
  }

  return (
    <>
      <Header langfun={langfun} />
      <div className="container">
        <ListContent languageVal={languageVal} />
      </div>
    </>
  )
}
