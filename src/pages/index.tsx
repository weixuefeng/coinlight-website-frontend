/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:08:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-17 14:23:31
 * @FilePath: /nextjs-starter-boilerplate/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
 */

import React, { useState, useEffect } from 'react'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import { useTranslation } from 'react-i18next'
import { postRequest } from 'services/getAxios'
import Banner from '../components/banner'

export default Home

function Home() {
  let pageModel = new PageModel('HOME', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

const collectionUrl = '/api/hello'
function Main() {
  let { i18n } = useTranslation()
  const { t } = useTranslation()

  useEffect(() => {
    getCollectionInfo()
  }, [])
  const getCollectionInfo = async () => {
    let params = {
      collection_id: 4,
    }
    // const res = await postRequest(collectionUrl, params)
    // console.log('res:',res)
    // if (res.status == 200 && res.data.error_code == 1) {
    //   const info = res.data.result
    //   console.log('info:',info)
    // }
  }
  return (
    <div className="container">
      <Banner />
      {t('Content')}
    </div>
  )
}
