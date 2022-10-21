/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-21 14:27:59
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Skeleton } from 'antd'

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-left">
        {props.bannerData !== undefined ? (
          props.bannerData?.map((item, index) => {
            return index == 0 ? (
              <a href={`/detail/id=${item.id}`} key={index}>
                <img src={item.attributes.image} alt="banner-left" />
                <p>{item.attributes.title}</p>
              </a>
            ) : null
          })
        ) : (
          <div className="left-loading">
            <Skeleton.Image active />
          </div>
        )}
      </div>
      <div className="banner-right">
        <ul>
          {props.bannerData !== undefined ? (
            props.bannerData?.map((item, index) => {
              return index !== 0 ? (
                <li key={index}>
                  <a href={`/detail/id=${item.id}`}>
                    <img src={item.attributes.image} alt="banner-top" />
                    <p>{item.attributes.title}</p>
                  </a>
                </li>
              ) : null
            })
          ) : (
            <>
              <li className="right-lading">
                <Skeleton.Image active />
              </li>
              <li className="right-lading">
                <Skeleton.Image active />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
