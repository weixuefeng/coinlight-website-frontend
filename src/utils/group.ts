/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-26 19:52:53
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-26 19:53:18
 * @FilePath: /coinlight/coinlight-website-frontend/src/utils/group.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function group(array, subGroupLength) {
  let index = 0
  let newArray = []
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)))
  }
  return newArray
}
