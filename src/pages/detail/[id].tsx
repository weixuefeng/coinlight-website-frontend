/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 17:32:03
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-28 18:02:07
 * @FilePath: /coinlight/coinlight-website-frontend/src/pages/details.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE<
 */
import React, { useState, useEffect } from 'react'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import { getRequest } from 'services/getAxios'
import { useRouter } from 'next/router'
import { utcDateTime } from '../../utils/utcDateTime'
import MarkdownView from 'react-showdown'
import { Skeleton } from 'antd'

export default Home

function Home() {
  const [title, setTitle] = useState('Detail')
  const [desc, setDesc] = useState('THE NEWS PLATFORM OF GLOBAL DIGITAL ENTERTAINMENT')
  const [image, setImage] = useState('https://ipfs.wavemall.io/ipfs/QmRwwGq91m3Q4euzLshLrra4m1p1QTUwmNS8h6epqiEZTL')
  let pageModel = new PageModel(title, desc, 'detail-box', image)
  return <>{NormalLayout(<Main setTitle={setTitle} setDesc={setDesc} setImage={setImage} />, pageModel)}</>
}

function Main(props) {
  const { setTitle, setDesc, setImage } = props
  const router = useRouter()
  const { id } = router.query
  const [newsItemData, setNewsItemData] = useState<any>()

  useEffect(() => {
    const getDataInfo = async () => {
      const newsItemUrl = `/api/proxy?news/${id}?populate=*`
      const resNews = await getRequest(`${newsItemUrl}`)
      setNewsItemData(resNews.data.data.attributes)
      setTitle(resNews.data.data.attributes.title)
      setDesc(resNews.data.data.attributes.content)
      setImage(resNews.data.data.attributes.img)
    }
    getDataInfo()
  }, [id])

  // const newsItemUrl = `/api/proxy?news/${id}?populate=*`
  // const bannerItemUrl = `/api/proxy?banners/${id}`
  // let path: any
  // if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  //   path = window.location.pathname
  //   path = path.match(/^\/.*?\/(.*)$/ || [])[1]
  // }
  // let hrefTitle = ''
  // if (path) {
  //   hrefTitle = path.split('/')[0]
  // }
  // let arrId = hrefTitle.split('=')
  // let newsItemUrl
  // arrId.length < 2
  //   ? (newsItemUrl = `/api/proxy?news/${arrId[0]}?populate=*`)
  //   : (newsItemUrl = `/api/proxy?banners/${arrId[1]}?populate=*`)

  return (
    <div className="details container">
      <h3 className="title">
        {newsItemData !== undefined ? newsItemData?.title : <Skeleton active paragraph={{ rows: 0 }} />}
      </h3>
      <div className="source">
        {newsItemData !== undefined ? (
          <>
            <img src={newsItemData?.source_img} alt="img" />
            <span className="source-left">{newsItemData?.source}</span>
            <i>|</i>
            <span className="time">{newsItemData !== undefined ? utcDateTime(newsItemData.publishedAt) : null}</span>
          </>
        ) : (
          <Skeleton active paragraph={{ rows: 0 }} />
        )}
      </div>
      <div className="details-item">
        <div className="item-content">
          {newsItemData !== undefined ? (
            <MarkdownView markdown={newsItemData?.html} options={{ tables: true, emoji: true }} />
          ) : (
            <Skeleton active paragraph={{ rows: 20 }} />
          )}
        </div>
        <ul className="tags">
          {newsItemData?.tags.data?.map((tagItem, i) => {
            return <li key={i}>{tagItem.attributes.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
