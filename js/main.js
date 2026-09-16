// ForeSports — shared behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Placeholder form handling — no backend wired up yet.
  // Every form with [data-placeholder-form] shows a "coming soon" message
  // instead of actually submitting anywhere.
  var forms = document.querySelectorAll('[data-placeholder-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.classList.add('show');
        msg.setAttribute('tabindex', '-1');
        msg.focus();
      }
      form.reset();
    });
  });
});
