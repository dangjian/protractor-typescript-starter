# Protractor Typescript Starter

这是一个使用端对端测试工具Protractor并基于Typescript开发的种子工程

## 开发前准备
### 学习基础知识
* [Typescript教程](https://www.runoob.com/typescript/ts-tutorial.html)
* [JSON](https://baike.baidu.com/item/JSON)
* 代码编辑器：推荐 Webstorm，VSCode，Sublime任意一个
* [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
* jasmine: [英文官网](https://jasmine.github.io/index.html) [中文](https://www.ibm.com/developerworks/cn/web/1404_changwz_jasmine/index.html)
* protractor：[英文官网](http://www.protractortest.org) 
* [WebDriverManager](https://github.com/bonigarcia/webdrivermanager)

## 安装
### 基础环境安装
* [Node.js](https://nodejs.org/en/) 功能运行的基础环境。
* [JAVA](https://www.java.com/en/download) 及JDK（确保JDK安装），Selenium Server依赖的环境。
* `yarn global add typescript` 安装TypeScript编译运行环境

### 测试环境搭建
* 安装Protractor（也可以安装到畜项目）： `yarn add protractor` 或者 `npm i protractor`。这个安装包含了
    * **protractor**的安装和相关命令行工具
    * **webdriver-manager**的安装及相关命令行工具    
* 运行命令 `./node_modules/.bin/webdriver-manager update`。这个过程会安装selenium server和ChromeDriver
    * 具体的server启动[文档](http://www.protractortest.org/#/server-setup)

## 用例编写
### Jasmine测试框架API
* [英文官方](https://jasmine.github.io/pages/docs_home.html)
### Protractor测试框架API
* [英文官方](http://www.protractortest.org/#/api)
### 项目配置
* typescript配置， tsconfig.json。设置编译输出地址。
* protractor配置，protractor.conf.ts。配置spec文件夹，浏览器环境及报告输出等。
* 配置运行script
    * 配置pretest：编译typescript代码
    * 配置test：运行protractor

## 项目运行
* `yarn test`

## 常见问题
TODO
