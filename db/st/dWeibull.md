## 威布爾分布 (Weibull Distribution)

$\alpha \beta x^{\beta-1} e^{-\alpha x^{\beta}}$

* 用途：(可靠度工程) f(x) 失敗時間, R(t) 可靠度, [$ \rho(t) $]($ \rho(t) $.html) 失敗率

* Ｒ函數：weibull(a:shape, b:scale)
 * 公式：f(x) = 1 / (π s (1 + ((x-l)/s)^2))
 * 說明：location=l , scale=s 
 * 網址：<http://stat.ethz.ch/R-manual/R-patched/library/stats/html/Weibull.html>

### 特性

* 期望值：$\alpha^{-1/\beta} \rho(1+\frac{1}{\beta})$

* 變異數：$\alpha^{-2/\beta} \rho(1+\frac{2}{\beta}) - \mu^2$

* 動差生成函數： $m_x(t) = ??$

### R 程式範例一

```R
op=par(mfrow=c(2,2))
curve(dweibull(x, 1, 1), 0, 10)
curve(dweibull(x, 1, 5), 0, 10)
curve(dweibull(x, 5, 1), 0, 10)
curve(dweibull(x, 5, 5), 0, 10)

```

![](dweibullCurve4.jpg)

