/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-17 14:08:25
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

export default function Header(props) {
  const languageTitle = [
    {
      language: 'en',
      title: 'English',
    },
    {
      language: 'zh',
      title: '中文',
    },
  ]
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  let { i18n } = useTranslation()
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/image/logo.png" alt="logo" />
      </div>
      {/* <dl className={'language'} id="language">
          <dt>切换语言</dt>
          <dd>
            {languageTitle.map((item, index) => {
              return (
                <a key={index} onClick={() => i18n.changeLanguage(item.language)}>
                  {item.title}
                </a>
              )
            })}
          </dd>
        </dl> */}
    </header>
  )
}
