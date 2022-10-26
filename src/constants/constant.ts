/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-26 20:00:14
 * @FilePath: /coinlight/coinlight-website-frontend/src/constants/constant.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { COINLIGHT_BASE_URL } from '../constants/setting'

export const PAGE_SIZE = 10

export const DETAIL_ID = 1

export const API = {
  baseUrl: COINLIGHT_BASE_URL,
  bannerList: `${COINLIGHT_BASE_URL}/api/banners`,
  newsLise: `${COINLIGHT_BASE_URL}/api/news`,
}

export const arrLodaing = [1, 2, 3, 4, 5, 6]
