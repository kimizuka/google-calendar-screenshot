(() => {
  if (/https:\/\/calendar.google.com\/calendar/.test(location.href)) {
    [].slice.call(document.querySelectorAll('[role="button"] [aria-hidden="true"] > :first-child')).forEach((elm) => { elm.innerHTML = '予定あり' });
    [].slice.call(document.querySelectorAll('[aria-hidden="true"][style^="top"]')).forEach((elm) => { elm.style.display = 'none' });
    html2canvas(document.querySelector('[data-view-heading]')).then((canvas) => {
      downloadImage(canvas.toDataURL());
    });

    function downloadImage(dataUrl) {
      const name = 'calendar.png';
      const a = document.createElement('a');

      a.href = dataUrl;
      a.download = name;
      a.click();
    }
  } else {
    window.open('https://calendar.google.com/calendar/');
  }
})();