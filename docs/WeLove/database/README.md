---
title: 数据库
date: 2021-12-15
---

## ***User***

`User` 继承自 `django` 的 `AbstractBaseUser`, 然后增加需要的字段名。

|字段名|类型|默认值|说明|
|-|-|-|-|
|openid|CharField|-|微信用户唯一标识|
|avatarUrl|URLField|-|用户头像地址|
|isAuth|BooleanField|`False`|是否授权|
|isNew|BooleanField|`True`|是否为新用户|
|nickName|CharField|-|昵称|
|session_key|CharField||session_key|
|mobilePhoneNumber|CharField||手机号码|
|email|EmailField||邮件地址|
|date_joined|DateTimeField|`timezone.now`|加入日期|


## ***Category***

|字段名|类型|默认值|说明|
|-|-|-|-|
|creator|CharField|-|OpenId|
|time|DateTimeField|默认值|说明|
|name|CharField|-|分类名称|
|count|IntegerField|0|事件个数|
|icon|CharField||分类图标|
|index|IntegerField|0||
|sort|IntegerField|0||

## ***Event***

|字段名|类型|默认值|说明|
|-|-|-|-|
|category|ForeignKey|-|事件分类|
|user|ForeignKey|-|说明|
|title|类型|默认值|说明|
|isTop|类型|默认值|说明|
|isArchived|类型|默认值|说明|
|lunarDate|CharField||农历|
|type|类型|默认值|说明|
|solorDate|类型|默认值|说明|
|targetDate|类型|默认值|说明|
|repeatInfo|类型|默认值|说明|
|isReminder|BooleanField|`False`|说明|
|reminderInfo|JSONField|默认值|说明|
|note|TextField|-|备注|