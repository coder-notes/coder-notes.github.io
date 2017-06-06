---
title: Markdown. Основной синтаксис
layout: post
author: jora
categories: jekyll
subj_color: blue
tag: 
 - markdown
 - jekyll
comments: true
---
![markdown logo]({{ site.url }}/assets/img/markdown.png)
Markdown (маркдаун) — простой язык разметки для публикации Web. Он создан для удобного написания и редактирования размеченного текста. 
Markdown  используют для ведения заметок, блогов, в мессенджерах, для описания проектов, для составления презентаций или как основа для целого сайта.   
Данный язык разметки использует генератор статических сайтов Jekyll.

## Параграфы 
~~~ markdown
<пустая строка> 
Текст параграфа. Может быть
разбит на несколько строк.
<пустая строка>    
~~~

## Перевод строки
Для перевода строки без начала нового параграфа в конце  необходимо поставить два или более пробела

~~~ markdown
Текст параграфа.<пробел><пробел>
Этот текст будет с новой строки.
~~~

## Заголовки
В Markdown имеется 6 уровней заголовков как в HTML - с <h1> по <h6>. Для выделения заголовка используется решетка, 
колчичество решеток соответствует уровню заголовка.

~~~ markdown
 # Заголовок первого уровняую
 ## Заголовок второго уровня
 ### Заголовок третьего уровня
 #### Заголовок четвёртого уровня
 ##### Заголовок пятого уровня
 ###### Заголовок шестого уровня    
~~~
## Форматирование текста
_Курсив_
~~~ markdown
_курсив_
~~~

**Жирный**
~~~ markdown
**Жирный**
~~~
~~Зачёркнутый~~
~~~ markdown
~~Зачёркнутый~~
~~~

`Моноширинный`
 ~~~ markdown
 `Моноширинный`
 ~~~
 
>Цитата

~~~ markdown
>Цитата
~~~

>Много  
>строчная  
>цитата  

~~~ markdown
>Много
>строчная
>цитата
~~~

## Списки
Нумерованный список

1. html
2. css
3. jQuery

~~~ markdown
1. html
2. css
3. jQuery
~~~

Ненумерованный список

* html
* css
* jQuery

~~~ markdown
* html
* css
* jQuery
~~~

## Горизонтальная линия(разделитель)

~~~ markdown
-------------------
~~~
-------------------

## Код
Отступ в Tab или четыре пробела генерирует блок кода:

    .mod_html{
        &:before{
            content: 'HTML5';
            background-color: $accent_color_red;
        }
    }
    

## Таблицы
Таблицы можно записать вот таким образом:

~~~ markdown
| Priority apples | Second priority | Third priority | Fourth priority |
|-------|-------|-------|
| ambrosia | gala | red delicious | red delicious |
| pink lady | jazz | macintosh | red delicious |
| honeycrisp | granny smith | fuji | red delicious |
| honeycrisp | granny smith | fuji | red delicious |
~~~    
    
получаем таблицу:

| Priority apples | Second priority | Third priority | Fourth priority |
|-------|-------|-------|
| ambrosia | gala | red delicious | red delicious |
| pink lady | jazz | macintosh | red delicious |
| honeycrisp | granny smith | fuji | red delicious |
| honeycrisp | granny smith | fuji | red delicious |

## Ссылки
Формат записи ссылки: [Описание] (ссылка)
* Инлайн ссылка, например  [homepadge](https://coder-notes.github.io/)
~~~ markdown
[homepadge] (https://coder-notes.github.io/)
~~~

* Cсылка с атрибутом  [homepadge](https://coder-notes.github.io/ "title")
~~~ markdown
[homepadge] (https://coder-notes.github.io/ "title")
~~~

## Изображения
Формат записи изображения: ![описание] (ссылка на изображение)
~~~ markdown
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
~~~
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
<br>
 [Более полные данные по синтаксису Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)