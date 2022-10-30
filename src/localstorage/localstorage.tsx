/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-29 12:19:32
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-29 12:19:46
 * @FilePath: /coinlight/coinlight-website-frontend/src/localstorage/localstorage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function putLocalData(key: string, value: any) {
  console.log('set item:' + key + ' value:' + value)

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    console.log('set item:' + key + ' value:' + value)

    window.localStorage.setItem(key, value)
  }
}

export function getLocalData(key: string, defaultValue: any) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const res = window.localStorage.getItem(key)
    if (res) {
      return res
    } else {
      return defaultValue
    }
  } else {
    return defaultValue
  }
}
