/*
  Small JavaScript for navbar behavior and footer year.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Close mobile nav after clicking a link
  const navCollapse = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('#mainNav .nav-link, #mainNav .dropdown-item');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        collapse.hide();
      }
    });
  });

  // Set footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Update active nav link while scrolling
  const sectionLinks = document.querySelectorAll('#mainNav .nav-link[href^="#"]');
  const sections = Array.from(sectionLinks)
    .map(function (link) {
      const target = document.querySelector(link.getAttribute('href'));
      return target ? { link: link, section: target } : null;
    })
    .filter(Boolean);

  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          sections.forEach(function (item) {
            item.link.classList.remove('active');
            item.link.removeAttribute('aria-current');
          });

          const matched = sections.find(function (item) {
            return item.section.id === entry.target.id;
          });

          if (matched) {
            matched.link.classList.add('active');
            matched.link.setAttribute('aria-current', 'page');
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: '-70px 0px -20% 0px'
      }
    );

    sections.forEach(function (item) {
      observer.observe(item.section);
    });
  }
});
