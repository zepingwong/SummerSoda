---
title: 各测量环节参数的计算和确定
date: 2021-03-08
sidebar: auto
---

## 计算—作图法

### 1. 弹簧管末端位移s的计算

[参看附录一](/docs/experimental-instruction/appendix/tanhuangguan)

①弹簧管中心角的变化与作用压力之间的关系如下式，计算$\frac{\gamma-\gamma^{\prime}}{\gamma}$值

$$\frac{\gamma-\gamma^{\prime}}{\gamma}=p \frac{1-\mu^{2}}{E} \frac{R^{2} C_{1}}
{b h\left(C_{2}+\frac{R^{2} h^{2}}{a^{4}}\right)}\left(1-\frac{b^{2}}{a^{2}}\right)$$
$\gamma$和$\gamma^{\prime}$－弹簧管变形前和变形后的中心角  
$R$－弹簧管中性层初始曲率半径  
$a$、$b$－横截面长轴半径和短轴半径  
$C_{1}$和$C_{2}$－与$\frac{a}{b}$有关的系数，由表1查取  
$h$－管壁厚度  
$E$、$m$－材料的弹性模量和泊松比

<center>
    <img
      src="/image/弹簧管C1C2C3C4参数选择.png"
      width = "60%"
      alt=""/>
    <br>
</center>

②弹簧管中心角改变后，其自由端相应地产生位移$s$，位移方向与过弹簧管自由端所作切线成一角度 ，因而可把位移$s$分解为切向量$s_{t}$和法向量$s_{r}$（如图2）。
按下列式子计算弹簧管末端的径向位移$s_{r}$和切向位移$s_{t}$

$$
\begin{array}{l}
s_{r}=\frac{\gamma-\gamma^{\prime}}{\gamma} R(1-\cos \gamma) \\
s_{t}=\frac{\gamma-\gamma^{\prime}}{\gamma} R(\gamma-\sin \gamma)
\end{array}
$$

<center>
    <img
      src="/image/弹簧管自由端位移.png"
      width = "60%"
      alt=""/>
    <br>
    <div class="imgtext">图2 弹簧管自由端位移</div>
</center>

③按下列式子计算弹簧管末端总位移$s$，$s$和$s_{t}$夹角$\delta$
$$ s=\sqrt{s_{t}^{2}+s_{r}^{2}} \quad \tan \delta=\frac{s_{r}}{s_{t}} $$

### 2. 曲柄滑块机构参数的确定

①首先初选参数，建议$\epsilon=0.8~1.4$ $\lambda=2~4$，选定齿轮传动比$i_{12}$后，可确定曲柄的转动范围$\phi_{g}$，然后由选定的$\epsilon$和$\lambda$，由图或计算得出极点位置，确定曲柄初始角$\phi_{o}$和终止位置角$\phi_{z}$，曲柄长度$a$，可由下式求出：

$$a=\frac{s}{\left(\sin \varphi_{z}-\sin \varphi_{o}\right)+
\sqrt{\lambda^{2}-\left(\cos \varphi_{o}-\varepsilon\right)^{2}}-
\sqrt{\lambda^{2}-\left(\cos \varphi_{z}-\varepsilon\right)^{2}}}$$

②用作图法确定机构参数，用10∶1或5∶1的比例在坐标纸上进行，以保证结果的准确度。作图步骤（如图3）：

<center>
    <img
      src="/image/作图法确定机构参数.png"
      width = "60%"
      alt=""/>
    <br>
    <div class="imgtext">图3 作图法确定机构参数</div>
</center>

1. 根据$\gamma$、$R$确定弹簧管末端位置；
2. 根据位移方向角 画出位移方向线；
3. 由由齿轮传动的参数初定中心距A，并在图上画出圆弧，此圆弧即为曲柄回转中心所在的弧线；
4. 根据计算出的$e$值和初选的$\epsilon$、$\lambda$，求出$e$值，并作直线$\overline{m n}$平行位移方向线且距离为$e$，
   $\overline{m n}$直线与圆弧（曲柄中心所在圆弧）相交于$O^\prime$点，$O^\prime$即为曲柄的回转中心（也是扇形齿轮的回转中心）;
5. 根据选定的（$-\phi_{o}$），得到连杆的尺寸$b$。若 点的位置不利于结构的总体布置和零件的制作，可按下法进行修正：
    1. 通过调整模数$m$和齿数$Z_{2}$，改变中心距$A$，从而改变$O^\prime$的位置；
    2. 改变$\epsilon$值，也可改变$O^\prime$的位置。

## 计算法

### 1.弹簧管末端位移S的计算

（与[计算-作图法](/docs/experimental-instruction/steps/calculation-parameters.html#计算-作图法)相同）

### 2.曲柄滑块机构参数的计算

1. 首先初选参数，建议$\epsilon=0.8~1.4$ $\lambda=2~4$，$\epsilon$和$\lambda$可从中选取两组数据并列计算，以作方案比较，最后选取原理误差最小的一组参数作为选定的方案，参考计算作图法确定$\phi_{o}$和$\phi_{z}$后，求出曲柄长度$a$，同时求出：
    $$b^{\prime}=a \cdot \lambda^{\prime}， e=a \cdot \epsilon$$
    $b^{\prime}$表示初算值  
    连杆初始位置与滑块运动方向夹角$\phi^\prime$可按下式求出：
    $$ \sin \phi^{\prime}=\frac{a \cos \phi_{z}-e}{b^{\prime}} $$
    &emsp;&emsp;当曲柄滑块机构的尺寸参数全部确定时，齿轮传动的理论中心距$A^{\prime}$也相应而定。但是，由于$m$和$Z_{2}$只能是间断数，很难使齿轮传动的中心距恰好与理论中心距相等，所以，需按选定的齿轮中心距$A$反求出满足仪表结构位置要求的连杆长度$b$。

2. 齿轮原理中心距$A^{\prime}$的计算  
    &emsp;&emsp;为了使选定的齿轮传动中心距$A$尽量接近于理论中心距$A^{\prime}$，以减少连杆长度的修正量，需要根据曲柄滑块机构在仪表中心的位置，求出理论中心距$A^{\prime}$，参看图4。
    <center>
        <img
          src="/image/齿轮传动理论中心距计算图.png"
          width = "60%"
          alt=""/>
        <br>
        <div class="imgtext">图4 齿轮传动理论中心距计算图</div>
    </center>

    图中：$\angle O D G=\alpha_{5}; \angle O G D=\alpha_{6};$$\angle O^{\prime} B O=\alpha_{7}; \angle O B D=\alpha_{8};$$\angle B O^{\prime} O=\alpha_{9}; \angle B O E=\alpha_{10}$  
    已知：$c^{\prime}=\sqrt{a^{2}+\left(b^{\prime}\right)^{2}-2 a b^{\prime} \cos \alpha_{5}}$  
    式中，$\alpha_{5}=180^{\circ}-\left(\varphi_{0}+\alpha_{6}\right)$，
    当$\varepsilon \geq 1$时，$\alpha_{6}=90^{\circ}-\phi$;
    当$\varepsilon<1$时，$\alpha_{6}=90^{\circ}+\phi$  
    然后求出$A^{\prime}$:
    $A^{\prime}=\sqrt{R^{2}+\left(c^{\prime}\right)^{2}-2 c^{\prime} R \cos \alpha_{7}}$

3. 选定齿轮传动中心距$A$  
    选择适当的$Z_{2}$和$m$值，使中心距尽量接近理论值$A^{\prime}$

4. 连杆长度$b$的计算  
    当采用中心距$A$代替齿轮传动理想中心距$A^{\prime}$时，连杆长度$b$需要重新计算，
    计算$b$时，机构的$\epsilon$、$\phi_{o}$和$\phi_{z}$均不改变，
    只是改变曲柄轴的回转中心，因此尺寸$c^{\prime}$和相应的$\alpha_{9}$和$\alpha_{7}$发生变化，计算的具体步骤如下：  
    ①按下式求$\alpha_{9}$:
    $R \cos \delta=e+A \cos \left(\alpha_{9}-\delta\right)$  
    ②按下式求$c$(用$A$代替后的$OB$长度):
    $c=\sqrt{R^{2}+A^{2}-2 A R \cos \alpha_{9}}$  
    ③按下式求$\alpha_{7}$：
    $\frac{A}{\sin \alpha_{7}}=\frac{c}{\sin \alpha_{9}}$  
    ④按下式求$b$:
    $b=\sqrt{a^{2}+c^{2}-2 a c \cos \left(\alpha_{10}+\varphi_{0}\right)}$  
    &emsp;&emsp;式中，$\alpha_{10}=\alpha_{7}+\delta$  
    ⑤计算修改后的$\lambda=\frac{b}{a}$

<style>
img
{
  border-radius: 0.3125em;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08)
}
.imgtext
{
  color:orange;
  border-bottom: 1px solid #d9d9d9;
  display: inline-block;
  color: #999;
  padding: 2px;
}
</style>
