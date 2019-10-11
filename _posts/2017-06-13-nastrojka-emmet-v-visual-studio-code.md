---
title: Настройка корректной работы EMMET в Visual Studio Code (VSC)
layout: post
author: jora
categories: instrument
subj_color: grey
tag: 
 - vsc
 - emmet
comments: true
---
![Настройка корректной работы EMMET в Visual Studio Code]({{ site.url }}/assets/img/vsc_emmet.jpg )
[Visual Studio Code](https://code.visualstudio.com/) - хороший кроссплатформенный, редактор кода. Несмотря на то, что это продукт компании Microsoft, Visual Studio Code
является бесплатным Open source проектом. VSC-находится в активном развитии, обновления выходят каждый месяц, и это радует:).
Данный редактор относительно легковестный, имеет возможность подключения различных плагинов, встроенный EMMET и инструмент для работы
с git. Вообщем данный редактор меня устраивает всем, однако работа EMMET в нем слегка кривовата, выводит не те значения что положено (заметил при работе с CSS).
Вот один из способов исправить данную проблему.

Входим в настройку горячих клавиш. Menu - File - Preferences - Keyboard Shortcuts или нажимаем последовательно сочитание клавиш \[ctrl+k ctrl+s\].
В данном разделе находим файл keybinding.json открываем и редактируем его, добавляем такой код:
 
~~~ json
    {
    "key": "tab",
    "command": "tab",
    "when": "editorTextFocus && !editorTabMovesFocus"
    },
    {
    "key": "tab",
    "command": "editor.emmet.action.expandAbbreviation",
    "when": "editorTextFocus && !editorHasSelection && !editorHasMultipleSelections && !editorTabMovesFocus"
    } 
~~~
 
 Данный способ нашел [здесь](https://toster.ru/q/303307)