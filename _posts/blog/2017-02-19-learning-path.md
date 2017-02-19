---
category: blog
tags: review
title: Learning-Path
---
# Learning-Path
入职 Thoughtworks 以来，接触到了不少新的东西，简单做一下整理。

## MAC

首先是 mac 的使用，mac 真的是非常好用的工具，option 和 command 键的各种组合，带来了非常多的实用的快捷键，还有触摸板，单指，双指，三指的各种操作，都在一定程度上提高了效率。下面是几个 mac 上常用的工具。

- Alfred ：切换工具，可以非常方便的在不同的应用之间进行切换，使用 google 进行搜索。
- SizeUp ：调整窗口大小的工具，可以让你在同一个窗口中最大化的显示应用或者分屏显示，而不会切换的新的桌面上，在不同桌面之间的切换确实也挺方便，不过和 Alfred 一起使用的话会非常得心应手。
- iTerm2 ： 苹果的终端，命令行工具。
- home brew ：终端里的包管理工具，使用 brew install application_name 可以非常方便的安装很多常用的工具。
- zsh and oh_my_zsh ： 友好的终端界面，包括很多配色、显示、提示，便捷的命令。
- dict ： 字典，简单实用。
- evernote ：笔记应用，搜索功能比较强大，可以剪切网页，添加 pdf 等。
- libra office : office software
- sublime : text edit
- git :
-     hub : 
-     tig :
- CheatSheet

## Java
Java 以前还是有一些了解的，不过在一个项目中的使用经验几乎没有。

在到ThoughtWorks的这段时间里，主要学习了lambda表达式，annotation，范型，接口等，没能好好看看Thinking In Java，接下来的时间里会好好看看java的这本经典书籍，今年内至少通读一边，挑战两遍
- lambda和接口：对于功能性的接口可以使用lambda表达式来mock，简化了测试。
- annotation：写给程序看的注释，告诉程序怎么处理某一部分代码。
- 范型：对于参数的进一步抽象，使函数、类的使用范围更加广泛。
- 接口：面向接口编程而不是接口的实现，使用接口的方法更具有普适性。

## 设计模式
关于设计模式主要看了《大话设计模式》这本书，对于里面的这些设计模式都参照书中的代码实现了简单的例子，项目参见[Java-Design-Pattern](https://github.com/i5possible/java-design-pattern)

#### 看完之后印象较深的几个设计模式
- 抽象工厂方法模式：使用反射加配置文件包容变化。推广到其他地方就是可以使用反射来解决大量的分支判断或者易变的问题。
- 观察者模式：也叫“发布——订阅”模式，当被订阅的对象有更新时，会通知所有订阅者。
- 中介者模式：迪米特法则的体现，如果两个类不必彼此直接通信，那么这两个类就不必发生联系
- 适配器模式：最常用的设计模式之一，更好的复用代码，同时促进更好的设计接口和类
- 命令模式：命令模式中，请求的发起和接受相互独立，可以确定接受或者不接受请求，对于每个客户可以用参数化的请求来描述。同时，方便对命令进行队列化及记录日志，或者进行重做或者撤销。
- 责任链模式：对于某个请求的处理，需要有很多中不同的处理方式在不同的处理场景中执行，便于增加或者减少处理方式，或通过不同的组合来定制化请求的处理方式。
- 组合模式：把相关的类进行松耦合，即不影响原有类的使用，又能满足当前对同时使用多个类的需求。

在实际的项目中可以看到很多使用了设计模式的例子，还是要多观察，多理解一些设计的用途，结合业务场景进行更好的选择。

## Spring
目前还没有系统的学习Spring，在看Spring-boot的过程中又一些简单的了解。

核心一：依赖注入(Dependency Injection)，依赖注入是目前很多框架都实现了的一种特性，框架提供一个容器，用来管理用户注册过的所有的类，在需要使用的时候仅仅进行声明就可以使用。这种管理的类很多时候都是单例，但是在特定条件下也可以在不同的使用时间返回不同的实例。

核心二：AOP(Aspect Oriented Programming)，AOP使程序的灵活程度有了很大的提高，可以在不同的模块中复用一些特定功能的类，简化了开发。

Spring-Data: SpringData中对于不同的数据库类型封装了一些基本的CRUD及Paging，Sorting等功能，使用的时候直接implement相应的接口就可以，操作数据库更便捷

Spring-Test: 使用了Junit，包含了Mockito

Spring-Secure: Spring的安全模块，暂时没有了解

mvc, integretion, log 等模块以后再来补充，spring学习的过程中还会有相应的总结。

## Spring-boot

整合了Spring中常见的一些用法，更便捷的配置及使用Spring

## Restful Hateoas 
Restful-API:

Hateoas:

## Docker

## MongoDB

## Mongozee

## Flyway

## Gradle

## IntelliJ IDEA

## Vim

## Trello

## Splunk

## Slack

## Jenkins

## Rancher

## Nginx

## NodeJS

## Gulp

## Bundler

## Gem

## AngularJS

## GitPages

## Jekyll
