# egg
基于阿里巴巴 为企业级框架和应用而生 egg 平台研发 


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


### 框架说明结构

### window版本
-   1.[下载mysqlwin版本软件](https://pan.baidu.com/s/1PuMt7VaUV2qSwf0GsfMuHA)

### mac版本或者linux服务器

```
//注意一定要删除这个未使用的镜像不然就会出现之前的mysql遗漏版本
//开始删除未使用的镜像
docker image prune -a

//docker 安装 8
//docker pull mysql:8 
//a.下载最新版的mysql数据库 
docker pull mysql:latest 

//b.查看下载的mysql镜像 
docker images

//c.运行容器
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=chenyanqin1992 mysql

//-p 3306:3306 ：映射容器服务的 3306 端口到宿主机的 3306 端口，
//外部主机可以直接通过 宿主机ip:3306 访问到 MySQL 的服务。
//MYSQL_ROOT_PASSWORD=123456：设置 MySQL 服务 root 用户的密码。

//d.查看启动的端口
docker ps 

//e.进入容器 
//*****需要注意要进入容器才可以登录mysql数据库*****
docker exec -it mysql bash

//f.登录mysql数据库
mysql -h localhost -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Aa123!';

//g.添加远程登录用户
CREATE USER 'test' IDENTIFIED WITH mysql_native_password BY 'Aa123!';
GRANT ALL PRIVILEGES ON *.* TO 'test';
```