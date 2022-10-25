/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-25 22:29:44
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from 'react'
import { utcDateTime } from '../utils/utcDateTime'
import { Skeleton } from 'antd'
import { getRequest } from 'services/getAxios'
import { arrayBuffer } from 'stream/consumers'

export default function ListContent(props) {
  // const listHeight = useRef<HTMLDivElement | null>(null)
  const [total, setTotal] = useState<any>()
  const [page, setPage] = useState(1)
  const [newsData, setNewsData] = useState<any>([])
  // const [isBootm, setIsBootm] = useState(false)

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

  const getMoreDate = () => {
    if (newsData.length < total) {
      let newPage = page + 1
      setPage(newPage)
      getDataInfo(newPage)
    }
  }

  let arrLodaing = [1, 2, 3, 4, 5, 6]

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // })

  // const handleScroll = () => {
  //   let scrollTop = document.documentElement.scrollTop
  //   let clientHeight = document.documentElement.clientHeight
  //   let scrollHeight = document.documentElement.scrollHeight
  //   if (scrollTop + clientHeight == scrollHeight) {
  //     if (newsData.length < total) {
  //       let newPage = page + 1
  //       setPage(newPage)
  //       setIsBootm(true)
  //       getDataInfo(newPage)
  //     } else {
  //       setIsBootm(false)
  //     }
  //   }
  // }

  return (
    <div className="list-content">
      <div className="list">
        {newsData.length !== 0 ? (
          newsData?.map((item, index) => {
            return (
              <a href={`/detail/${item.id}`} key={index}>
                {/* <div className="content-img">
                    <img src={item.attributes.image} alt="list-img" />
                  </div> */}
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
      <div className="date-loading">
        <span onClick={getMoreDate}>{newsData.length < total ? '加载更多～' : '到底啦～'}</span>
      </div>
    </div>
  )
}
