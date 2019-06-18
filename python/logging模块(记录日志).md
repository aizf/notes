python的logging模块提供了标准的日志接口，可以通过它存储各种格式的日志，日志级别等级:critical > error > warning > info > debug

![avatar](.\res\100864.png)

默认情况下只显示了大于等于WARNING级别的日志。
```
>>> import logging
>>> logging.debug('test debug')
>>> logging.info('test info')
>>> logging.warning('test warning')
WARNING:root:test warning

>>> logging.error('test error')
ERROR:root:test error

>>> logging.critical('test critical')
CRITICAL:root:test critical
```

logger

**Logger.setLevel(lel):指定最低的日志级别，低于lel的级别将被忽略。debug是最低的内置级别，critical为最高**

Logger.addFilter(filt)、Logger.removeFilter(filt):添加或删除指定的filter

Logger.addHandler(hdlr)、Logger.removeHandler(hdlr)：增加或删除指定的handler

Logger.debug()、Logger.info()、Logger.warning()、Logger.error()、Logger.critical()：可以设置的日志级别

在logging.basicConfig()函数中可通过具体参数来更改logging模块默认行为，可用参数有
filename：用指定的文件名创建FiledHandler（后边会具体讲解handler的概念），这样日志会被存储在指定的文件中。
filemode：文件打开方式，在指定了filename时使用这个参数，默认值为“a”还可指定为“w”。
format：指定handler使用的日志显示格式。 
datefmt：指定日期时间格式。 
level：设置rootlogger（后边会讲解具体概念）的日志级别 
stream：用指定的stream创建StreamHandler。可以指定输出到sys.stderr,sys.stdout或者文件，默认为sys.stderr。若同时列出了filename和stream两个参数，则stream参数会被忽略。

format参数中可能用到的格式化串：
%(name)s Logger的名字
%(levelno)s 数字形式的日志级别
%(levelname)s 文本形式的日志级别
%(pathname)s 调用日志输出函数的模块的完整路径名，可能没有
%(filename)s 调用日志输出函数的模块的文件名
%(module)s 调用日志输出函数的模块名
%(funcName)s 调用日志输出函数的函数名
%(lineno)d 调用日志输出函数的语句所在的代码行
%(created)f 当前时间，用UNIX标准的表示时间的浮 点数表示
%(relativeCreated)d 输出日志信息时的，自Logger创建以 来的毫秒数
%(asctime)s 字符串形式的当前时间。默认格式是 “2003-07-08 16:49:45,896”。逗号后面的是毫秒
%(thread)d 线程ID。可能没有
%(threadName)s 线程名。可能没有
%(process)d 进程ID。可能没有
%(message)s用户输出的消息

若要对logging进行更多灵活的控制，必须了解Logger，Handler，Formatter，Filter的概念：
logger提供了应用程序可以直接使用的接口；

handler将(logger创建的)日志记录发送到合适的目的输出；

filter提供了细度设备来决定输出哪条日志记录；

formatter决定日志记录的最终输出格式。