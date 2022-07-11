# React

- 单一数据源

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

- State 是只读的

惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

- 使用纯函数来执行修改

为了描述 action 如何改变 state tree，你需要编写 reducers。  
Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。

## [#](https://react.iamkasong.com/preparation/idea.html#cpu%E7%9A%84%E7%93%B6%E9%A2%88) CPU 的瓶颈

当项目变得庞大、组件数量繁多时，就容易遇到 CPU 的瓶颈。

考虑如下 Demo，我们向视图中渲染 3000 个`li`：

主流浏览器刷新频率为 60Hz，即每（1000ms / 60Hz）16.6ms 浏览器刷新一次。

我们知道，JS 可以操作 DOM，`GUI渲染线程`与`JS线程`是互斥的。所以**JS 脚本执行**和**浏览器布局、绘制**不能同时执行。

在每 16.6ms 时间内，需要完成如下工作：

当 JS 执行时间过长，超出了 16.6ms，这次刷新就没有时间执行**样式布局**和**样式绘制**了。

在 Demo 中，由于组件数量繁多（3000 个），JS 脚本执行时间过长，页面掉帧，造成卡顿。

可以从打印的执行堆栈图看到，JS 执行时间为 73.65ms，远远多于一帧的时间。

> 备案 © 2022 Boris 个人网站 | [粤 ICP 备 20061538 号](https://beian.miit.gov.cn) | 保留所有权利
