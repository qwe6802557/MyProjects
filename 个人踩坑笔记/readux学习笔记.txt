# 一丶初识Redux

![1582357306152](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582357306152.png)

![1582357500846](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582357500846.png)

生动地理解：![1582357649828](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582357649828.png)

# 二丶使用redux:

1.npm install redux -s

2.在src下建立redux目录 并在其建立store目录

![1582358720787](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582358720787.png)

3.在store下的index.js文件中创建store

![1582358782692](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582358782692.png)

4.新建reducer.js文件准备并创建reducer,并在store目录下的index.js文件中引入reducer并加入createStore方法中初始化:

![1582358851500](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582358851500.png)

![1582358938188](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582358938188.png)

5.开始在组件中使用store中的state:

![1582359236360](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582359236360.png)

![1582359285167](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582359285167.png)

6.使用redux_dev_tool需要的配置：

![1582359620625](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582359620625.png)

7.组件中建立action:

![1582360122840](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582360122840.png)

8.dispatch方法传递action:

![1582360827588](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582360827588.png)

9.接收action并传给reducer处理：

![1582360499590](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582360499590.png)

10.在组件中订阅改变组件状态：也就是更新state值

![1582361016071](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582361016071.png)

![1582361065231](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1582361065231.png)

splice 数组删除方法，使用方法为L splice（开始删除的位置下标，删除的个数）

##### 11.工作中处理组件的多个action:新建actionType.js文件 将所有action的type值单独写里面。

![1583657136890](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583657136890.png)

组件中使用:

![1583657250937](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583657250937.png)

reducer中也要引入并一一对应:

![1583657286819](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583657286819.png)

##### 12.工作中处理组件的多个action后dispatch操作:新建actionCreator.js文件 将所有action的dispatch操作单独写里面。

![1583657611329](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583657611329.png)

这样在执行的时候只需引入方法传入值即可得到需要dispatch的对象。

##### 13.readux中的三个坑:

![1583659045851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583659045851.png)

![1583659140227](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583659140227.png)

![1583659271003](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583659271003.png)

