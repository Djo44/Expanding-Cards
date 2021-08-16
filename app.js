const panels = document.querySelectorAll('.panel');

panels.forEach((x) => {
  x.addEventListener('click', function () {
    removeClassActive();
    x.classList.add('active');
  });
});

function removeClassActive() {
  panels.forEach((x) => {
    x.classList.remove('active');
  });
}
