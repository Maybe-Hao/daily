# Nodejs安装

### 问题：安装webpacke后，却无法识别内部或外部指令

解决方法：无

分析原因：应该是我node_cache的位置不对，路径没配正确

### 问题：安装淘宝镜像源时，报错

问题描述：说该版本已被废弃啥的

解决：未知，重装后未出现（删除.nprmc后的重装）

### 问题：安装webpack时报错

<img :src="$withBase('/assets/img/image-20211117201935068.png')">

解决方法：

1.删除.npmrc文件
该文件在：C:\Users{账户}\下的.npmrc文件，
一般这种类型的都是默认被隐藏，一定要选择将隐藏取消掉

<img :src="$withBase('/assets/img/image-20211117202034076.png')">

**注：网上说的没有权限用管理员方式运行啥的都是瞎扯，使用管理员运行是可以运行成功，但无法使用会出现上述的webpacke安装成功了但无法识别指令。**



## 1.本次安装参考教程：https://blog.csdn.net/antma/article/details/86104068



### 重新安装nodejs注意点：

1.应用中卸载nodejs

2.删除nodejs的安装的文件夹

3.删除相关环境变量

4.**删除用户下的隐藏文件 .npmrc -----此文件对后来安装有重大影响**



## 2.安装镜像源

安装淘宝镜像 cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

```



测试是否安装成功

```
cnpm config get registry
cnpm config list
```

<img :src="$withBase('/assets/img/image-20211117202757554.png')">

# 重大问题：

教程让我们新建了node_cache和node_global文件夹，并设置其npm的conifg语句，之后又让我们设置了环境变量。

注意：我们之前遇到了无法下载或下载不成功的问题，所以删除了.npmrc文件，这是他的配置文件，我们删除以后，自然就恢复默认了，所以后续我们成功安好的vue 镜像源 webpack都是在默认路径中，这时候发现，npm可以找到我们下载的，而cmd就找不到！这是为什么？这是因为我们先前的环境变量设置的是我们自己定义的地方，但我们安装的vue等是在默认位置（C:\Users\kylargo\AppData\Roaming\npm），所以修改了环境变量后，我们就成功运行了！

<img :src="$withBase('/assets/img/image-20211118000402082.png')">
