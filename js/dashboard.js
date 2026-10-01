const DATA_ATUALIZACAO = '12/09/2026'

const METAS_DATA = [
  {
    id: 'm1',
    pillar: 'Parcerias e Redes',
    title: 'Parcerias formais com instituições nacionais e internacionais',
    prazo: 'Prazo: até 3 anos',
    trl: null,
    descricao:
      'Estabelecer parcerias formais com pelo menos 45 instituições nacionais e 30 instituições internacionais em até 3 anos.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Parcerias internacionais por país',
        pedido: 'a lista de países parceiros e quantas parcerias em cada um.',
        itens: [
          { label: 'Estados Unidos', valor: 2 },
          { label: 'Colômbia', valor: 1 },
          { label: 'China', valor: 1 },
          { label: 'Reino Unido', valor: 1 }
        ]
      },
      {
        titulo: 'Parcerias nacionais por estado',
        pedido:
          'quais estados ou regiões concentram as parcerias nacionais firmadas.',
        itens: [
          { label: 'Rio Grande do Norte (RN)', valor: 2 },
          { label: 'Santa Catarina (SC)', valor: 2 },
          { label: 'Pernambuco (PE)', valor: 1 },
          { label: 'Amazonas (AM)', valor: 1 },
          { label: 'Rio de Janeiro (RJ)', valor: 1 },
          { label: 'Minas Gerais (MG)', valor: 1 },
          { label: 'São Paulo (SP)', valor: 1 }
        ]
      }
    ],
    serieTemporal: [],
    subitens: [
      { label: 'Parcerias Nacionais', atingido: 9, meta: 45 },
      { label: 'Parcerias Internacionais', atingido: 5, meta: 30 }
    ]
  },
  {
    id: 'm2',
    pillar: 'Pesquisa e Desenvolvimento',
    title: 'Estudos de vanguarda em IA na Educação Desplugada',
    prazo: null,
    trl: 'TRL 1–5',
    descricao:
      'Identificar e realizar 20 estudos de vanguarda em Inteligência Artificial na Educação Desplugada que vão de TRL 1 a TRL 5.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Estudos por estágio de TRL',
        pedido:
          'quantos dos estudos realizados estão em cada nível, de TRL 1 a TRL 5.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Estudos realizados', atingido: 0, meta: 20 }]
  },
  {
    id: 'm3',
    pillar: 'Pesquisa e Desenvolvimento',
    title: 'Depósito de patentes em IA na Educação Desplugada',
    prazo: null,
    trl: 'TRL 4–5',
    descricao:
      'Depósito de 10 patentes em Inteligência Artificial na Educação Desplugada.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Patentes por área ou tema',
        pedido: 'o tema de cada patente depositada e a instituição responsável.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Patentes depositadas', atingido: 0, meta: 10 }]
  },
  {
    id: 'm4',
    pillar: 'Pesquisa e Desenvolvimento',
    title: 'Depósito de registros de software',
    prazo: null,
    trl: 'TRL 4–5',
    descricao:
      'Depósito de 20 registros de software em Inteligência Artificial na Educação Desplugada.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Registros por tipo de solução',
        pedido: 'o tipo de software de cada registro.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Registros depositados', atingido: 0, meta: 20 }]
  },
  {
    id: 'm5',
    pillar: 'Pesquisa e Desenvolvimento',
    title: 'Artigos científicos em periódicos de alto impacto',
    prazo: null,
    trl: null,
    descricao:
      'Publicar pelo menos 60 artigos científicos em periódicos de alto impacto.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Artigos por autor',
        pedido:
          'os autores do instituto e quantos artigos cada um já publicou dentro da meta.',
        nota: 'Os autores 1, 4 e 8 assinam juntos 2 artigos em coautoria; computados unicamente no cômputo global.',
        itens: [
          { label: 'Autor 1', valor: 2 },
          { label: 'Autor 2', valor: 3 },
          { label: 'Autor 3', valor: 1 },
          { label: 'Autor 4', valor: 2 },
          { label: 'Autor 5', valor: 2 },
          { label: 'Autor 6', valor: 1 },
          { label: 'Autor 7', valor: 1 },
          { label: 'Autor 8', valor: 2 }
        ]
      },
      {
        titulo: 'Artigos por periódico',
        pedido: 'em quais periódicos os artigos foram publicados.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Artigos publicados', atingido: 10, meta: 60 }]
  },
  {
    id: 'm6',
    pillar: 'Pesquisa e Desenvolvimento',
    title: 'Apresentações em conferências internacionais',
    prazo: 'Ao longo de 4 anos',
    trl: null,
    descricao:
      '30 apresentações em conferências internacionais ao longo de 4 anos.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Apresentações por conferência',
        pedido: 'em quais conferências as apresentações ocorreram.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Apresentações realizadas', atingido: 0, meta: 30 }]
  },
  {
    id: 'm7',
    pillar: 'Formação e Capacitação',
    title: 'Formação de estudantes e pesquisadores',
    prazo: 'Até o término do projeto',
    trl: null,
    descricao:
      'Formar 150 estudantes de graduação, 90 mestres, 45 doutores e 15 pós-doutores até o término do projeto.',
    estrategia:
      'Integração ensino, pesquisa e extensão via cooperação contínua com consórcios universitários.',
    quebras: [
      {
        titulo: 'Formados por universidade participante',
        pedido: 'quantos estudantes formados por nível.'
      }
    ],
    serieTemporal: [],
    subitens: [
      { label: 'Graduação', atingido: 0, meta: 150 },
      { label: 'Mestrado', atingido: 0, meta: 90 },
      { label: 'Doutorado', atingido: 0, meta: 45 },
      { label: 'Pós-doutorado', atingido: 0, meta: 15 }
    ]
  },
  {
    id: 'm8',
    pillar: 'Formação e Capacitação',
    title: 'Workshops para educadores e estudantes',
    prazo: '10 por ano',
    trl: null,
    descricao:
      'Oferecer pelo menos 10 workshops anuais para capacitar educadores e estudantes.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Workshops por tema ou edição',
        pedido: 'o tema de cada workshop realizado.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Workshops no ano corrente', atingido: 0, meta: 10 }]
  },
  {
    id: 'm9',
    pillar: 'Formação e Capacitação',
    title: 'Programas de capacitação em comunidades vulneráveis',
    prazo: '10 programas por ano',
    trl: null,
    descricao:
      'Desenvolver 10 programas anuais beneficiando 3.000 educadores e 15.000 estudantes.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Beneficiados por região',
        pedido: 'locais e comunidades atendidas.'
      }
    ],
    serieTemporal: [],
    subitens: [
      { label: 'Programas no ano', atingido: 0, meta: 10 },
      { label: 'Educadores beneficiados', atingido: 0, meta: 3000 },
      { label: 'Estudantes beneficiados', atingido: 0, meta: 15000 }
    ]
  },
  {
    id: 'm10',
    pillar: 'Transferência e Impacto',
    title: 'Transferência de tecnologia e know-how',
    prazo: null,
    trl: 'TRL 6–8',
    descricao:
      'Formalizar transferência para 15 empresas e 9 secretarias de educação.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Parceiros de transferência',
        pedido: 'nomes das entidades e soluções transferidas.'
      }
    ],
    serieTemporal: [],
    subitens: [
      { label: 'Empresas', atingido: 0, meta: 15 },
      { label: 'Secretarias de educação', atingido: 0, meta: 9 }
    ]
  },
  {
    id: 'm11',
    pillar: 'Transferência e Impacto',
    title: 'Políticas públicas baseadas nas soluções do instituto',
    prazo: null,
    trl: 'TRL 6–9',
    descricao:
      'Desenvolver 6 políticas públicas baseadas nas soluções do instituto.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Políticas por nível de governo',
        pedido: 'âmbito municipal, estadual ou federal.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Políticas públicas', atingido: 0, meta: 6 }]
  },
  {
    id: 'm12',
    pillar: 'Transferência e Impacto',
    title: 'Geração de spin-offs',
    prazo: null,
    trl: 'TRL 6–9',
    descricao: 'Geração de 5 spin-offs baseadas nas soluções do instituto.',
    estrategia: null,
    quebras: [{ titulo: 'Spin-offs por área', pedido: 'setor de atuação.' }],
    serieTemporal: [],
    subitens: [{ label: 'Spin-offs geradas', atingido: 0, meta: 5 }]
  },
  {
    id: 'm13',
    pillar: 'Transferência e Impacto',
    title: 'Implementação no Sul Global',
    prazo: null,
    trl: 'TRL 9',
    descricao: 'Implementar soluções em pelo menos 4 países do Sul Global.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Implementação por país',
        pedido: 'alcance em escolas e alunos.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Países alcançados', atingido: 0, meta: 4 }],
    qualitativos: [
      { num: 'Centenas', label: 'de escolas públicas' },
      { num: '100k+', label: 'estudantes beneficiados' }
    ]
  },
  {
    id: 'm14',
    pillar: 'Projeção Internacional',
    title: 'Participação em fóruns internacionais',
    prazo: null,
    trl: null,
    descricao: 'Participar de pelo menos 30 fóruns internacionais.',
    estrategia: null,
    quebras: [
      { titulo: 'Fóruns por região', pedido: 'detalhamento de participações.' }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Fóruns integrados', atingido: 0, meta: 30 }]
  },
  {
    id: 'm15',
    pillar: 'Projeção Internacional',
    title: 'Policy briefs para agendas globais de educação',
    prazo: null,
    trl: null,
    descricao: 'Publicar 15 policy briefs estratégicos.',
    estrategia: null,
    quebras: [
      { titulo: 'Policy briefs por tema', pedido: 'escopo e audiência alvo.' }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Policy Briefs', atingido: 0, meta: 15 }]
  },
  {
    id: 'm16',
    pillar: 'Projeção Internacional',
    title: 'Colaborações com instituições do Norte e do Sul Global',
    prazo: null,
    trl: null,
    descricao:
      'Firmar colaborações com 15 instituições do Norte Global e 30 do Sul Global.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Colaborações por país',
        pedido: 'redes internacionais firmadas.'
      }
    ],
    serieTemporal: [],
    subitens: [
      { label: 'Norte Global', atingido: 0, meta: 15 },
      { label: 'Sul Global', atingido: 0, meta: 30 }
    ]
  },
  {
    id: 'm17',
    pillar: 'Projeção Internacional',
    title: 'Produção e disseminação de livros',
    prazo: null,
    trl: null,
    descricao: 'Produzir e disseminar 5 livros.',
    estrategia: null,
    quebras: [{ titulo: 'Livros por tema', pedido: 'obras publicadas.' }],
    serieTemporal: [],
    subitens: [{ label: 'Livros produzidos', atingido: 0, meta: 5 }]
  },
  {
    id: 'm18',
    pillar: 'Projeção Internacional',
    title: 'Conferências internacionais organizadas',
    prazo: null,
    trl: null,
    descricao: 'Organizar 6 conferências internacionais.',
    estrategia: null,
    quebras: [
      {
        titulo: 'Conferências por local',
        pedido: 'eventos sediados e organizados.'
      }
    ],
    serieTemporal: [],
    subitens: [{ label: 'Conferências organizadas', atingido: 0, meta: 6 }]
  }
]

const Utils = {
  calculatePct(attained, target) {
    return target > 0 ? Math.min(100, Math.round((attained / target) * 100)) : 0
  },

  renderCircularGauge(attained, target, label) {
    const percentage = this.calculatePct(attained, target)

    // Mapeia 0% -> -180deg (base esquerda) ate 100% -> 0deg (base direita)
    const angle = -180 + (percentage / 100) * 180

    // ID único para não conflitar gradientes SVG na página
    const uniqueId =
      'gauge-blue-grad-' + Math.random().toString(36).substring(2, 11)

    return `
    <div class="gauge-item">
      <div class="gauge-svg-wrapper">
        <svg width="220" height="120" viewBox="0 0 200 115" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="${uniqueId}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#71DFF5" />
              <stop offset="50%" stop-color="#13C9EE" />
              <stop offset="100%" stop-color="#0A6577" />
            </linearGradient>
          </defs>
          
          <!-- Trilha base -->
          <path d="M 25 100 A 75 75 0 0 1 175 100" 
                fill="none" 
                stroke="#f1f5f9" 
                stroke-width="16" 
                stroke-linecap="round" />

          <!-- Arco com Gradiente em Tons de Azul -->
          <path d="M 25 100 A 75 75 0 0 1 175 100" 
                fill="none" 
                stroke="url(#${uniqueId})" 
                stroke-width="16" 
                stroke-linecap="round" />

          <!-- Ponteiro ancorado no pivô central inferior (100, 100) -->
          <g transform="translate(100, 100)">
            <g style="transform: rotate(${angle}deg); transform-origin: 0px 0px; transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);">
              <!-- Haste da seta -->
              <line x1="0" y1="0" x2="60" y2="0" stroke="#05323C" stroke-width="3.5" stroke-linecap="round" />
              <!-- Cabeça da seta -->
              <polygon points="66,0 54,-4 54,4" fill="#05323C" />
            </g>
            <!-- Pivô sólido em tom escuro -->
            <circle cx="0" cy="0" r="6" fill="#05323C" />
          </g>
        </svg>

        <div class="gauge-center-text">
          <div class="gauge-center-value">${percentage}%</div>
          <div class="gauge-center-target">${attained} / ${target}</div>
        </div>
      </div>
      <div class="gauge-title">${label}</div>
    </div>`
  },

  getPillarIcon(pillarName) {
    const icons = {
      'Parcerias e Redes': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
      'Pesquisa e Desenvolvimento': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
      'Formação e Capacitação': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      'Transferência e Impacto': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
      'Projeção Internacional': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
    }
    return (
      icons[pillarName] ||
      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = {
    init() {
      if (typeof METAS_DATA === 'undefined' || typeof Utils === 'undefined') {
        console.error('Erro no carregamento das dependências JS.')
        return
      }

      this.buildSidebarAndOverview()
      this.buildDetailPanels()
      this.bindEvents()
      this.updateSyncLabel()
    },

    bindEvents() {
      const btnOverview = document.getElementById('btnOverview')
      if (btnOverview) {
        btnOverview.addEventListener('click', () => this.showOverview())
      }

      const navGroups = document.getElementById('navGroups')
      if (navGroups) {
        navGroups.addEventListener('click', e => {
          const btn = e.target.closest('.nav-link')
          if (btn && btn.dataset.id) {
            this.showDetail(btn.dataset.id)
          }
        })
      }

      const overviewGroups = document.getElementById('overviewGroups')
      if (overviewGroups) {
        overviewGroups.addEventListener('click', e => {
          const card = e.target.closest('.card-goal')
          if (card && card.dataset.id) {
            this.showDetail(card.dataset.id)
          }
        })
      }

      const detailContainer = document.getElementById('detailViews')
      if (detailContainer) {
        detailContainer.addEventListener('click', e => {
          const btnBack = e.target.closest('[data-action="back"]')
          if (btnBack) {
            this.showOverview()
          }
        })
      }
    },

    updateSyncLabel() {
      const syncTag = document.getElementById('overviewUpdateTag')
      if (syncTag && typeof DATA_ATUALIZACAO !== 'undefined') {
        syncTag.innerHTML = `<span class="sync-dot"></span> Sincronizado (${DATA_ATUALIZACAO})`
      }
    },

    buildSidebarAndOverview() {
      const groups = {}
      METAS_DATA.forEach((m, idx) => {
        m.numOrder = idx + 1 // Atribui numeração sequencial (Meta 1, Meta 2...)
        ;(groups[m.pillar] = groups[m.pillar] || []).push(m)
      })

      const navHtml = Object.entries(groups)
        .map(
          ([pillar, list]) => `
          <div class="nav-group">
            <div class="nav-group-header">
              ${Utils.getPillarIcon(pillar)}
              <span>${pillar}</span>
            </div>
            ${list
              .map(
                m => `
              <button class="nav-link" id="nav-${m.id}" data-id="${m.id}">
                <span class="nav-link-dot"></span>
                <span class="truncate">Meta ${m.numOrder}: ${m.title}</span>
              </button>
            `
              )
              .join('')}
          </div>
        `
        )
        .join('')

      const navContainer = document.getElementById('navGroups')
      if (navContainer) {
        navContainer.innerHTML = navHtml
      }

      const overviewHtml = Object.entries(groups)
        .map(
          ([pillar, list]) => `
          <div class="section-group">
            <h3 class="section-title">
              ${Utils.getPillarIcon(pillar)}
              <span>${pillar}</span>
            </h3>
            <div class="metrics-grid">
              ${list
                .map(m => {
                  const pcts = m.subitens.map(s =>
                    Utils.calculatePct(s.atingido, s.meta)
                  )
                  const avgPct = Math.round(
                    pcts.reduce((a, b) => a + b, 0) / pcts.length
                  )

                  return `
                <article class="card-goal" data-id="${m.id}">
                  <div>
                    <div class="card-goal-header">
                      <h4 class="card-goal-title">Meta ${m.numOrder}: ${m.title}</h4>
                      <span class="card-goal-badge">${avgPct}%</span>
                    </div>
                    <div class="progress-track" role="progressbar" aria-valuenow="${avgPct}" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-fill" style="width: ${avgPct}%"></div>
                    </div>
                  </div>
                  <div class="card-goal-footer">
                    <span>Progresso</span>
                    <span>${m.subitens.map(s => `${s.atingido}/${s.meta}`).join(' · ')}</span>
                  </div>
                </article>`
                })
                .join('')}
            </div>
          </div>
        `
        )
        .join('')

      const overviewContainer = document.getElementById('overviewGroups')
      if (overviewContainer) {
        overviewContainer.innerHTML = overviewHtml
      }
    },

    buildDetailPanels() {
      const html = METAS_DATA.map(m => {
        const isPending = m.subitens.every(s => s.atingido === 0)

        const gaugesHtml = m.subitens
          .map(s => Utils.renderCircularGauge(s.atingido, s.meta, s.label))
          .join('')

        const barsHtml = m.subitens
          .map(s => {
            const p = Utils.calculatePct(s.atingido, s.meta)
            return `
          <div class="data-row">
            <div class="data-row-meta">
              <span>${s.label}</span>
              <span>${s.atingido} de ${s.meta} (${p}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${p}%"></div>
            </div>
          </div>`
          })
          .join('')

        const quebrasHtml = (m.quebras || [])
          .map(q => {
            if (!q.itens || q.itens.length === 0) {
              return `
            <div class="content-panel">
              <div class="panel-label">${q.titulo}</div>
              <div class="info-callout">Aguardando recebimento dos dados detalhados (${q.pedido}).</div>
            </div>`
            }

            const max = Math.max(...q.itens.map(i => i.valor))
            return `
            <div class="content-panel">
              <div class="panel-label">${q.titulo}</div>
              ${q.itens
                .map(
                  i => `
                <div class="data-row">
                  <div class="data-row-meta">
                    <span>${i.label}</span>
                    <span>${i.valor}</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${max > 0 ? (i.valor / max) * 100 : 0}%"></div>
                  </div>
                </div>
              `
                )
                .join('')}
              ${q.nota ? `<div class="info-callout">${q.nota}</div>` : ''}
            </div>`
          })
          .join('')

        return `
        <section class="view-panel" id="view-${m.id}" aria-labelledby="heading-${m.id}">
          <button class="btn-back" data-action="back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar à Visão Geral
          </button>

          <header class="detail-header">
            <div class="page-pretitle">${m.pillar}</div>
            <h2 id="heading-${m.id}" class="page-title">Meta ${m.numOrder}: ${m.title}</h2>
            <div class="tags-wrapper">
              ${m.prazo ? `<span class="chip-tag">${m.prazo}</span>` : ''}
              ${m.trl ? `<span class="chip-tag amber">${m.trl}</span>` : ''}
              <span class="chip-tag">Atualizado em ${DATA_ATUALIZACAO}</span>
            </div>
          </header>

          ${
            isPending
              ? `
            <div class="pending-alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Indicadores pendentes de atualização no ciclo atual.
            </div>`
              : ''
          }

          <div class="content-panel">
            <div class="panel-label">Indicador Principal</div>
            <div class="gauges-container">${gaugesHtml}</div>
          </div>

          <div class="content-panel">
            <div class="panel-label">Detalhamento Numérico das Metas</div>
            ${barsHtml}
          </div>

          ${quebrasHtml}

          <div class="content-panel">
            <div class="panel-label">Escopo Oficial & Estratégia</div>
            <p style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.6;">${m.descricao}</p>
            ${
              m.estrategia
                ? `<p style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.6; margin-top: 12px; font-weight: 500;"><strong>Estratégia:</strong> ${m.estrategia}</p>`
                : ''
            }
          </div>
        </section>`
      }).join('')

      const detailContainer = document.getElementById('detailViews')
      if (detailContainer) {
        detailContainer.innerHTML = html
      }
    },

    showOverview() {
      document
        .querySelectorAll('.view-panel')
        .forEach(el => el.classList.remove('active'))
      const overviewPanel = document.getElementById('view-overview')
      if (overviewPanel) {
        overviewPanel.classList.add('active')
      }

      document
        .querySelectorAll('.nav-link')
        .forEach(el => el.classList.remove('active'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    showDetail(id) {
      document
        .querySelectorAll('.view-panel')
        .forEach(el => el.classList.remove('active'))
      const targetView = document.getElementById(`view-${id}`)
      if (targetView) {
        targetView.classList.add('active')
      }

      document
        .querySelectorAll('.nav-link')
        .forEach(el => el.classList.remove('active'))
      const activeNav = document.getElementById(`nav-${id}`)
      if (activeNav) {
        activeNav.classList.add('active')
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  App.init()
})

