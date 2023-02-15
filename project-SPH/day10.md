## 打包 npm run build
项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
有了 map 就可以像未加密的代码一样，准确的输出是哪一行那一列有错
所以该文件如果项目不需要是删除掉的，也可以通过
vue.config.js 配置 productionSourceMap: false 去除掉

## linux：/根目录
linux常用指令：cd 跳转目录、ls 查看、mkdir 创建目录、pwd 查看绝对路径

## nginx
1. 为什么访问服务器IP地址就可以访问到咱们的项目？ ---- 配置一些东西就可以了
服务器地址：http://82.156.11.187/

2. 项目的数据来自于：http://gmall-h5-api.atguigu.cn

3. nginx配置
（1）xshell进入根目录/etc (cd etc)
（2）再进入nginx目录 (cd nginx)
（3）如果想安装nginx：yum install nginx
（4）安装完nginx服务器以后，会多一个nginx.conf文件，在这个文件中进行配置
（5）vim nginx.conf进行编辑，主要添加如下两项（按insert进入编辑，按esc，输入wq退出编辑）
解决第一个问题
location / {
    root /root/jch/www/shangpinhui/dist;
    index index.html;
    try_files $url $url/ / index.html;
}
解决第二个问题
location /api {
    proxy_pass http://gmall-h5-api.atguigu.cn;
}
（6）启动nainx服务器
service nginx start