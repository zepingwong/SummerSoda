---
title: 1.pipenv 安装与使用
date: 2019-05-29
---

#### [github地址](https://github.com/pypa/pipenv)
```
# 安装pipenv
pip install pipenv

# 进入虚拟环境（需要在项目目录上执行，如果当前目录没有，则会新建）
pipenv shell

# 退出虚拟环境
exit

# 使用pipenv按照类库
pipenv install #{package}

# 卸载类库
pipenv uninstall #{package}

# 查看按照包的依赖关系
pipenv graph

# 查看虚拟环境执行文件路径
pipenv --venv
```

