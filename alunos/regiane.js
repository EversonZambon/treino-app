// Ficha de treino da aluna Regiane.
// Este arquivo se registra sozinho dentro do objeto global window.ALUNOS.
// A CHAVE usada ('regiane') deve ser igual ao valor do parâmetro ?aluno= na
// URL, sempre em minúsculas — mesmo que o campo "nome" dentro do objeto
// esteja com a primeira letra maiúscula (é só o texto exibido na tela).

window.ALUNOS = window.ALUNOS || {};

window.ALUNOS.regiane = {
  id: 1,
  nome: "Regiane",
  treinos: [
    {
      nome: "Treino A",
      exercicios: [
        {
          id: EX.CADEIRA_EXTENSORA,
          info: "Pode começar por Leg Press se preferir",
          series: [
            { info: "Primeira série aquecimento", feito: false },
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.LEG_PRESS_45,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.CADEIRA_FLEXORA,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.CADEIRA_ABDUTORA,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.PUXADA_ALTA_NA_POLIA_PEGADA_ABERTA,
          info: null,
          series: [
            { info: "Primeira série aquecimento", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.TRICEPS_FRANCES_COM_HALTER,
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
          id: EX.AGACHAMENTO_HACK,
          info: "Pode substituir por agachamento sumô",
          series: [
            { info: "Primeira série aquecimento", feito: false },
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.AGACHAMENTO_BULGARO,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.STIFF_COM_BARRA_OU_HALTERES,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.DESENVOLVIMENTO_COM_HALTERES,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.ELEVACAO_LATERAL_COM_HALTERES,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.ROSCA_DIRETA_NO_CABO_PEGADA_PRONADA,
          info: "Pode fazer com halter se preferir",
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.PANTURRILHA_SENTADA,
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
          id: EX.ELEVACAO_PELVICA,
          info: null,
          series: [
            { info: "Primeira série aquecimento", feito: false },
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.AGACHAMENTO_SMITH,
          info: "Pode substituir pelo agachamento sumô",
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.MESA_FLEXORA,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.REMADA_BAIXA_NA_POLIA_PUXADOR_TRIANGULO,
          info: "Pode substituir pela remada na máquina",
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.VOADOR_PECK_DECK,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.ROSCA_DIRETA_COM_HALTERES,
          info: null,
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.TRICEPS_NA_POLIA_ALTA_CORDA,
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
          id: EX.EXTENSAO_LOMBAR_NO_BANCO,
          info: "Pode substituir fazendo no solo",
          series: [
            { info: "", feito: false },
            { info: "", feito: false },
            { info: "", feito: false }
          ]
        },
        {
          id: EX.ABDOMINAL_NO_SOLO,
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
};
