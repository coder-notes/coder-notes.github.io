---
title: Генерация паролей в Linux
layout: post
author: jora
categories: linux
subj_color: blue
tag: 
 - linux
 - console
 - pass
comments: true
---
![Генерация паролей в Linux]({{ site.url }}/assets/img/pass.jpg )
Встал вопрос о генерации паролей в Linux.  
Оказалось вcе просто, нашел несколько вариантов генрации паролей в консоле Linux.  

## Генерация паролей с помощью *apg*

*apg*(Automated Password Generator) - [Консольная утилита для генерации случайных паролей](https://linux.die.net/man/1/apg)

* Устанавливаем утилиту:

        sudo apt-get install apg

* Запускаем утилиту, например, используя алгоритм -0 генерируем 10 паролей длиной 10 символов:

        apg -a 0 -n 10 -m 10 -x 10 -M SNCL

## Генерация паролей с помощью *gpw*

*gpw* - [Консольная утилита для генерации паролей](http://manpages.ubuntu.com/manpages/xenial/man1/gpw.1.html)

passwd(1),pwgen(1) - программа принимает два необязательных числа в качестве аргументов командной строки.  Первое значение - это номер пароля для генерации, второй
Это длина требуемых паролей, до 99. По умолчанию 10 и 8 соответственно.

    sudo apt-get install pwgen  
    gpw 3 8  

## Генерация паролей с помощью *pwgen*

*pwgen* - [Консольная утилита для генерации паролей](https://linux.die.net/man/1/pwgen)

> Основной синтаксис pwgen: *\[ключи\] \[длина_пароля\] \[количество_паролей\]*

    sudo apt-get install pwgen
    pwgen 8 3

## Генерация паролей с помощью *OpenSSL*

*OpenSSL* — криптографический пакет с открытым исходным кодом для работы с SSL/TLS. Позволяет создавать ключи RSA, DH, DSA и сертификаты X.509, подписывать их, формировать CSR и CRT. Также имеется возможность шифрования данных и тестирования SSL/TLS соединений.

    sudo apt-get install openssl
    openssl rand -base64 8

## Еще один способ генерации паролей (без установки доп. утилит)

    date | md5sum | base64 | head -c 8 ; echo