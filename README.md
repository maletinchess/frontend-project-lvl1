[![Main](https://github.com/maletinchess/frontend-project-lvl1/workflows/Main/badge.svg)](https://github.com/maletinchess/frontend-project-lvl1/actions)

<a href="https://codeclimate.com/github/maletinchess/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/d0d3296e856145f35f74/maintainability" /></a>

First project frontend java script from hexlet.

Brain-games - is a series of games, where user solves simple math-tasks.
The games are: Is even, Calculation, Get max divisor, Is Prime, Progression.



ascinema for install:

<a href="https://asciinema.org/a/340486?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/340486.svg" /></a>

asciinema for brain-even:

<a href="https://asciinema.org/a/340334?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/340334.svg" /></a>

asciinema for brain-calc:

<a href="https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH.svg" /></a>

https://asciinema.org/a/blNjeGiHkuxCA58Rl9nUyjZwH

asciinema for brain-gcd:

<a href="https://asciinema.org/a/bkFn4Wo8qPJBO19ACIEZJxq6A?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/bkFn4Wo8qPJBO19ACIEZJxq6A.svg" /></a>

asciinema for brain-progression:

<a href="https://asciinema.org/a/eYqHyG8qTtSrKQTyYUPKVFYhE?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/eYqHyG8qTtSrKQTyYUPKVFYhE.svg" /></a>

asciinema for brain-prime:

<a href="https://asciinema.org/a/CZbxXatGDY94F6ITgz20L17sZ?speed=3&autoplay=1" target="_blank"><img src="https://asciinema.org/a/CZbxXatGDY94F6ITgz20L17sZ.svg" /></a>

Все игры построены на следующей схеме: сначала специальная функция (getGameData) генерирует массив из двух элементов "question", "answer". Затем эти данные передаются в функцию-движок (runPlay), которая лежит в файле index.js, но вызывается в каждом игровом модуле с помощью функции "play<game-name>".
