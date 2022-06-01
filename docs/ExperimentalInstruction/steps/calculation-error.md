---
title: 压力表原理误差的计算
date: 2021-03-08
sidebar: auto
---

|计算点序号$\phi_{n}$|理想值$S_{n}$|实际值${S_{n}^{\prime}}$|原理误差绝对值${\|s_{n}-s_{n}^{\prime}\|}$|原理误差相对值${\|s_{n}-s_{n}^{\prime}\| / s_{n}}$|
|:---:|:---:|:---:|:---:|:---:|
|$n$=1|||||
|$n$=2|||||

&emsp;&emsp;压力表的设计方案中，要求各个测量环节的转换关系应为线性，因此，采用曲柄滑块机构，使仪表在设计原理上就有了误差。
&emsp;&emsp;假使弹簧末端位移量为$s$时，曲柄转角自$\phi_{o}$转动到$\phi_{z}$，则对应每一度曲柄角的理想位移量：
$$s_{n}=\frac{\varphi_{n}-\varphi_{0}}{\varphi_{z}-\varphi_{0}} \cdot s$$

&emsp;&emsp;再按照曲柄滑块机构的传动特性，计算曲柄每转动一度的实际位移量${S_{n}^{\prime}}$，即可按下表求出原理误差的绝对值和相对值。
本次设计要求原理误差的相对值$<{1\%}$，否则应重选参数计算。

<style>
table
{
  margin: 1rem auto !important;
  display: table !important;
  --code-color: transparent;
}
</style>
