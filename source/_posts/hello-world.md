---
title: Hexo 指令備忘錄
---

## Quick Start 快速啟動

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