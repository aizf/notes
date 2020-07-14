---
title: python的pandas模块
tags:
    - python
    - 模块
---

## iloc

```py
df["col"].iloc[0]=122133
# df变化
df.iloc[0,6]=122133
# df变化

df.iloc[0]["col"]=122133
# df不变化
```

## 过滤not in

<https://stackoverflow.com/questions/27965295/dropping-rows-from-dataframe-based-on-a-not-in-condition>

You can use pandas.Dataframe.isin.

pandas.Dateframe.isin will return boolean values depending on whether each element is inside the list a or not. You then invert this with the ~ to convert True to False and vice versa.

```py
import pandas as pd

a = ['2015-01-01' , '2015-02-01']

df = pd.DataFrame(data={'date':['2015-01-01' , '2015-02-01', '2015-03-01' , '2015-04-01', '2015-05-01' , '2015-06-01']})

print(df)
#         date
#0  2015-01-01
#1  2015-02-01
#2  2015-03-01
#3  2015-04-01
#4  2015-05-01
#5  2015-06-01

df = df[~df['date'].isin(a)]

print(df)
#         date
#2  2015-03-01
#3  2015-04-01
#4  2015-05-01
#5  2015-06-01
```
