/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 17:32:03
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-17 18:58:55
 * @FilePath: /coinlight/coinlight-website-frontend/src/pages/details.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE<
 */
import React, { useState, useEffect } from 'react'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Home

function Home() {
  let pageModel = new PageModel('Details', '', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <div className="details container">
      <h3 className="title">公链生态「吸金」七件套，缺一不可</h3>
      <div className="source">
        <img src="/assets/image/source.png" alt="img" />
        <span className="source-left">Newton</span>
        <i>|</i>
        <span className="time">2022-10-17</span>
      </div>
      <div className="details-item">
        <img src="/assets/image/banner.jpg" alt="banner-left" />
        <h3>撰文：五火球教主</h3>
        <p>
          因为人们一提公链，往往首先想到的 ETH 这种「通用智能合约型」， 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。
        </p>
        <h3>撰文：五火球教主</h3>
        <p>
          因为人们一提公链，往往首先想到的 ETH 这种「通用智能合约型」， 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。
        </p>
        <h3>撰文：五火球教主</h3>
        <p>
          因为人们一提公链，往往首先想到的 ETH 这种「通用智能合约型」， 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 因为人们一提公链，往往首先想到的 ETH
          这种「通用智能合约型」，或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。 或者说平台型公链，而非类似 BTC，LTC
          这种「一币一公链」的公链，这些，我们心里对他们的定义都是「Coin」。
        </p>
      </div>
    </div>
  )
}
