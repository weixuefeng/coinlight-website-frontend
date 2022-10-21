<!--
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-17 11:14:29
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-21 16:07:41
 * @FilePath: /coinlight/coinlight-website-frontend/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Next.JS Starter Boilerplate

A Next.js starter kit template with Next.js 12 + React 17 + Typescript + Tailwind CSS 3 + Heroicons + Headless UI.

Other tools included: Autoprefixer, Sass, PostCSS, ESLint, Prettier.

## Getting Started

```bash
# Install Dependencies
yarn

# Run the development server
yarn dev
```

## Scripts

**Next.JS**

```bash
# Build
yarn build

# Start server with build files
yarn start
```

**Prettier**

```bash
# Use Prettier to do Format Check for files under ./src
yarn fc

# Use Prettier to do Format Fix for files under ./src
yarn ff
```

**commit**

```bash
# https://www.npmjs.com/package/husky
# https://www.npmjs.com/package/commitizen

commit: yarn cz or npm run cz or feat:

<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

# type *
feat:
fix:
docs:
style:
refactor:
perf:
test:
chore:
revert:
build:
ci

```

The three data of banner are inside the banner interface, and the news list is inside the news api, and their configuration data format is the same interface.
Only need to configure  image title content source source_img and html.

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "image": "https://img.foresightnews.pro/202210/29-1665636069124.jpg?x-oss-process=style/banner",
        "createdAt": "2022-10-18T07:08:58.265Z",
        "updatedAt": "2022-10-19T06:21:13.426Z",
        "publishedAt": "2022-10-18T07:09:02.750Z",
        "title": "",
        "content": "",
        "source": "CoinLight",
        "source_img": "https://img.foresightnews.pro/202204/8-1650606962554.png?x-oss-process=style/article_avatar",
        "html": ""
      }
    },
  ],
}
```
