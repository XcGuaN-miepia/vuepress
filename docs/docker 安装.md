## 安装123
### Mac
在[官网](https://www.docker.com/get-started)下载后即可
### Linux
#### 卸载旧版本
如果有旧版本存在，需要先卸载旧版本以及相关依赖
```
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
#### 安装 yum-utils
安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2。

```
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
# 后期试验，删除device-mapper-persistent-data，lvm2也可以运行，官网也没有推荐安装这个
```
使用以下命令来设置稳定的仓库。
```
$ sudo yum-config-manager \
    --add-repo \
    # 使用官方源地址（比较慢）
    https://download.docker.com/linux/centos/docker-ce.repo
    # 阿里云
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    # 清华大学源
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
```
#### 安装 Docker Engine-Community
安装最新版本的 Docker Engine-Community 和 containerd
```
$ sudo yum install docker-ce docker-ce-cli containerd.io
```
#### 启动 dokcer
```
$ systemctl start docker
```