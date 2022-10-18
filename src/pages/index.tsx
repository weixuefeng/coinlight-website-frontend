/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:08:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-18 17:08:08
 * @FilePath: /nextjs-starter-boilerplate/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
 */

import React, { useState, useEffect } from 'react'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import { useTranslation } from 'react-i18next'
import { getRequest, postRequest } from 'services/getAxios'
import Banner from '../components/banner'
import ListContent from '../components/listContent'

export default Home

function Home() {
  let pageModel = new PageModel('HOME', '', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  let { i18n } = useTranslation()
  const { t } = useTranslation()
  const bannerUrl = '/api/hello?banners'
  const newsUrl = 'api/hello?news'
  const [bannerData, setBannerData] = useState()
  const [newsData, setNewsData] = useState()

  useEffect(() => {
    const getDataInfo = async () => {
      const resBanners = await getRequest(bannerUrl)
      const resNews = await getRequest(newsUrl)
      setBannerData(resBanners.data.data)
      setNewsData(resNews.data.data)
    }
    getDataInfo()
  }, [])

  return (
    <div className="container">
      <Banner bannerData={bannerData} />
      <ListContent newsData={newsData} />
      {/* {t('Content')} */}
    </div>
  )
}
