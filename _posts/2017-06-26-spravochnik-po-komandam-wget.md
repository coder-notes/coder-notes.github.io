---
title: Справочник по основным командам wget
layout: post
author: jora
categories: linux
subj_color: blue
tag: 
 - linux
 - console
 - wget
comments: true
---
![Справочник по основным командам wget]({{ site.url }}/assets/img/wget_command.jpg )
*wget* - консольная программа для загрузки файлов, сайтов из сети. Поддерживает протоколы HTTP, FTP и HTTPS, а также  может работать  через HTTP прокси-сервер.
Программа включена почти во все дистрибутивы GNU/Linux. wget может выкачивать файлы рекурсивно, следуя по ссылкам автоматически.

## Основные команды wget

| Команда | Описание |
|-------|-------|-------|
| wget http://example.com/tmp.zip | скачивание файла tmp.zip в текущую директорию |
| wget -P /path/to/save http://example.com/tmp.zip  | 	скачивание файла tmp.zip в директорию /path/to/save |
| wget -c http://example.com/tmp.zip | докачивание файла tmp.zip в случаи обрыва |
| wget -O arch.zip http://example.com/tmp.zip | скачивание файла tmp.zip и сохранение под именем arch.zip |
| wget -i files.txt | скачивание файлов из списка в files.txt |
| wget --tries=10 http://example.com/tmp.zip | количество попыток на скачивание |
| wget -Q5m -i http://example.com/ | квота на максимальный размер скачанных файлов, действует только при рекурсивном скачивании (-r) |
| wget --save-cookies cookies.txt --post-data 'username=proft&password=1' http://example.com/auth.php | идентификация на сервере с сохранением кук для последующего доступа |
| wget --user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5" http://example.com/ | указание User Agent |
| echo 'wget http://example.com/tmp.zip' \| at 12:00  | скачать http://example.com/tmp.zip в 12:00 в текущую директорию |
| wget ftp://example.com/dir/*.zip | скачивание всех файлов по шаблону |
| wget http://example.com/dir/file{1..10}.zip  | скачивание всех файлов по шаблону |
| wget -S http://example.com/  | вывод заголовков HTTP серверов и ответов FTP серверов |
| wget --spider -i urls.txt  | проверка ссылок в файле на доступность |
| wget -b http://example.com/tmp.zip  | скачивание файла в фоне, лог пишется в wget.log, wget.log.1 и т.д. export http_proxy=http://proxy.com:3128/; |
| wget http://example.com/tmp.zip  | скачивание файла *tmp.zip* через прокси |
| wget -m -w 2 http://example.com/  | зеркалирование сайта с сохранением абсолютных ссылок и ожиданием 2-х секунд между запросами |
| wget --limit-rate=200k http://example.com/tmp.zip  | ограничение скорости скачивания |
| wget -R bmp http://example.com/  | не скачивать bmp файлы |
| wget -A png,jpg http://example.com/ | скачивать только файлы png и jpg |

Пример, скачать весь сайт целиком (глубина рекурсии — 10):

    wget -r -l 10 -k -o log-file.txt -p http://example.org/

* -r, --recursive          включение рекурсивной загрузки
* -l, --level=ЧИСЛО        глубина рекурсии (inf и 0 - бесконечность)
* -k, --convert-links      делать ссылки локальными в загруженном HTML или CSS
* -o, --output-file=ФАЙЛ   записывать сообщения (логи) в ФАЙЛ
* -p, --page-requisites    загрузить все изображения и проч., необходимые для отображения HTML-страницы
* -m, --mirror             короткий параметр, эквивалентный -N -r -l inf --no-remove-listing.