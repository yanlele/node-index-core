# node-index-core
node-index 文章代码部分


因为之前 [node-index](https://github.com/yanlele/node-index) 最初的目的就是一个记录自己工作中遇到的问题的地方。
以及随时随地可以写一些demo 验证一些自己的方法、代码的地方。 

没有一点儿工程化概念在里面， js目标就是 直接点击就可run， html就是双击打开就可以跑。
后来慢慢接触各种各样的前端框架、然后就是各种工程化的东西、又慢慢接触到TS、node。这些项目我很多都是， 直接新启动一个github 代码仓库。
然后通过不同的代码仓库做不同的开发以及demo。

但是这样虽然看上去挺好的， 但是还是遇到一些问题。 仓库之间隔离性很强， 比如我写了5个react 项目， 有一个react 项目我觉得做的很好，
我把其中某一部分组件， 抽出来， 希望作为公共组件给其他四个项目用。
最蠢的办法就是复制一份代码， 然后分别粘贴到四个项目去，最后四个仓库分别提交（最蠢的方式）。

再好一点儿的方式， 发布一个npm 模块， 剩余的四个react 项目都安装这个依赖模块， 虽然优雅一点儿。但是感觉没有必要。
如果那些组件又不想开源，自己又没有私npm仓， 这个就只能YY 了。

当然还有其他很多的问题等等。

再后来又接触到了 lerna + yarn workspaces。
从此开启了新篇章。 简而言之， 我把所有的项目都可以放在一个仓库里面， 各种项目package.json 通过lerna 管理， 
通过yarn workspaces 管理各个项目直接的依赖， 可以瞬间解决所有问题。

然后才有了现在这个项目。
我的想法是， 把所有的 源码 都放在这个里面， 无论是webpack学习的， 还是react、还是TS、 还是node 相关的内容、还是其他巴拉巴拉巴拉的项目；
其实都是可以迁移到这个里面来的。(学习字节跳动的项目构建方式 - 感受真的屌屌的)


