import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'

interface BlogRenderProps {
    // props
    blog: string
}

const BlogRender: React.FC<BlogRenderProps> = ({ blog }) => {
    return (
        <div>
            <ReactMarkdown>
                {blog}
            </ReactMarkdown>
        </div>
    );
}

const App = () => {
    const [blog] = useState<string>(`
    微信公众号内容地址: https://mp.weixin.qq.com/s/afhhsAX3tJyzBuoEpjdz5A

简单来说，金融数学的目标就是用<font color='red'>数学模型给金融产品定价</font>，例如从未来的价值($T$ 时刻)，倒推现价($t$ 时刻或 $0$ 时刻)。

就课程来说，核心是两大部分，即金融产品和金融模型；同时金融模型体系中也包含一定的数学基础。

- 金融产品: 存款&利率，债券，常见的金融衍生品——远期合约、期货、期权
- 数学基础: 微分和积分，概率论——期望、方差和正态分布
- 金融模型: 伯努利模型，B-S 模型(Black-Scholes，布莱克-舒尔斯公式)

作为上篇，我们将主要集中在金融产品部分。

# 金融产品

对于每个金融产品，主要关注买卖机制，预期回报。  
对于金融产品的定价策略，主要对未来回报进行贴现；<font color='red'>较难贴现的，通过单一价格定律，使用等价投资组合进行替换后再贴现</font>。  
对于多个金融产品的投资组合，则会关注等价投资组合、套利机会、风险对冲等。

## 存款&利率 Deposit & Interest Rate

离散型复利:

$$(1+r)^T$$  

连续型复利(一般无特殊说明，衍生品默认考虑该复利下的价格):

$$e^{rT}，(\lim \limits_{n \to \infty}(1+\frac{r}{n})^n=e^r)$$ 

现值/贴现:

$$P(t)=P(T)e^{-r(T-t)}$$

### 例如: 年度连续型复利 $r=6\%$，$t=0$ 时存款为 $100$，则 $T=6$ 个月时的收益？

$$
\begin{aligned}
t=0，T=\frac{1}{2}年，P(t)=100，\\
则 P(T)=100e^{0.03}
\end{aligned}
$$

### 例如: 年度连续型复利 $r=6\%$，$T=1年 $ 时存款为 $100$，则 $t=6$ 个月时的贴现值？

$$
\begin{aligned}
T=1年，t=\frac{1}{2}年，P(T)=100，\\
则 P(t)=100e^{-0.03}
\end{aligned}
$$

## 债券 Bonds

发行者为筹集资金而发行、在约定时间支付一定比例的利息 $C$，并在到期日 $T$ 时偿还本金 $F$ 的一种有价证券。

- $F$: 面值 Face Value
- $C$: 票息 Coupon；$C$=0 时，为零息债券(ZCBs, Zero Coupon Bonds)
- $T$: 到期日 Maturity

### 例如: 年度离散型复利为 r，债券的面值为 F，合约期为 T 年，每一年支付利息为 C，则 0 时刻的贴现值？

1. 面值的贴现，即为 T 年后的价值按照复利进行折算:

   $$PV_F = \frac{F}{(1+r)^T}$$

2. 票息的贴现，即为 T 年的票息贴现 + T-1 年票息的贴现 + ...

   $$
   \begin{aligned}
   PV_C &= \frac{C}{(1+r)^T} + \frac{C}{(1+r)^{T-1}} + ... + \frac{C}{1+r} \\
   &= \frac{C}{r}(1-\frac{1}{(1+r)^T})
   \end{aligned}
   $$

3. 债券的贴现即为两部分之和。且如果债券<font color='red'>定价低于贴现值，则可以考虑买入</font>。

## 金融衍生品 Derivatives & 金融操作和法则

衍生品是指其价值依赖于标的资产（Underlying Asset，如股票、大宗商品）价值变动的合约，<font color='red'>可以用来对冲资产价格变动风险</font>。

- 仓位: <font color='red'>长仓(Long Position)，通俗理解成买入</font>；短仓(Short Position)，通俗理解成卖出。
- 对冲: <font color='red'>目标是减少某一方面的风险</font>，例如通过投资组合减少股票价格下降带来的损失。
- 投机: <font color='red'>目标是利用某一方面的风险</font>，例如认为股票有下降风险，则进行做空(Short Selling, 先高价卖后低价买)。
- 套利: <font color='red'>目标是无风险收益</font>，通过同时进入多个金融市场，利用利率/价格差赚钱。
- 等价投资组合: 对于多个投资组合，在未来时刻 $T$ 的价值相同。
- <font color='red'>单一价格定律: 在无套利市场，$T$ 时刻拥有相同未来价值的投资组合，其 $t$ 时刻的价值也相同</font>。

## 金融衍生品——远期合约 Forward Contracts

买卖双方签订的非标准化合约，承诺在到期日 $T$ 按照合约要求，以交割价格 $K$ 买卖对应的资产 $S$。<font color='red'>合约无入场费，但是到期时，双方必须执行</font>。

- $S$: 标的资产 Asset
- $K$: 交割价格 Delivery price
- $T$: 到期日 Maturity
- 长仓(Long position)，表示到期时买资产；短仓(Short position)，表示到期时卖资产。

**期望回报**

- Long Forward 
  - 花了 K，得到 S: $S(T)-K$
  ![](https://files.mdnice.com/user/44560/1b90cece-2e3a-4a5e-ad3d-03fa4c19d7ea.png)
- Short Forward 
  - 卖了 S，得到 K: $K-S(T)$
  ![](https://files.mdnice.com/user/44560/d95105bd-48d8-4f90-846c-77a8d245f28a.png)

**定价** $K$

- 已知 $t$ 时刻的资产/股票价格为 $S(t)$，
  - 则 T 时刻的交割价格：$K(t,T) = S(t)e^{r(T-t)}$

### 推导: 等价投资组合 + 单一价格定律

- $t$ 时刻
  - 投资组合 A：签订长仓远期合约
  - 投资组合 B：银行贷款 $S(t)$ + 股票 $S(t)$
  - $V_A=V_B=0$
- $T$ 时刻
  - $V_A=S(T)-K(t,T)，V_B=S(T)-S(t)e^{r(T-t)}$
  - 若要 $V_A=V_B$，则 $K(t,T) = S(t)e^{r(T-t)}$

**套利** $K(t,T) \ne S(t)e^{r(T-t)}$

Case1: 对于到期日为 $T$ 的远期合约，$K < S(t)e^{r(T-t)}$，即交割价格较低

- t 时刻
  - 签订长仓远期合约
  - 做空股票 S，即先借到股票 S，然后卖出，得到现金 $S(t)$
  - 现金 $S(t)$ 存入银行
  - 目前为止，总成本为 $0$
- T 时刻
  - 银行余额升值为 $S(t)e^{r(T-t)}$
  - 执行长仓远期合约，以 $K$ 价格购入股票 S，并把股票归还
  - 目前为止，收益为 $S(t)e^{r(T-t)} - K > 0$，无风险获利

Case2: 对于到期日为 $T$ 的远期合约，$K > S(t)e^{r(T-t)}$，即交割价格较高

- t 时刻
  - 签订短仓远期合约
  - 向银行借贷，得到现金 $S(t)$
  - 购买股票 S
  - 目前为止，总成本为 $0$
- T 时刻
  - 银行贷款增加到 $S(t)e^{r(T-t)}$
  - 执行短仓远期合约，以 $K$ 价格卖出股票 S，并用现金归还贷款
  - 目前为止，收益为 $K - S(t)e^{r(T-t)} > 0$，无风险获利

## 金融衍生品——期货 Futures

与远期合约基本一致，区别在于期货是标准化合约，一般只在交易所内交易，对合约内容有各方面的限制。

## 金融衍生品——期权 Options

与期货相似，在交易所内交易，给予合约持有者在到期日 $T$ 以行权价格 $K$ 买卖对应的资产 $S$。<font color='red'>合约有入场费/期权费，但是到期时，单方可以选择不行权</font>。

- $S$: 标的资产 Asset
- $K$: 行权价格 Exercise price / strike
- $T$: 到期日 Maturity
- $c/p$: 期权保险费 Premium (看涨期权:$c$，看跌期权:$p$)
- 看涨期权(Call option)，表示到期时有权买资产；看跌期权(Put option)，表示到期时有权卖资产。
- 长仓(Long position)，表示买期权合约；短仓(Short position)，表示卖期权合约；一般不作特殊说明，默认是长仓。
- <font color='red'>欧式期权，只有到期日可以决定是否行权；美式期权，在到期日之前可以提前行权</font>(因此，一般美式期权保险费更高，因为可能能获得更大收益)

**期望回报**

- Long European Call Option
  - 不行权 或者 花了 K，得到 S:
  - $(S(T)-K)^+ = max\\{S(T)-K, 0\\}$，利润则用回报再减去保险费 $c$
    ![](https://files.mdnice.com/user/44560/0ee18ca6-9a20-4d66-9477-593a41445e2e.png)
- Long European Put Option
  - 不行权 或者 卖了 S，得到 K:
  - $(K-S(T))^+ = max\\{K-S(T), 0\\}$，利润则用回报再减去保险费 $c$
    ![](https://files.mdnice.com/user/44560/b506e34e-cc0a-4f9b-bb11-5e651887875a.png)
- Short European Call Option
  - 期权卖方，收益与买方相反:
  - $-(S(T)-K)^+ = -max\\{S(T)-K, 0\\}$，利润则用回报再加上保险费 $c$，即主要靠买方不行权赚保险费
    ![](https://files.mdnice.com/user/44560/81c9df32-7dfd-4b61-a7c4-ace0c7df8af8.png)
- Short European Put Option
  - 期权卖方，收益与买方相反:
  - $-(K-S(T))^+ = -max\\{K-S(T), 0\\}$，利润则用回报再加上保险费 $c$，即主要靠买方不行权赚保险费
    ![](https://files.mdnice.com/user/44560/9b10432b-fac3-4a90-8d9d-43a892c5051e.png)

**定价** $c/p$

- 已知 $0$ 时刻的资产/股票价格为 $S(0)$，$T$ 时刻的行权价格为 $K$，
  - 则 0 时刻的欧式看涨期权保险费: $c_0 \ge max\\{S(0)-Ke^{-rT},0\\}$
  - 则 0 时刻的欧式看跌期权保险费: $p_0 \ge max\\{Ke^{-rT}-S(0),0\\}$

### 推导: 等价投资组合 + 单一价格定律

- $T$ 时刻
  - 投资组合 A1: 资产 $S$
  - 投资组合 B1: 欧式看涨期权 + 银行存款 $K$
  - $V_{A1}=S(T) \le V_{B1}=(S(T)-K)^++K=max\\{S(T),K\\}$
  - 投资组合 A2: 银行存款 $K$
  - 投资组合 B2: 欧式看跌期权 + 资产 $S$
  - $V_{A2}=K \le V_{B2}=(K-S(T))^++S(T)=max\\{K,S(T)\\}$
- $0$ 时刻
  - $V_{A1}=S(0)，V_{B1}=c_0+Ke^{-rT}$
  - 若要 $V_{A1} \le V_{B1}$，则 $c_0 \ge max\\{S(0)-Ke^{-rT},0\\}$
  - $V_{A2}=Ke^{-rT}，V_{B2}=p_0+S(0)$
  - 若要 $V_{A2} \le V_{B2}$，则 $p_0 \ge max\\{Ke^{-rT}-S(0),0\\}$

**期权平价公式**

- 对于相同资产 $S$，相同行权价格 $K$，相同到期日 $T$ 的欧式看涨期权和欧式看跌期权
  - 任意时刻 $t$，包括 $t=0$，恒有以下等式:
    <font color='red'>$$c_t + Ke^{-r(T-t)} = p_t + S(t)$$</font>

### 推导: 等价投资组合 + 单一价格定律

- $T$ 时刻
  - 投资组合 A: 欧式看涨期权 + 银行存款 $K$
  - 投资组合 B: 欧式看跌期权 + 资产 $S$
  - $V_{A}=(S(T)-K)^++K=max\\{S(T),K\\}$
  - $V_{B}=(K-S(T))^++S(T)=max\\{K,S(T)\\}$
  - $V_{A} = V_{B}$
- $t$ 时刻
  - $V_{A}=c_t + Ke^{-r(T-t)}$
  - $V_{B}=p_t + S(t)$
  - 若要 $V_{A} = V_{B}$，则 $c_t + Ke^{-r(T-t)} = p_t + S(t)$

## 金融衍生品——投资组合实现对冲

覆盖期权/保护性期权——单个期权 + 单只股票

- Covered Call: 股票 + Short Call
  - 原风险: Short Call 在股票价格上涨时，会有无限制的损失
  - 对冲: 同时另外购入同等的股票
    ![](https://files.mdnice.com/user/44560/25eb0271-6da4-49de-8ef4-82725cc3c912.png)
- Protective Put: 股票 + Long Put
  - 原风险: 股票价格降低时，会存在损失
  - 对冲: 同时另外购入同等的看跌期权
    ![](https://files.mdnice.com/user/44560/d34d3574-5440-4532-b5d1-3ba528ae9e2f.png)

价差——不同仓位、不同行权价格的多个同种期权

- Bull Spread: Long call(低 $K_1$) + Short call(高 $K_2$)
  - 原风险: Short Call 在股票价格上涨时，会有无限制的损失
  - 对冲: 同时另外"购入"看涨期权
  - 投机: 新"购入"的看涨期权行权价格较低，因此股票价格上升时，能得到收益
    ![](https://files.mdnice.com/user/44560/2c8a52ee-77c2-4f7d-b438-1e681bc58fe0.png)
- Bear Spread: Long call(高 $K_1$) + Short call(低 $K_2$)
  - 原风险: Short Call 在股票价格上涨时，会有无限制的损失
  - 对冲: 同时另外"购入"看涨期权
  - 投机: 新"购入"的看涨期权行权价格较高，因此股票价格下降时，能得到收益
    ![](https://files.mdnice.com/user/44560/1181d787-da82-4988-9c22-0bfc921b30d5.png)

组合——同时包含相同仓位的不同种期权

- Bottom Straddle 底部跨式期权: Long put + Long call，相同行权价格
  - 原风险: 股票下降时，看涨期权收益为 0，利润为负；股票上升时，看跌期权收益为 0，利润为负
  - 投机: 同时购入看涨和看跌期权，股票下降和股票上升时都有收益(股票价格平稳时亏损)
    ![](https://files.mdnice.com/user/44560/c2a802d4-a32d-46ef-aedc-3cfaad5535a1.png)
- Strangles 宽跨式期权: Long put(低 $K_1$) + Long call(高 $K_2$)
  - 原风险: 股票下降时，看涨期权收益为 0，利润为负；股票上升时，看跌期权收益为 0，利润为负
  - 投机: 同时购入看涨和看跌期权，股票下降和股票上升时都有收益(股票价格平稳时亏损)
    ![](https://files.mdnice.com/user/44560/9b098c07-b216-457e-b41c-3f0d844dd5dc.png)

# 小 结

总体来说，金融产品的定价意义是根据未来的收益进行倒推，让收益和成本相等。

在这样的机制下，各种金融产品不再是套利工具，而是<font color='red'>投资和对冲工具</font>，市场可以高效率和低风险的进行<font color='red'>物质生产和流通</font>，最终所有人均可受益。

实际上由于定价失误、金融数学的一些完美市场假设(例如银行存款和借贷利率相同，且永不倒闭)等原因，金融绝大多数时候仍然是<font color='red'>套利工具</font>，而越来越复杂的金融产品则只不过是让赢者可以更大程度地实现通吃。
    `)

    return (
        <BlogRender blog={blog} />
    )
}

export default App;
