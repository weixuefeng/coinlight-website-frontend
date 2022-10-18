/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-18 18:07:40
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Fragment, useState } from 'react'
import { getCaption } from '../utils/getCaption'
import { utcDateTime } from '../utils/utcDateTime'
export default function ListContent(props) {
  let a = '2022-10-18T07:33:20.875Z'
  console.log('oooo', getCaption(a, 'T'))
  return (
    <div className="list-content">
      <ul>
        {props.newsData?.map((item, index) => {
          return (
            <li className="list" key={index}>
              <a href={item.attributes.link}>
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
        })}
      </ul>
    </div>
  )
}
