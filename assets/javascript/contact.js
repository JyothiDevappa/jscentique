const feedbackForm = document.querySelector('.feedback-form');
  const thankYou = document.querySelector('.thank-you-msg');
  const emailInput = feedbackForm.querySelector('input[type="email"]');
  const emailWarning = document.querySelector('.email-warning');
  const emailTooltip = document.querySelector('.email-tooltip');
  const optionGroups = document.querySelectorAll('.exp-options');

  /* ===== INITIAL STATE ===== */
  optionGroups.forEach(g => g.classList.add('disabled'));
  emailTooltip.style.display = 'block';

  /* ===== EMAIL INPUT ===== */
  emailInput.addEventListener('input', () => {
    if (emailInput.checkValidity()) {
      emailWarning.style.display = 'none';
      emailTooltip.style.display = 'none';

      optionGroups.forEach(g => g.classList.remove('disabled'));
    } else {
      optionGroups.forEach(g => g.classList.add('disabled'));
      emailTooltip.style.display = 'block';
    }
  });

  /* ===== OPTION CLICK ===== */
  document.querySelectorAll('.exp-options button').forEach(btn => {
    btn.addEventListener('click', () => {

      if (!emailInput.checkValidity()) {
        emailWarning.style.display = 'block';
        emailInput.classList.add('shake');
        emailInput.focus();

        setTimeout(() => {
          emailInput.classList.remove('shake');
        }, 400);

        return;
      }

      const group = btn.parentElement;
      group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ===== SUBMIT ===== */
  feedbackForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!emailInput.reportValidity()) {
      emailWarning.style.display = 'block';
      emailInput.classList.add('shake');
      emailInput.focus();

      setTimeout(() => {
        emailInput.classList.remove('shake');
      }, 400);

      return;
    }

    const selected = feedbackForm.querySelectorAll('.exp-options button.active');
    if (selected.length === 0) return;

    feedbackForm.style.display = 'none';
    thankYou.style.display = 'block';
  });