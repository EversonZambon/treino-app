// ---------------------------------------------------------
// Configuração e estado
// ---------------------------------------------------------

const STORAGE_KEY = 'treino_app_dados';
const params = new URLSearchParams(window.location.search);
const alunoParam = (params.get('aluno') || '').trim();

let exercicios = [];
let aluno = null;
let dadosAluno = null;

// cronômetros ativos por treino (não persistem entre reloads)
const timers = {};

// ---------------------------------------------------------
// Elementos
// ---------------------------------------------------------

const elNotFound = document.getElementById('not-found');
const elConteudo = document.getElementById('conteudo');
const elNomeAluno = document.getElementById('nome-aluno');
const elDataHora = document.getElementById('data-hora');
const elListaTreinos = document.getElementById('lista-treinos');
const elAcoesGlobais = document.getElementById('acoes-globais');
const elBtnLimparTudo = document.getElementById('btn-limpar-tudo');

const elModalImagem = document.getElementById('modal-imagem');
const elModalImagemImg = document.getElementById('modal-imagem-img');
const elModalImagemNome = document.getElementById('modal-imagem-nome');
const elFecharModalImagem = document.getElementById('fechar-modal-imagem');

const elModalConfirmar = document.getElementById('modal-confirmar');
const elModalConfirmarTexto = document.getElementById('modal-confirmar-texto');
const elBtnConfirmarOk = document.getElementById('btn-confirmar-ok');
const elBtnConfirmarCancelar = document.getElementById('btn-confirmar-cancelar');

// ---------------------------------------------------------
// Inicialização
// ---------------------------------------------------------

function init() {

  if (!alunoParam) {
    mostrarNaoEncontrado();
    return;
  }

  const chave = alunoParam.toLowerCase();
  const alunoEncontrado = window.ALUNOS && window.ALUNOS[chave];

  if (!alunoEncontrado || !EXERCICIOS) {
    mostrarNaoEncontrado();
    return;
  }

  exercicios = EXERCICIOS;
  aluno = alunoEncontrado;
  dadosAluno = carregarDadosAluno(aluno.nome);

  renderTudo();
}

function mostrarNaoEncontrado() {
  elNotFound.hidden = false;
  elConteudo.hidden = true;
}

// ---------------------------------------------------------
// localStorage
// ---------------------------------------------------------

function carregarDadosGlobais() {
  const bruto = localStorage.getItem(STORAGE_KEY);
  return bruto ? JSON.parse(bruto) : {};
}

function salvarDadosGlobais(dados) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function carregarDadosAluno(nome) {
  const dados = carregarDadosGlobais();
  if (!dados[nome]) {
    dados[nome] = { treinosFeitos: {}, seriesFeitas: {} };
    salvarDadosGlobais(dados);
  }
  return dados[nome];
}

function salvarDadosAluno() {
  const dados = carregarDadosGlobais();
  dados[aluno.nome] = dadosAluno;
  salvarDadosGlobais(dados);
}

// ---------------------------------------------------------
// Utilitários
// ---------------------------------------------------------

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatarDataHora(iso) {
  const d = new Date(iso);
  return d.toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

function formatarTempo(segundosTotais) {
  const m = Math.floor(segundosTotais / 60).toString().padStart(2, '0');
  const s = Math.floor(segundosTotais % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function formatarDuracaoExtenso(segundosTotais) {
  const h = Math.floor(segundosTotais / 3600);
  const m = Math.floor((segundosTotais % 3600) / 60);
  const s = segundosTotais % 60;

  const partes = [];
  if (h > 0) partes.push(`${h}h`);
  if (m > 0) partes.push(`${m}m`);
  if (s > 0 || partes.length === 0) partes.push(`${s}s`);

  return partes.join(' ');
}

function buscarExercicio(id) {
  return exercicios.find(e => e.id === id);
}

// ---------------------------------------------------------
// Modais (Fechar ao clicar fora & Confirmações)
// ---------------------------------------------------------

function confirmar(texto, aoConfirmar) {
  elModalConfirmarTexto.textContent = texto;
  elModalConfirmar.hidden = false;

  const limpar = () => {
    elModalConfirmar.hidden = true;
    elBtnConfirmarOk.removeEventListener('click', onOk);
    elBtnConfirmarCancelar.removeEventListener('click', onCancelar);
  };
  const onOk = () => { limpar(); aoConfirmar(); };
  const onCancelar = () => { limpar(); };

  elBtnConfirmarOk.addEventListener('click', onOk);
  elBtnConfirmarCancelar.addEventListener('click', onCancelar);
}

// Fechar modais ao clicar no overlay (fora do conteúdo)
[elModalImagem, elModalConfirmar].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.hidden = true;
    }
  });
});

elFecharModalImagem.addEventListener('click', () => {
  elModalImagem.hidden = true;
});

function abrirModalMidia(src, nome) {
  elModalImagemImg.src = src;
  elModalImagemImg.alt = nome;
  elModalImagemNome.textContent = nome;
  elModalImagem.hidden = false;
}

// ---------------------------------------------------------
// Renderização
// ---------------------------------------------------------

function renderTudo() {
  elNotFound.hidden = true;
  elConteudo.hidden = false;

  elNomeAluno.textContent = capitalizar(aluno.nome);
  atualizarRelogio();

  elListaTreinos.innerHTML = '';
  aluno.treinos.forEach(treino => {
    elListaTreinos.appendChild(criarCardTreino(treino));
  });

  const algumFeito = Object.keys(dadosAluno.treinosFeitos).length > 0;
  elAcoesGlobais.hidden = !algumFeito;
}

function atualizarRelogio() {
  const agora = new Date();
  elDataHora.textContent = agora.toLocaleString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long',
    hour: '2-digit', minute: '2-digit'
  });
}
setInterval(atualizarRelogio, 30000);

function criarCardTreino(treino) {
  const feito = dadosAluno.treinosFeitos[treino.nome];

  const card = document.createElement('div');
  card.className = 'card-treino' + (feito ? ' feito' : '');
  card.dataset.treino = treino.nome;

  let textoTempo = '';
  if (feito) {
    const duracaoTexto = feito.duracaoSegundos ? formatarDuracaoExtenso(feito.duracaoSegundos) : null;
    textoTempo = `Concluído em ${formatarDataHora(feito.finalizadoEm)}${duracaoTexto ? ` (${duracaoTexto})` : ''}`;
  }

  // cabeçalho clicável (abre/fecha)
  const cabecalho = document.createElement('button');
  cabecalho.className = 'cabecalho-treino';
  cabecalho.innerHTML = `
    <span class="nome-treino">${treino.nome}</span>
    ${feito ? `<span class="info-feito">${textoTempo}</span>` : ''}
    <span class="chevron">&#9662;</span>
  `;
  card.appendChild(cabecalho);

  // botão refazer (só se já feito)
  if (feito) {
    const linhaRefazer = document.createElement('div');
    linhaRefazer.className = 'linha-refazer';
    const btnRefazer = document.createElement('button');
    btnRefazer.className = 'btn-refazer';
    btnRefazer.textContent = 'ZERAR TREINO';
    btnRefazer.addEventListener('click', (e) => {
      e.stopPropagation();
      confirmar(`Zerar o ${treino.nome}? O progresso salvo será apagado.`, () => {
        delete dadosAluno.treinosFeitos[treino.nome];
        delete dadosAluno.seriesFeitas[treino.nome];
        salvarDadosAluno();
        renderTudo();
        focarProximoTreino();
      });
    });
    linhaRefazer.appendChild(btnRefazer);
    card.appendChild(linhaRefazer);
  }

  // corpo (exercícios, timer, finalizar)
  const corpo = criarCorpoTreino(treino);
  corpo.hidden = true;
  card.appendChild(corpo);

  cabecalho.addEventListener('click', () => {
    const vaiAbrir = corpo.hidden;
    document.querySelectorAll('.corpo-treino').forEach(el => el.hidden = true);
    document.querySelectorAll('.card-treino').forEach(el => el.classList.remove('aberto'));
    if (vaiAbrir) {
      corpo.hidden = false;
      card.classList.add('aberto');
    }
  });

  return card;
}

function criarCorpoTreino(treino) {
  const corpo = document.createElement('div');
  corpo.className = 'corpo-treino';

  const feito = !!dadosAluno.treinosFeitos[treino.nome];

  if (!dadosAluno.seriesFeitas[treino.nome]) {
    dadosAluno.seriesFeitas[treino.nome] = {};
  }
  const seriesFeitas = dadosAluno.seriesFeitas[treino.nome];

  const validarEAtualizarBotao = () => {
    if (feito) return; // Se já foi feito, não precisa validar botão de finalizar

    let totalMarcados = 0;
    Object.values(seriesFeitas).forEach(arr => {
      totalMarcados += arr.filter(Boolean).length;
    });

    const estadoTimer = timers[treino.nome];
    const tempoValido = estadoTimer && estadoTimer.segundos >= 5;
    const checkboxValido = totalMarcados >= 3;

    const btnFinalizar = corpo.querySelector('.btn-finalizar');
    if (btnFinalizar) {
      btnFinalizar.disabled = !(tempoValido && checkboxValido);
    }
  };

// Cria o topo do treino com o botão azul de Play e o display do timer
function criarTopoTimer(treino, aoAtualizarTimer) {
  const timerRow = document.createElement('div');
  timerRow.className = 'timer-row-topo';

  const display = document.createElement('div');
  display.className = 'timer-display';
  display.textContent = '00:00';

  const btnTimer = document.createElement('button');
  btnTimer.className = 'btn-timer';
  btnTimer.innerHTML = '&#9658;';
  btnTimer.setAttribute('aria-label', 'Iniciar cronômetro');

  timerRow.appendChild(display);
  timerRow.appendChild(btnTimer);

  if (!timers[treino.nome]) {
    timers[treino.nome] = { segundos: 0, rodando: false, intervalo: null, iniciadoEm: null };
  }
  const estadoTimer = timers[treino.nome];
  display.textContent = formatarTempo(estadoTimer.segundos);
  btnTimer.innerHTML = estadoTimer.rodando ? '&#10074;&#10074;' : '&#9658;';

  btnTimer.addEventListener('click', () => {
    if (!estadoTimer.iniciadoEm) {
      estadoTimer.iniciadoEm = new Date().toISOString();
    }
    estadoTimer.rodando = !estadoTimer.rodando;
    btnTimer.innerHTML = estadoTimer.rodando ? '&#10074;&#10074;' : '&#9658;';

    if (estadoTimer.rodando) {
      estadoTimer.intervalo = setInterval(() => {
        estadoTimer.segundos++;
        display.textContent = formatarTempo(estadoTimer.segundos);
        aoAtualizarTimer();
      }, 1000);
    } else {
      clearInterval(estadoTimer.intervalo);
    }
  });

  return timerRow;
}

  // Se o treino NÃO foi feito, adiciona o topo com o botão azul do play (timer)
  if (!feito) {
    corpo.appendChild(criarTopoTimer(treino, validarEAtualizarBotao));
  }

  treino.exercicios.forEach(exTreino => {
    const info = buscarExercicio(exTreino.id);
    if (!info) return;

    if (!seriesFeitas[exTreino.id]) {
      seriesFeitas[exTreino.id] = exTreino.series.map(() => false);
    }
    const estadoSeries = seriesFeitas[exTreino.id];

    const item = document.createElement('div');
    item.className = 'exercicio-item';

    const cabecalhoEx = document.createElement('div');
    cabecalhoEx.className = 'exercicio-cabecalho';

    const btnIcone = document.createElement('button');
    btnIcone.className = 'icone-exercicio';
    btnIcone.innerHTML = `<img src="${info.icone}" alt="${info.nome}">`;
    btnIcone.setAttribute('aria-label', `Ver ícone de ${info.nome}`);
    btnIcone.addEventListener('click', () => abrirModalMidia(info.icone, info.nome));

    const infoNomeWrapper = document.createElement('div');
    infoNomeWrapper.className = 'info-nome-wrapper';

    const nome = document.createElement('button');
    nome.className = 'nome-exercicio';
    nome.textContent = info.nome;
    nome.setAttribute('aria-label', `Ver demonstração de ${info.nome}`);
    nome.addEventListener('click', () => abrirModalMidia(info.gif, info.nome));

    infoNomeWrapper.appendChild(nome);

    if (exTreino.info) {
      const infoExercicio = document.createElement('span');
      infoExercicio.className = 'info-exercicio';
      infoExercicio.textContent = exTreino.info;
      infoNomeWrapper.appendChild(infoExercicio);
    }

    cabecalhoEx.appendChild(btnIcone);
    cabecalhoEx.appendChild(infoNomeWrapper);
    item.appendChild(cabecalhoEx);

    const listaSeries = document.createElement('div');
    listaSeries.className = 'series-lista';

    exTreino.series.forEach((serie, idx) => {
      const chip = document.createElement('label');
      chip.className = 'chip-serie' + (estadoSeries[idx] ? ' marcada' : '');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = estadoSeries[idx];

      checkbox.addEventListener('click', (e) => {
        if (!checkbox.checked) {
          e.preventDefault();
          confirmar('Deseja desmarcar esta série?', () => {
            checkbox.checked = false;
            estadoSeries[idx] = false;
            chip.classList.remove('marcada');
            salvarDadosAluno();
            validarEAtualizarBotao();
          });
        } else {
          estadoSeries[idx] = true;
          chip.classList.add('marcada');
          salvarDadosAluno();
          validarEAtualizarBotao();
        }
      });

      const texto = document.createElement('span');
      texto.textContent = `Série ${idx + 1}`;

      chip.appendChild(checkbox);
      chip.appendChild(texto);

      if (serie.info) {
        const infoSpan = document.createElement('span');
        infoSpan.className = 'info-serie';
        infoSpan.textContent = serie.info;
        chip.appendChild(infoSpan);
      }

      listaSeries.appendChild(chip);
    });

    item.appendChild(listaSeries);
    corpo.appendChild(item);
  });

// Cria o botão de Finalizar Treino no rodapé
function criarBotaoFinalizar(treino) {
  const botoesTreino = document.createElement('div');
  botoesTreino.className = 'botoes-treino';

  const btnFinalizar = document.createElement('button');
  btnFinalizar.className = 'btn-finalizar';
  btnFinalizar.textContent = 'Finalizar treino';
  btnFinalizar.disabled = true;

  btnFinalizar.addEventListener('click', () => {
    const estadoTimer = timers[treino.nome] || { segundos: 0 };
    if (estadoTimer.intervalo) clearInterval(estadoTimer.intervalo);

    dadosAluno.treinosFeitos[treino.nome] = {
      iniciadoEm: estadoTimer.iniciadoEm || new Date().toISOString(),
      finalizadoEm: new Date().toISOString(),
      duracaoSegundos: estadoTimer.segundos
    };

    salvarDadosAluno();
    delete timers[treino.nome];
    renderTudo();
    focarProximoTreino();
  });

  botoesTreino.appendChild(btnFinalizar);
  return botoesTreino;
}

  // Se o treino NÃO foi feito, adiciona o botão de Finalizar Treino ao final
  if (!feito) {
    corpo.appendChild(criarBotaoFinalizar(treino));
    setTimeout(validarEAtualizarBotao, 0);
  }

  return corpo;
}

function criarBlocoTimerEFinalizar(treino, aoAtualizarTimer) {
  const wrapper = document.createElement('div');

  const timerRow = document.createElement('div');
  timerRow.className = 'timer-row';

  const display = document.createElement('div');
  display.className = 'timer-display';
  display.textContent = '00:00';

  const btnTimer = document.createElement('button');
  btnTimer.className = 'btn-timer';
  btnTimer.innerHTML = '&#9658;';
  btnTimer.setAttribute('aria-label', 'Iniciar cronômetro');

  timerRow.appendChild(display);
  timerRow.appendChild(btnTimer);
  wrapper.appendChild(timerRow);

  if (!timers[treino.nome]) {
    timers[treino.nome] = { segundos: 0, rodando: false, intervalo: null, iniciadoEm: null };
  }
  const estadoTimer = timers[treino.nome];
  display.textContent = formatarTempo(estadoTimer.segundos);
  btnTimer.innerHTML = estadoTimer.rodando ? '&#10074;&#10074;' : '&#9658;';

  btnTimer.addEventListener('click', () => {
    if (!estadoTimer.iniciadoEm) {
      estadoTimer.iniciadoEm = new Date().toISOString();
    }
    estadoTimer.rodando = !estadoTimer.rodando;
    btnTimer.innerHTML = estadoTimer.rodando ? '&#10074;&#10074;' : '&#9658;';

    if (estadoTimer.rodando) {
      estadoTimer.intervalo = setInterval(() => {
        estadoTimer.segundos++;
        display.textContent = formatarTempo(estadoTimer.segundos);
        aoAtualizarTimer();
      }, 1000);
    } else {
      clearInterval(estadoTimer.intervalo);
    }
  });

  const botoesTreino = document.createElement('div');
  botoesTreino.className = 'botoes-treino';

  const btnFinalizar = document.createElement('button');
  btnFinalizar.className = 'btn-finalizar';
  btnFinalizar.textContent = 'Finalizar treino';
  btnFinalizar.disabled = true;

  btnFinalizar.addEventListener('click', () => {
    clearInterval(estadoTimer.intervalo);
    
    dadosAluno.treinosFeitos[treino.nome] = {
      iniciadoEm: estadoTimer.iniciadoEm || new Date().toISOString(),
      finalizadoEm: new Date().toISOString(),
      duracaoSegundos: estadoTimer.segundos
    };

    salvarDadosAluno();
    delete timers[treino.nome];
    renderTudo();
    focarProximoTreino();
  });

  botoesTreino.appendChild(btnFinalizar);
  wrapper.appendChild(botoesTreino);

  return wrapper;
}

function focarProximoTreino() {
  const proximo = aluno.treinos.find(t => !dadosAluno.treinosFeitos[t.nome]);
  if (!proximo) return;
  const cardProximo = document.querySelector(`[data-treino="${CSS.escape(proximo.nome)}"] .cabecalho-treino`);
  if (cardProximo) {
    cardProximo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    cardProximo.focus();
  }
}

// ---------------------------------------------------------
// Limpar tudo
// ---------------------------------------------------------

elBtnLimparTudo.addEventListener('click', () => {
  confirmar('Apagar todo o histórico de treinos feitos? Essa ação não pode ser desfeita.', () => {
    dadosAluno.treinosFeitos = {};
    dadosAluno.seriesFeitas = {};
    salvarDadosAluno();
    renderTudo();
  });
});

// ---------------------------------------------------------

init();
