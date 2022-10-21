/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 19:07:34
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-21 15:42:42
 * @FilePath: /nextjs-starter-boilerplate/src/pages/api/hello.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { API } from '../../constants/constant'

type Data = {
  name: string
  age: number
  country: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let url = res.req.url
  let index = url.indexOf('?')
  let urlItem = url.substring(index + 1)

  axios
    .get(`${API.baseUrl}/api/${urlItem}`)
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(500)
    })
}
