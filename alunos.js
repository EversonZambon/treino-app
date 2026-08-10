// Todos os alunos ficam aqui dentro, num único objeto.
// Para adicionar um novo aluno, copie o bloco de exemplo abaixo e ajuste os
// dados. A CHAVE usada (ex: 'maria') deve ser igual ao valor do parâmetro
// ?aluno= na URL, sempre em minúsculas.
//
// Não é preciso mexer no index.html nem em nenhum outro arquivo: bastando
// declarar aqui, o aluno já fica disponível no app.

window.ALUNOS = {

  regiane: {
    id: 1,
    nome: "Regiane",
    treinos: [
      {
        nome: "Treino A",
        exercicios: [
          {
            id: 6,
            info: "Pode começar por Leg Press se preferir",
            series: [
              { info: "Primeira série aquecimento", feito: false },
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 1,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 20,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 30,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 50,
            info: null,
            series: [
              { info: "Primeira série aquecimento", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 111,
            info: "Pode ser francês na corda (polia média)",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          }
        ]
      },
      {
        nome: "Treino B",
        exercicios: [
          {
            id: 5,
            info: "Pode substituir por agachamento sumô",
            series: [
              { info: "Primeira série aquecimento", feito: false },
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 32,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 22,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 90,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 97,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 132,
            info: "Pode fazer com halter se preferir",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 41,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          }
        ]
      },
      {
        nome: "Treino C",
        exercicios: [
          {
            id: 31,
            info: null,
            series: [
              { info: "Primeira série aquecimento", feito: false },
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 2,
            info: "Pode substituir pelo agachamento sumô",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 21,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 52,
            info: "Pode substituir pela remada na máquina",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 77,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 133,
            info: null,
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 112,
            info: "Pode substituir pela barra reta ou barra V",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          }
        ]
      },
      {
        nome: "Exercicios complementares",
        exercicios: [
          {
            id: 160,
            info: "Pode substituir fazendo no solo",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          },
          {
            id: 150,
            info: "Pode substituir ou intercalar por outro (prancha ou no banco)",
            series: [
              { info: "", feito: false },
              { info: "", feito: false },
              { info: "", feito: false }
            ]
          }
        ]
      }
    ]
  }

  // ,
  // outronome: {
  //   id: 2,
  //   nome: "outronome",
  //   treinos: [ ... ]
  // }

};
