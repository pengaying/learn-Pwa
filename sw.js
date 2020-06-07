/*
 * @Author: your name
 * @Date: 2020-06-07 23:01:45
 * @LastEditTime: 2020-06-07 23:44:46
 * @LastEditors: Please set LastEditors
 * @Description:  * 不能访问DOM
 * 不能访问注入window、localstorage的内容
 *
 * 只能访问一些特定的全局对象
 * 有self
 * 监听事件：  install activate fetch
 *  install  安装进入
 *  activate  install之后进入
 *  fetch  触发资源请求进入
 *   
 *  push  推送消息
 *  sync  同步
 * 
 * @FilePath: \pwa-learn\sw.js
 */


self.addEventListener('install', event => {
    console.log('install:', event);
    // waitUntil 传入promise，promise代表install的完成装态 可延迟触发activate
    // event.waitUntil(new Promise((resolve) => {
    //     setTimeout(resolve, 2000);
    // }));

    //  强制停止旧的service worker  开始新的service worker
    event.waitUntil(self.skipWaiting());

})
self.addEventListener('activate', event => {
    console.log('activate:', event);

    // clients代表service worker控制的所有页面  claim是默认情况下首次不进行控制
    event.waitUntil(self.clients.claim());
})
self.addEventListener('fetch', event => {
    console.log('fetch:', event);
})