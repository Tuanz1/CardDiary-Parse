# 搭建CardDiary Parse服务
1.git clone 该项目并且使用npm安装依赖
2.将mongodb_backup里面的数据恢复到你的mongodb数据库中
3.修改config.json文件中的参数
> 注意:修改id和对应的key
4.修改cloud/main.js中的参数为上面config.json的参数
5.启动服务
```sh
npm start
```