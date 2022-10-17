/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-17 15:10:03
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Fragment, useState } from 'react'

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-left">
        <img src="/assets/image/banner.jpg" alt="banner-left" />
        <p>本周前瞻 | .bit 将释放 4～9 位的纯数字等 .bit 域名，Protocol Labs 将举办 Web3 会议「LabWeek22」将举办</p>
      </div>
      <div className="banner-right">
        <ul>
          <li>
            <img src="/assets/image/banner.jpg" alt="banner-left" />
            <p>1confirmation：纯粹主义者与游客，谁是加密世界的主要推动者？</p>
          </li>
          <li>
            <img src="/assets/image/banner.jpg" alt="banner-left" />
            <p>
              1confirmation：纯粹主义者与游客，谁是加密世界的主要推动者？
              1confirmation：纯粹主义者与游客，谁是加密世界的主要推动者？
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
