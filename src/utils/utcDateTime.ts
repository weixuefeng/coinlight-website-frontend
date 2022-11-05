/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-18 18:05:25
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-11-05 20:38:14
 * @FilePath: /coinlight/coinlight-website-frontend/src/utils/a.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export function utcDateTime(utc_datetime) {
  timestamp = new Date(Date.parse(utc_datetime)).getTime() / 1000
  var timestamp = timestamp

  let beijing_datetime = new Date(parseInt(timestamp) * 1000)
    .toLocaleString()
    .replace(/\//g, '-')
    .replace(/:\d{1,2}$/, ' ')

  return beijing_datetime
}
