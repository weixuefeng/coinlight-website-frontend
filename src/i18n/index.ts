/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-31 13:26:04
 * @FilePath: /coinlight/coinlight-website-frontend/src/i18n/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { zhTransaction, enTransaction } from './locale'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTransaction,
      },
      zh: {
        translation: zhTransaction,
      },
    },
    preload: ['zh'],
    fallbackLng: { en: ['en'], default: ['zh'] },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
