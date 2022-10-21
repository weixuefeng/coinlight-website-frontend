/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 17:32:03
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-21 11:19:51
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
  let pageModel = new PageModel('Detail', '', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  const router = useRouter()
  const { id } = router.query

  const [newsItemData, setNewsItemData] = useState<any>()
  const newsItemUrl = `/api/proxy?news/${id}?populate=*`

  useEffect(() => {
    const getDataInfo = async () => {
      const resNews = await getRequest(`${newsItemUrl}`)
      setNewsItemData(resNews.data.data.attributes)
    }
    getDataInfo()
  }, [id])

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
