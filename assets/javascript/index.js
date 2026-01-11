// Set launch date (example: 3 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 3);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();




    // image section 
  const section = document.getElementById("luxReveal");
  const text = section.querySelector(".lux-text");

  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = 1 - Math.abs(rect.top) / windowHeight;

    if (progress > 0 && progress <= 1) {
      text.style.opacity = progress;
      text.style.transform = `translateY(${60 - progress * 60}px)`;
    }
  });
