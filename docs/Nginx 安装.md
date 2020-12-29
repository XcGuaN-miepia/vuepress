## 1.安装环境
### 1.1 gcc环境
```shell
$ yum -y install gcc-c++
```
### 1.2 第三方开放包Perl库
```shell
$ yum -y install pcre pcre-devel
```
### 1.3 zlib库
```shell
$ yum -y install zlib zlib-devel
```
### 1.4 openssl
```shell
$ yum -y install openssl openssl-devel
```

以上代码合成一条代码即为：
```
$ yum -y install gcc-c++ \
 pcre \
 pcre-devel \
 zlib \
 zlib-devel \
 openssl \
 openssl-devel
```

## 2.下载 nginx
如果没有安装过`wget`先进行安装
```shell
$ yum -y install wget
```
使用`wget`下载
```shell
$ wget http://nginx.org/download/nginx-1.18.0.tar.gz # 目前最稳定的更新包，有别的版本需求可以修改
```
## 3.安装 nginx
解压文件
```shell
$ tar -zxvf nginx-1.18.0.tar.gz
$ rm -rf nginx-1.18.0.tar.gz # 之后这个文件没有用了记得删除
$ cd nginx-1.18.0
```
使用configure创建一个`makeFile`文件
```shell
$ ./configure
    --prefix=/usr/local/nginx \
    --pid-path=/var/run/nginx/nginx.pid \
    --lock-path=/var/lock/nginx.lock \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --with-http_gzip_static_module \
    --http-client-body-temp-path=/var/temp/nginx/client \
    --http-proxy-temp-path=/var/temp/nginx/proxy \
    --http-fastcgi-temp-path=/var/temp/nginx/fastcg \
    --http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
    --http-scgi-temp-path=/var/temp/nginx/scgi # 有配置需求
    
$ ./configure # 没有配置需求，后期可以在配置文件修改
```
默认配置加载后使用命令编译安装nginx
```shell
$ make && make install
```
## 4.启动 nginx
编译安装之后生成文件路径在`/user/local/nginx`当中，需要进入下级的`sbin`目录启动`nginx`
```shell
$ cd /user/local/nginx/sbin
$ ./nginx

$ /user/local/nginx/sbin/nginx # 或者直接启动
```

## 5.访问 nginx
默认端口：80

注意是否开启了防火墙，特别是云服务器，需要去配置开放 80 端口
(一般来说服务器都会开放80端口，访问不行就输入下面命令，我没遇到过)
```shell
$ firewall-cmd --zone=public --add-port=80/tcp --permanent
$ firewall-cmd --reload
```
本地访问浏览器输入`localhost`，服务器输入服务器ip即可，查看到默认nginx页面就算成功了

## 6.常用命令
```shell
$ ./nginx -s stop # 关闭nginx
$ ./nginx -s quit # 退出nginx
$ ./nginx -s reload # 刷新配置文件重启
```

## 7.开机自启 nginx
#### 方法一
进入`/lib/systemd/system/`目录并创建编辑`nginx.service`文件
```shell
$ cd /lib/systemd/system/
$ vi nginx.service
```

```vi
[Unit]
Description=nginx service
After=network.target 
   
[Service] 
# 以fork方式从父进程创建子进程，创建后父进程会立即退出
Type=forking
# 启动当前服务的命令
ExecStart=/usr/local/nginx/sbin/nginx
# 重启当前服务的命令
ExecReload=/usr/local/nginx/sbin/nginx -s reload
# 关闭当前服务的命令
ExecStop=/usr/local/nginx/sbin/nginx -s quit
# 重启间隔时间秒数，默认 10ms
RestartSec=3
# 给服务分配独立的临时空间
PrivateTmp=true 
   
[Install] 
WantedBy=multi-user.target
```
加入开机自启动
```shell
$ systemctl enable nginx.service
```
取消开机自启动
```shell
$ systemctl disable nginx.service
```
systemctl 启动/停止/重启nginx
```shell
$ systemctl start nginx # 启动 nginx
$ systemctl stop nginx # 关闭 nginx
$ systemctl restart nginx # 重启 nginx
```