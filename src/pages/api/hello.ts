/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:07:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-18 17:03:56
 * @FilePath: /nextjs-starter-boilerplate/src/pages/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'
import { API } from '../../constants/constant'
import { getCaption } from '../../utils/getCaption'

type Data = {
  name: string
  age: number
  country: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let url = res.req.url
  let urlItem = getCaption(url, '?')
  if (urlItem == 'banners') {
    axios
      .get(API.bannerList)
      .then(response => {
        res.status(200).json(response.data)
        console.log('res:', res.status(200).json(response.data))
      })
      .catch(error => {
        res.status(500)
      })
  } else if (urlItem == 'news') {
    axios
      .get(API.newsLise)
      .then(response => {
        res.status(200).json(response.data)
        console.log('res:', res.status(200).json(response.data))
      })
      .catch(error => {
        res.status(500)
      })
  }
}
