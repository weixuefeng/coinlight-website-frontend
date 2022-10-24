/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-24 19:51:02
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from 'react'
import { utcDateTime } from '../utils/utcDateTime'
import { Skeleton } from 'antd'
import { getRequest } from 'services/getAxios'

export default function ListContent(props) {
  const listHeight = useRef<HTMLDivElement | null>(null)
  const [total, setTotal] = useState<any>()
  const [page, setPage] = useState(1)
  const [newsData, setNewsData] = useState<any>([])
  const [isBootm, setIsBootm] = useState(false)

  const getDataInfo = async newPage => {
    const newsUrl = `api/proxy?news?populate=*&pagination[page]=${newPage}&pagination[pageSize]=10`
    const resNews = await getRequest(newsUrl)
    let data = resNews.data.data
    if (newPage == 1) {
      setNewsData(data)
    } else {
      setNewsData(newsData.concat(data))
    }
    setTotal(resNews.data.meta.pagination.total)
  }

  useEffect(() => {
    getDataInfo(1)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollTop + clientHeight == scrollHeight) {
      if (newsData.length < total) {
        let newPage = page + 1
        setPage(newPage)
        setIsBootm(true)
        getDataInfo(newPage)
      } else {
        setIsBootm(false)
      }
    }
  }

  return (
    <div className="list-content">
      <div ref={listHeight}>
        {newsData.length !== 0 ? (
          newsData?.map((item, index) => {
            return (
              <div className="list" key={index}>
                <a href={`/detail/${item.id}`}>
                  <div className="content-img">
                    <img src={item.attributes.image} alt="list-img" />
                  </div>
                  <div className="content-text">
                    <h3>{item.attributes.title}</h3>
                    <p>{item.attributes.content}</p>
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
                </a>
              </div>
            )
          })
        ) : (
          <>
            <div className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </div>
            <div className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </div>
            <div className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </div>
          </>
        )}
        <div className="date-loading">{isBootm === true ? '正在加载中～' : '到底啦～'}</div>
      </div>
    </div>
  )
}
