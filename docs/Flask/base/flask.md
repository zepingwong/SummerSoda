---
title: 2.flask 入门基础
date: 2019-05-29
---

```
# 实例化，构造函数的参数会作为Flask app核心对象的标识
app = Flask(__name__)
# 启动web app
# debug=True开启调试模式 1.修改文件后不用每次都重启服务器 2.可以在网页中显示异常
# host可以指定可以访问本网站的ip地址
# port启动端口
app.run(host="0.0.0.0", port=81, debug=True)
```
## 3.注册路由-法1
```
# 通过@app.route装饰器来注册路由，其中的参数为url路径。对应会调用hello()函数
@app.route("/hello")
def hello():
    """定义视图函数-mvc 中的controller"""
    return "我就不说hello world"
```
如果直接使用/hello 那么不能兼容浏览器不能访问/hello/和/hello，解决办法，路径定义改成/hello/
```
@app.route("/hello/")
def hello():
    return "我就不说hello world"
```

### 在路径xxx后添加斜杠/后就可以访问xxx/ 和 xxx的原理
重定向：当你访问url1的时候，服务器返回状态码302让用户访问url2
![重定向](https://upload-images.jianshu.io/upload_images/7220971-4f5d1fe45268a7f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

访问http://localhost:5000/hello,观察浏览器网络请求情况，可以看到发生了重定向，重定向到了hello/
![image.png](https://upload-images.jianshu.io/upload_images/7220971-be441a733b86ae58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 为什么这么做呢？
这是因为，如果不做重定向不带/ 的（hello）和带/的（hello/）都可以访问到视图函数，那么就是说同一个视图函数对应着两个不同的路由，没有保证唯一url的原则

#### 唯一url的好处
如果有两个url，那么在搜索引擎中会被索引两次，这样会浪费性能，影响搜索引擎的优化，没有这个必要。

## 4.注册路由-法2
另一种注册路由的函数，通过调用app的add_url_rule函数
```
app.add_url_rule("/hello",view_func=hello)
```
实际上方法1装饰器的模式，内部就是调用了add_url_rule函数。下面来看一下源码

```
    def route(self, rule, **options):
        """A decorator that is used to register a view function for a
        given URL rule.  This does the same thing as :meth:`add_url_rule`
        but is intended for decorator usage::

            @app.route('/')
            def index():
                return 'Hello World'

        For more information refer to :ref:`url-route-registrations`.

        :param rule: the URL rule as string
        :param endpoint: the endpoint for the registered URL rule.  Flask
                         itself assumes the name of the view function as
                         endpoint
        :param options: the options to be forwarded to the underlying
                        :class:`~werkzeug.routing.Rule` object.  A change
                        to Werkzeug is handling of method options.  methods
                        is a list of methods this rule should be limited
                        to (``GET``, ``POST`` etc.).  By default a rule
                        just listens for ``GET`` (and implicitly ``HEAD``).
                        Starting with Flask 0.6, ``OPTIONS`` is implicitly
                        added and handled by the standard request handling.
        """
        def decorator(f):
            endpoint = options.pop('endpoint', None)
            # 可以看到这里就是调用了add_url_rule，self就是我们实例化的app对象
            self.add_url_rule(rule, endpoint, f, **options)
            return f
        return decorator
```

## 5.falsk配置文件
```
# 载入配置文件
app.config.from_object("config")
# 读取配置文件
print(app.config["DEBUG"])
```
陷阱1：配置文件中的key必须是全大写
陷阱2：DEBUG是flask里的一个默认变量，如果想要覆盖，必须名字一模一样


## 5.if __name__ = "__main__"
简单理解：加入这个判断以后，只有在启动入口文件以后，才会执行。而在被其他模块导入的时候不会执行

深入理解其原因是：在生产环境中，我们是使用nginx+uwsgi来部署python项目，其中uwsgi用来启动flask服务，这个时候，根本fisher.py只是作为一个模块被调用，这时加上入口判断，在生产环境中就只不会执行```app.run```方法。否则的话就会启动两个flask服务。

```
if __name__ == "__name__":
    app.run(host=app.config["HOST"], debug=app.config["DEBUG"], port=app.config["PORT"])
```