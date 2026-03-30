// Ensure material-symbols-outlined icons fade in only after font is loaded
if (document.fonts) {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    document.querySelectorAll('.material-symbols-outlined').forEach(el => {
      el.classList.add('font-loaded');
    });
  });
}
