/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-31 13:41:45
 * @FilePath: /coinlight/coinlight-website-frontend/src/components/header/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
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
          <dt>
            <img src="/assets/image/icon_language.png" alt="language" />
          </dt>
          <dd>
            {languageTitle.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    i18n.changeLanguage(item.language)
                    putLocalData(LocalKey.LANGUAGE, item.language)
                    props.langfun(item.language)
                  }}
                >
                  {item.title}
                </span>
              )
            })}
          </dd>
        </dl>
      </div>
    </header>
  )
}

export default Header
