---
title: 程式-Hexo 指令備忘錄
date: 2022-11-25 21:55:58
tags: ['hexo', 'butterfly', '程式']
categories: '程式語法'
cover: https://i.imgur.com/iOVeEc5.png
highlight_shrink: false
---
### Quick Start 快速啟動 test
<!-- more  -->
```

hexo clean 或 hexo c    清快取 注意會請除public
hexo g -d   重建靜態網站 並上傳
hexo s      服器
hexo clean && hexo generate && hexo d 之後有更新文章輸入以下指令 (更新之後要等大約3分鐘)

```

### Create a new post 創建文章

``` bash
$ hexo new "文章名稱"
```
更多信息: [寫作](https://hexo.io/docs/writing.html)

### Run server 運行虛擬主機

``` bash
$ hexo server
$ hexo s
```
更多信息: [服務主機](https://hexo.io/docs/server.html)

### Generate 產生靜態文件

``` bash
$ hexo generate
$ hexo g
$ hexo g -d   
```
更多信息: [生成](https://hexo.io/docs/generating.html)

### Deploy  部署到遠程站點

``` bash
$ hexo deploy
$ hexo clean && hexo deploy

```
更多信息: [部署](https://hexo.io/docs/one-command-deployment.html)


### 救援
當重裝電腦之後，或者想在其他電腦上修改博客，可以使用下列步驟：
```
1. 使用git clone [GIT 倉碼] 拷貝倉庫（默認分支為hexo）
2. 在本地新拷貝的github.io文件夾下 通過  Git bash  依次執行下列指令：
npm install hexo
npm install
npm install hexo-deployer-git
（記得，不需要hexo init這條指令）

npm install hexo-deployer-git --save

#hexo 7.0後youtube標籤無法運行 安裝插件
npm i hexo-tag-embed  

安装插件,在博客根目录[Blogroot]下打开终端，运行以下指令：
npm install hexo-butterfly-tag-plugins-plus --save

考虑到hexo自带的markdown渲染插件hexo-renderer-marked与外挂标签语法的兼容性较差，建议您将其替换成hexo-renderer-kramed
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save

添加配置信息，以下为写法示例 在站点配置文件_config.yml或者主题配置文件_config.butterfly.yml中添加
# tag-plugins-plus
# see https://akilar.top/posts/615e2dec/
tag_plugins:
  enable: true # 开关
  priority: 5 #过滤器优先权
  issues: false #issues标签开关
  link:
    placeholder: /img/link.png #link_card标签默认的图标图片
  CDN:
    anima: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/font-awesome-animation.min.css #动画标签anima的依赖
    jquery: https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js #issues标签依赖
    issues: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/issues.js #issues标签依赖
    iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js #参看https://akilar.top/posts/d2ebecef/
    carousel: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/carousel-touch.js
    tag_plugins_css: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@latest/lib/tag_plugins.css
    ghcard_url: https://github-readme-stats.vercel.app #API仓库https://github.com/anuraghazra/github-readme-stats
```

### 標籤進階參數

指定圖片大小

```

您可以指定圖片的寬度和高度
{% gallery %}
![描述1](圖片1路徑 =300x200)
![描述2](圖片2路徑 =300x200)
![描述3](圖片3路徑 =300x200)
{% endgallery %}
```

自定義畫廊佈局

```

某些插件或主題允許您自定義畫廊的佈局，如列數、間距等。這通常需要在主題的配置文件中進行設置，或在標籤中加入參數
{% gallery columns=3 gap=10 %}
![描述1](圖片1路徑)
![描述2](圖片2路徑)
![描述3](圖片3路徑)
{% endgallery %}
```

樣式和效果

```

某些畫廊插件支持自定義樣式和效果，如淡入淡出、滑動等。這些效果通常通過 CSS 或 JavaScript 實現，您可以在主題或插件的配置文件中進行設置
{% gallery effect="fade" %}
![描述1](圖片1路徑)
![描述2](圖片2路徑)
![描述3](圖片3路徑)
{% endgallery %}
```

### 圖片上傳
{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>



{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

Youtube
在文章中插入 Youtube 影片。

        {% youtube video_id [type] [cookie] %}
Examples
影片

        {% youtube lJIrF4YjHfQ %}
播放列表

        {% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
隱私模式

禁止 YouTube cookie

        {% youtube lJIrF4YjHfQ false %}
        {% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
Vimeo
在文章中插入 Vimeo 影片。

        {% vimeo video_id %}


根目錄
.
├── public        // 執行 hexo generate 後，輸出的靜態網頁
├── scaffolds     // 模板。Hexo會根據scaffold來建立新文章/新頁面
├── scripts       // 存放自定義 js 文件
├── source        
|   ├── _drafts   // 草稿文章
|   └── _posts    // 發佈文章
├── themes        // Hexo 主题文件，Butterfly 主題的樹狀結構請看下面
├── _config.yml   // 整個 Blog 的配置
└── package.json  // 已下載的掛件及其版本 version no.

Butterfly 主題目錄
.
└──themes
   └── Butterfly
       ├── languages    // 主題語言字眼
       ├── layout       // pug 文件，後會渲染成 html
       ├── scripts      // js 文件
       ├── source        
       |   ├── css      // styl 文件，後會渲染成 css
       |   ├── img      // 主題配置用到的圖片
       |   └── js       // js 文件
       └── _config.yml  // Butterfly 主題配置

/_config.butterfly.yml

```
//文字大小
font:
  global-font-size: 18px
  code-font-size: 18px
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif
  code-font-family: consolas, Menlo, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif
```
{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}


{% note default modern %}
default 提示塊標籤
{% endnote %}

{% note primary flat %}
primary 提示塊標籤
{% endnote %}

{% note warning disabled %}
warning 提示塊標籤
{% endnote %}

{% note success no-icon %}
success 提示塊標籤
{% endnote %}

###### tags: `hexo` `學習`