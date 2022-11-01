/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-11-01 15:24:52
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { putLocalData } from 'localstorage/localstorage'
import { LocalKey } from 'constants/key'

interface middleProps {
  langfun: any
}

const Header: React.FC<middleProps> = props => {
  let { i18n } = useTranslation()
  const { t } = useTranslation()

  const languageTitle = [
    {
      language: 'en',
      title: 'English',
    },
    {
      language: 'zh',
      title: '简体中文',
    },
  ]

  let [isOpen, setIsOpen] = useState(true)

  return (
    <header className="header-box">
      <div className="header container">
        <div className="logo">
          <Link href="/" passHref>
            <div>
              <img src="/assets/image/logo.png" alt="coinlight" />
            </div>
          </Link>
        </div>
        <dl className={'language'} id="language">
          <dt onClick={() => setIsOpen(!isOpen)}>
            <img src="/assets/image/icon_language.png" alt="language" />
          </dt>
          {isOpen == false ? (
            <dd>
              {languageTitle.map((item, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      i18n.changeLanguage(item.language)
                      putLocalData(LocalKey.LANGUAGE, item.language)
                      props.langfun(item.language)
                      setIsOpen(!isOpen)
                    }}
                  >
                    {item.title}
                  </span>
                )
              })}
            </dd>
          ) : null}
        </dl>
      </div>
    </header>
  )
}

export default Header
