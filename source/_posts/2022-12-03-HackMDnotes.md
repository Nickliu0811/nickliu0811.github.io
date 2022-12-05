---
title: 程式-HackMD 之Markdown筆記
categories:
  - 程式語法
tags:
  - HackMD
  - Markdown
  - 筆記
keywords:
  - HackMD
  - Markdown
  - 筆記
top_img:
sticky: 
date: 2022-12-03 14:57:16
updated:
description:
cover: https://i.imgur.com/KFi7JMM.png
comments:
toc:
toc_style_simple: true
---

{% note info flat %}
info 提示塊標籤
{% endnote %}

# HackMD/markdown筆記

## MarkDown語法

### ==標題==

```sass
# H1  或 下方=== 三個等號
## H2
### H3
#### H4
##### H5
###### H6
```

### ==引用==

```sass
>
```

> conment 引言  加上[]   可以插入名稱、日期、連接 例如 [name=Nick liu] [time=Sun, Nov 27, 2022 2:35 PM] [color=#51d177] [從無到有學習HackMD](https://www.youtube.com/watch?v=r5FOR-YU33c "從無到有學習HackMD")
>> 內縮引言

打到這就發現很多問題，效果很多都`失效`
原本這是在 HackMD的筆記 想複製過來作一篇筆記，結果發現同樣是使用Markdown語法支援程度上還是有差的

那就 改移到[hackMD吧](https://hackmd.io/@nickliu/BJppRP_Ii)

### ==列表清單==

```純文字
-
+
*  
減號 加號 星號 加一個空格 都是列表 縮排 加上空二格 子列表
```

- 列表方式
- 列表的用法
- 列表的運行
- 列表的顯示

星號也可當列表

加號也是列表

### ==數列==

```text
1.
需數字開頭 數字 + 反斜線 + .   ex.2019\.
數字的號碼 無關順序
```

1. 123
2. 456
3. 789
    1. 123
    5. 123
    6. 345
5. 567
6.

### ==區塊程式碼==

方法一:
    1.前面直接加四個空白 或 Tab   為單行程式碼(上下要留空行)

方法二:
    2.三個上下反引號   ```+ 語言   .=行碼  +編號開始 !折行

```php=56!
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('這執行第' + i + '次');
  }, 0);
```

補充: 後面加上語法名稱

```html
javascript 或是寫 js
html
css
scss
sass
json
php
python
java
```

如果你想知道你目前想寫的程式碼是否有支援高亮，你可以透過[這裡](https://highlightjs.org/static/demo/)查詢。

### ==行內程式碼  Ctrl+E==

```text
想要特別顯示`<strong>`的用法  
```

想要特別顯示 `<strong>` 的用法

### ==分隔線==

```text
---
___
*** 這都是
```

### ==斜體 Ctrl+I==

```text
*斜體*
```

*斜體*

### ==粗體 Ctrl+B==

```text
**粗體**
```

**粗體**

### ==粗體+斜線==

```text
    ***粗體+斜線***
```

***粗體+斜線***

### ==底線文字==

```text
    ++這是底線文字++
```

++這是底線文字++

### ==刪除線==

```text
    ~~刪除線用法~~
```

~~刪除線用法~~

### ==上標==

```text
    文字的上標<sup>用法 </sup>
```

文字的上標<sup>用法 </sup>

### ==下標==

```text
    文字的下標<sub>用法 </sub>
```

文字的下標<sub>用法 </sub>

### ==連結==

**基本用法:**
[] 說明
() 連結

```text
[Google](https://www.google.com.tw/)
```

[Google](https://www.google.com.tw/)

**進階用法:**

這裡要說明進階用法 連接 [Google][] 另外設立連結標籤 [相片][]

[google]: http://google.com/ "Google"
[相片]: http://search.yahoo.com/ "Yahoo Search"

```text
這裡要說明進階用法 連接 [Google][] 另外設立連結標籤 [相片][]

[google]: http://google.com/        "Google"
[相片]: http://search.yahoo.com/  "Yahoo Search"
```

### ==圖片==

**基本用法1:**
![ ]：括號的內容也並非必填，提示文字。
( )：圖片連結位置
範例:

![](https://picsum.photos/300/200?random=10)

**進階用法:**

如同連結一般，圖片也可以用註腳語法
![Alt text][id]
使用參考，可以在稍後的文件中再定義圖片網址

[id]: https://picsum.photos/600/100?random=10

萬用圖片路徑(一直變動)

```text
https://picsum.photos/300/200?random=10
```

![](https://picsum.photos/300/300?random=10)
<img src="https://picsum.photos/500/200?random=10" class="w-50">

方法一：嵌入HTML代码
使用img标签

```text
 <img src="./xxx.png" width = "300" height = "200" alt="图片名称" align=center />
 ```

如果需要居中的话只要在外面包围div标签即可

```text
<div  align="center">    
...
</div>
```

方法二：使用支持图片大小更改操作的 Mou 编辑器

使用如下语法

```text
![](./pic/pic1_50.png =100x100)
```

直接在图片后面加上对应的CSS样式即可

```text
![test image size](url){:class="img-responsive"}
![test image size](url){:height="50%" width="50%"}
![test image size](url){:height="100px" width="400px"}
```

<i class="fa fa-file-text"></i> **文件** `<i class="fa fa-file-text"></i>`
<i class="fa fa-pencil fa-fw"></i> **編輯** `<i class="fa fa-pencil fa-fw"></i>`
<i class="fa fa-eye fa-fw"></i> **看** `<i class="fa fa-eye fa-fw"></i>`
<i class="fa fa-columns fa-fw"></i> **二欄分頁** `<i class="fa fa-columns fa-fw"></i>`
<i class="fa fa-camera"></i> **相機** `<i class="fa fa-camera"></i>`
<i class="fa fa-share-alt"></i> **分享** `<i class="fa fa-share-alt"></i>`
<i class="fa fa-dropbox"></i> **dropbox** `<i class="fa fa-dropbox"></i>`
<i class="fa fa-github"></i> **github** `<i class="fa fa-github"></i>`
<i class="fa fa-clipboard"></i> **剪貼簿** `<i class="fa fa-clipboard"></i>`
<i class="fa fa-toggle-on"></i> **開關** `<i class="fa fa-toggle-on"></i>`
<i class="fa fa-tv"></i> **簡報模式** `<i class="fa fa-tv"></i>`
<i class="fa fa-book"></i> **書籍模式** `<i class="fa fa-book"></i>`
<i class="fa fa-bars"></i> **小按鈕** `<i class="fa fa-bars"></i>`
<i class="octicon octicon-link"></i> **錨點** `<i class="octicon octicon-link"></i>`
