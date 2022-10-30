/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-29 12:21:25
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-29 12:21:29
 * @FilePath: /coinlight/coinlight-website-frontend/src/constants/key.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface LocalKeyInterface {
  readonly LANGUAGE: string
  readonly TOKEN: string
}

export const LocalKey: LocalKeyInterface = {
  LANGUAGE: 'language',
  TOKEN: 'token',
}
