---
title: 滚动条样式
date: 2019-10-22
---

## ***滚动条组成***

- ***-webkit-scrollbar*** 滚动条整体部分
- ***-webkit-scrollbar-thumb*** 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
- ***-webkit-scrollbar-track*** 滚动条的轨道（里面装有 `thumb` ）
- ***-webkit-scrollbar-button*** 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置
- ***-webkit-scrollbar-track-piece*** 内层轨道，滚动条中间部分（除去）
- ***-webkit-scrollbar-corner*** 边角，即两个滚动条的交汇处
- ***-webkit-resizer*** 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

## ***简单配置***

```stylus
/*定义滚动条高宽及背景 高宽 分别对应 横竖 滚动条的尺寸*/
.scroll::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background: #f5f5f5;
}
```