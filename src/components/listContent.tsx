/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-21 11:12:25
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Fragment, useState } from 'react'
import { utcDateTime } from '../utils/utcDateTime'
import { Skeleton } from 'antd'
export default function ListContent(props) {
  return (
    <div className="list-content">
      <ul>
        {props.newsData !== undefined ? (
          props.newsData?.map((item, index) => {
            return (
              <li className="list" key={index}>
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
              </li>
            )
          })
        ) : (
          <>
            <li className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </li>
            <li className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </li>
            <li className="content-lading">
              <Skeleton.Image active />
              <Skeleton active paragraph={{ rows: 6 }} />
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
