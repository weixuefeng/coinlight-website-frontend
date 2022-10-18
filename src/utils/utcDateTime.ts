/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-18 18:05:25
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-18 19:56:19
 * @FilePath: /coinlight/coinlight-website-frontend/src/utils/a.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function utcDateTime(utc_datetime) {
  let T_pos = utc_datetime.indexOf('T')
  let Z_pos = utc_datetime.indexOf('Z')
  let year_month_day = utc_datetime.substr(0, T_pos)
  let hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1)
  let new_datetime = year_month_day + ' ' + hour_minute_second

  timestamp = new Date(Date.parse(new_datetime))
  timestamp = timestamp.getTime()
  timestamp = timestamp / 1000
  var timestamp = timestamp + 8 * 60 * 60

  let beijing_datetime = new Date(parseInt(timestamp) * 1000)
    .toLocaleString()
    .replace(/\//g, '-')
    .replace(/:\d{1,2}$/, ' ')
  return beijing_datetime
}
