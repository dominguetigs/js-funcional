const { XMLHttpRequest } = require('xmlhttprequest');

const { ajax } = require('rxjs/ajax');

const { interval } = require('rxjs');
const { map, concatAll } = require('rxjs/operators');

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: 'https://api.github.com/users/cod3rcursos/repos',
})
  .pipe(
    map((response) => JSON.parse(response.xhr.responseText)),
    concatAll(),
    map((repositorio) => repositorio.full_name)
  )
  .subscribe(console.log);

/* interval(1000)
  .pipe(
    map((_) => [1, 2, 3]),
    concatAll()
  )
  .subscribe(console.log); */
