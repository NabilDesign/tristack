/* ============================================================
   SCROLL.JS — Smooth scroll voor ankerlinks & scroll-naar-boven
   ============================================================ */

export function initScroll() {
    initSmoothAnchorLinks();
    initScrollTopButton();
}

/* ── Smooth scroll voor alle interne links (#...) ─────────── */
function initSmoothAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');

            /* Lege hash (#) overslaan */
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ── Scroll-naar-boven knop ───────────────────────────────── */
function initScrollTopButton() {
    const btn = document.getElementById('scrtop');
    if (!btn) return;

    /* Toon/verberg op basis van scroll-positie */
    window.addEventListener('scroll', () => {
        btn.classList.toggle('on', window.scrollY > 500);
    }, { passive: true });

    /* Klik: scroll naar boven */
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}