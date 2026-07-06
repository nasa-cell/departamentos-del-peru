const quizElements = {
  quizIntro: document.querySelector('#quizIntro'),
  quizWelcomeText: document.querySelector('#quizWelcomeText'),
  quizStartButton: document.querySelector('#quizStartButton'),
  quizError: document.querySelector('#quizError'),
  quizQuestionBlock: document.querySelector('#quizQuestionBlock'),
  quizPlayerName: document.querySelector('#quizPlayerName'),
  quizProgress: document.querySelector('#quizProgress'),
  quizQuestionText: document.querySelector('#quizQuestionText'),
  quizOptions: document.querySelector('#quizOptions'),
  quizNextButton: document.querySelector('#quizNextButton'),
  quizResult: document.querySelector('#quizResult'),
  quizScoreText: document.querySelector('#quizScoreText'),
  quizSendButton: document.querySelector('#quizSendButton'),
  quizRestartButton: document.querySelector('#quizRestartButton'),
  quizExitButton: document.querySelector('#quizExitButton'),
  gradeSelect: document.querySelector('#gradeSelect'),
  opinionInput: document.querySelector('#opinionInput'),
  logoutButton: document.querySelector('#logoutButton')
};

const quizQuestions = [
  {
    text: '¿A qué departamento pertenece la capital Chachapoyas?',
    options: ['Amazonas', 'Loreto', 'San Martín', 'Ucayali'],
    answer: 0
  },
  {
    text: '¿A qué departamento pertenece la capital Huaraz?',
    options: ['La Libertad', 'Áncash', 'Junín', 'Pasco'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Abancay?',
    options: ['Ayacucho', 'Cusco', 'Apurímac', 'Huancavelica'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Arequipa?',
    options: ['Moquegua', 'Tacna', 'Arequipa', 'Puno'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Huamanga?',
    options: ['Ayacucho', 'Huancavelica', 'Apurímac', 'Junín'],
    answer: 0
  },
  {
    text: '¿A qué departamento pertenece la capital Cajamarca?',
    options: ['Piura', 'Cajamarca', 'Lambayeque', 'La Libertad'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Callao?',
    options: ['Lima', 'Callao', 'Ica', 'Tacna'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Cusco?',
    options: ['Puno', 'Cusco', 'Apurímac', 'Arequipa'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Huancavelica?',
    options: ['Huancavelica', 'Ayacucho', 'Junín', 'Pasco'],
    answer: 0
  },
  {
    text: '¿A qué departamento pertenece la capital Huánuco?',
    options: ['Pasco', 'Huánuco', 'Junín', 'Ucayali'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Ica?',
    options: ['Lima', 'Tacna', 'Ica', 'Arequipa'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Huancayo?',
    options: ['Junín', 'Pasco', 'Huánuco', 'Huancavelica'],
    answer: 0
  },
  {
    text: '¿A qué departamento pertenece la capital Chiclayo?',
    options: ['Piura', 'Lambayeque', 'La Libertad', 'Tumbes'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Trujillo?',
    options: ['La Libertad', 'Lambayeque', 'Piura', 'Cajamarca'],
    answer: 0
  },
  {
    text: '¿A qué departamento pertenece la capital Lima?',
    options: ['Callao', 'Ica', 'Lima', 'Junín'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Iquitos?',
    options: ['Ucayali', 'San Martín', 'Loreto', 'Amazonas'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Puerto Maldonado?',
    options: ['Ucayali', 'Madre de Dios', 'Loreto', 'Cusco'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Moquegua?',
    options: ['Tacna', 'Arequipa', 'Moquegua', 'Puno'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Cerro de Pasco?',
    options: ['Junín', 'Pasco', 'Huánuco', 'Huancavelica'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Piura?',
    options: ['Tumbes', 'Piura', 'Lambayeque', 'Cajamarca'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Puno?',
    options: ['Cusco', 'Arequipa', 'Puno', 'Moquegua'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Moyobamba?',
    options: ['Amazonas', 'San Martín', 'Loreto', 'Ucayali'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Tacna?',
    options: ['Moquegua', 'Tacna', 'Arequipa', 'Puno'],
    answer: 1
  },
  {
    text: '¿A qué departamento pertenece la capital Tumbes?',
    options: ['Piura', 'Lambayeque', 'Tumbes', 'Cajamarca'],
    answer: 2
  },
  {
    text: '¿A qué departamento pertenece la capital Pucallpa?',
    options: ['Loreto', 'Madre de Dios', 'Ucayali', 'San Martín'],
    answer: 2
  }
];

let quizState = {
  playerName: '',
  currentIndex: 0,
  score: 0,
  selectedOption: null,
  started: false,
  restartAttempts: 0
};

function startQuiz() {
  const savedUser = sessionStorage.getItem('quizUser');
  if (!savedUser) {
    quizElements.quizError?.classList.remove('hidden');
    return;
  }

  quizElements.quizError?.classList.add('hidden');
  quizState.playerName = savedUser;
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.started = true;
  quizState.restartAttempts = 0;
  quizElements.quizIntro?.classList.add('hidden');
  quizElements.quizPlayerName.textContent = `Jugador: ${savedUser}`;
  quizElements.quizQuestionBlock.classList.remove('hidden');
  quizElements.quizResult.classList.add('hidden');
  quizElements.quizNextButton.classList.add('hidden');
  
  // Resetear el botón de reintentar
  quizElements.quizRestartButton.disabled = false;
  quizElements.quizRestartButton.style.opacity = '1';
  quizElements.quizRestartButton.style.cursor = 'pointer';
  quizElements.quizRestartButton.style.backgroundColor = '';
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = quizQuestions[quizState.currentIndex];
  quizState.selectedOption = null;
  quizElements.quizQuestionText.textContent = question.text;
  quizElements.quizProgress.textContent = `Pregunta ${quizState.currentIndex + 1} de ${quizQuestions.length}`;
  quizElements.quizOptions.innerHTML = '';

  question.options.forEach((optionText, optionIndex) => {
    const optionButton = document.createElement('button');
    optionButton.type = 'button';
    optionButton.className = 'quiz-option';
    optionButton.textContent = optionText;
    optionButton.addEventListener('click', () => selectQuizOption(optionIndex));
    quizElements.quizOptions.appendChild(optionButton);
  });
}

function selectQuizOption(optionIndex) {
  if (!quizState.started) return;
  quizState.selectedOption = optionIndex;
  const buttons = quizElements.quizOptions.querySelectorAll('.quiz-option');
  buttons.forEach((button, index) => {
    button.classList.toggle('selected', index === optionIndex);
  });
  quizElements.quizNextButton.classList.remove('hidden');
}

function handleNextQuestion() {
  if (!quizState.started || quizState.selectedOption === null) return;

  const question = quizQuestions[quizState.currentIndex];
  if (quizState.selectedOption === question.answer) {
    quizState.score += 1;
  }

  quizState.currentIndex += 1;
  quizState.selectedOption = null;

  if (quizState.currentIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  renderQuizQuestion();
  quizElements.quizNextButton.classList.add('hidden');
}

function showQuizResult() {
  quizState.started = false;
  quizElements.quizQuestionBlock.classList.add('hidden');
  quizElements.quizResult.classList.remove('hidden');
  quizElements.quizScoreText.textContent = `¡${quizState.playerName}! Obtuviste ${quizState.score} de ${quizQuestions.length} respuestas correctas.`;
}

function resetQuiz() {
  quizElements.quizIntro?.classList.remove('hidden');
  quizElements.quizError.classList.add('hidden');
  quizElements.quizQuestionBlock.classList.add('hidden');
  quizElements.quizResult.classList.add('hidden');
  quizElements.quizNextButton.classList.add('hidden');
  quizElements.gradeSelect.value = '';
  quizState = {
    playerName: '',
    currentIndex: 0,
    score: 0,
    selectedOption: null,
    started: false
  };
}

function sendQuizData(redirectAfterSend = true, clearSessionAfterSend = false) {
  const grade = quizElements.gradeSelect.value;
  
  if (!grade) {
    showToast('Por favor selecciona un grado antes de enviar.', true);
    return;
  }

  const nota = quizState.score;
  const usuario = quizState.playerName;
  const opinion = quizElements.opinionInput?.value?.trim() || '';

  if (!opinion) {
    showToast('Por favor, escribe tu opinión sobre los 25 departamentos.', true);
    return;
  }

  const datos = {
    grado: grade,
    usuario: usuario,
    nota: nota,
    opinion: opinion
  };

  function setSendButtonsDisabled(disabled) {
    [quizElements.quizSendButton, quizElements.quizExitButton].forEach(button => {
      if (!button) return;
      button.disabled = disabled;
      button.style.cursor = disabled ? 'not-allowed' : 'pointer';
      button.style.opacity = disabled ? '0.6' : '1';
    });
  }

  function setExitButtonLabel(label) {
    if (quizElements.quizExitButton) {
      quizElements.quizExitButton.textContent = label;
    }
  }

  const scoreUrl = 'https://script.google.com/macros/s/AKfycbyIT_7BPc0mwd-hH89rG1BXvzMEhQkVGlEv5JqbV4TqbVk0X9P1LrugiKk5TNoJ_Nex/exec';
  const opinionUrl = 'https://script.google.com/macros/s/AKfycbyc-qoAskuarUEZTb2ArPNRBAH03Jbp4LVc6OaS4zXNXgL4_okJeH-YHuh5b4IgzMW23Q/exec';

  const scoreBody = new URLSearchParams();
  scoreBody.append('grado', datos.grado);
  scoreBody.append('usuario', datos.usuario);
  scoreBody.append('nota', datos.nota);

  const opinionBody = JSON.stringify({ usuario: datos.usuario, opinion: datos.opinion });

  function parseMaybeJson(response) {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return response.json();
    }
    return response.text().then(text => ({ text }));
  }

  showStatusBar('Enviando tu opinión y nota...', 'info');
  setSendButtonsDisabled(true);
  setExitButtonLabel('Enviando...');
  Promise.allSettled([
    fetch(scoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: scoreBody.toString()
    }),
    fetch(opinionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: opinionBody
    })
  ])
  .then(results => {
    const scoreResult = results[0];
    const opinionResult = results[1];

    const scoreOk = scoreResult.status === 'fulfilled' && scoreResult.value.ok;
    const opinionOk = opinionResult.status === 'fulfilled' && opinionResult.value.ok;
    const scoreStatus = scoreResult.status === 'fulfilled' ? scoreResult.value.status : null;
    const opinionStatus = opinionResult.status === 'fulfilled' ? opinionResult.value.status : null;

    if (scoreOk && opinionOk) {
      return Promise.all([parseMaybeJson(scoreResult.value), parseMaybeJson(opinionResult.value)]).then(() => ({ scoreOk: true, opinionOk: true }));
    }

    const scoreError = scoreResult.status === 'rejected' || (scoreResult.status === 'fulfilled' && !scoreResult.value.ok);
    const opinionError = opinionResult.status === 'rejected' || (opinionResult.status === 'fulfilled' && !opinionResult.value.ok);

    if (!scoreError && opinionError) {
      return Promise.all([parseMaybeJson(scoreResult.value), opinionResult.value.text()])
        .then(([scoreData, opinionText]) => {
          return { scoreOk: true, opinionOk: false, opinionText };
        });
    }

    if (scoreError && !opinionError) {
      return Promise.all([scoreResult.value.text(), parseMaybeJson(opinionResult.value)])
        .then(([scoreText, opinionData]) => {
          const error = new Error(`La opinión se envió pero la nota no se guardó. scoreUrl falló (${scoreStatus}).`);
          error.status = scoreStatus;
          error.endpoint = 'scoreUrl';
          error.detail = scoreText;
          throw error;
        });
    }

    if (scoreError && opinionError) {
      return Promise.all([
        scoreResult.status === 'fulfilled' ? scoreResult.value.text() : Promise.resolve(''),
        opinionResult.status === 'fulfilled' ? opinionResult.value.text() : Promise.resolve('')
      ]).then(([scoreText, opinionText]) => {
        const responseInError = scoreError ? scoreResult : opinionResult;
        const statusCode = responseInError.status === 'fulfilled' ? responseInError.value.status : null;
        const statusText = responseInError.status === 'fulfilled' ? responseInError.value.statusText : responseInError.reason?.message;
        const errorDetail = `${scoreText || opinionText || 'Respuesta no válida'}`;
        const error = new Error(`Error al enviar datos${statusCode ? ` (${statusCode} ${statusText})` : ''}: ${errorDetail}`);
        error.status = statusCode;
        error.endpoint = scoreError ? 'scoreUrl' : 'opinionUrl';
        throw error;
      });
    }

    return Promise.resolve({ scoreOk, opinionOk });
  })
  .then(result => {
    if (result.scoreOk && result.opinionOk) {
      showStatusBar('Envío completado con éxito.', 'success');
      showToast('La nota y la opinión se enviaron correctamente.');
      if (redirectAfterSend) {
        if (clearSessionAfterSend) {
          sessionStorage.removeItem('quizUser');
        }
        setTimeout(() => {
          window.location.href = 'http://127.0.0.1:5500/login.html';
        }, 1200);
      } else {
        setSendButtonsDisabled(false);
        setExitButtonLabel('Volver al inicio');
      }
    } else if (result.scoreOk && !result.opinionOk) {
      showStatusBar('Nota enviada, pero la opinión no se guardó.', 'error');
      showToast('La nota se envió, pero hubo un fallo en la opinión. Intenta de nuevo.', true);
      setSendButtonsDisabled(false);
      setExitButtonLabel('Volver al inicio');
    } else {
      showStatusBar('No se pudo enviar. Intenta de nuevo.', 'error');
      showToast('Error al guardar los datos. Intenta de nuevo.', true);
      setSendButtonsDisabled(false);
      setExitButtonLabel('Volver al inicio');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    const errorCode = error?.status ? ` Código: ${error.status}` : '';
    const endpoint = error?.endpoint ? ` (${error.endpoint})` : '';
    const is404 = error?.status === 404;
    if (is404) {
      showStatusBar(`Error en endpoint${endpoint}. Revisa la URL del servidor.${errorCode}`, 'error');
      showToast(`Error: endpoint no encontrado${endpoint}${errorCode}`, true);
    } else {
      showStatusBar(`Error de conexión. Revisa tu internet.${errorCode}`, 'error');
      showToast(`Error al conectar con el servidor: ${error.message || error}${errorCode}`, true);
    }
    setSendButtonsDisabled(false);
    setExitButtonLabel('Volver al inicio');
  });
}

// Mostrar toast simple
function showToast(message, isError = false, duration = 3500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = '';
  toast.textContent = message;
  if (isError) toast.classList.add('error');
  toast.classList.add('show');
  // limpiar timeout previo
  if (toast._hideTimeout) clearTimeout(toast._hideTimeout);
  toast._hideTimeout = setTimeout(() => {
    toast.classList.remove('show');
    // opcional: limpiar texto después de la animación
    setTimeout(() => { toast.textContent = ''; }, 400);
  }, duration);
}

function showStatusBar(message, type = 'info') {
  const bar = document.getElementById('sendStatusBar');
  if (!bar) return;
  bar.textContent = message;
  bar.classList.remove('info', 'success', 'error', 'hidden');
  bar.classList.add(type);
}

function hideStatusBar() {
  const bar = document.getElementById('sendStatusBar');
  if (!bar) return;
  bar.classList.add('hidden');
}

function clearAllCookies() {
  document.cookie.split(';').forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname};`;
  });
}

function logout() {
  sessionStorage.removeItem('quizUser');
  sessionStorage.clear();
  localStorage.clear();
  clearAllCookies();
  window.location.href = 'perfiles.html';
}

function restartQuiz() {
  // Incrementar contador de intentos
  quizState.restartAttempts += 1;
  
  // Si ya se ha intentado 2 veces, deshabilitar el botón
  if (quizState.restartAttempts >= 2) {
    quizElements.quizRestartButton.disabled = true;
    quizElements.quizRestartButton.style.opacity = '0.5';
    quizElements.quizRestartButton.style.cursor = 'not-allowed';
    quizElements.quizRestartButton.style.backgroundColor = '#8b8b8b';
    return; // No permitir más intentos
  }
  
  quizState.playerName = sessionStorage.getItem('quizUser');
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.started = true;
  quizElements.gradeSelect.value = '';
  quizElements.quizQuestionBlock.classList.remove('hidden');
  quizElements.quizResult.classList.add('hidden');
  quizElements.quizNextButton.classList.add('hidden');
  renderQuizQuestion();
}

quizElements.quizStartButton.addEventListener('click', startQuiz);
quizElements.quizNextButton.addEventListener('click', handleNextQuestion);
quizElements.quizSendButton.addEventListener('click', () => sendQuizData(true));
quizElements.quizRestartButton.addEventListener('click', restartQuiz);
quizElements.quizExitButton?.addEventListener('click', () => sendQuizData(true, true));
quizElements.logoutButton.addEventListener('click', logout);

const savedUser = sessionStorage.getItem('quizUser');
if (!savedUser) {
  window.location.href = 'http://127.0.0.1:5500/login.html';
} else {
  quizElements.quizWelcomeText.textContent = `Hola ${savedUser}, listo para iniciar el cuestionario?`;
}
