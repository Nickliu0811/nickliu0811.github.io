---
title: Hexo 指令備忘錄
cover: https://picsum.photos/1240/900?random=10
---

## Quick Start 快速啟動 test
<!-- more  -->

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
$ hexo g -d   #不知道加D做什麼
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




