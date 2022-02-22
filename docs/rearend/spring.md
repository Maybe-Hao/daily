# Spring

## 概述

1、Spring是一个开源免费的框架 , 容器  .

2、Spring是一个轻量级的框架 , 非侵入式的 .

**3、控制反转 IoC  , 面向切面 Aop**

4、对事物的支持 , 对框架的支持

## 流程

首先在 pom.xml中添加依赖，添加spring框架

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.8</version>
    </dependency>
</dependencies>
```

创建pojo下的bean对象

然后在xml中写入bean

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--bean就是java对象 此处相当于 New了一个Hello, 由Spring创建和管理-->
    <!--    Hello  hello=new Hello();-->
    <!--    类型 变量名 =new 类型（）-->
    <!--    id=变量名-->
    <!--    class=new 的对象-->
    <!--    property 相当于属性的赋值-->
    <!--    用到了控制反转,调用了Hello.java中的set方法-->
    <bean id="user" class="com.hao.pojo.User">
        <property name="name" value="李浩"/>
    </bean>

</beans>
```



注意：

Spring默认是无参构造。

若要使用有参构造函数贼不能用上述方法，可以使用下标的方式

此时bean为

```
public User(String name){
this.name=name;
}
```

xml为（注意index是从0开始）

方法一：

```
<bean id="user" class="com.hao.pojo.User">
    <constructor-arg index="0" value="李浩学java"/>
</bean>
```

方法二：

```
<bean id="user" class="com.hao.pojo.User">
    <constructor-arg type="java.lang.String" value="李浩学java"/>
</bean>
```

**注意：本方式通过类型创建，若两个string类可能会出错，且String类要写成java.lang.String,int可以直接用int**

方法三：

```
<bean id="user" class="com.hao.pojo.User">
    <constructor-arg name="name" value="李浩学java"/>
</bean>
```

直接通过参数名来赋值，第一个name就是user的name属性名

## DI注入各种类型数据的方法

### 对应的bean

```
package com.hao.pojo;

import com.hao.pojo.Address;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Student {

    private String name;
    private Address address;
    private String[] books;
    private List<String> hobbys;
    private Map<String,String> card;
    private Set<String> games;
    private String wife;
    private Properties info;

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setBooks(String[] books) {
        this.books = books;
    }

    public void setHobbys(List<String> hobbys) {
        this.hobbys = hobbys;
    }

    public void setCard(Map<String, String> card) {
        this.card = card;
    }

    public void setGames(Set<String> games) {
        this.games = games;
    }

    public void setWife(String wife) {
        this.wife = wife;
    }

    public void setInfo(Properties info) {
        this.info = info;
    }

    public void show(){
        System.out.println("name="+ name
                + ",address="+ address.getAddress()
                + ",books="
        );
        for (String book:books){
            System.out.print("<<"+book+">>\t");
        }
        System.out.println("\n爱好:"+hobbys);

        System.out.println("card:"+card);

        System.out.println("games:"+games);

        System.out.println("wife:"+wife);

        System.out.println("info:"+info);

    }
}
```

### xml配置

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--bean就是java对象 此处相当于 New了一个Hello, 由Spring创建和管理-->
    <!--    Hello  hello=new Hello();-->
    <!--    类型 变量名 =new 类型（）-->
    <!--    id=变量名-->
    <!--    class=new 的对象-->
    <!--    property 相当于属性的赋值-->
    <!--    用到了控制反转,调用了Hello.java中的set方法-->
    <bean id="address" class="com.hao.pojo.Address"/>
    <bean id="student" class="com.hao.pojo.Student">
        <property name="name" value="李浩"/>
        <property name="address" ref="address"/>
        <!--数组注入-->
        <property name="books">
            <array>
                <value>红楼梦</value>
                <value>西游记</value>
                <value>水浒传</value>
                <value>三国演义</value>
            </array>
        </property>
        <!--list注入-->
        <property name="hobbys">
            <list>
                <value>听歌</value>
                <value>敲代码</value>
                <value>看电影</value>
            </list>
        </property>
        <!--Map-->
        <property name="card">
            <map>
                <entry key="身份证" value="241231231"/>
                <entry key="银行卡" value="1234123123123"/>
            </map>
        </property>

        <!--Set-->
        <property name="games">
        <set>
            <value>LOL</value>
            <value>COC</value>
            <value>BOB</value>
        </set>
        </property>

        <!--null-->
        <property name="wife">
            <null></null>
        </property>

        <!--Properties-->
        <property name="info">
            <props>
                <prop key="driver">2019051162</prop>
                <prop key="username">李浩</prop>
                <prop key="sex">男</prop>
            </props>
        </property>
    </bean>

</beans>
```

### P命名空间注入

使用前提：

P命名空间注入 : 需要在头文件中加入约束文件

```
 导入约束 : xmlns:p="http://www.springframework.org/schema/p"
```

```
<bean id="user" class="com.hao.pojo.User" p:age="23"/>
```

## Spring注解开发

在pojo中注入时使用@Value()

在dao层中注入时使用@Repository

两者作用相同

## 动态代理-

































































































# 必记单词

Scope 作用域

# 问题及解决

问题

![image-20210802103511832](C:\Users\kylargo\AppData\Roaming\Typora\typora-user-images\image-20210802103511832.png)

![image-20210802103529797](C:\Users\kylargo\AppData\Roaming\Typora\typora-user-images\image-20210802103529797.png)

原因：

![image-20210802103448906](C:\Users\kylargo\AppData\Roaming\Typora\typora-user-images\image-20210802103448906.png)

解决：在mybatis的配置文件中，将useSSL=true改为useSSL=false即可正确解决问题。

