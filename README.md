# 准备
搭建一个可以外网服务的后台，你需要以下几样东西：阿里云OSS账户（也可以不使用云服务），域名，服务器。

# 搭建CardDiary Parse服务
1.git clone 该项目并且使用npm安装依赖

2.将mongodb_backup里面的数据恢复到你的mongodb数据库中

3.修改config.json文件中的参数

> 注意:主要修改appId和各种Key,本项目使用阿里云OSS，如果需要请申请账号并且开通服务，并且在对应filesAdapter下填写参数，邮箱服务使用的ＳＭＴＰ服务，请自行修改服务商和账号，使用外网服务请修改publicServerURL 为https://否则安卓8.0以上无法访问应用。

> 请在阿里云上传一个文件名为
74987e08d58bfcf26e20dc73b87035e7_logo-arch.png的图片文件作为用户日记头像的默认图片。

4.修改cloud/main.js中的参数为上面config.json的参数

5.启动服务
```sh
npm start
```

至此你的服务已经启动。
