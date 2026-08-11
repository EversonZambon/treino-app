// MOLDE — copie este arquivo, renomeie para o nome do aluno (ex: kamila.js)
// e ajuste os dados abaixo. Depois, adicione uma linha <script> no
// index.html apontando pro novo arquivo (veja o comentário lá).
//
// A CHAVE usada em window.ALUNOS.<chave> deve ser igual ao valor do
// parâmetro ?aluno= na URL, sempre em minúsculas e sem espaços/acentos.
//
// Se não for usar este molde agora, pode deixar como está — ele só é
// carregado se algum <script> apontar pra ele no index.html.

window.ALUNOS = window.ALUNOS || {};

window.ALUNOS.nomedoaluno = {
  id: 99,
  nome: "Nome do Aluno",
  treinos: [
    {
      nome: "Treino A",
      exercicios: [
        {
          id: 1,                 // id do exercicios.js
          info: null,             // dica opcional pra esse exercício (ou null)
          series: [
            { info: "Primeira série aquecimento", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        }
      ]
    }
  ]
};
