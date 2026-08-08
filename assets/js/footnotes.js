document.addEventListener('DOMContentLoaded', () => {
  const footnotes = document.querySelectorAll('.footnotes ol li');

  footnotes.forEach(fn => {
    // Move footnote right after its paragraph
    const id = fn.id;
    const ref = document.querySelector(`a[href="#${id}"]`);
    if (ref) {
      ref.closest('p')?.insertAdjacentElement('afterend', fn);
      fn.style.display = 'none';           // hide initially
      fn.classList.add('trope-footnote');  // our custom class
    }

    // Click the superscript number to toggle
    const backlink = fn.querySelector('.reversefootnote');
    if (backlink) backlink.style.display = 'none'; // hide ↑ arrow

    const trigger = document.querySelector(`a[href="#${id}"]`);
    if (trigger) {
      trigger.style.cursor = 'pointer';
      trigger.onclick = (e) => {
        e.preventDefault();
        fn.style.display = fn.style.display === 'block' ? 'none' : 'block';
        // close others
        document.querySelectorAll('.trope-footnote').forEach(other => {
          if (other !== fn) other.style.display = 'none';
        });
      };
    }
  });
});