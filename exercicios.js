// Lista de exercícios disponíveis, agrupados por grupo muscular.
// Cada exercício usa o ícone representativo do seu grupo (imagens/<grupo>.svg).
// IDs são sequenciais e únicos — se for referenciar um exercício em algum
// treino (alunos.js), use o "id" dele aqui.

const caminhoIcones = "./icones/";
const caminhoGIFS = "./gifs/";

const EXERCICIOS = [

  // Quadríceps
  { id: 1, nome: "Leg press 45º", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}leg-press.gif` },
  { id: 2, nome: "Agachamento Smith", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}agachamento-smith.gif` },
  { id: 3, nome: "Agachamento sumô", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}agachamento-sumo.gif` },
  { id: 4, nome: "Agachamento livre com barra", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}agachamento-livre.gif` },
  { id: 5, nome: "Agachamento hack", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}agachamento-hack.gif` },
  { id: 6, nome: "Cadeira extensora", icone: `${caminhoIcones}quadriceps.svg`, gif: `${caminhoGIFS}cadeira-extensora.gif` },
  { id: 7, nome: "Cadeira adutora", icone: `${caminhoIcones}adutores.svg`, gif: `${caminhoGIFS}cadeira-adutora.gif` },

  // Posterior de perna
  { id: 20, nome: "Cadeira flexora", icone: `${caminhoIcones}perna-posterior.svg`, gif: `${caminhoGIFS}cadeira-flexora.gif` },
  { id: 21, nome: "Mesa flexora", icone: `${caminhoIcones}perna-posterior.svg`, gif: `${caminhoGIFS}mesa-flexora.gif` },
  { id: 22, nome: "Stiff com barra ou halteres", icone: `${caminhoIcones}perna-posterior.svg`, gif: `${caminhoGIFS}stiff.gif` },

  // Glúteos
  { id: 30, nome: "Cadeira abdutora", icone: `${caminhoIcones}gluteos.svg`, gif: `${caminhoGIFS}cadeira-abdutora.gif` },
  { id: 31, nome: "Elevação pélvica", icone: `${caminhoIcones}gluteos.svg`, gif: `${caminhoGIFS}elevacao-pelvica.gif` },
  { id: 32, nome: "Agachamento Búlgaro", icone: `${caminhoIcones}gluteos.svg`, gif: `${caminhoGIFS}agachamento-bulgaro.gif` },

  // Panturrilha
  { id: 40, nome: "Panturrilha vertical maquina", icone: `${caminhoIcones}panturrilha.svg`, gif: `${caminhoGIFS}panturrilha-vertical.gif` },
  { id: 41, nome: "Panturrilha sentada", icone: `${caminhoIcones}panturrilha.svg`, gif: `${caminhoGIFS}panturrilha-sentado.gif` },

  // Costas
  { id: 50, nome: "Puxada alta na polia (pegada aberta)", icone: `${caminhoIcones}costas-alta.svg`, gif: `${caminhoGIFS}puxada-alta-polia-pegada-aberta.gif` },
  { id: 51, nome: "Puxada alta na polia (puxador triângulo)", icone: `${caminhoIcones}costas-alta.svg`, gif: `${caminhoGIFS}puxada-alta-polia-pegada-fechada.gif` },
  { id: 52, nome: "Remada baixa na polia (puxador triângulo)", icone: `${caminhoIcones}costas-baixa.svg`, gif: `${caminhoGIFS}remada-baixa-polia-pegada-fechada.gif` },
  { id: 53, nome: "Remada baixa na máquina", icone: `${caminhoIcones}costas-baixa.svg`, gif: `${caminhoGIFS}remada-baixa-maquina.gif` },
  { id: 54, nome: "Remada baixa na barra", icone: `${caminhoIcones}costas-baixa.svg`, gif: `${caminhoGIFS}remada-baixa-barra.gif` },
  { id: 55, nome: "Puxada alta na máquina", icone: `${caminhoIcones}costas-alta.svg`, gif: `${caminhoGIFS}puxada-alta-maquina.gif` },
  { id: 56, nome: "Pulldown na polia alta (corda ou barra)", icone: `${caminhoIcones}costas-alta.svg`, gif: `${caminhoGIFS}pulldown.gif` },

  // Trapézio
  { id: 57, nome: "Encolhimento com halteres", icone: `${caminhoIcones}trapezio.svg`, gif: `${caminhoGIFS}encolhimento-com-halteres.gif` },

  // Peito
  { id: 70, nome: "Supino sentado na máquina", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-sentado-maquina.gif` },
  { id: 71, nome: "Supino inclinado com barra", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-inclinado-com-barra.gif` },
  { id: 72, nome: "Supino inclinado na máquina", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-inclinado-maquina.gif` },
  { id: 73, nome: "Supino inclinado com halteres", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-inclinado-com-halteres.gif` },
  { id: 74, nome: "Supino reto com barra", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-reto-com-barra.gif` },
  { id: 75, nome: "Supino reto na máquina", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-reto-maquina.gif` },
  { id: 76, nome: "Supino reto com halteres", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}supino-reto-com-halteres.gif` },
  { id: 77, nome: "Voador (Peck Deck)", icone: `${caminhoIcones}peito.svg`, gif: `${caminhoGIFS}voador.gif` },

  // Ombro
  { id: 90, nome: "Desenvolvimento com halteres", icone: `${caminhoIcones}ombro-anterior.svg`, gif: `${caminhoGIFS}ombro-desenvolvimento-com-halteres.gif` },
  { id: 91, nome: "Desenvolvimento na máquina", icone: `${caminhoIcones}ombro-anterior.svg`, gif: `${caminhoGIFS}ombro-desenvolvimento-maquina.gif` },
  { id: 92, nome: "Elevação frontal com halteres", icone: `${caminhoIcones}ombro-anterior.svg`, gif: `${caminhoGIFS}ombro-elevacao-frontal-com-halteres.gif` },
  { id: 93, nome: "Elevação frontal na polia baixa (corda ou barra)", icone: `${caminhoIcones}ombro-anterior.svg`, gif: `${caminhoGIFS}ombro-elevacao-frontal-na-polia-baixa.gif` },
  { id: 95, nome: "Elevação lateral na polia baixa (unilateral)", icone: `${caminhoIcones}ombro-lateral.svg`, gif: `${caminhoGIFS}ombro-elevacao-lateral-na-polia-baixa.gif` },
  { id: 96, nome: "Ombro lateral na máquina", icone: `${caminhoIcones}ombro-lateral.svg`, gif: `${caminhoGIFS}ombro-elevacao-lateral-na-maquina.gif` },
  { id: 97, nome: "Elevação lateral com halteres", icone: `${caminhoIcones}ombro-lateral.svg`, gif: `${caminhoGIFS}ombro-elevacao-lateral-com-halteres.gif` },
  { id: 98, nome: "Voador invertido", icone: `${caminhoIcones}ombro-posterior.svg`, gif: `${caminhoGIFS}ombro-posterior-voador-invertido.gif` },
  { id: 99, nome: "Posterior de ombro na polia (unilateral)", icone: `${caminhoIcones}ombro-posterior.svg`, gif: `${caminhoGIFS}ombro-posterior-na-polia.gif` },

  // Tríceps
  { id: 110, nome: "Tríceps francês no cabo (corda)", icone: `${caminhoIcones}triceps.svg`, gif: `${caminhoGIFS}triceps-frances-na-polia.gif` },
  { id: 111, nome: "Tríceps francês com halter", icone: `${caminhoIcones}triceps.svg`, gif: `${caminhoGIFS}triceps-frances-com-halter.gif` },
  { id: 112, nome: "Tríceps na polia alta (corda)", icone: `${caminhoIcones}triceps.svg`, gif: `${caminhoGIFS}triceps-na-polia-alta-com-corda.gif` },
  { id: 113, nome: "Tríceps na polia alta (barra reta ou barra V)", icone: `${caminhoIcones}triceps.svg`, gif: `${caminhoGIFS}triceps-na-polia-alta-com-barra.gif` },
  { id: 114, nome: "Tríceps na polia inverso", icone: `${caminhoIcones}triceps.svg`, gif: `${caminhoGIFS}triceps-inverso-na-polia.gif` },

  // Bíceps e antebraço
  { id: 130, nome: "Rosca Scott maquina", icone: `${caminhoIcones}biceps.svg`, gif: `${caminhoGIFS}biceps-rosca-scott-maquina.gif` },
  { id: 131, nome: "Rosca direta no cabo", icone: `${caminhoIcones}biceps.svg`, gif: `${caminhoGIFS}biceps-rosca-direta-no-cabo.gif` },
  { id: 132, nome: "Rosca direta no cabo (pegada pronada)", icone: `${caminhoIcones}antebraco.svg`, gif: `${caminhoGIFS}biceps-rosca-direta-no-cabo-pegada-pronada.gif` },
  { id: 133, nome: "Rosca direta com halteres", icone: `${caminhoIcones}biceps.svg`, gif: `${caminhoGIFS}biceps-rosca-direta-com-halteres.gif` },
  { id: 134, nome: "Rosca direta com barra", icone: `${caminhoIcones}biceps.svg`, gif: `${caminhoGIFS}biceps-rosca-direta-com-barra.gif` },
  { id: 135, nome: "Rosca martelo com halteres", icone: `${caminhoIcones}antebraco.svg`, gif: `${caminhoGIFS}biceps-rosca-martelo-com-halteres.gif` },
  { id: 136, nome: "Rosca martelo na polia (corda)", icone: `${caminhoIcones}antebraco.svg`, gif: `${caminhoGIFS}biceps-rosca-martelo-no-cabo.gif` },

  // Abdominal
  { id: 150, nome: "Abdominal no solo", icone: `${caminhoIcones}abdominal.svg`, gif: `${caminhoGIFS}abdominal-no-solo.gif` },
  { id: 151, nome: "Abdominal na máquina", icone: `${caminhoIcones}abdominal.svg`, gif: `${caminhoGIFS}abdominal-na-maquina.gif` },
  { id: 152, nome: "Abdominal prancha", icone: `${caminhoIcones}abdominal.svg`, gif: `${caminhoGIFS}abdominal-prancha.gif` },
  { id: 153, nome: "Abdominal no banco", icone: `${caminhoIcones}abdominal.svg`, gif: `${caminhoGIFS}abdominal-no-banco.gif` },

  // Lombar
  { id: 160, nome: "Extensão lombar no banco", icone: `${caminhoIcones}lombar.svg`, gif: `${caminhoGIFS}extensao-lombar-no-banco.gif` }

];

// ---------------------------------------------------------
// EX — acesso aos exercícios por nome, em vez de por id "solto"
// ---------------------------------------------------------
//
// USO: nos arquivos de alunos, em vez de escrever "id: 6" (que obriga a
// abrir esse arquivo e caçar o número), escreva "id: EX.CADEIRA_EXTENSORA".
//
// As chaves aqui são texto literal (não geradas em runtime) de propósito:
// assim, QUALQUER editor de texto consegue autocompletar — inclusive o
// Sublime Text, que sugere palavras já digitadas em outras abas abertas,
// sem precisar de nenhum plugin. Se fosse gerado dinamicamente em
// JavaScript (ex: dentro de um loop), a chave nunca apareceria como texto
// em lugar nenhum, e nenhum editor conseguiria sugerir.
//
// IMPORTANTE: ao adicionar um exercício novo em EXERCICIOS, adicione
// também a linha correspondente aqui (mesmo id, chave em MAIUSCULO_COM_
// UNDERSCORE). Se esquecer, o app avisa sozinho no Console do navegador
// (validarIdsDosAlunos, em scripts.js) caso algum aluno use um id que não
// bate com nada — mas o autocomplete só funciona com exercicios.js e a
// aba do aluno abertos ao mesmo tempo no editor.

const EX = {
  // Quadríceps
  LEG_PRESS_45: 1,
  AGACHAMENTO_SMITH: 2,
  AGACHAMENTO_SUMO: 3,
  AGACHAMENTO_LIVRE_COM_BARRA: 4,
  AGACHAMENTO_HACK: 5,
  CADEIRA_EXTENSORA: 6,
  CADEIRA_ADUTORA: 7,
  // Posterior de perna
  CADEIRA_FLEXORA: 20,
  MESA_FLEXORA: 21,
  STIFF_COM_BARRA_OU_HALTERES: 22,
  // Glúteos
  CADEIRA_ABDUTORA: 30,
  ELEVACAO_PELVICA: 31,
  AGACHAMENTO_BULGARO: 32,
  // Panturrilha
  PANTURRILHA_VERTICAL_MAQUINA: 40,
  PANTURRILHA_SENTADA: 41,
  // Costas
  PUXADA_ALTA_NA_POLIA_PEGADA_ABERTA: 50,
  PUXADA_ALTA_NA_POLIA_PUXADOR_TRIANGULO: 51,
  REMADA_BAIXA_NA_POLIA_PUXADOR_TRIANGULO: 52,
  REMADA_BAIXA_NA_MAQUINA: 53,
  REMADA_BAIXA_NA_BARRA: 54,
  PUXADA_ALTA_NA_MAQUINA: 55,
  PULLDOWN_NA_POLIA_ALTA_CORDA_OU_BARRA: 56,
  // Trapézio
  ENCOLHIMENTO_COM_HALTERES: 57,
  // Peito
  SUPINO_SENTADO_NA_MAQUINA: 70,
  SUPINO_INCLINADO_COM_BARRA: 71,
  SUPINO_INCLINADO_NA_MAQUINA: 72,
  SUPINO_INCLINADO_COM_HALTERES: 73,
  SUPINO_RETO_COM_BARRA: 74,
  SUPINO_RETO_NA_MAQUINA: 75,
  SUPINO_RETO_COM_HALTERES: 76,
  VOADOR_PECK_DECK: 77,
  // Ombro
  DESENVOLVIMENTO_COM_HALTERES: 90,
  DESENVOLVIMENTO_NA_MAQUINA: 91,
  ELEVACAO_FRONTAL_COM_HALTERES: 92,
  ELEVACAO_FRONTAL_NA_POLIA_BAIXA_CORDA_OU_BARRA: 93,
  ELEVACAO_LATERAL_NA_POLIA_BAIXA_UNILATERAL: 95,
  OMBRO_LATERAL_NA_MAQUINA: 96,
  ELEVACAO_LATERAL_COM_HALTERES: 97,
  VOADOR_INVERTIDO: 98,
  POSTERIOR_DE_OMBRO_NA_POLIA_UNILATERAL: 99,
  // Tríceps
  TRICEPS_FRANCES_NO_CABO_CORDA: 110,
  TRICEPS_FRANCES_COM_HALTER: 111,
  TRICEPS_NA_POLIA_ALTA_CORDA: 112,
  TRICEPS_NA_POLIA_ALTA_BARRA_RETA_OU_BARRA_V: 113,
  TRICEPS_NA_POLIA_INVERSO: 114,
  // Bíceps e antebraço
  ROSCA_SCOTT_MAQUINA: 130,
  ROSCA_DIRETA_NO_CABO: 131,
  ROSCA_DIRETA_NO_CABO_PEGADA_PRONADA: 132,
  ROSCA_DIRETA_COM_HALTERES: 133,
  ROSCA_DIRETA_COM_BARRA: 134,
  ROSCA_MARTELO_COM_HALTERES: 135,
  ROSCA_MARTELO_NA_POLIA_CORDA: 136,
  // Abdominal
  ABDOMINAL_NO_SOLO: 150,
  ABDOMINAL_NA_MAQUINA: 151,
  ABDOMINAL_PRANCHA: 152,
  ABDOMINAL_NO_BANCO: 153,
  // Lombar
  EXTENSAO_LOMBAR_NO_BANCO: 160,
};
