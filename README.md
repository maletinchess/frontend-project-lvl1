[![Main](https://github.com/maletinchess/frontend-project-lvl1/workflows/Main/badge.svg)](https://github.com/maletinchess/frontend-project-lvl1/actions)

<a href="https://codeclimate.com/github/maletinchess/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/d0d3296e856145f35f74/maintainability" /></a>

First project frontend java script from hexlet.

Brain-games - is a series of games, where user solves simple math-tasks.
The games are: Is even, Calculation, Get max divisor, Is Prime, Progression.



ascinema for install:

<a href="https://asciinema.org/a/340486?speed=4&autoplay=1" target="_blank"><img src="https://asciinema.org/a/340486.svg" /></a>

asciinema for brain-even:

[![asciicast](https://asciinema.org/a/O0PrHPLopUkLUiSmwcQIHyioq.svg)](https://asciinema.org/a/O0PrHPLopUkLUiSmwcQIHyioq)

asciinema for brain-calc:

<a href="https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH?speed=3" target="_blank"><img src="https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH.svg" /></a>

https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH

asciinema for brain-gcd:

<a href="https://asciinema.org/a/bkFn4Wo8qPJBO19ACIEZJxq6A?speed=3" target="_blank"><img src="https://asciinema.org/a/bkFn4Wo8qPJBO19ACIEZJxq6A.svg" /></a>

asciinema for brain-progression:

<a href="https://asciinema.org/a/eYqHyG8qTtSrKQTyYUPKVFYhE?speed=3" target="_blank"><img src="https://asciinema.org/a/eYqHyG8qTtSrKQTyYUPKVFYhE.svg" /></a>

asciinema for brain-prime:

<a href="https://asciinema.org/a/CZbxXatGDY94F6ITgz20L17sZ?speed=3" target="_blank"><img src="https://asciinema.org/a/CZbxXatGDY94F6ITgz20L17sZ.svg" /></a>

все игры построены на следующей схеме: сначала специальная функция генерирует массив (как правило, из двух элементов). Первый элемент - это задание (число, выражение или прогрессия), второй - правильный ответ. Затем эти значения, сохраненные в константы с помощью деструктуризации, используются в "игровых" функциях - в выводе константы, в сообщениях пользователю.

Функции-инструменты, с помощью которых генерируются как игровые функции, так и "генераторы заданий", находятся в файле toolbox.js. Это функции приветствия, функции - описания заданий, сообщения о победе и ошибке.
