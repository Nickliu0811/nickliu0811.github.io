---
title: Hexo 指令備忘錄
date: 2022-11-25 21:55:58
tags: ['hexo', 'butterfly', '程式']
categories: '程式語法'
cover: https://picsum.photos/1240/900?random=10
highlight_shrink: false
---
## Quick Start 快速啟動 test
<!-- more  -->
```
hexo clean 或 hexo c    清快取 注意會請除public
hexo g -d   重建靜態網站 並上傳
hexo s      服器

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



###### tags: `hexo` `學習`