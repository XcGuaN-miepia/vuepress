## package.json
```json
"devDependencies": {
    ...
    "lint-staged": "^9.5.0",
    ...
}
"gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": [
      "npm run lint", // 项目中需要查看有没有这个命令，vue-cli3 里面默认的是vue-cli-service lint
      "git add"
    ]
  }
```
重新安装依赖
## hooks
进入项目的`.git/hooks`文件夹，找到`pre-commit.sample`文件，把后缀名`.sample`删除
## 结果
提交有问题的代码之前，会执行`eslint`检验代码并且报错，报错后代码不能提交

## 更新
测试之后不是`eslint`的报错，而是`git`自带的检验测试，实际也不需要去修改`.sample`后缀名。`package.json`文件修改相同，或者 `devDependencies`不填写，直接执行下面命令
```shell
$ npm i yorkie --save-dev
$ npm i lint-staged --save-dev
```

`yorkie`会默认把`hooks`都打开，这时候会执行`eslint`命令了
