// Відлік до Нового 2027 року (єдина логіка на JS; весь вигляд — у CSS)
(function () {
  var target = new Date(2027, 0, 1, 0, 0, 0).getTime();

  var els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
    list: document.getElementById('countdown-list'),
    message: document.getElementById('cd-message')
  };

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function tick() {
    var diff = target - Date.now();

    if (diff <= 0) {
      els.list.hidden = true;
      els.message.hidden = false;
      return;
    }

    var s = Math.floor(diff / 1000);
    els.days.textContent = pad(Math.floor(s / 86400));
    els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    els.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    els.seconds.textContent = pad(s % 60);
    setTimeout(tick, 1000);
  }

  tick();
})();
