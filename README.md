![](https://github.com/maletinchess/frontend-project-lvl1/workflows/CI/badge.svg)

<a href="https://codeclimate.com/github/maletinchess/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/d0d3296e856145f35f74/maintainability" /></a>

First project frontend java script from hexlet.

Brain-games - is a series of games, where user solves simple math-tasks.
The games are: Is even, Calculation, Get max divisor, Is Prime, Progression.



ascinema for install:

[![asciicast](https://asciinema.org/a/340486.svg)](https://asciinema.org/a/340486)

asciinema for brain-even:

https://asciinema.org/a/O0PrHPLopUkLUiSmwcQIHyioq

asciinema for brain-calc:

https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH

asciinema for brain-gcd:

https://asciinema.org/a/bkFn4Wo8qPJBO19ACIEZJxq6A

asciinema for brain-progression:

https://asciinema.org/a/eYqHyG8qTtSrKQTyYUPKVFYhE

asciinema for brain-prime:

https://asciinema.org/a/A2svOiGRraU4ipLPI7tXd3hlP

все игры построены на следующей схеме: сначала специальная функция генерирует массив (как правило, из двух элементов). Первый элемент - это задание (число, выражение или прогрессия), второй - правильный ответ. Затем эти значения, сохраненные в константы с помощью деструктуризации, используются в "игровых" функциях - в выводе константы, в сообщениях пользователю.

Функции-инструменты, с помощью которых генерируются как игровые функции, так и "генераторы заданий", находятся в файле toolbox.js. Это функции приветствия, функции - описания заданий, сообщения о победе и ошибке.
