---
title: 程式-ThinkPHP 筆記
tags:
  - thinkPHP
  - 架站
categories:
  - 程式語法
keywords:
  - thinkPHP
top_img:
sticky: 
date: 2022-10-01 12:09:27
updated:
description:
cover: https:i.imgur.com/FEmneR5.png
comments:
toc:
---
{% note info flat %}
info 提示塊標籤
{% endnote %}

# ThinkPHP

## 集成開發環境 wampserver

使用集成開發環境程式
安裝過這三套xampp mampp wampp 使用上wampp讓我得是其中比較好用的

- 可以有不同的php版本
- 可以有不同的SQL版本
- 設定簡單

{% note info flat %}
Wampserver
{% endnote %}

---

## 安裝ThinkPHP

安裝方式有二
方法一: Git
方法二: Composer

參考官方安裝 [官方](https:www.kancloud.cn/manual/thinkphp5_1/353948)

---

## 虛擬主機部署

虛擬主機部署 (在集成開發環境設定)
{% note info flat %}
Ex. C:\wamp64\www\xxx\public
{% endnote %}

---

## 數據應用

### 第一方式: 直譯式

`execute` 新增、修改、刪除(C U D)
`query` 查詢 (R)

```php
// 插入數據 (C)
$result = Db::execute('INSERT INTO isv_date (name,status) values("牛乃糖",1)');        
```

```php
// 更新 Update (U)
$result = Db::execute('UPDATE isv_date SET name="QQ 先生" ,status=2 where id = 2');
```

```php
// 查詢 (R)
$result = Db::query('SELECT * FROM isv_date');
```

### 第二方式:構造器

```php
//插入
$result = Db::table('isv_date')->insert(['name'=>'何進大','status'=>3]);
```

```php
//更新
$result = Db::table('think_db')->where('name','陳春嬌')->updata(['name'=>'陳秋嬌']);
// 資料庫->條件->目的:更新
```

```php
//查詢
 $result = Db::table('think_db')->where('name','陳秋嬌')->order('id','desc')->limit('2')->select();
     // 資料庫->條件->排序->取幾位->目的:查詢
```
```php
//刪除
$result = Db::table('think_db')->where('name','陳秋嬌')->delete()刪除
```

```php
//查詢  也可寫成直式
 $result = Db::table('think_db')
  ->where('name','陳秋嬌')
  ->order('id','desc')
  ->limit('2')
  ->select();
     // 資料庫->條件->排序->取幾位->目的:查詢
```

### 第三方式:助手
```php
$db = db('date');
$db->insert(['name'=>'劉二華', 'status'=>6]);
```

---

{% note info flat %}
持續整理待續中..................
{% endnote %}
