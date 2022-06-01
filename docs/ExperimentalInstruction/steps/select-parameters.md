---
title: 各测量环节参数的选择
date: 2021-03-08
sidebar: auto
---

## 1. 弹簧管参数的选择

&emsp;&emsp;按照现有的弹簧管产品规格，选定下列尺寸参数如下（如图1）

<table style="--code-color: transparent;">
  <tr>
    <td>毛坯外径</td>
    <td>&Phi;=14mm</td>
    <td>壁厚</td>
    <td>h=0.2mm/0.3mm</td>
  </tr>
  <tr>
    <td>中径</td>
    <td>R=35mm</td>
    <td>中心角</td>
    <td>&gamma;<sup>''</sup>265°（参考）</td>
  </tr>
  <tr>
    <td>材料</td>
    <td colspan="3">锡磷青铜Qsn4-0.3,    E=1.127x10<sup>5</sup>Mpa,    泊松比&mu;=0.3</td>
  </tr>
</table>

<center>
    <img
      src="/image/弹簧管参数图.png"
      width = "60%"
      alt=""/>
    <br>
    <div class="imgtext">图1 弹簧管参数图.png</div>
</center>

## 2. 曲柄滑块机构参数的选择

&emsp;&emsp;在选择曲柄滑块机构相对杆长$\lambda$，相对偏距$\epsilon$，初始位置角$\phi_{\text{o}}$、终止角$\phi_{\text{z}}$时，应考虑所设计的仪表有较好的线性特性，同时还应具有较好的补偿性，具体选择时，可参阅参考资料1的第89页“曲柄滑块机构的传动特性及设计”部分。

&emsp;&emsp;机构的转动范围角

$${\phi_{\text{g}}=\phi_{\text{z}}-\phi_{\text{o}}}$$

 &emsp;&emsp; $\phi_{\text{g}}$的选定，应使弹簧管末端位移$s$时，指针恰好转动标度角$270°$，因此，$\phi_{\text{g}}$的数值还与齿轮传动比$i_{\text{21}}$的选取有关，所以，在选择$\phi_{\text{g}}$时即应考虑到仪表线性度的要求（$\phi_{\text{g}}$增大，线性度偏差），又应照顾到齿轮传动系数的适当。

## 3. 齿轮传动参数的选择

齿轮传动的中心距

$$A=\frac{\mathrm{mZ}_{2}}{2}\left(\mathrm{i}_{21}+1\right)$$
$m$—模数，考虑工艺性和使用上的要求，$m>0.2$  
$i_{\text{21}}$—传动比  
$Z_{\text{2}}$—小齿轮（从齿轮）齿数  

<style>
table
{
  margin: 1rem auto !important;
  display: table !important;
}
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
