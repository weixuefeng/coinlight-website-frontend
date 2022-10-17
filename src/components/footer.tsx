/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-13 11:26:10
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-17 15:39:08
 * @FilePath: /nextjs-starter-boilerplate/src/components/footer/footer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Fragment, useState } from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        {/* 测试sentry是否提供报错日志 */}
        {/* <div>
          <button
            type="button"
            onClick={() => {
              throw new Error('Sentry Frontend Error')
            }}
          >
            Throw error
          </button>
        </div> */}
        <p>Coinlight Copyright</p>
      </div>
    </>
  )
}
