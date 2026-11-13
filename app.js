const dialog = document.querySelector('.demo-dialog');
const dialogTitle = document.querySelector('.dialog-title');
const dialogSteps = document.querySelector('.dialog-steps');
const dialogProgress = document.querySelector('.dialog-progress');
const dialogStickyContext = document.querySelector('.dialog-sticky-context');
const journeyOverallStatus = document.querySelector('.journey-overall-status');
const journeySharedStatus = document.querySelector('.journey-shared-status');
const journeySummaryList = document.querySelector('.journey-summary-list');
const journeyContinueAction = document.querySelector('.journey-continue-action');
const journeyReviewAction = document.querySelector('.journey-review-action');
const journeyReview = document.querySelector('.journey-review');
const journeyReviewText = document.querySelector('#journey-review-text');
const journeyReviewCopy = document.querySelector('.journey-review-copy');
const journeyReviewDownload = document.querySelector('.journey-review-download');
const journeyReviewPrint = document.querySelector('.journey-review-print');
const journeyReviewClose = document.querySelector('.journey-review-close');
const journeyReviewCopyStatus = document.querySelector('.journey-review-copy-status');
const dialogDetailTitle = document.querySelector('#dialog-detail-title');
const dialogDetailDescription = document.querySelector('.dialog-detail-description');
const dialogDetail = document.querySelector('#dialog-detail');
const syntheticFileChoice = document.querySelector('.synthetic-file-choice');
const syntheticFileSelect = document.querySelector('#synthetic-file');
const syntheticFileStatus = document.querySelector('#synthetic-file-status');
const syntheticFulfillmentChoice = document.querySelector('.synthetic-fulfillment-choice');
const syntheticQuoteReviewSelect = document.querySelector('#synthetic-quote-review');
const syntheticQuoteStatus = document.querySelector('#synthetic-quote-status');
const syntheticFulfillmentSelect = document.querySelector('#synthetic-fulfillment');
const syntheticFulfillmentStatus = document.querySelector('#synthetic-fulfillment-status');
const syntheticTrackingChoice = document.querySelector('.synthetic-tracking-choice');
const syntheticTrackingSelect = document.querySelector('#synthetic-tracking');
const syntheticTrackingStatus = document.querySelector('#synthetic-tracking-status');
const syntheticCapacityChoice = document.querySelector('.synthetic-capacity-choice');
const syntheticCapacitySelect = document.querySelector('#synthetic-capacity');
const syntheticCapacityStatus = document.querySelector('#synthetic-capacity-status');
const syntheticRequirementsChoice = document.querySelector('.synthetic-requirements-choice');
const syntheticRequirementsSelect = document.querySelector('#synthetic-requirements');
const syntheticRequirementsStatus = document.querySelector('#synthetic-requirements-status');
const syntheticProductionChoice = document.querySelector('.synthetic-production-choice');
const syntheticProductionSelect = document.querySelector('#synthetic-production');
const syntheticProductionStatus = document.querySelector('#synthetic-production-status');
const syntheticOrderFilterChoice = document.querySelector('.synthetic-order-filter-choice');
const syntheticOrderFilterSelect = document.querySelector('#synthetic-order-filter');
const syntheticOrderFilterStatus = document.querySelector('#synthetic-order-filter-status');
const syntheticExceptionChoice = document.querySelector('.synthetic-exception-choice');
const syntheticExceptionSelect = document.querySelector('#synthetic-exception');
const syntheticExceptionStatus = document.querySelector('#synthetic-exception-status');
const syntheticHistoryChoice = document.querySelector('.synthetic-history-choice');
const syntheticHistorySelect = document.querySelector('#synthetic-history');
const syntheticHistoryStatus = document.querySelector('#synthetic-history-status');
const clearChoiceButton = document.querySelector('.dialog-clear-choice');
const dialogHandoffStatus = document.querySelector('.dialog-handoff-status');
const dialogHandoffAction = document.querySelector('.dialog-handoff-action');
const dialogProfileButtons = document.querySelectorAll('[data-dialog-profile]');
const dialogProfileStatus = document.querySelector('.dialog-profile-status');
const dialogPrerequisiteStatus = document.querySelector('.dialog-prerequisite-status');
const dialogPrerequisiteAction = document.querySelector('.dialog-prerequisite-action');
const focusStepButton = document.querySelector('.dialog-focus-step');
const focusDetailButton = document.querySelector('.dialog-focus-detail');
const focusFieldButton = document.querySelector('.dialog-focus-field');
const focusSummaryButton = document.querySelector('.dialog-focus-summary');
const focusNavigationButton = document.querySelector('.dialog-focus-navigation');
const journeySummaryTitle = document.querySelector('#journey-summary-title');
const focusModeButton = document.querySelector('.dialog-focus-mode');
const announcementsToggle = document.querySelector('.dialog-announcements-toggle');
const keyboardHelp = document.querySelector('.keyboard-help');
const keyboardHelpSummary = keyboardHelp.querySelector('summary');
const focusStepStatus = document.querySelector('.dialog-focus-status');
const previousButton = document.querySelector('.dialog-previous');
const restartButton = document.querySelector('.dialog-restart');
const restartStatus = document.querySelector('.dialog-restart-status');
const nextButton = document.querySelector('.dialog-next');
const resetAllButton = document.querySelector('.dialog-reset-all');
const resetStatus = document.querySelector('.dialog-reset-status');
const cancelResetButton = document.querySelector('.dialog-cancel-reset');
const closeButtons = document.querySelectorAll('.dialog-close');
const profileButtons = document.querySelectorAll('[data-profile]');
const profileProgressLabels = document.querySelectorAll('[data-profile-progress]');
const profilesOverallProgress = document.querySelector('.profiles-overall-progress');
const sessionStorageWarning = document.querySelector('.session-storage-warning');
const contrastToggle = document.querySelector('.contrast-toggle');
const textSizeToggle = document.querySelector('.text-size-toggle');
const motionToggle = document.querySelector('.motion-toggle');
const visualPreferencesReset = document.querySelector('.visual-preferences-reset');
const visualPreferenceStatus = document.querySelector('.visual-preference-status');
const resumeAction = document.querySelector('.resume-action');
const defaultDocumentTitle = document.title;
const profileSlugs = {
  Cliente: 'cliente',
  Parceiro: 'parceiro',
  Administrador: 'administrador',
};
let triggerButton = null;
let currentStep = 0;
let selectedStep = 0;
let resetAllPending = false;
let restartPending = false;
let resetAllTimeout = null;
let restartTimeout = null;
const confirmationTimeoutMs = 8000;
const progressStorageKey = 'nanquim-demo-issue-71-progress';
const contrastStorageKey = 'nanquim-demo-issue-71-high-contrast';
const textSizeStorageKey = 'nanquim-demo-issue-71-large-text';
const motionStorageKey = 'nanquim-demo-issue-71-reduce-motion';
const announcementsStorageKey = 'nanquim-demo-issue-71-announcements-paused';
const focusModeStorageKey = 'nanquim-demo-issue-71-focus-mode';
const lastProfileStorageKey = 'nanquim-demo-issue-71-last-profile';
const syntheticFileStorageKey = 'nanquim-demo-issue-71-synthetic-file';
const syntheticFulfillmentStorageKey = 'nanquim-demo-issue-71-synthetic-fulfillment';
const syntheticQuoteReviewStorageKey = 'nanquim-demo-issue-71-synthetic-quote-review';
const syntheticTrackingStorageKey = 'nanquim-demo-issue-71-synthetic-tracking';
const syntheticCapacityStorageKey = 'nanquim-demo-issue-71-synthetic-capacity';
const syntheticRequirementsStorageKey = 'nanquim-demo-issue-71-synthetic-requirements';
const syntheticProductionStorageKey = 'nanquim-demo-issue-71-synthetic-production';
const syntheticOrderFilterStorageKey = 'nanquim-demo-issue-71-synthetic-order-filter';
const syntheticExceptionStorageKey = 'nanquim-demo-issue-71-synthetic-exception';
const syntheticHistoryStorageKey = 'nanquim-demo-issue-71-synthetic-history';
const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
let hasMotionOverride = false;
let selectedSyntheticFile = '';
let syntheticFileValidationRequested = false;
let selectedSyntheticFulfillment = '';
let syntheticFulfillmentValidationRequested = false;
let selectedSyntheticQuoteReview = '';
let syntheticQuoteValidationRequested = false;
let selectedSyntheticTracking = '';
let syntheticTrackingValidationRequested = false;
let selectedSyntheticCapacity = '';
let syntheticCapacityValidationRequested = false;
let selectedSyntheticRequirements = '';
let syntheticRequirementsValidationRequested = false;
let selectedSyntheticProduction = '';
let syntheticProductionValidationRequested = false;
let selectedSyntheticOrderFilter = '';
let syntheticOrderFilterValidationRequested = false;
let selectedSyntheticException = '';
let syntheticExceptionValidationRequested = false;
let selectedSyntheticHistory = '';
let syntheticHistoryValidationRequested = false;

try {
  const storageProbeKey = 'nanquim-demo-issue-71-storage-probe';
  sessionStorage.setItem(storageProbeKey, 'ok');
  sessionStorage.removeItem(storageProbeKey);
} catch {
  sessionStorageWarning.hidden = false;
  sessionStorageWarning.textContent = 'O navegador bloqueou o armazenamento desta sessão. A simulação continua disponível, mas escolhas e progresso não serão restaurados após recarregar a página.';
}

const syntheticFiles = {
  apostila: { name: 'apostila-demo.pdf', pages: 12 },
  atividade: { name: 'atividade-escolar-demo.pdf', pages: 4 },
};
const syntheticFulfillmentOptions = {
  retirada: 'Retirada simulada no balcão',
  entrega: 'Entrega local simulada',
};
const syntheticQuoteReviewOptions = {
  revisado: 'Orçamento fictício revisado',
  ajuste: 'Ajuste fictício sinalizado',
};
const syntheticTrackingOptions = {
  conferido: 'Status atual conferido nesta simulação',
};
const syntheticCapacityOptions = {
  compativel: 'Capacidade compatível nesta simulação',
  revisao: 'Precisa de revisão nesta simulação',
};
const syntheticRequirementsOptions = {
  revisados: 'Prazo, material e acabamento revisados',
  ajuste: 'Requisitos precisam de ajuste na simulação',
};
const syntheticProductionOptions = {
  preparacao: 'Em preparação na simulação',
  producao: 'Em produção na simulação',
  concluida: 'Produção concluída na simulação',
};
const syntheticOrderFilterOptions = {
  aguardando: 'Aguardando produção simulada',
  producao: 'Em produção simulada',
  concluido: 'Concluído na simulação',
};
const productionOrderStages = {
  preparacao: 'aguardando',
  producao: 'producao',
  concluida: 'concluido',
};
const syntheticExceptionOptions = {
  acompanhar: 'Manter em acompanhamento na simulação',
  revisar: 'Sinalizar para revisão na simulação',
};
const syntheticHistoryOptions = {
  conferido: 'Histórico conferido nesta simulação',
  revisao: 'Histórico requer revisão nesta simulação',
};
const hasOwnOption = (options, value) => Object.prototype.hasOwnProperty.call(options, value);
const filteredSyntheticOrderCount = () => Number(
  productionOrderStages[selectedSyntheticProduction] === selectedSyntheticOrderFilter,
);
const syntheticOrderFilterMessage = () => selectedSyntheticOrderFilter
  ? `${syntheticOrderFilterOptions[selectedSyntheticOrderFilter]}: ${filteredSyntheticOrderCount()} pedido sintético encontrado neste painel local.`
  : 'Selecione um filtro sintético para concluir esta etapa.';

try {
  const savedSyntheticFile = sessionStorage.getItem(syntheticFileStorageKey);
  if (hasOwnOption(syntheticFiles, savedSyntheticFile)) {
    selectedSyntheticFile = savedSyntheticFile;
  }
} catch {
  // A escolha continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticCapacity = sessionStorage.getItem(syntheticCapacityStorageKey);
  if (hasOwnOption(syntheticCapacityOptions, savedSyntheticCapacity)) {
    selectedSyntheticCapacity = savedSyntheticCapacity;
  }
} catch {
  // A avaliação continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticRequirements = sessionStorage.getItem(syntheticRequirementsStorageKey);
  if (hasOwnOption(syntheticRequirementsOptions, savedSyntheticRequirements)) {
    selectedSyntheticRequirements = savedSyntheticRequirements;
  }
} catch {
  // A revisão continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticOrderFilter = sessionStorage.getItem(syntheticOrderFilterStorageKey);
  if (hasOwnOption(syntheticOrderFilterOptions, savedSyntheticOrderFilter)) {
    selectedSyntheticOrderFilter = savedSyntheticOrderFilter;
  }
} catch {
  // O filtro continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticException = sessionStorage.getItem(syntheticExceptionStorageKey);
  if (hasOwnOption(syntheticExceptionOptions, savedSyntheticException)) {
    selectedSyntheticException = savedSyntheticException;
  }
} catch {
  // A decisão continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticHistory = sessionStorage.getItem(syntheticHistoryStorageKey);
  if (hasOwnOption(syntheticHistoryOptions, savedSyntheticHistory)) {
    selectedSyntheticHistory = savedSyntheticHistory;
  }
} catch {
  // A conferência continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticProduction = sessionStorage.getItem(syntheticProductionStorageKey);
  if (hasOwnOption(syntheticProductionOptions, savedSyntheticProduction)) {
    selectedSyntheticProduction = savedSyntheticProduction;
  }
} catch {
  // A etapa continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticQuoteReview = sessionStorage.getItem(syntheticQuoteReviewStorageKey);
  if (hasOwnOption(syntheticQuoteReviewOptions, savedSyntheticQuoteReview)) {
    selectedSyntheticQuoteReview = savedSyntheticQuoteReview;
  }
} catch {
  // A revisão continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticFulfillment = sessionStorage.getItem(syntheticFulfillmentStorageKey);
  if (hasOwnOption(syntheticFulfillmentOptions, savedSyntheticFulfillment)) {
    selectedSyntheticFulfillment = savedSyntheticFulfillment;
  }
} catch {
  // A escolha continua disponível em memória quando o armazenamento local falha.
}

try {
  const savedSyntheticTracking = sessionStorage.getItem(syntheticTrackingStorageKey);
  if (hasOwnOption(syntheticTrackingOptions, savedSyntheticTracking)) {
    selectedSyntheticTracking = savedSyntheticTracking;
  }
} catch {
  // A conferência continua disponível em memória quando o armazenamento local falha.
}

function requiresSyntheticFile() {
  return dialog.dataset.profile === 'Cliente' && currentStep === 0;
}

function requiresSyntheticFulfillment() {
  return dialog.dataset.profile === 'Cliente' && currentStep === 1;
}

function requiresSyntheticTracking() {
  return dialog.dataset.profile === 'Cliente' && currentStep === 2;
}

function requiresSyntheticCapacity() {
  return dialog.dataset.profile === 'Parceiro' && currentStep === 0;
}

function requiresSyntheticRequirements() {
  return dialog.dataset.profile === 'Parceiro' && currentStep === 1;
}

function requiresSyntheticProduction() {
  return dialog.dataset.profile === 'Parceiro' && currentStep === 2;
}

function requiresSyntheticException() {
  return dialog.dataset.profile === 'Administrador' && currentStep === 1;
}

function requiresSyntheticOrderFilter() {
  return dialog.dataset.profile === 'Administrador' && currentStep === 0;
}

function requiresSyntheticHistory() {
  return dialog.dataset.profile === 'Administrador' && currentStep === 2;
}

function reopenStepForAdjustment(profile, stepIndex) {
  if (progressByProfile[profile] <= stepIndex) return;

  progressByProfile[profile] = stepIndex;
  if (dialog.dataset.profile === profile) {
    currentStep = stepIndex;
    selectedStep = stepIndex;
  }
}

syntheticFileSelect.addEventListener('change', () => {
  selectedSyntheticFile = syntheticFileSelect.value;
  syntheticFileValidationRequested = false;
  try {
    if (selectedSyntheticFile) {
      sessionStorage.setItem(syntheticFileStorageKey, selectedSyntheticFile);
    } else {
      sessionStorage.removeItem(syntheticFileStorageKey);
    }
  } catch {
    // A escolha continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticFileStatus.textContent = selectedSyntheticFile
    ? `${syntheticFiles[selectedSyntheticFile].name} selecionado somente para esta simulação.`
    : 'Selecione uma opção sintética para concluir esta etapa.';
  renderProgress();
});

syntheticFulfillmentSelect.addEventListener('change', () => {
  selectedSyntheticFulfillment = syntheticFulfillmentSelect.value;
  syntheticFulfillmentValidationRequested = false;
  try {
    if (selectedSyntheticFulfillment) {
      sessionStorage.setItem(syntheticFulfillmentStorageKey, selectedSyntheticFulfillment);
    } else {
      sessionStorage.removeItem(syntheticFulfillmentStorageKey);
    }
  } catch {
    // A escolha continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticFulfillmentStatus.textContent = selectedSyntheticFulfillment
    ? `${syntheticFulfillmentOptions[selectedSyntheticFulfillment]} escolhida somente para esta simulação.`
    : 'Selecione como o pedido fictício será recebido para concluir esta etapa.';
  renderProgress();
});

syntheticQuoteReviewSelect.addEventListener('change', () => {
  selectedSyntheticQuoteReview = syntheticQuoteReviewSelect.value;
  syntheticQuoteValidationRequested = false;
  if (selectedSyntheticQuoteReview === 'ajuste') {
    reopenStepForAdjustment('Cliente', 1);
  }
  try {
    if (selectedSyntheticQuoteReview) {
      sessionStorage.setItem(syntheticQuoteReviewStorageKey, selectedSyntheticQuoteReview);
    } else {
      sessionStorage.removeItem(syntheticQuoteReviewStorageKey);
    }
  } catch {
    // A revisão continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticQuoteStatus.textContent = selectedSyntheticQuoteReview
    ? `${syntheticQuoteReviewOptions[selectedSyntheticQuoteReview]}. Nenhuma compra ou cobrança foi confirmada.`
    : 'Revise o orçamento demonstrativo para concluir esta etapa.';
  renderProgress();
});

syntheticTrackingSelect.addEventListener('change', () => {
  selectedSyntheticTracking = syntheticTrackingSelect.value;
  syntheticTrackingValidationRequested = false;
  try {
    if (selectedSyntheticTracking) {
      sessionStorage.setItem(syntheticTrackingStorageKey, selectedSyntheticTracking);
    } else {
      sessionStorage.removeItem(syntheticTrackingStorageKey);
    }
  } catch {
    // A conferência continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticTrackingStatus.textContent = selectedSyntheticTracking
    ? `${syntheticTrackingOptions[selectedSyntheticTracking]}. Nenhum pedido real foi consultado.`
    : 'Confira o status sintético para concluir esta etapa.';
  renderProgress();
});

syntheticCapacitySelect.addEventListener('change', () => {
  selectedSyntheticCapacity = syntheticCapacitySelect.value;
  syntheticCapacityValidationRequested = false;
  if (selectedSyntheticCapacity === 'revisao') {
    reopenStepForAdjustment('Parceiro', 0);
  }
  try {
    if (selectedSyntheticCapacity) {
      sessionStorage.setItem(syntheticCapacityStorageKey, selectedSyntheticCapacity);
    } else {
      sessionStorage.removeItem(syntheticCapacityStorageKey);
    }
  } catch {
    // A avaliação continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticCapacityStatus.textContent = selectedSyntheticCapacity === 'revisao'
    ? 'Revisão sinalizada: confirme a capacidade fictícia como compatível para continuar.'
    : selectedSyntheticCapacity
      ? `${syntheticCapacityOptions[selectedSyntheticCapacity]}. Nenhum pedido real foi alterado.`
      : 'Selecione uma avaliação sintética para concluir esta etapa.';
  renderProgress();
});

syntheticRequirementsSelect.addEventListener('change', () => {
  selectedSyntheticRequirements = syntheticRequirementsSelect.value;
  syntheticRequirementsValidationRequested = false;
  if (selectedSyntheticRequirements === 'ajuste') {
    reopenStepForAdjustment('Parceiro', 1);
  }
  try {
    if (selectedSyntheticRequirements) {
      sessionStorage.setItem(syntheticRequirementsStorageKey, selectedSyntheticRequirements);
    } else {
      sessionStorage.removeItem(syntheticRequirementsStorageKey);
    }
  } catch {
    // A revisão continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticRequirementsStatus.textContent = selectedSyntheticRequirements === 'revisados'
    ? 'Requisitos fictícios revisados. Nenhum prazo real foi confirmado.'
    : selectedSyntheticRequirements === 'ajuste'
      ? 'Ajuste sinalizado: revise os requisitos fictícios para continuar.'
      : 'Revise os requisitos fictícios para concluir esta etapa.';
  renderProgress();
});

syntheticProductionSelect.addEventListener('change', () => {
  selectedSyntheticProduction = syntheticProductionSelect.value;
  syntheticProductionValidationRequested = false;
  try {
    if (selectedSyntheticProduction) {
      sessionStorage.setItem(syntheticProductionStorageKey, selectedSyntheticProduction);
    } else {
      sessionStorage.removeItem(syntheticProductionStorageKey);
    }
  } catch {
    // A etapa continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticProductionStatus.textContent = selectedSyntheticProduction
    ? `${syntheticProductionOptions[selectedSyntheticProduction]}. Nenhuma produção real foi alterada.`
    : 'Selecione uma etapa sintética para concluir esta etapa.';
  renderProgress();
});

syntheticOrderFilterSelect.addEventListener('change', () => {
  selectedSyntheticOrderFilter = syntheticOrderFilterSelect.value;
  syntheticOrderFilterValidationRequested = false;
  try {
    if (selectedSyntheticOrderFilter) {
      sessionStorage.setItem(syntheticOrderFilterStorageKey, selectedSyntheticOrderFilter);
    } else {
      sessionStorage.removeItem(syntheticOrderFilterStorageKey);
    }
  } catch {
    // A escolha continua válida em memória quando o armazenamento local falha.
  }
  syntheticOrderFilterStatus.textContent = syntheticOrderFilterMessage();
  renderProgress();
});

syntheticExceptionSelect.addEventListener('change', () => {
  selectedSyntheticException = syntheticExceptionSelect.value;
  syntheticExceptionValidationRequested = false;
  try {
    if (selectedSyntheticException) {
      sessionStorage.setItem(syntheticExceptionStorageKey, selectedSyntheticException);
    } else {
      sessionStorage.removeItem(syntheticExceptionStorageKey);
    }
  } catch {
    // A decisão continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticExceptionStatus.textContent = selectedSyntheticException
    ? `${syntheticExceptionOptions[selectedSyntheticException]}. Nenhum pedido real foi alterado.`
    : 'Selecione uma decisão sintética para concluir esta etapa.';
  renderProgress();
});

syntheticHistorySelect.addEventListener('change', () => {
  selectedSyntheticHistory = syntheticHistorySelect.value;
  syntheticHistoryValidationRequested = false;
  try {
    if (selectedSyntheticHistory) {
      sessionStorage.setItem(syntheticHistoryStorageKey, selectedSyntheticHistory);
    } else {
      sessionStorage.removeItem(syntheticHistoryStorageKey);
    }
  } catch {
    // A conferência continua disponível em memória enquanto esta página estiver aberta.
  }
  syntheticHistoryStatus.textContent = selectedSyntheticHistory
    ? `${syntheticHistoryOptions[selectedSyntheticHistory]}. Nenhum registro real foi consultado.`
    : 'Selecione um resultado sintético para concluir esta etapa.';
  renderProgress();
});

function setLastProfile(profile) {
  if (!journeys[profile]) return;

  resumeAction.hidden = false;
  resumeAction.dataset.profile = profile;
  resumeAction.textContent = `Retomar jornada de ${profile}`;
  try {
    sessionStorage.setItem(lastProfileStorageKey, profile);
  } catch {
    // A retomada continua disponivel enquanto esta pagina permanecer aberta.
  }
}

function clearLastProfile() {
  resumeAction.hidden = true;
  resumeAction.removeAttribute('data-profile');
  resumeAction.textContent = '';
  try {
    sessionStorage.removeItem(lastProfileStorageKey);
  } catch {
    // O atalho visual ja foi removido mesmo sem acesso ao armazenamento local.
  }
}

function setFocusMode(enabled) {
  dialog.classList.toggle('focus-mode', enabled);
  focusModeButton.setAttribute('aria-pressed', String(enabled));
  focusModeButton.textContent = enabled
    ? 'Mostrar todas as etapas'
    : 'Mostrar somente a etapa atual';
}

try {
  setFocusMode(sessionStorage.getItem(focusModeStorageKey) === 'true');
} catch {
  setFocusMode(false);
}

focusModeButton.addEventListener('click', () => {
  const enabled = focusModeButton.getAttribute('aria-pressed') !== 'true';
  setFocusMode(enabled);
  if (enabled) {
    selectedStep = Math.min(currentStep, journeys[dialog.dataset.profile].length - 1);
    renderProgress();
  }
  focusStepStatus.textContent = enabled
    ? `${dialog.dataset.profile}: somente a etapa atual e seus detalhes estao visiveis.`
    : `${dialog.dataset.profile}: todas as etapas estao visiveis.`;
  try {
    sessionStorage.setItem(focusModeStorageKey, String(enabled));
  } catch {
    // A preferência continua ativa na página mesmo sem armazenamento local.
  }
});

function setAnnouncementsPaused(paused) {
  document.querySelectorAll('[data-progress-announcement]').forEach((region) => {
    region.setAttribute('aria-live', paused ? 'off' : 'polite');
  });
  announcementsToggle.setAttribute('aria-pressed', String(paused));
  announcementsToggle.textContent = paused
    ? 'Retomar avisos de progresso'
    : 'Pausar avisos de progresso';
}

try {
  setAnnouncementsPaused(sessionStorage.getItem(announcementsStorageKey) === 'true');
} catch {
  setAnnouncementsPaused(false);
}

announcementsToggle.addEventListener('click', () => {
  toggleAnnouncements();
});

function toggleAnnouncements() {
  const paused = announcementsToggle.getAttribute('aria-pressed') !== 'true';
  setAnnouncementsPaused(paused);
  focusStepStatus.textContent = paused
    ? 'Avisos automáticos de progresso pausados. Os controles continuam disponíveis.'
    : 'Avisos automáticos de progresso retomados.';
  try {
    sessionStorage.setItem(announcementsStorageKey, String(paused));
  } catch {
    // A preferência continua ativa na página mesmo sem armazenamento local.
  }
}

function setHighContrast(enabled) {
  document.body.classList.toggle('high-contrast', enabled);
  contrastToggle.setAttribute('aria-pressed', String(enabled));
  contrastToggle.textContent = enabled ? 'Contraste padrão' : 'Alto contraste';
  updateVisualPreferencesReset();
}

try {
  setHighContrast(sessionStorage.getItem(contrastStorageKey) === 'true');
} catch {
  setHighContrast(false);
}

contrastToggle.addEventListener('click', () => {
  const enabled = contrastToggle.getAttribute('aria-pressed') !== 'true';
  setHighContrast(enabled);
  visualPreferenceStatus.textContent = enabled
    ? 'Alto contraste ativado.'
    : 'Contraste padrão restaurado.';
  try {
    sessionStorage.setItem(contrastStorageKey, String(enabled));
  } catch {
    // A preferência continua ativa na página mesmo sem armazenamento local.
  }
});

function setLargeText(enabled) {
  document.body.classList.toggle('large-text', enabled);
  textSizeToggle.setAttribute('aria-pressed', String(enabled));
  textSizeToggle.textContent = enabled ? 'Texto padrão' : 'Ampliar texto';
  updateVisualPreferencesReset();
}

try {
  setLargeText(sessionStorage.getItem(textSizeStorageKey) === 'true');
} catch {
  setLargeText(false);
}

textSizeToggle.addEventListener('click', () => {
  const enabled = textSizeToggle.getAttribute('aria-pressed') !== 'true';
  setLargeText(enabled);
  visualPreferenceStatus.textContent = enabled
    ? 'Texto ampliado ativado.'
    : 'Tamanho de texto padrão restaurado.';
  try {
    sessionStorage.setItem(textSizeStorageKey, String(enabled));
  } catch {
    // A preferência continua ativa na página mesmo sem armazenamento local.
  }
});

function setReducedMotion(enabled) {
  document.body.classList.toggle('reduce-motion', enabled);
  motionToggle.setAttribute('aria-pressed', String(enabled));
  motionToggle.textContent = enabled ? 'Movimento padrão' : 'Reduzir movimento';
  updateVisualPreferencesReset();
}

try {
  const savedMotionPreference = sessionStorage.getItem(motionStorageKey);
  hasMotionOverride = savedMotionPreference !== null;
  setReducedMotion(hasMotionOverride ? savedMotionPreference === 'true' : reducedMotionMedia.matches);
} catch {
  setReducedMotion(reducedMotionMedia.matches);
}

motionToggle.addEventListener('click', () => {
  const enabled = motionToggle.getAttribute('aria-pressed') !== 'true';
  hasMotionOverride = true;
  setReducedMotion(enabled);
  visualPreferenceStatus.textContent = enabled
    ? 'Movimento reduzido ativado.'
    : 'Movimento padrão restaurado.';
  try {
    sessionStorage.setItem(motionStorageKey, String(enabled));
  } catch {
    // A preferência continua ativa na página mesmo sem armazenamento local.
  }
});

const syncReducedMotionPreference = (event) => {
  if (!hasMotionOverride) setReducedMotion(event.matches);
};

if (typeof reducedMotionMedia.addEventListener === 'function') {
  reducedMotionMedia.addEventListener('change', syncReducedMotionPreference);
} else if (typeof reducedMotionMedia.addListener === 'function') {
  reducedMotionMedia.addListener(syncReducedMotionPreference);
}

function updateVisualPreferencesReset() {
  const hasCustomPreference = contrastToggle.getAttribute('aria-pressed') === 'true'
    || textSizeToggle.getAttribute('aria-pressed') === 'true'
    || hasMotionOverride;
  visualPreferencesReset.hidden = !hasCustomPreference;
}

visualPreferencesReset.addEventListener('click', () => {
  setHighContrast(false);
  setLargeText(false);
  hasMotionOverride = false;
  setReducedMotion(reducedMotionMedia.matches);
  textSizeToggle.focus();
  visualPreferenceStatus.textContent = reducedMotionMedia.matches
    ? 'Preferências visuais restauradas; movimento reduzido mantido conforme o dispositivo.'
    : 'Preferências visuais restauradas.';
  try {
    sessionStorage.removeItem(contrastStorageKey);
    sessionStorage.removeItem(textSizeStorageKey);
    sessionStorage.removeItem(motionStorageKey);
  } catch {
    // As preferências já foram restauradas na página mesmo sem acesso ao armazenamento local.
  }
});

const journeys = {
  Cliente: [
    'Selecionar um PDF sintético para simular o envio.',
    'Revisar um orçamento demonstrativo antes de continuar.',
    'Acompanhar o pedido fictício até a entrega simulada.',
  ],
  Parceiro: [
    'Consultar uma oportunidade fictícia compatível com a capacidade.',
    'Revisar prazo, material e acabamento simulados.',
    'Atualizar a etapa demonstrativa de produção.',
  ],
  Administrador: [
    'Visualizar pedidos sintéticos por etapa.',
    'Identificar uma exceção fictícia que exige atenção.',
    'Conferir o histórico local sem executar comandos reais.',
  ],
};

const profileActionLabels = {
  Cliente: 'visão do cliente',
  Parceiro: 'visão do parceiro',
  Administrador: 'visão administrativa',
};

const journeyDetails = {
  Cliente: [
    ['Arquivo de exemplo', 'apostila-demo.pdf · 12 páginas · arquivo inexistente usado somente nesta tela.'],
    ['Orçamento de exemplo', 'R$ 18,00 fictícios · impressão P&B · retirada simulada.'],
    ['Acompanhamento de exemplo', 'Pedido DEMO-071 · aguardando produção simulada.'],
  ],
  Parceiro: [
    ['Oportunidade de exemplo', 'DEMO-071 · 12 páginas P&B · nenhum pedido real foi atribuído.'],
    ['Requisitos de exemplo', 'Papel A4 comum · sem acabamento · prazo apenas demonstrativo.'],
    ['Produção de exemplo', 'Etapa local: aguardando início · nenhuma atualização foi enviada.'],
  ],
  Administrador: [
    ['Resumo de exemplo', '1 pedido sintético aguardando produção · 0 pedidos reais consultados.'],
    ['Exceção de exemplo', 'Prazo demonstrativo precisa de revisão manual nesta simulação.'],
    ['Histórico de exemplo', 'Pedido criado localmente → orçamento revisado → aguardando produção.'],
  ],
};

const handoffStatuses = {
  Cliente: [
    'Arquivo ainda não revisado; parceiro e administrador apenas visualizam a espera.',
    'Orçamento revisado; o pedido ainda não foi encaminhado para produção.',
    'Pedido pronto para aparecer na fila fictícia do parceiro.',
  ],
  Parceiro: [
    'Pedido visível na fila fictícia; nenhuma atribuição real foi feita.',
    'Requisitos revisados localmente; administrador acompanha a preparação.',
    'Produção simulada atualizada; cliente pode acompanhar o mesmo identificador.',
  ],
  Administrador: [
    'Visão consolidada do mesmo pedido sintético, sem consultar sistemas externos.',
    'Exceção fictícia sinalizada para revisão, sem bloquear pedidos reais.',
    'Histórico local disponível para os três perfis desta demonstração.',
  ],
};

const nextProfile = {
  Cliente: 'Parceiro',
  Parceiro: 'Administrador',
  Administrador: 'Cliente',
};

const prerequisiteProfile = {
  Parceiro: 'Cliente',
  Administrador: 'Parceiro',
};

try {
  const lastProfile = sessionStorage.getItem(lastProfileStorageKey);
  if (journeys[lastProfile]) setLastProfile(lastProfile);
} catch {
  // Sem armazenamento local, o atalho aparece depois da primeira jornada aberta.
}

function loadProgress() {
  const emptyProgress = Object.fromEntries(
    Object.keys(journeys).map((profile) => [profile, 0]),
  );

  try {
    const savedProgress = JSON.parse(sessionStorage.getItem(progressStorageKey));
    Object.keys(journeys).forEach((profile) => {
      const savedStep = savedProgress?.[profile];
      if (Number.isInteger(savedStep) && savedStep >= 0 && savedStep <= journeys[profile].length) {
        emptyProgress[profile] = savedStep;
      }
    });
  } catch {
    // A demonstração continua normalmente quando o armazenamento está indisponível ou inválido.
  }

  return emptyProgress;
}

function saveProgress() {
  try {
    sessionStorage.setItem(progressStorageKey, JSON.stringify(progressByProfile));
  } catch {
    // Persistência é uma conveniência local e não bloqueia a navegação fictícia.
  }
}

const progressByProfile = loadProgress();

function renderProfileProgress() {
  const profileNames = Object.keys(journeys);
  const totalCompletedSteps = profileNames.reduce(
    (total, profile) => total + progressByProfile[profile],
    0,
  );
  const overallTotalSteps = profileNames.reduce(
    (total, profile) => total + journeys[profile].length,
    0,
  );
  const nextIncompleteProfile = profileNames.find(
    (profile) => progressByProfile[profile] < journeys[profile].length,
  );
  profilesOverallProgress.textContent = nextIncompleteProfile
    ? `Progresso geral local: ${totalCompletedSteps} de ${overallTotalSteps} etapas concluídas. Próxima jornada pendente: ${nextIncompleteProfile}.`
    : `Progresso geral local: ${overallTotalSteps} de ${overallTotalSteps} etapas concluídas. As três jornadas fictícias foram finalizadas.`;

  profileProgressLabels.forEach((label) => {
    const profile = label.dataset.profileProgress;
    const savedStep = progressByProfile[profile];
    const totalSteps = journeys[profile].length;
    label.textContent = savedStep >= totalSteps
      ? 'Estado local: jornada concluída'
      : `Estado local: ${savedStep} de ${totalSteps} etapas concluídas`;

    const actionButton = document.querySelector(`[data-profile="${profile}"]`);
    const actionLabel = profileActionLabels[profile];
    const actionText = savedStep >= totalSteps
      ? `Rever ${actionLabel}`
      : savedStep > 0
        ? `Retomar ${actionLabel} na etapa ${savedStep + 1}`
        : `Abrir ${actionLabel}`;
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→';
    actionButton.replaceChildren(actionText, arrow);
  });

  const lastProfile = resumeAction.dataset.profile;
  if (!journeys[lastProfile]) return;

  const savedStep = progressByProfile[lastProfile];
  const totalSteps = journeys[lastProfile].length;
  resumeAction.textContent = savedStep >= totalSteps
    ? `Rever jornada concluída de ${lastProfile}`
    : savedStep > 0
      ? `Retomar ${lastProfile} na etapa ${savedStep + 1} de ${totalSteps}`
      : `Iniciar jornada de ${lastProfile}`;
}

function updateJourneyReview() {
  const progressLines = Object.keys(journeys).map((profile) => {
    const completedSteps = progressByProfile[profile];
    const totalSteps = journeys[profile].length;
    const progressText = completedSteps >= totalSteps
      ? 'jornada concluída'
      : `${completedSteps} de ${totalSteps} etapas concluídas`;
    return `${profile}: ${progressText}.`;
  });

  const selectedFile = syntheticFiles[selectedSyntheticFile];
  journeyReviewText.value = [
    'Pedido sintético DEMO-071 — resumo local para revisão',
    selectedFile
      ? `Arquivo sintético: ${selectedFile.name} · ${selectedFile.pages} páginas.`
      : 'Arquivo sintético: ainda não selecionado.',
    selectedSyntheticQuoteReview
      ? `Orçamento demonstrativo: ${syntheticQuoteReviewOptions[selectedSyntheticQuoteReview]}. Valor fixo de R$ 18,00 fictícios; nenhuma cobrança confirmada.`
      : 'Orçamento demonstrativo: ainda não revisado.',
    selectedSyntheticFulfillment
      ? `Recebimento sintético: ${syntheticFulfillmentOptions[selectedSyntheticFulfillment]}.`
      : 'Recebimento sintético: ainda não selecionado.',
    selectedSyntheticTracking
      ? `Acompanhamento sintético: ${syntheticTrackingOptions[selectedSyntheticTracking]}.`
      : 'Acompanhamento sintético: status ainda não conferido.',
    selectedSyntheticCapacity
      ? `Capacidade do parceiro: ${syntheticCapacityOptions[selectedSyntheticCapacity]}.`
      : 'Capacidade do parceiro: ainda não avaliada.',
    selectedSyntheticRequirements
      ? `Requisitos do parceiro: ${syntheticRequirementsOptions[selectedSyntheticRequirements]}.`
      : 'Requisitos do parceiro: ainda não revisados.',
    selectedSyntheticProduction
      ? `Produção sintética: ${syntheticProductionOptions[selectedSyntheticProduction]}.`
      : 'Produção sintética: ainda não atualizada.',
    selectedSyntheticOrderFilter
      ? `Filtro administrativo: ${syntheticOrderFilterOptions[selectedSyntheticOrderFilter]}.`
      : 'Filtro administrativo: ainda não selecionado.',
    selectedSyntheticException
      ? `Exceção administrativa: ${syntheticExceptionOptions[selectedSyntheticException]}.`
      : 'Exceção administrativa: ainda não avaliada.',
    selectedSyntheticHistory
      ? `Histórico administrativo: ${syntheticHistoryOptions[selectedSyntheticHistory]}.`
      : 'Histórico administrativo: ainda não conferido.',
    ...progressLines,
    journeySharedStatus.textContent,
    'Demonstração offline: nenhuma ação real foi executada.',
  ].join('\n');
}

function closeDialog({ updateHistory = true } = {}) {
  cancelResetAll();
  cancelRestart();
  dialog.close();
  if (updateHistory) history.replaceState(null, '', '#perfis');
}

function openDialog() {
  document.body.classList.add('dialog-open');
  dialog.showModal();
}

function setDialogTriggerState(activeButton = null) {
  profileButtons.forEach((button) => {
    button.setAttribute('aria-expanded', String(button === activeButton));
  });
  resumeAction.setAttribute('aria-expanded', String(resumeAction === activeButton));
}

function cancelResetAll() {
  clearTimeout(resetAllTimeout);
  resetAllTimeout = null;
  resetAllPending = false;
  resetAllButton.textContent = 'Reiniciar todas as jornadas';
  resetAllButton.removeAttribute('aria-pressed');
  cancelResetButton.hidden = !restartPending;
}

function cancelRestart() {
  clearTimeout(restartTimeout);
  restartTimeout = null;
  restartPending = false;
  restartButton.textContent = 'Reiniciar roteiro';
  restartButton.removeAttribute('aria-pressed');
  cancelResetButton.hidden = !resetAllPending;
}

function renderProgress() {
  cancelRestart();
  restartStatus.textContent = '';
  const items = [...dialogSteps.children];
  const finished = currentStep >= items.length;
  const detailIndex = Math.min(selectedStep, items.length - 1);
  const focusModeIndex = Math.min(currentStep, items.length - 1);
  const prerequisite = prerequisiteProfile[dialog.dataset.profile];
  const prerequisiteReady = !prerequisite
    || progressByProfile[prerequisite] >= journeys[prerequisite].length;
  const fileChoiceRequired = requiresSyntheticFile() && !selectedSyntheticFile;
  const fulfillmentChoiceRequired = requiresSyntheticFulfillment() && !selectedSyntheticFulfillment;
  const quoteReviewRequired = requiresSyntheticFulfillment()
    && selectedSyntheticQuoteReview !== 'revisado';
  const trackingChoiceRequired = requiresSyntheticTracking() && !selectedSyntheticTracking;
  const capacityChoiceRequired = requiresSyntheticCapacity() && selectedSyntheticCapacity !== 'compativel';
  const requirementsChoiceRequired = requiresSyntheticRequirements()
    && selectedSyntheticRequirements !== 'revisados';
  const productionChoiceRequired = requiresSyntheticProduction() && !selectedSyntheticProduction;
  const exceptionChoiceRequired = requiresSyntheticException() && !selectedSyntheticException;
  const historyChoiceRequired = requiresSyntheticHistory() && !selectedSyntheticHistory;

  progressByProfile[dialog.dataset.profile] = currentStep;
  saveProgress();

  items.forEach((item, index) => {
    const stepButton = item.querySelector('button');
    const stepStatus = item.querySelector('.dialog-step-status');
    const stepState = index < currentStep
      ? 'concluída'
      : index === currentStep && !finished
        ? 'atual'
        : 'pendente';
    item.classList.toggle('is-complete', stepState === 'concluída');
    item.classList.toggle('is-active', index === detailIndex);
    item.classList.toggle('is-focus-current', index === focusModeIndex);
    stepButton.tabIndex = index === detailIndex ? 0 : -1;
    stepButton.setAttribute('aria-pressed', String(index === detailIndex));
    stepButton.setAttribute(
      'aria-label',
      `Etapa ${index + 1}, ${stepState}: ${journeys[dialog.dataset.profile][index]}`,
    );
    stepStatus.textContent = stepState;
    if (index === currentStep && !finished) {
      item.setAttribute('aria-current', 'step');
    } else {
      item.removeAttribute('aria-current');
    }
  });

  dialogProgress.textContent = finished
    ? 'Simulação concluída. Nenhuma alteração real foi realizada.'
    : `Etapa ${currentStep + 1} de ${items.length}: ${items[currentStep].textContent}`;
  dialogStickyContext.textContent = finished
    ? `${dialog.dataset.profile} · concluída`
    : `${dialog.dataset.profile} · etapa ${currentStep + 1} de ${items.length}`;
  dialogProgress.setAttribute('aria-valuemax', String(items.length));
  dialogProgress.setAttribute('aria-valuenow', String(Math.min(currentStep, items.length)));
  dialogProgress.setAttribute('aria-valuetext', dialogProgress.textContent);
  dialogProgress.setAttribute('aria-label', `Progresso da jornada de ${dialog.dataset.profile}`);
  document.title = finished
    ? `${dialog.dataset.profile} · jornada concluída — ${defaultDocumentTitle}`
    : `${dialog.dataset.profile} · etapa ${currentStep + 1} de ${items.length} — ${defaultDocumentTitle}`;
  [dialogDetailTitle.textContent, dialogDetailDescription.textContent] = journeyDetails[dialog.dataset.profile][detailIndex];
  const selectedFile = syntheticFiles[selectedSyntheticFile];
  if (selectedFile && detailIndex === 0 && ['Cliente', 'Parceiro'].includes(dialog.dataset.profile)) {
    dialogDetailDescription.textContent = dialog.dataset.profile === 'Cliente'
      ? `${selectedFile.name} · ${selectedFile.pages} páginas · arquivo inexistente usado somente nesta tela.`
      : `DEMO-071 · ${selectedFile.pages} páginas P&B · nenhum pedido real foi atribuído.`;
  }
  if (dialog.dataset.profile === 'Cliente' && detailIndex === 1 && selectedSyntheticFulfillment) {
    dialogDetailDescription.textContent = `R$ 18,00 fictícios · impressão P&B · ${syntheticFulfillmentOptions[selectedSyntheticFulfillment].toLowerCase()}.`;
  }
  if (dialog.dataset.profile === 'Cliente' && detailIndex === 2 && selectedSyntheticProduction) {
    dialogDetailDescription.textContent = `Pedido DEMO-071 · ${syntheticProductionOptions[selectedSyntheticProduction].toLowerCase()} · estado compartilhado somente nesta sessão local.`;
  }
  if (dialog.dataset.profile === 'Administrador' && detailIndex === 0 && selectedSyntheticOrderFilter) {
    const filteredOrderCount = filteredSyntheticOrderCount();
    dialogDetailDescription.textContent = `Filtro local: ${syntheticOrderFilterOptions[selectedSyntheticOrderFilter]} · ${filteredOrderCount} pedido${filteredOrderCount === 1 ? '' : 's'} sintético${filteredOrderCount === 1 ? '' : 's'} exibido${filteredOrderCount === 1 ? '' : 's'} · 0 pedidos reais consultados.`;
  }
  dialogHandoffStatus.textContent = handoffStatuses[dialog.dataset.profile][detailIndex];
  dialogHandoffAction.disabled = !finished;
  dialogHandoffAction.textContent = finished
    ? `Continuar como ${nextProfile[dialog.dataset.profile]}`
    : 'Conclua as 3 etapas para continuar';
  dialogHandoffAction.setAttribute(
    'aria-label',
    finished
      ? `Abrir a visão de ${nextProfile[dialog.dataset.profile]} para o pedido sintético DEMO-071`
      : `Continue a simulação antes de abrir a visão de ${nextProfile[dialog.dataset.profile]}`,
  );
  previousButton.disabled = currentStep === 0;
  previousButton.textContent = currentStep > 0
    ? `Reabrir etapa ${Math.min(currentStep, items.length)} de ${items.length}`
    : 'Nenhuma etapa anterior para reabrir';
  previousButton.setAttribute(
    'aria-label',
    currentStep > 0
      ? `Reabrir a etapa ${Math.min(currentStep, items.length)} da jornada de ${dialog.dataset.profile}; o progresso desta etapa voltará a pendente`
      : `Nenhuma etapa concluída para reabrir na jornada de ${dialog.dataset.profile}`,
  );
  const orderFilterChoiceRequired = requiresSyntheticOrderFilter() && !selectedSyntheticOrderFilter;
  nextButton.setAttribute('aria-disabled', String(!finished && (!prerequisiteReady || fileChoiceRequired || quoteReviewRequired || fulfillmentChoiceRequired || trackingChoiceRequired || capacityChoiceRequired || requirementsChoiceRequired || productionChoiceRequired || orderFilterChoiceRequired || exceptionChoiceRequired || historyChoiceRequired)));
  syntheticFileChoice.hidden = dialog.dataset.profile !== 'Cliente' || selectedStep !== 0;
  syntheticFileSelect.value = selectedSyntheticFile;
  syntheticFileSelect.setAttribute(
    'aria-invalid',
    String(fileChoiceRequired && syntheticFileValidationRequested),
  );
  if (!syntheticFileChoice.hidden && !selectedSyntheticFile) {
    syntheticFileStatus.textContent = 'Selecione uma opção sintética para concluir esta etapa.';
  }
  syntheticFulfillmentChoice.hidden = dialog.dataset.profile !== 'Cliente' || selectedStep !== 1;
  syntheticQuoteReviewSelect.value = selectedSyntheticQuoteReview;
  syntheticQuoteReviewSelect.setAttribute(
    'aria-invalid',
    String(quoteReviewRequired && syntheticQuoteValidationRequested),
  );
  if (!syntheticFulfillmentChoice.hidden && selectedSyntheticQuoteReview !== 'revisado') {
    syntheticQuoteStatus.textContent = selectedSyntheticQuoteReview === 'ajuste'
      ? 'Ajuste sinalizado: marque o orçamento fictício como revisado para continuar.'
      : 'Revise o orçamento demonstrativo para concluir esta etapa.';
  }
  syntheticFulfillmentSelect.value = selectedSyntheticFulfillment;
  syntheticFulfillmentSelect.setAttribute(
    'aria-invalid',
    String(fulfillmentChoiceRequired && syntheticFulfillmentValidationRequested),
  );
  if (!syntheticFulfillmentChoice.hidden && !selectedSyntheticFulfillment) {
    syntheticFulfillmentStatus.textContent = 'Selecione como o pedido fictício será recebido para concluir esta etapa.';
  }
  syntheticTrackingChoice.hidden = dialog.dataset.profile !== 'Cliente' || selectedStep !== 2;
  syntheticTrackingSelect.value = selectedSyntheticTracking;
  syntheticTrackingSelect.setAttribute(
    'aria-invalid',
    String(trackingChoiceRequired && syntheticTrackingValidationRequested),
  );
  if (!syntheticTrackingChoice.hidden && !selectedSyntheticTracking) {
    syntheticTrackingStatus.textContent = 'Confira o status sintético para concluir esta etapa.';
  }
  syntheticCapacityChoice.hidden = dialog.dataset.profile !== 'Parceiro' || selectedStep !== 0;
  syntheticCapacitySelect.value = selectedSyntheticCapacity;
  syntheticCapacitySelect.setAttribute(
    'aria-invalid',
    String(capacityChoiceRequired && syntheticCapacityValidationRequested),
  );
  if (!syntheticCapacityChoice.hidden && selectedSyntheticCapacity !== 'compativel') {
    syntheticCapacityStatus.textContent = selectedSyntheticCapacity === 'revisao'
      ? 'Revisão sinalizada: confirme a capacidade fictícia como compatível para continuar.'
      : 'Selecione uma avaliação sintética para concluir esta etapa.';
  }
  syntheticRequirementsChoice.hidden = dialog.dataset.profile !== 'Parceiro' || selectedStep !== 1;
  syntheticRequirementsSelect.value = selectedSyntheticRequirements;
  syntheticRequirementsSelect.setAttribute(
    'aria-invalid',
    String(requirementsChoiceRequired && syntheticRequirementsValidationRequested),
  );
  if (!syntheticRequirementsChoice.hidden && selectedSyntheticRequirements !== 'revisados') {
    syntheticRequirementsStatus.textContent = selectedSyntheticRequirements === 'ajuste'
      ? 'Ajuste sinalizado: revise os requisitos fictícios para continuar.'
      : 'Revise os requisitos fictícios para concluir esta etapa.';
  }
  syntheticProductionChoice.hidden = dialog.dataset.profile !== 'Parceiro' || selectedStep !== 2;
  syntheticProductionSelect.value = selectedSyntheticProduction;
  syntheticProductionSelect.setAttribute(
    'aria-invalid',
    String(productionChoiceRequired && syntheticProductionValidationRequested),
  );
  if (!syntheticProductionChoice.hidden && !selectedSyntheticProduction) {
    syntheticProductionStatus.textContent = 'Selecione uma etapa sintética para concluir esta etapa.';
  }
  syntheticOrderFilterChoice.hidden = dialog.dataset.profile !== 'Administrador' || selectedStep !== 0;
  syntheticOrderFilterSelect.value = selectedSyntheticOrderFilter;
  syntheticOrderFilterSelect.setAttribute(
    'aria-invalid',
    String(orderFilterChoiceRequired && syntheticOrderFilterValidationRequested),
  );
  if (!syntheticOrderFilterChoice.hidden) {
    syntheticOrderFilterStatus.textContent = syntheticOrderFilterMessage();
  }
  syntheticExceptionChoice.hidden = dialog.dataset.profile !== 'Administrador' || selectedStep !== 1;
  syntheticExceptionSelect.value = selectedSyntheticException;
  syntheticExceptionSelect.setAttribute(
    'aria-invalid',
    String(exceptionChoiceRequired && syntheticExceptionValidationRequested),
  );
  if (!syntheticExceptionChoice.hidden && !selectedSyntheticException) {
    syntheticExceptionStatus.textContent = 'Selecione uma decisão sintética para concluir esta etapa.';
  }
  syntheticHistoryChoice.hidden = dialog.dataset.profile !== 'Administrador' || selectedStep !== 2;
  syntheticHistorySelect.value = selectedSyntheticHistory;
  syntheticHistorySelect.setAttribute(
    'aria-invalid',
    String(historyChoiceRequired && syntheticHistoryValidationRequested),
  );
  if (!syntheticHistoryChoice.hidden && !selectedSyntheticHistory) {
    syntheticHistoryStatus.textContent = 'Selecione um resultado sintético para concluir esta etapa.';
  }
  const choicesByProfile = {
    Cliente: [selectedSyntheticFile, selectedSyntheticQuoteReview || selectedSyntheticFulfillment, selectedSyntheticTracking],
    Parceiro: [selectedSyntheticCapacity, selectedSyntheticRequirements, selectedSyntheticProduction],
    Administrador: [selectedSyntheticOrderFilter, selectedSyntheticException, selectedSyntheticHistory],
  };
  clearChoiceButton.hidden = !choicesByProfile[dialog.dataset.profile][selectedStep];
  clearChoiceButton.setAttribute(
    'aria-label',
    `Limpar a resposta sintética da etapa ${selectedStep + 1} da jornada de ${dialog.dataset.profile}`,
  );
  dialogPrerequisiteStatus.dataset.ready = String(prerequisiteReady);
  dialogPrerequisiteStatus.textContent = prerequisite
    ? prerequisiteReady
      ? `Pré-requisito concluído: a jornada de ${prerequisite} liberou esta simulação.`
      : `Avanço pausado: conclua primeiro a jornada de ${prerequisite}. Esta visão continua disponível para consulta.`
    : 'Fluxo inicial: esta jornada não depende de outro perfil.';
  dialogPrerequisiteAction.hidden = !prerequisite || prerequisiteReady;
  if (prerequisite && !prerequisiteReady) {
    dialogPrerequisiteAction.dataset.profile = prerequisite;
    dialogPrerequisiteAction.textContent = `Ir para a jornada de ${prerequisite}`;
    dialogPrerequisiteAction.setAttribute(
      'aria-label',
      `Abrir a jornada de ${prerequisite}, pré-requisito para continuar como ${dialog.dataset.profile}`,
    );
  }
  restartButton.hidden = currentStep === 0;
  const nextActionText = finished
    ? `Continuar como ${nextProfile[dialog.dataset.profile]}`
    : !prerequisiteReady
      ? `Conclua primeiro a jornada de ${prerequisite}`
    : fileChoiceRequired
      ? 'Escolha um PDF sintético para continuar'
      : quoteReviewRequired
        ? 'Revise o orçamento fictício para continuar'
      : fulfillmentChoiceRequired
        ? 'Escolha retirada ou entrega fictícia para continuar'
      : trackingChoiceRequired
        ? 'Confira o status fictício para continuar'
      : capacityChoiceRequired
        ? 'Avalie a capacidade fictícia para continuar'
      : requirementsChoiceRequired
        ? 'Revise os requisitos fictícios para continuar'
      : productionChoiceRequired
        ? 'Atualize a produção fictícia para continuar'
      : orderFilterChoiceRequired
        ? 'Filtre o painel fictício para continuar'
      : exceptionChoiceRequired
        ? 'Avalie a exceção fictícia para continuar'
      : historyChoiceRequired
        ? 'Confira o histórico fictício para continuar'
      : `Concluir etapa ${currentStep + 1} de ${items.length}`;
  const nextActionStatusId = fileChoiceRequired
    ? 'synthetic-file-status'
    : quoteReviewRequired
      ? 'synthetic-quote-status'
      : fulfillmentChoiceRequired
        ? 'synthetic-fulfillment-status'
        : trackingChoiceRequired
          ? 'synthetic-tracking-status'
          : capacityChoiceRequired
            ? 'synthetic-capacity-status'
            : requirementsChoiceRequired
              ? 'synthetic-requirements-status'
              : productionChoiceRequired
                ? 'synthetic-production-status'
                : orderFilterChoiceRequired
                  ? 'synthetic-order-filter-status'
                  : exceptionChoiceRequired
                    ? 'synthetic-exception-status'
                    : historyChoiceRequired
                      ? 'synthetic-history-status'
                      : '';
  nextButton.textContent = nextActionText;
  nextButton.setAttribute(
    'aria-describedby',
    ['dialog-prerequisite-status', nextActionStatusId].filter(Boolean).join(' '),
  );
  nextButton.setAttribute(
    'aria-label',
    finished
      ? `${nextActionText} no pedido sintético DEMO-071`
      : `${nextActionText} da jornada de ${dialog.dataset.profile}; nenhuma ação real será executada`,
  );

  dialogProfileButtons.forEach((button) => {
    const profile = button.dataset.dialogProfile;
    const savedStep = progressByProfile[profile];
    const totalSteps = journeys[profile].length;
    const progressText = savedStep >= totalSteps
      ? 'roteiro concluído'
      : `etapa ${savedStep + 1} de ${totalSteps}`;
    button.setAttribute('aria-label', `${profile}: ${progressText}`);
  });

  const completedJourneys = Object.keys(journeys).filter(
    (profile) => progressByProfile[profile] >= journeys[profile].length,
  ).length;
  journeyOverallStatus.textContent = completedJourneys === Object.keys(journeys).length
    ? 'Fluxo coordenado concluído nos três perfis.'
    : `${completedJourneys} de ${Object.keys(journeys).length} jornadas concluídas.`;

  const clientFinished = progressByProfile.Cliente >= journeys.Cliente.length;
  const partnerFinished = progressByProfile.Parceiro >= journeys.Parceiro.length;
  const adminFinished = progressByProfile.Administrador >= journeys.Administrador.length;
  const sharedStatus = !clientFinished
    ? 'Em preparação fictícia pelo cliente.'
    : !partnerFinished
      ? 'Disponível somente na fila fictícia do parceiro.'
      : !adminFinished
        ? 'Produção simulada atualizada; revisão administrativa pendente.'
        : 'Ciclo local concluído; nenhuma ação real foi executada.';
  journeySharedStatus.textContent = `Estado compartilhado do pedido DEMO-071: ${sharedStatus}`;

  journeySummaryList.replaceChildren(...Object.keys(journeys).map((profile) => {
    const item = document.createElement('li');
    const profileButton = document.createElement('button');
    const savedStep = progressByProfile[profile];
    const totalSteps = journeys[profile].length;
    const progressText = savedStep >= totalSteps
      ? 'concluída'
      : `${savedStep} de ${totalSteps} etapas concluídas`;

    profileButton.type = 'button';
    profileButton.className = 'journey-summary-profile';
    profileButton.setAttribute('aria-controls', 'dialog-steps');
    profileButton.textContent = profile;
    profileButton.setAttribute(
      'aria-label',
      profile === dialog.dataset.profile
        ? `Jornada atual, ${profile}: ${progressText}`
        : `Abrir jornada de ${profile}: ${progressText}`,
    );
    if (profile === dialog.dataset.profile) {
      profileButton.setAttribute('aria-current', 'page');
    }
    profileButton.addEventListener('click', () => {
      selectProfile(profile);
      dialogTitle.focus();
    });
    item.append(profileButton, `: ${progressText}`);
    return item;
  }));

  const nextIncompleteProfile = Object.keys(journeys).find(
    (profile) => progressByProfile[profile] < journeys[profile].length,
  );
  journeyContinueAction.disabled = !nextIncompleteProfile;
  journeyContinueAction.textContent = nextIncompleteProfile
    ? `Continuar jornada pendente: ${nextIncompleteProfile}`
    : 'Todas as jornadas foram concluídas';
  journeyContinueAction.setAttribute(
    'aria-label',
    nextIncompleteProfile
      ? `Abrir a próxima jornada pendente, perfil ${nextIncompleteProfile}`
      : 'As três jornadas fictícias foram concluídas',
  );

  updateJourneyReview();

  renderProfileProgress();
}

journeyReviewAction.addEventListener('click', () => {
  const willOpen = journeyReview.hidden;
  journeyReview.hidden = !willOpen;
  journeyReviewAction.setAttribute('aria-expanded', String(willOpen));
  journeyReviewAction.textContent = willOpen
    ? 'Ocultar resumo para revisão'
    : 'Preparar resumo para revisão';

  if (willOpen) {
    updateJourneyReview();
    journeyReviewText.focus();
    journeyReviewText.select();
    focusStepStatus.textContent = 'Resumo local preparado e selecionado para revisão.';
  }
});

function closeJourneyReview() {
  journeyReview.hidden = true;
  journeyReviewAction.setAttribute('aria-expanded', 'false');
  journeyReviewAction.textContent = 'Preparar resumo para revisão';
  focusStepStatus.textContent = 'Resumo local fechado. Foco devolvido ao controle que abre a revisão.';
  journeyReviewAction.focus();
}

journeyReviewClose.addEventListener('click', closeJourneyReview);

journeyReviewCopy.addEventListener('click', async () => {
  updateJourneyReview();
  journeyReviewText.focus();
  journeyReviewText.select();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(journeyReviewText.value);
    } else if (!document.execCommand('copy')) {
      throw new Error('Copia local indisponível');
    }
    journeyReviewCopyStatus.textContent = 'Resumo sintético copiado para a área de transferência local.';
  } catch {
    journeyReviewCopyStatus.textContent = 'A cópia automática foi bloqueada. O resumo está selecionado para você copiá-lo manualmente.';
  }
});

journeyReviewDownload.addEventListener('click', () => {
  updateJourneyReview();
  const summaryFile = new Blob([journeyReviewText.value], { type: 'text/plain;charset=utf-8' });
  const summaryUrl = URL.createObjectURL(summaryFile);
  const downloadLink = document.createElement('a');
  downloadLink.href = summaryUrl;
  downloadLink.download = 'pedido-demo-071-resumo.txt';
  downloadLink.hidden = true;
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  setTimeout(() => URL.revokeObjectURL(summaryUrl), 0);
  journeyReviewCopyStatus.textContent = 'Resumo sintético baixado como TXT neste dispositivo. Nenhum dado foi enviado.';
});

journeyReviewPrint.addEventListener('click', () => {
  updateJourneyReview();
  journeyReviewCopyStatus.textContent = 'Visualização de impressão aberta com o resumo sintético. Nenhum dado foi enviado.';
  window.print();
});

journeyContinueAction.addEventListener('click', () => {
  const nextIncompleteProfile = Object.keys(journeys).find(
    (profile) => progressByProfile[profile] < journeys[profile].length,
  );
  if (!nextIncompleteProfile) return;

  selectProfile(nextIncompleteProfile);
  dialogTitle.focus();
});

dialogPrerequisiteAction.addEventListener('click', () => {
  const prerequisite = dialogPrerequisiteAction.dataset.profile;
  if (!journeys[prerequisite]) return;

  selectProfile(prerequisite);
  dialogTitle.focus();
});

function selectProfile(profile, { historyMode = 'replace' } = {}) {
    const profileHash = `#${profileSlugs[profile]}`;
    if (historyMode === 'push' && window.location.hash !== profileHash) {
      history.pushState(null, '', profileHash);
    } else if (historyMode === 'replace') {
      history.replaceState(null, '', profileHash);
    }
    setLastProfile(profile);
    cancelResetAll();
    resetStatus.textContent = '';
    dialog.dataset.profile = profile;
    dialogTitle.textContent = `Visão: ${profile}`;
    dialogProfileButtons.forEach((button) => {
      const selected = button.dataset.dialogProfile === profile;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected) dialogSteps.setAttribute('aria-labelledby', button.id);
    });
    dialogSteps.replaceChildren(...journeys[profile].map((step, index) => {
      const item = document.createElement('li');
      const stepButton = document.createElement('button');
      const stepStatus = document.createElement('span');
      stepButton.type = 'button';
      stepButton.className = 'dialog-step';
      stepButton.setAttribute('aria-controls', 'dialog-detail');
      stepButton.setAttribute('aria-keyshortcuts', 'ArrowLeft ArrowRight ArrowUp ArrowDown Home End');
      stepButton.textContent = step;
      stepStatus.className = 'dialog-step-status';
      stepStatus.setAttribute('aria-hidden', 'true');
      stepButton.addEventListener('click', () => {
        selectedStep = index;
        renderProgress();
        focusStepStatus.textContent = `${profile}: detalhes da etapa ${index + 1} exibidos. O progresso não foi alterado.`;
      });
      stepButton.addEventListener('keydown', (event) => {
        const lastStep = journeys[profile].length - 1;
        const destinations = {
          ArrowDown: Math.min(index + 1, lastStep),
          ArrowRight: Math.min(index + 1, lastStep),
          ArrowUp: Math.max(index - 1, 0),
          ArrowLeft: Math.max(index - 1, 0),
          Home: 0,
          End: lastStep,
        };

        if (!(event.key in destinations)) return;

        event.preventDefault();
        const destination = destinations[event.key];
        selectedStep = destination;
        renderProgress();
        [...dialogSteps.querySelectorAll('button')].forEach((button, buttonIndex) => {
          button.tabIndex = buttonIndex === destination ? 0 : -1;
        });
        dialogSteps.children[destination].querySelector('button').focus();
      });
      item.append(stepButton, stepStatus);
      return item;
    }));
    currentStep = progressByProfile[profile];
    selectedStep = Math.min(currentStep, journeys[profile].length - 1);
    renderProgress();
    const totalSteps = journeys[profile].length;
    dialogProfileStatus.textContent = currentStep >= totalSteps
      ? `Perfil ${profile} selecionado. Jornada fictícia concluída.`
      : `Perfil ${profile} selecionado. ${currentStep} de ${totalSteps} etapas concluídas.`;
}

profileButtons.forEach((button) => {
  button.addEventListener('click', () => {
    triggerButton = button;
    setDialogTriggerState(button);
    selectProfile(button.dataset.profile, { historyMode: 'push' });
    openDialog();
    dialogTitle.focus();
  });
});

document.addEventListener('keydown', (event) => {
  if (dialog.open || !event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  const shortcutProfiles = {
    1: 'Cliente',
    2: 'Parceiro',
    3: 'Administrador',
  };
  const profile = shortcutProfiles[event.key];
  if (!profile) return;

  event.preventDefault();
  const profileButton = [...profileButtons].find((button) => button.dataset.profile === profile);
  profileButton.click();
});

resumeAction.addEventListener('click', () => {
  const profile = resumeAction.dataset.profile;
  triggerButton = resumeAction;
  setDialogTriggerState(resumeAction);
  selectProfile(profile, { historyMode: 'push' });
  openDialog();
  dialogTitle.focus();
});

dialogProfileButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectProfile(button.dataset.dialogProfile);
  });
  button.addEventListener('keydown', (event) => {
    const buttons = [...dialogProfileButtons];
    const index = buttons.indexOf(button);
    const destinations = {
      ArrowRight: (index + 1) % buttons.length,
      ArrowDown: (index + 1) % buttons.length,
      ArrowLeft: (index - 1 + buttons.length) % buttons.length,
      ArrowUp: (index - 1 + buttons.length) % buttons.length,
      Home: 0,
      End: buttons.length - 1,
    };

    if (!(event.key in destinations)) return;

    event.preventDefault();
    const destination = buttons[destinations[event.key]];
    destination.focus();
  });
});

dialog.addEventListener('keydown', (event) => {
  if (!event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  if (event.key === '0') {
    event.preventDefault();
    closeDialog();
    return;
  }

  const navigationButtons = {
    n: nextButton,
    v: previousButton,
  };
  const navigationButton = navigationButtons[event.key.toLowerCase()];
  if (navigationButton) {
    event.preventDefault();
    const wasUnavailable = navigationButton === nextButton
      && nextButton.getAttribute('aria-disabled') === 'true';
    if (!navigationButton.disabled) navigationButton.click();
    if (!wasUnavailable) navigationButton.focus();
    return;
  }

  if (event.key.toLowerCase() === 'a') {
    event.preventDefault();
    toggleAnnouncements();
    announcementsToggle.focus();
    return;
  }

  if (event.key.toLowerCase() === 'm') {
    event.preventDefault();
    focusModeButton.click();
    focusModeButton.focus();
    return;
  }

  if (event.key.toLowerCase() === 'r') {
    event.preventDefault();
    journeySummaryTitle.focus();
    focusStepStatus.textContent = 'Foco movido para o resumo das três jornadas fictícias.';
    return;
  }

  if (event.key.toLowerCase() === 'p') {
    event.preventDefault();
    journeyReviewAction.click();
    if (journeyReview.hidden) journeyReviewAction.focus();
    return;
  }

  if (event.key.toLowerCase() === 'd') {
    event.preventDefault();
    dialogDetail.focus();
    focusStepStatus.textContent = `${dialog.dataset.profile}: foco movido para os detalhes da etapa ${selectedStep + 1}.`;
    return;
  }

  if (event.key.toLowerCase() === 'i') {
    event.preventDefault();
    focusFieldButton.click();
    return;
  }

  if (event.key.toLowerCase() === 'l' && !clearChoiceButton.hidden) {
    event.preventDefault();
    clearChoiceButton.click();
    return;
  }

  if (event.key.toLowerCase() === 'c' && !cancelResetButton.hidden) {
    event.preventDefault();
    cancelResetButton.click();
    return;
  }

  if (event.key.toLowerCase() === 'e') {
    event.preventDefault();
    focusStepButton.click();
    return;
  }

  if (event.key.toLowerCase() === 'g') {
    event.preventDefault();
    nextButton.focus();
    focusStepStatus.textContent = 'Foco movido para as ações de avanço da jornada fictícia.';
    return;
  }

  if (event.key.toLowerCase() === 'h') {
    event.preventDefault();
    keyboardHelp.open = !keyboardHelp.open;
    keyboardHelpSummary.focus();
    focusStepStatus.textContent = keyboardHelp.open
      ? 'Ajuda de teclado aberta.'
      : 'Ajuda de teclado fechada.';
    return;
  }

  const shortcutProfiles = {
    1: 'Cliente',
    2: 'Parceiro',
    3: 'Administrador',
  };
  const profile = shortcutProfiles[event.key];
  if (!profile) return;

  event.preventDefault();
  selectProfile(profile);
  dialogProfileButtons.forEach((button) => {
    if (button.dataset.dialogProfile === profile) button.focus();
  });
});

focusStepButton.addEventListener('click', () => {
  const activeStep = Math.min(currentStep, dialogSteps.children.length - 1);
  selectedStep = activeStep;
  renderProgress();
  const activeStepButton = dialogSteps.children[activeStep].querySelector('button');
  activeStepButton.focus();
  focusStepStatus.textContent = `${dialog.dataset.profile}: foco movido para ${activeStepButton.textContent}`;
});

focusDetailButton.addEventListener('click', () => {
  dialogDetail.focus();
  focusStepStatus.textContent = `${dialog.dataset.profile}: foco movido para os detalhes da etapa ${selectedStep + 1}.`;
});

focusFieldButton.addEventListener('click', () => {
  if (!dialogPrerequisiteAction.hidden) {
    dialogPrerequisiteAction.focus();
    focusStepStatus.textContent = `Foco movido para o pré-requisito pendente: ${dialogPrerequisiteAction.textContent}.`;
    return;
  }

  const visibleField = [...dialogDetail.querySelectorAll('select')].find(
    (field) => !field.closest('[hidden]'),
  );
  if (visibleField) {
    visibleField.focus();
    focusStepStatus.textContent = `${dialog.dataset.profile}: foco movido para o campo interativo da etapa ${selectedStep + 1}.`;
    return;
  }

  dialogDetail.focus();
  focusStepStatus.textContent = `${dialog.dataset.profile}: esta etapa não possui campo interativo; foco movido para os detalhes.`;
});

focusSummaryButton.addEventListener('click', () => {
  journeySummaryTitle.focus();
  focusStepStatus.textContent = 'Foco movido para o resumo das três jornadas fictícias.';
});

focusNavigationButton.addEventListener('click', () => {
  nextButton.focus();
  focusStepStatus.textContent = 'Foco movido para as ações de avanço da jornada fictícia.';
});

dialogHandoffAction.addEventListener('click', () => {
  selectProfile(nextProfile[dialog.dataset.profile]);
  dialogTitle.focus();
});

nextButton.addEventListener('click', () => {
  if (nextButton.getAttribute('aria-disabled') === 'true') {
    selectedStep = Math.min(currentStep, dialogSteps.children.length - 1);
    renderProgress();
    const prerequisite = prerequisiteProfile[dialog.dataset.profile];
    const prerequisiteReady = !prerequisite
      || progressByProfile[prerequisite] >= journeys[prerequisite].length;
    if (!prerequisiteReady) {
      focusStepStatus.textContent = `Avanço indisponível: conclua primeiro a jornada de ${prerequisite}.`;
      dialogPrerequisiteAction.focus();
      return;
    }
    if (requiresSyntheticFile() && !selectedSyntheticFile) {
      syntheticFileValidationRequested = true;
      syntheticFileSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: escolha primeiro um dos PDFs sintéticos.';
      syntheticFileSelect.focus();
      return;
    }
    if (requiresSyntheticFulfillment() && selectedSyntheticQuoteReview !== 'revisado') {
      syntheticQuoteValidationRequested = true;
      syntheticQuoteReviewSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = selectedSyntheticQuoteReview === 'ajuste'
        ? 'Avanço indisponível: o orçamento fictício está sinalizado para ajuste.'
        : 'Avanço indisponível: revise primeiro o orçamento inteiramente fictício.';
      syntheticQuoteReviewSelect.focus();
      return;
    }
    if (requiresSyntheticFulfillment() && !selectedSyntheticFulfillment) {
      syntheticFulfillmentValidationRequested = true;
      syntheticFulfillmentSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: escolha retirada ou entrega fictícia.';
      syntheticFulfillmentSelect.focus();
      return;
    }
    if (requiresSyntheticTracking() && !selectedSyntheticTracking) {
      syntheticTrackingValidationRequested = true;
      syntheticTrackingSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: confira primeiro o status fictício do pedido.';
      syntheticTrackingSelect.focus();
      return;
    }
    if (requiresSyntheticCapacity() && selectedSyntheticCapacity !== 'compativel') {
      syntheticCapacityValidationRequested = true;
      syntheticCapacitySelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = selectedSyntheticCapacity === 'revisao'
        ? 'Avanço indisponível: a capacidade fictícia está sinalizada para revisão.'
        : 'Avanço indisponível: avalie primeiro a capacidade fictícia.';
      syntheticCapacitySelect.focus();
      return;
    }
    if (requiresSyntheticRequirements() && selectedSyntheticRequirements !== 'revisados') {
      syntheticRequirementsValidationRequested = true;
      syntheticRequirementsSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = selectedSyntheticRequirements === 'ajuste'
        ? 'Avanço indisponível: os requisitos fictícios estão sinalizados para ajuste.'
        : 'Avanço indisponível: revise primeiro os requisitos fictícios.';
      syntheticRequirementsSelect.focus();
      return;
    }
    if (requiresSyntheticProduction() && !selectedSyntheticProduction) {
      syntheticProductionValidationRequested = true;
      syntheticProductionSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: atualize primeiro a produção fictícia.';
      syntheticProductionSelect.focus();
      return;
    }
    if (requiresSyntheticException() && !selectedSyntheticException) {
      syntheticExceptionValidationRequested = true;
      syntheticExceptionSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: avalie primeiro a exceção fictícia.';
      syntheticExceptionSelect.focus();
      return;
    }
    if (requiresSyntheticOrderFilter() && !selectedSyntheticOrderFilter) {
      syntheticOrderFilterValidationRequested = true;
      syntheticOrderFilterSelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: filtre primeiro o painel administrativo fictício.';
      syntheticOrderFilterSelect.focus();
      return;
    }
    if (requiresSyntheticHistory() && !selectedSyntheticHistory) {
      syntheticHistoryValidationRequested = true;
      syntheticHistorySelect.setAttribute('aria-invalid', 'true');
      focusStepStatus.textContent = 'Avanço indisponível: confira primeiro o histórico fictício.';
      syntheticHistorySelect.focus();
      return;
    }
    return;
  }

  if (currentStep >= dialogSteps.children.length) {
    selectProfile(nextProfile[dialog.dataset.profile]);
    dialogTitle.focus();
    return;
  }

  currentStep += 1;
  selectedStep = Math.min(currentStep, dialogSteps.children.length - 1);
  renderProgress();
});

previousButton.addEventListener('click', () => {
  currentStep = Math.max(0, currentStep - 1);
  selectedStep = currentStep;
  renderProgress();
});

clearChoiceButton.addEventListener('click', () => {
  const profile = dialog.dataset.profile;
  const storageKeys = [];
  let fieldToFocus = null;

  if (profile === 'Cliente' && selectedStep === 0) {
    selectedSyntheticFile = '';
    syntheticFileValidationRequested = false;
    storageKeys.push(syntheticFileStorageKey);
    fieldToFocus = syntheticFileSelect;
  } else if (profile === 'Cliente' && selectedStep === 1) {
    selectedSyntheticQuoteReview = '';
    selectedSyntheticFulfillment = '';
    syntheticQuoteValidationRequested = false;
    syntheticFulfillmentValidationRequested = false;
    storageKeys.push(syntheticQuoteReviewStorageKey, syntheticFulfillmentStorageKey);
    fieldToFocus = syntheticQuoteReviewSelect;
  } else if (profile === 'Cliente' && selectedStep === 2) {
    selectedSyntheticTracking = '';
    syntheticTrackingValidationRequested = false;
    storageKeys.push(syntheticTrackingStorageKey);
    fieldToFocus = syntheticTrackingSelect;
  } else if (profile === 'Parceiro' && selectedStep === 0) {
    selectedSyntheticCapacity = '';
    syntheticCapacityValidationRequested = false;
    storageKeys.push(syntheticCapacityStorageKey);
    fieldToFocus = syntheticCapacitySelect;
  } else if (profile === 'Parceiro' && selectedStep === 1) {
    selectedSyntheticRequirements = '';
    syntheticRequirementsValidationRequested = false;
    storageKeys.push(syntheticRequirementsStorageKey);
    fieldToFocus = syntheticRequirementsSelect;
  } else if (profile === 'Parceiro' && selectedStep === 2) {
    selectedSyntheticProduction = '';
    syntheticProductionValidationRequested = false;
    storageKeys.push(syntheticProductionStorageKey);
    fieldToFocus = syntheticProductionSelect;
  } else if (profile === 'Administrador' && selectedStep === 0) {
    selectedSyntheticOrderFilter = '';
    syntheticOrderFilterValidationRequested = false;
    storageKeys.push(syntheticOrderFilterStorageKey);
    fieldToFocus = syntheticOrderFilterSelect;
  } else if (profile === 'Administrador' && selectedStep === 1) {
    selectedSyntheticException = '';
    syntheticExceptionValidationRequested = false;
    storageKeys.push(syntheticExceptionStorageKey);
    fieldToFocus = syntheticExceptionSelect;
  } else if (profile === 'Administrador' && selectedStep === 2) {
    selectedSyntheticHistory = '';
    syntheticHistoryValidationRequested = false;
    storageKeys.push(syntheticHistoryStorageKey);
    fieldToFocus = syntheticHistorySelect;
  }

  if (!fieldToFocus) return;

  currentStep = Math.min(currentStep, selectedStep);
  try {
    storageKeys.forEach((storageKey) => sessionStorage.removeItem(storageKey));
  } catch {
    // A limpeza continua válida em memória quando o armazenamento local falha.
  }
  renderProgress();
  focusStepStatus.textContent = `${profile}: resposta da etapa ${selectedStep + 1} limpa. Escolha uma nova opção para continuar.`;
  fieldToFocus.focus();
});

restartButton.addEventListener('click', () => {
  if (!restartPending) {
    cancelResetAll();
    resetStatus.textContent = '';
    restartPending = true;
    cancelResetButton.hidden = false;
    restartButton.textContent = 'Confirmar reinício do roteiro';
    restartButton.setAttribute('aria-pressed', 'true');
    restartStatus.textContent = `Pressione novamente em até 8 segundos para reiniciar somente a jornada de ${dialog.dataset.profile}.`;
    restartTimeout = setTimeout(() => {
      cancelRestart();
      restartStatus.textContent = 'Tempo de confirmação encerrado. O progresso local foi preservado.';
    }, confirmationTimeoutMs);
    return;
  }

  currentStep = 0;
  selectedStep = 0;
  if (dialog.dataset.profile === 'Cliente') {
    selectedSyntheticFile = '';
    syntheticFileValidationRequested = false;
    syntheticFileSelect.value = '';
    selectedSyntheticQuoteReview = '';
    syntheticQuoteValidationRequested = false;
    syntheticQuoteReviewSelect.value = '';
    selectedSyntheticFulfillment = '';
    syntheticFulfillmentValidationRequested = false;
    syntheticFulfillmentSelect.value = '';
    selectedSyntheticTracking = '';
    syntheticTrackingValidationRequested = false;
    syntheticTrackingSelect.value = '';
    try {
      sessionStorage.removeItem(syntheticFileStorageKey);
      sessionStorage.removeItem(syntheticQuoteReviewStorageKey);
      sessionStorage.removeItem(syntheticFulfillmentStorageKey);
      sessionStorage.removeItem(syntheticTrackingStorageKey);
    } catch {
      // O reinício continua válido em memória quando o armazenamento local falha.
    }
  }
  if (dialog.dataset.profile === 'Parceiro') {
    selectedSyntheticCapacity = '';
    syntheticCapacityValidationRequested = false;
    syntheticCapacitySelect.value = '';
    selectedSyntheticRequirements = '';
    syntheticRequirementsValidationRequested = false;
    syntheticRequirementsSelect.value = '';
    selectedSyntheticProduction = '';
    syntheticProductionValidationRequested = false;
    syntheticProductionSelect.value = '';
    try {
      sessionStorage.removeItem(syntheticCapacityStorageKey);
      sessionStorage.removeItem(syntheticRequirementsStorageKey);
      sessionStorage.removeItem(syntheticProductionStorageKey);
    } catch {
      // O reinício continua válido em memória quando o armazenamento local falha.
    }
  }
  if (dialog.dataset.profile === 'Administrador') {
    selectedSyntheticOrderFilter = '';
    syntheticOrderFilterValidationRequested = false;
    syntheticOrderFilterSelect.value = '';
    selectedSyntheticException = '';
    syntheticExceptionValidationRequested = false;
    syntheticExceptionSelect.value = '';
    selectedSyntheticHistory = '';
    syntheticHistoryValidationRequested = false;
    syntheticHistorySelect.value = '';
    try {
      sessionStorage.removeItem(syntheticOrderFilterStorageKey);
      sessionStorage.removeItem(syntheticExceptionStorageKey);
      sessionStorage.removeItem(syntheticHistoryStorageKey);
    } catch {
      // O reinício continua válido em memória quando o armazenamento local falha.
    }
  }
  renderProgress();
  restartStatus.textContent = `A jornada fictícia de ${dialog.dataset.profile} foi reiniciada.`;
});

resetAllButton.addEventListener('click', () => {
  if (!resetAllPending) {
    cancelRestart();
    restartStatus.textContent = '';
    resetAllPending = true;
    cancelResetButton.hidden = false;
    resetAllButton.textContent = 'Confirmar reinício das jornadas';
    resetAllButton.setAttribute('aria-pressed', 'true');
    resetStatus.textContent = 'Pressione novamente em até 8 segundos para apagar o progresso local das três jornadas.';
    resetAllTimeout = setTimeout(() => {
      cancelResetAll();
      resetStatus.textContent = 'Tempo de confirmação encerrado. O progresso local das três jornadas foi preservado.';
    }, confirmationTimeoutMs);
    return;
  }

  Object.keys(progressByProfile).forEach((profile) => {
    progressByProfile[profile] = 0;
  });
  selectedSyntheticFile = '';
  syntheticFileValidationRequested = false;
  syntheticFileSelect.value = '';
  selectedSyntheticFulfillment = '';
  syntheticFulfillmentValidationRequested = false;
  syntheticFulfillmentSelect.value = '';
  selectedSyntheticQuoteReview = '';
  syntheticQuoteValidationRequested = false;
  syntheticQuoteReviewSelect.value = '';
  selectedSyntheticTracking = '';
  syntheticTrackingValidationRequested = false;
  syntheticTrackingSelect.value = '';
  selectedSyntheticCapacity = '';
  syntheticCapacityValidationRequested = false;
  syntheticCapacitySelect.value = '';
  selectedSyntheticRequirements = '';
  syntheticRequirementsValidationRequested = false;
  syntheticRequirementsSelect.value = '';
  selectedSyntheticProduction = '';
  syntheticProductionValidationRequested = false;
  syntheticProductionSelect.value = '';
  selectedSyntheticException = '';
  syntheticExceptionValidationRequested = false;
  syntheticExceptionSelect.value = '';
  selectedSyntheticOrderFilter = '';
  syntheticOrderFilterValidationRequested = false;
  syntheticOrderFilterSelect.value = '';
  selectedSyntheticHistory = '';
  syntheticHistoryValidationRequested = false;
  syntheticHistorySelect.value = '';
  currentStep = 0;
  selectedStep = 0;
  renderProgress();
  try {
    sessionStorage.removeItem(progressStorageKey);
    sessionStorage.removeItem(syntheticFileStorageKey);
    sessionStorage.removeItem(syntheticFulfillmentStorageKey);
    sessionStorage.removeItem(syntheticQuoteReviewStorageKey);
    sessionStorage.removeItem(syntheticTrackingStorageKey);
    sessionStorage.removeItem(syntheticCapacityStorageKey);
    sessionStorage.removeItem(syntheticRequirementsStorageKey);
    sessionStorage.removeItem(syntheticProductionStorageKey);
    sessionStorage.removeItem(syntheticOrderFilterStorageKey);
    sessionStorage.removeItem(syntheticExceptionStorageKey);
    sessionStorage.removeItem(syntheticHistoryStorageKey);
  } catch {
    // O estado em memória já foi reiniciado mesmo sem acesso ao armazenamento.
  }
  clearLastProfile();
  cancelResetAll();
  resetStatus.textContent = 'As três jornadas fictícias foram reiniciadas.';
});

cancelResetButton.addEventListener('click', () => {
  if (resetAllPending) {
    cancelResetAll();
    resetStatus.textContent = 'Reinício cancelado. O progresso local das três jornadas foi preservado.';
    resetAllButton.focus();
    return;
  }

  if (restartPending) {
    cancelRestart();
    restartStatus.textContent = `Reinício da jornada de ${dialog.dataset.profile} cancelado. O progresso local foi preservado.`;
    restartButton.focus();
  }
});

closeButtons.forEach((button) => button.addEventListener('click', closeDialog));

dialog.addEventListener('cancel', (event) => {
  if (!journeyReview.hidden) {
    event.preventDefault();
    closeJourneyReview();
    return;
  }

  if (keyboardHelp.open) {
    event.preventDefault();
    keyboardHelp.open = false;
    focusStepStatus.textContent = 'Ajuda de teclado fechada. Foco devolvido ao controle da ajuda.';
    keyboardHelpSummary.focus();
    return;
  }

  if (!resetAllPending && !restartPending) {
    event.preventDefault();
    closeDialog();
    return;
  }

  event.preventDefault();

  if (resetAllPending) {
    cancelResetAll();
    resetStatus.textContent = 'Reinício cancelado. O progresso local foi preservado.';
    resetAllButton.focus();
    return;
  }

  cancelRestart();
  restartStatus.textContent = `Reinício da jornada de ${dialog.dataset.profile} cancelado. O progresso local foi preservado.`;
  restartButton.focus();
});

dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const clickedBackdrop = event.clientX < bounds.left
    || event.clientX > bounds.right
    || event.clientY < bounds.top
    || event.clientY > bounds.bottom;

  if (!clickedBackdrop) return;

  if (!journeyReview.hidden) {
    closeJourneyReview();
    return;
  }

  if (keyboardHelp.open) {
    keyboardHelp.open = false;
    focusStepStatus.textContent = 'Ajuda de teclado fechada. A jornada fictícia foi preservada.';
    keyboardHelpSummary.focus();
    return;
  }

  if (resetAllPending) {
    cancelResetAll();
    resetStatus.textContent = 'Reinício cancelado. O progresso local foi preservado.';
    resetAllButton.focus();
    return;
  }

  if (restartPending) {
    cancelRestart();
    restartStatus.textContent = `Reinício da jornada de ${dialog.dataset.profile} cancelado. O progresso local foi preservado.`;
    restartButton.focus();
    return;
  }

  closeDialog();
});

dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  document.title = defaultDocumentTitle;
  setDialogTriggerState();
  triggerButton?.focus();
});

renderProfileProgress();

const initialProfile = Object.keys(profileSlugs).find(
  (profile) => profileSlugs[profile] === window.location.hash.slice(1).toLowerCase(),
);

if (initialProfile) {
  triggerButton = [...profileButtons].find((button) => button.dataset.profile === initialProfile);
  setDialogTriggerState(triggerButton);
  selectProfile(initialProfile, { historyMode: 'none' });
  openDialog();
  dialogTitle.focus();
}

window.addEventListener('hashchange', () => {
  const profile = Object.keys(profileSlugs).find(
    (candidate) => profileSlugs[candidate] === window.location.hash.slice(1).toLowerCase(),
  );

  if (!profile) {
    if (dialog.open) closeDialog({ updateHistory: false });
    return;
  }

  triggerButton = [...profileButtons].find((button) => button.dataset.profile === profile);
  setDialogTriggerState(triggerButton);
  selectProfile(profile, { historyMode: 'none' });
  if (!dialog.open) openDialog();
  dialogTitle.focus();
});
