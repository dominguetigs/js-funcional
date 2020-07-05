setTimeout(function () {
  console.log('Executando callback...');

  setTimeout(function () {
    console.log('Executando callback...');

    setTimeout(function () {
      console.log('Executando callback...');
    }, 2000);
  }, 2000);
}, 2000);

function waitFor(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...');
      resolve();
    }, time);
  });
}

waitFor().then(waitFor).then(waitFor);
