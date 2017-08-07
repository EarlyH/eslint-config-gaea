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
> 编辑器中的Lint插件会识别项目的Lint配置文件

#### 命令行运行

进入项目目录，然后执行：
    
    // 检查代码
    > node_modules/.bin/eslint ./src
    
    // 检查代码并进行修复(只有部分问题可自动修复)
    > node_modules/.bin/eslint ./src --fix 

#### VSCode

安装`ESLint`扩展: 
 
![](http://h0.hucdn.com/open/201732/ee7a3fa753f29d47_1208x165.png)

![](http://h0.hucdn.com/open/201732/3ac2732107e3421d_486x212.png)

重启VSCode之后，就可以看到ESLint检测结果：

![](http://h0.hucdn.com/open/201732/f979e1fb308ca1a9_1062x113.png)

#### Sublime Text

安装`SublimeLinter`和`sublimelinter-contrib-eslint`:

![](http://h0.hucdn.com/open/201732/08e4c41b4c097f0d_1003x129.png)

![](http://h0.hucdn.com/open/201732/dc0f67754f3ccb35_925x212.png)

![](http://h0.hucdn.com/open/201732/2001468321c0393a_924x207.png)

可以看到ESLint检测结果：

![](http://h0.hucdn.com/open/201732/0deb955b5ff8fa94_278x45.png)

可以在`Tools -> SublimeLinter`菜单中进行更多设置:

![](http://h0.hucdn.com/open/201732/6503762ef42bcbae_901x1322.png)

输入命令查看文件的所有问题:

![](http://h0.hucdn.com/open/201732/1ccf179ba6b64b20_1096x133.png)

![](http://h0.hucdn.com/open/201732/13eafd186067fa5c_834x410.png)