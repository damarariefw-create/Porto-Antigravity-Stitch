/**
 * Portofolio Rizky Pratama - Interactive Logic & Theme Controller
 * Vanilla JavaScript (No external frameworks)
 */

// 1. Tentukan tema awal: default ke 'light', atau sesuai preferensi tersimpan
function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  return 'light'; // Default awal terang
}

// 2. Fungsi terpusat untuk menerapkan tema
function applyTheme(theme) {
  const isDark = theme === 'dark';
  const root = document.documentElement;
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Set atribut data-theme di html dan body
  root.setAttribute('data-theme', theme);
  if (body) {
    body.setAttribute('data-theme', theme);
    body.classList.toggle('dark-theme', isDark);
  }

  // Update ikon dan aria-label
  if (themeIcon) {
    if (isDark) {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  }

  if (themeToggleBtn) {
    const titleText = isDark ? 'Beralih ke Tema Terang' : 'Beralih ke Tema Gelap';
    themeToggleBtn.setAttribute('title', titleText);
    themeToggleBtn.setAttribute('aria-label', titleText);
  }
}

// 3. Fungsi toggle tema yang dipanggil saat tombol diklik
window.toggleTheme = function() {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(nextTheme);

  try {
    localStorage.setItem('theme', nextTheme);
  } catch (err) {
    console.warn('LocalStorage tidak dapat diakses:', err);
  }
};

// 4. Inisialisasi awal saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  // Pasang listener tunggal pada tombol toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.onclick = function(e) {
      e.preventDefault();
      window.toggleTheme();
    };
  }

  initProjectFilters();
  initContactForm();
});

/**
 * -----------------------------------------------------------------------------
 * Interactive Project Filter Tabs
 * -----------------------------------------------------------------------------
 */
function initProjectFilters() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!tabButtons.length || !projectCards.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Perbarui tombol aktif
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter') || 'all';

      // Saring kartu proyek dengan transisi halus
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * -----------------------------------------------------------------------------
 * Contact Form Handler
 * -----------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';

    // Validasi sederhana
    if (!name || !email || !message) {
      alert('Mohon lengkapi kolom nama, email, dan pesan.');
      return;
    }

    // Tampilkan konfirmasi sukses
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Pesan Terkirim!';
    submitBtn.style.backgroundColor = 'var(--tertiary)';

    setTimeout(() => {
      alert(`Terima kasih, ${name}! Pesan Anda telah diterima. Saya akan segera merespons ke ${email}.`);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      submitBtn.style.backgroundColor = '';
    }, 600);
  });
}
