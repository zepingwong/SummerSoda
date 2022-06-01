---
title: 游丝尺寸计算
date: 2021-03-08
sidebar: auto
---

压力表中的游丝为接触游丝，其作用是消除空间，使齿轮始终保持单面接触。

## 接触游丝最小力矩计算

为保证零件的相对位置和运动关系，保证零件单向接触，应使接触游丝最小力矩
$$M_{\min }=K M_{f} \cdot\cdot\cdot\cdot\cdot\cdot \left(1\right)$$
&emsp;&emsp;式中，$M_{f}$-传动机构各零件诱导到游丝轴上的总摩擦力矩；$K$-系数  
&emsp;&emsp;系数$K$考虑计算上的近似和摩擦系数的不稳定性，通常$K$取2~3。$M_{f}$的数值，取决于零件的自重和游丝在零件上产生的压力，一般情况下，自身所受重力和压力的方向是不重合的，为简化计算，可取其代数和，令
$$M_{f} \approx\left(M_{f z}+M_{f^{2}}\right) \cdot\cdot\cdot\cdot\cdot\cdot \left(2\right)$$
&emsp;&emsp;式中，$M_{fZ}$-由零件自重产生，且诱导至游丝轴上的摩擦力矩；$M_{fY}$-由游丝压力产生，且诱导至游丝轴上的摩擦力矩。显然$M_{fY}$与游丝力矩成正比，即
$$M_{f r}=\xi M_{\min } \cdot\cdot\cdot\cdot\cdot\cdot \left(3\right)$$
&emsp;&emsp;式中，$\xi$-比例系数。  
&emsp;&emsp;当零件具有不对称轮廓，其中心不通过旋转中心时，还应考虑克服零件的偏重力矩$M_{p}$，即
$$M_{\min }=K\left[M_{f z}+M_{f I}+M_{P}\right]  \cdot\cdot\cdot\cdot\cdot\cdot \left(4\right)$$
&emsp;&emsp;将式（3）带入式（4）得：
$$M_{\min }=\frac{K\left(M_{f z}+M_{P}\right)}{1-K \xi} \cdot\cdot\cdot\cdot\cdot\cdot \left(5\right)$$
&emsp;&emsp;系数$\xi$可用普通的静力学进行计算，加入游丝安装在齿轮轴上，则可以任意假设其转矩为$M_{1}$，于是游丝轴的齿轮齿面上将产生一个压力$F$，当$F$满足下列条件时，系统达平衡，即：
$$M_{1}=F r \cos \alpha$$
&emsp;&emsp;式中，$r$-齿轮的节圆半径， $\alpha$-齿轮的压力角。  
$$\frac{\left(M_{f \mathrm{r}}\right)_{1}}{M_{1}}=\xi$$
&emsp;&emsp;式(5)提出的计算公式是一种最普通的计算方法，使用上还应对实际情况加以分析，例如：在增速转动时，前级零件的$M_{fZ}$诱导到游丝轴上时，往往可以忽略不计。又如：经过精心设计，某些零件的偏重力矩$M_{P}$将有助于完成机构的力封闭，因此在式(5)中将$M_{P}省略。在计算机前考虑这些因素，可以省略不少计算项目，使计算工作大为简化。
&emsp;&emsp;对于压力表，在忽略连杆重量之后，$M_{fZ}$可按下式计算
$$M_{f z}=\left(M_{f z}\right)_{1}+\left(M_{f z}\right)_{2} \cdot \frac{1}{i_{21}} \cdot \frac{1}{\eta_{21}}$$
式中,  
$\left(M_{fY}\right)_{1}$-小齿轮支承上的摩擦力矩；  
$\left(M_{fY}\right)_{2}$-扇形齿轮支承上的摩擦力矩；  
$i_{21}$-齿轮传动的传动系数；  
$\eta_{21}$-齿轮传动的效率，近似计算时取0.9。

## 游丝的设计计算

&emsp;&emsp;在选定游丝材料后，可根据结构空间的大小，选取游丝的外径$D_{1}$和内径$D_{2}$，然后选取游丝在${M_{min}}$的转角$\phi_{min}$ (一般取为$\pi / 2$)、游丝的圈数$n$、宽厚比$\mu$，并按下式计算游丝的几何尺寸。

&emsp;&emsp;游丝长度$\mathrm{L}=\pi \cdot n \frac{D_{1}+D_{2}}{2}$  
&emsp;&emsp;游丝厚度$h=\sqrt[4]{\frac{12 L M_{\min }}{\mu E \varphi_{\min }}}$ （$h$应圆整为0.01的倍数）  
&emsp;&emsp;游丝宽度$b=\mu \cdot h$  
&emsp;&emsp;最后校核游丝的最大应力 $\sigma_{b}=\frac{6 M_{\max }}{b h^{2}} \leq\left[\sigma_{b}\right]$  
式中，  $M_{\max }=M_{\min } \cdot \frac{\varphi_{\max }}{\varphi_{\min }}$$\left[\sigma_{b}\right]=\frac{\sigma_{B}}{\left[S_{\sigma}\right]}$  
$\sigma_{B}$—游丝材料的强度极限；  
$\left[\sigma_{b}\right]$—许用安全系数，可在3~4范围内选取。
