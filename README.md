# ESLINT-CONFIG-GAEA

这一份gaea使用的ESLint配置文件用于共享。

使用过程中可以参考[http://eslint.org](http://eslint.org)根据项目实际情况，修改部分配置。

> 中文站点：[http://eslint.cn](http://eslint.cn)

对于lint配置有更好的建议请提issue。

## 使用方法

安装eslint配置：

    npm install eslint-config-gaea

在项目`.eslintrc`文件中配置`extends`特性：

    {
        "extends": "eslint-config-gaea"
    }

你也可以忽略`eslint-config-` `前缀，ESLint会自动找到。例如：

    {
        "extends": "gaea"
    }

## 运行ESLint

> 示例中用`./src`表示需要lint的源码目录

命令行运行: 进入项目目录，然后执行：

    > node_modules/.bin/eslint ./src  // 检查代码
    > node_modules/.bin/eslint ./src --fix // 检查代码并进行修复(只有部分问题可自动修复)