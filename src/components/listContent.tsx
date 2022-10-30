/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-30 13:39:01
 * @FilePath: /coinlight-website-frontend/src/components/listContent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { utcDateTime } from '../utils/utcDateTime'
import { Skeleton } from 'antd'
import { getRequest } from 'services/getAxios'
import { group } from '../utils/group'
import { arrLodaing } from '../constants/constant'
import { COINLIGHT_BASE_URL } from 'constants/setting'
import { getLocalData } from '../localstorage/localstorage'
import { LocalKey } from 'constants/key'

export default function ListContent(props) {
  const { languageVal } = props
  const [total, setTotal] = useState<any>()
  const [page, setPage] = useState(0)
  const [newsData, setNewsData] = useState<any>([])
  const [resData, setResData] = useState<any>({})
  // const token = getLocalData('language', 'zh')

  const getDataInfo = async () => {
    const newsUrl = `api/proxy?news?filters[language]=${languageVal}&populate=*`
    console.log('url', newsUrl)
    const resNews = await getRequest(newsUrl)
    let data = resNews.data.data
    setTotal(resNews.data.meta.pagination.total)
    data.sort(function (a, b) {
      return b.attributes.publishedAt < a.attributes.publishedAt ? -1 : 1
    })
    let newData = group(data, 10)
    setNewsData(newData[0])
    setResData(newData)
  }

  const getMoreDate = () => {
    if (newsData.length < total) {
      let newPage = page + 1
      setPage(newPage)
      setNewsData(newsData.concat(resData[newPage]))
    }
  }

  useEffect(() => {
    getDataInfo()
  }, [languageVal])

  return (
    <div className="list-content">
      <div className="list">
        {newsData.length !== 0 ? (
          newsData?.map((item, index) => {
            return (
              <a href={`/detail/${item.id}`} key={index}>
                <div className="content-text">
                  <h3>{item.attributes.title}</h3>
                  <div className="content-info content-info-h5">
                    <p>{item.attributes.content}</p>
                  </div>
                  <ul className="tags">
                    {item.attributes.tags.data?.map((tagItem, i) => {
                      return <li key={i}>{tagItem.attributes.name}</li>
                    })}
                  </ul>
                  <div className="source-box">
                    <div className="source">
                      <img src={item.attributes.source_img} alt="img" />
                      {item.attributes.source}
                    </div>
                    <div className="time">
                      <i></i>
                      {utcDateTime(item.attributes.publishedAt)}
                    </div>
                  </div>
                </div>
                <div className="content-info content-info-pc">
                  <p>{item.attributes.content}</p>
                </div>
              </a>
            )
          })
        ) : (
          <>
            {arrLodaing.map(index => {
              return (
                <div className="content-lading" key={index}>
                  <Skeleton active paragraph={{ rows: 6 }} />
                </div>
              )
            })}
          </>
        )}
      </div>
      {newsData.length > 9 ? (
        <div className="date-loading">
          {newsData.length < total ? <span onClick={getMoreDate}>加载更多</span> : <p>到底了</p>}
        </div>
      ) : null}
    </div>
  )
}
