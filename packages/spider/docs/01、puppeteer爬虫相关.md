## puppeteer爬虫相关


### 处理当前页面的爬虫
这个例子是爬去百度新闻的一个例子 - 爬取页面数据并且储存为文件
- [news](../src/Puppeteer-spider/03、news.ts)

这个例子是爬取csdn 一个页面的一个示例 
- [CSDNPageSinglePage](../src/Puppeteer-spider/05、CSDNPageSinglePage.ts)

这个例子是爬取csdn 多个页面的一个示例
- [CSDNPage](../src/Puppeteer-spider/04、CSDNPage.ts)

遇到的问题：                  
1、如果在等待页面加载的时候， 页面在调用 `page.goto([url])` 的时候, 理论上是加载完毕之后， 就可以直接拿到最后的html了。
但是有可能会出现页面还没有完全渲染完成，所以这个时候以防止没有拿到自己预期的html字符串， 可以考虑使用 `page.waitSelect()`api来等待目标dom节点的渲染；

2、在爬去csdn的时候， 遇到另外一个坑， 就是如果， 某个脚本在页面加载的时候， 一直处于 pending 状态， 那么puppeteer会认一直没有加载完成。
然后时间等久了， 就会直接报错， 因为 `setDefaultNavigationTimeout` 默认是30秒， 但是这种 pending 的脚本， 实际上并不影响脚本的爬去数据。
这个时候可以手动开启拦截， 把这部分 一直 pending 的脚本直接阻止掉就OK 了。
```typescript
/*
* 开启请求拦击， 以为有写请求会直接 阻塞
* 让浏览器误认为没有加载完成
* */
await this.page.setRequestInterception(true);
this.page.on('request', async interceptedRequest => {
  if (interceptedRequest.url().endsWith('.png')
      || interceptedRequest.url().endsWith('.jpg')
      || interceptedRequest.url().includes('/o.htm')
      || interceptedRequest.url().includes('/s.htm')
  )
    await interceptedRequest.abort();
  else
    await interceptedRequest.continue();
});
```


### 参考文章
- [爬虫利器 Puppeteer 实战](https://www.jianshu.com/p/a9a55c03f768)
- [详解Node使用Puppeteer完成一次复杂的爬虫](https://www.jb51.net/article/138391.htm)
- [Puppeteer的入门教程和实践](https://www.cnblogs.com/rennaiqian/p/8325260.html)
- [Puppeteer/index.ts](https://github.com/MrTreasure/Algorithm/blob/master/src/Puppeteer/index.ts)
- [puppeteer，新款headless chrome！](https://www.cnblogs.com/dh-dh/p/8490047.html)
- [谷歌 Puppeteer 爬虫工具初体验](https://segmentfault.com/a/1190000014403160)
- [前端使用puppeteer 爬虫生成《React.js 小书》PDF并合并](https://segmentfault.com/a/1190000016198363)
- [玩玩puppeteer，实现一个小‘爬虫’](https://segmentfault.com/a/1190000015498350)
- [puppeteer的简单使用_爬取页面信息](https://segmentfault.com/a/1190000013037078)
- [puppeteer进阶版_爬取小说站](https://segmentfault.com/a/1190000013055389)
- [Puppeteer拦截某条url并返回其响应内容(场景和方法) API RequestInterception拦截器的使用](https://blog.csdn.net/m0_37089544/article/details/82225408)



- 值得推荐的headless模块                         
    - [puppeteer](https://github.com/GoogleChrome/puppeteer)
    - [nightmare](https://github.com/segmentio/nightmare)
    - [Puppeteer中文api](https://zhaoqize.github.io/puppeteer-api-zh_CN/)
