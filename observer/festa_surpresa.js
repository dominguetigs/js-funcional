const readline = require('readline');

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
      rl.close();
    });
  });
}

// Observer
function namorada() {
  console.log('N: Apagar as luzes');
  console.log('N: Pedir silêncio');
  console.log('N: Surpresa!!!!!');
}

// Observer
function sindico(evento) {
  console.log('S: Monitorando o barulho!');
  console.log(`S: evento -> ${evento.response}`);
  console.log(`S: evento -> ${evento.data}`);
}

// Subject
async function porteiro(interessados) {
  while (true) {
    const response = await obterResposta('O namorado chegou? (s/N/q) ');

    if (response === 'q') {
      break;
    }

    if (response.toLowerCase() === 's') {
      // Notifica os observadores
      (interessados || []).forEach((observer) => {
        observer({ response, data: Date.now() });
      });
    }
  }
}

/**
 * Chamada da função: Registra os dois observadores!
 * Os observadores são: namorada e sindico
 * O subject é o porteiro!
 */
porteiro([namorada, sindico]);

// obterResposta('Esse é um teste? ').then(console.log);
