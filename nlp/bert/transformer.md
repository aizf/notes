---
layout: false
---
 
Google于2017年6月发布在arxiv上的一篇文章《Attention is all you need》，提出解决sequence to sequence问题的transformer模型，用全attention的结构代替了lstm，抛弃了之前传统的encoder-decoder模型必须结合cnn或者rnn的固有模式，只用attention，可谓大道至简。

RNN相关算法只能从左向右依次计算或者从右向左依次计算，这种机制带来了两个问题：

- 时间片 t 的计算依赖 t-1 时刻的计算结果，这样限制了模型的并行能力；
- 顺序计算的过程中信息会丢失，尽管LSTM等门机制的结构一定程度上缓解了长期依赖的问题，但是对于特别长期的依赖现象,LSTM依旧无能为力。

## 前言

论文中设置，编码器由6个编码block组成，同样解码器是6个解码block组成。

![avatar](.\res\transformer\6ead67c51b77e.jpg)

![avatar](.\res\transformer\494a9eaf655e728c07e.jpg)

- Self-Attention：当前翻译和已经翻译的前文之间的关系；
- Encoder-Decnoder Attention：当前翻译和编码的特征向量之间的关系。

## 1.2 输入编码

首先通过Word2Vec等词嵌入方法将输入语料转化成特征向量，论文中使用的词嵌入的维度为 512

## 1.3 Self-Attention

Self-Attention是Transformer最核心的内容

在self-attention中，每个单词有3个不同的向量，它们分别是Query向量（ Q ），Key向量（ K  ）和Value向量（ V ），长度均是64。它们是通过3个不同的权值矩阵由嵌入向量 X 乘以三个不同的权值矩阵 W^Q ， W^K ， W^V 得到，其中三个矩阵的尺寸也是相同的。均是 512 * 64 。

我们先看一下Attention的计算方法，整个过程可以分成7步：

1. 如上文，将输入单词转化成嵌入向量；
2. 根据嵌入向量得到 q ， k ， v 三个向量；
3. 为每个向量计算一个score： \text{score} = q \cdot k ；
4. 为了梯度的稳定，Transformer使用了score归一化，即除以 \sqrt{d_k} ；
5. 对score施以softmax激活函数；
6. softmax点乘Value值 v ，得到加权的每个输入向量的评分 v ；
7. 相加之后得到最终的输出结果 z ： z=\sum v 。

...........

# 2. 位置编码

截止目前为止，我们介绍的Transformer模型并没有捕捉顺序序列的能力，也就是说**无论句子的结构怎么打乱，Transformer都会得到类似的结果**。换句话说，Transformer只是一个功能更强大的词袋模型而已。

为了解决这个问题，论文中在编码词向量时引入了**位置编码（Position Embedding）**的特征。具体地说，位置编码会在词向量中加入了单词的位置信息，这样Transformer就能区分不同位置的单词了。