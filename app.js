const dialog = document.querySelector('.demo-dialog');
const dialogTitle = document.querySelector('.dialog-title');
const dialogSteps = document.querySelector('.dialog-steps');
const dialogProgress = document.querySelector('.dialog-progress');
const journeyOverallStatus = document.querySelector('.journey-overall-status');
const journeySharedStatus = document.querySelector('.journey-shared-status');
const journeySummaryList = document.querySelector('.journey-summary-list');
const journeyContinueAction = document.querySelector('.journey-continue-action');
const journeyReviewAction = document.querySelector('.journey-review-action');
const journeyReview = document.querySelector('.journey-review');
const journeyReviewText = document.querySelector('#journey-review-text');
const journeyReviewCopy = document.querySelector('.journey-review-copy');
const journeyReviewCopyStatus = document.querySelector('.journey-review-copy-status');
const dialogDetailTitle = document.querySelector('#dialog-detail-title');
const dialogDetailDescription = document.querySelector('.dialog-detail-description');
const dialogHandoffStatus = document.querySelector('.dialog-handoff-status');
const dialogHandoffAction = document.querySelector('.dialog-handoff-action');
const dialogProfileButtons = document.querySelectorAll('[data-dialog-profile]');
const dialogProfileStatus = document.querySelector('.dialog-profile-status');
const dialogPrerequisiteStatus = document.querySelector('.dialog-prerequisite-status');
const focusStepButton = document.querySelector('.dialog-focus-step');
const focusSummaryButton = document.querySelector('.dialog-focus-summary');
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
const closeButtons = document.querySelectorAll('.dialog-close');
const profileButtons = document.querySelectorAll('[data-profile]');
const profileProgressLabels = document.querySelectorAll('[data-profile-progress]');
const contrastToggle = document.querySelector('.contrast-toggle');
const textSizeToggle = document.querySelector('.text-size-toggle');
const motionToggle = document.querySelector('.motion-toggle');
const visualPreferencesReset = document.querySelector('.visual-preferences-reset');
const visualPreferenceStatus = document.querySelector('.visual-preference-status');
const resumeAction = document.querySelector('.resume-action');
const defaultDocumentTitle = document.title;
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
  setReducedMotion(sessionStorage.getItem(motionStorageKey) === 'true');
} catch {
  setReducedMotion(false);
}

motionToggle.addEventListener('click', () => {
  const enabled = motionToggle.getAttribute('aria-pressed') !== 'true';
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

function updateVisualPreferencesReset() {
  const hasCustomPreference = contrastToggle.getAttribute('aria-pressed') === 'true'
    || textSizeToggle.getAttribute('aria-pressed') === 'true'
    || motionToggle.getAttribute('aria-pressed') === 'true';
  visualPreferencesReset.hidden = !hasCustomPreference;
}

visualPreferencesReset.addEventListener('click', () => {
  setHighContrast(false);
  setLargeText(false);
  setReducedMotion(false);
  visualPreferenceStatus.textContent = 'Preferências visuais restauradas.';
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
    ['Orçamento de exemplo', 'R$ 18,40 fictícios · impressão P&B · retirada simulada.'],
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

  journeyReviewText.value = [
    'Pedido sintético DEMO-071 — resumo local para revisão',
    ...progressLines,
    journeySharedStatus.textContent,
    'Demonstração offline: nenhuma ação real foi executada.',
  ].join('\n');
}

function closeDialog() {
  cancelResetAll();
  cancelRestart();
  dialog.close();
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
}

function cancelRestart() {
  clearTimeout(restartTimeout);
  restartTimeout = null;
  restartPending = false;
  restartButton.textContent = 'Reiniciar roteiro';
  restartButton.removeAttribute('aria-pressed');
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
  dialogProgress.setAttribute('aria-valuemax', String(items.length));
  dialogProgress.setAttribute('aria-valuenow', String(Math.min(currentStep, items.length)));
  dialogProgress.setAttribute('aria-valuetext', dialogProgress.textContent);
  document.title = finished
    ? `${dialog.dataset.profile} · jornada concluída — ${defaultDocumentTitle}`
    : `${dialog.dataset.profile} · etapa ${currentStep + 1} de ${items.length} — ${defaultDocumentTitle}`;
  [dialogDetailTitle.textContent, dialogDetailDescription.textContent] = journeyDetails[dialog.dataset.profile][detailIndex];
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
  nextButton.setAttribute('aria-disabled', String(!finished && !prerequisiteReady));
  dialogPrerequisiteStatus.dataset.ready = String(prerequisiteReady);
  dialogPrerequisiteStatus.textContent = prerequisite
    ? prerequisiteReady
      ? `Pré-requisito concluído: a jornada de ${prerequisite} liberou esta simulação.`
      : `Avanço pausado: conclua primeiro a jornada de ${prerequisite}. Esta visão continua disponível para consulta.`
    : 'Fluxo inicial: esta jornada não depende de outro perfil.';
  restartButton.hidden = currentStep === 0 || finished;
  const nextActionText = finished
    ? `Continuar como ${nextProfile[dialog.dataset.profile]}`
    : `Concluir etapa ${currentStep + 1} de ${items.length}`;
  nextButton.textContent = nextActionText;
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
    const profileName = document.createElement('strong');
    const savedStep = progressByProfile[profile];
    const totalSteps = journeys[profile].length;
    const progressText = savedStep >= totalSteps
      ? 'concluída'
      : `${savedStep} de ${totalSteps} etapas concluídas`;

    profileName.textContent = profile;
    item.append(profileName, `: ${progressText}`);
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

journeyReviewCopy.addEventListener('click', async () => {
  updateJourneyReview();
  journeyReviewText.select();

  try {
    await navigator.clipboard.writeText(journeyReviewText.value);
    journeyReviewCopyStatus.textContent = 'Resumo sintético copiado para a área de transferência local.';
  } catch {
    journeyReviewCopyStatus.textContent = 'A cópia automática foi bloqueada. O resumo está selecionado para você copiá-lo manualmente.';
    journeyReviewText.focus();
  }
});

journeyContinueAction.addEventListener('click', () => {
  const nextIncompleteProfile = Object.keys(journeys).find(
    (profile) => progressByProfile[profile] < journeys[profile].length,
  );
  if (!nextIncompleteProfile) return;

  selectProfile(nextIncompleteProfile);
  dialogTitle.focus();
});

function selectProfile(profile) {
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
    selectProfile(button.dataset.profile);
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
  selectProfile(profile);
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
    selectProfile(destination.dataset.dialogProfile);
    destination.focus();
  });
});

dialog.addEventListener('keydown', (event) => {
  if (!event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  const navigationButtons = {
    n: nextButton,
    v: previousButton,
  };
  const navigationButton = navigationButtons[event.key.toLowerCase()];
  if (navigationButton) {
    event.preventDefault();
    if (!navigationButton.disabled) navigationButton.click();
    navigationButton.focus();
    return;
  }

  if (event.key.toLowerCase() === 'a') {
    event.preventDefault();
    toggleAnnouncements();
    announcementsToggle.focus();
    return;
  }

  if (event.key.toLowerCase() === 'r') {
    event.preventDefault();
    journeySummaryTitle.focus();
    focusStepStatus.textContent = 'Foco movido para o resumo das três jornadas fictícias.';
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

focusSummaryButton.addEventListener('click', () => {
  journeySummaryTitle.focus();
  focusStepStatus.textContent = 'Foco movido para o resumo das três jornadas fictícias.';
});

dialogHandoffAction.addEventListener('click', () => {
  selectProfile(nextProfile[dialog.dataset.profile]);
  dialogTitle.focus();
});

nextButton.addEventListener('click', () => {
  if (nextButton.getAttribute('aria-disabled') === 'true') {
    const prerequisite = prerequisiteProfile[dialog.dataset.profile];
    focusStepStatus.textContent = `Avanço indisponível: conclua primeiro a jornada de ${prerequisite}.`;
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

restartButton.addEventListener('click', () => {
  if (!restartPending) {
    cancelResetAll();
    resetStatus.textContent = '';
    restartPending = true;
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
  renderProgress();
  restartStatus.textContent = `A jornada fictícia de ${dialog.dataset.profile} foi reiniciada.`;
});

resetAllButton.addEventListener('click', () => {
  if (!resetAllPending) {
    cancelRestart();
    restartStatus.textContent = '';
    resetAllPending = true;
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
  currentStep = 0;
  selectedStep = 0;
  renderProgress();
  try {
    sessionStorage.removeItem(progressStorageKey);
  } catch {
    // O estado em memória já foi reiniciado mesmo sem acesso ao armazenamento.
  }
  cancelResetAll();
  resetStatus.textContent = 'As três jornadas fictícias foram reiniciadas.';
});

closeButtons.forEach((button) => button.addEventListener('click', closeDialog));

dialog.addEventListener('cancel', (event) => {
  if (!resetAllPending && !restartPending) return;

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
