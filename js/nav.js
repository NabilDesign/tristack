/* ============================================================
   NAV.JS — Scroll-effect navbar en mobiel hamburger-menu
   ============================================================ */

export function initNav() {
    const nav = document.getElementById('nav');
    const ham = document.getElementById('ham');
    const mob = document.getElementById('mob');

    if (!nav || !ham || !mob) return;

    /* ── Scroll-effect op de navbar ────────────────────────── */
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* ── Hamburger toggle ───────────────────────────────────── */
    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        mob.classList.toggle('open');
    });

    /* ── Sluit menu bij klik buiten ─────────────────────────── */
    document.addEventListener('click', (e) => {
        if (
            mob.classList.contains('open') &&
            !ham.contains(e.target) &&
            !mob.contains(e.target)
        ) {
            ham.classList.remove('open');
            mob.classList.remove('open');
        }
    });

    /* ── Sluit menu na navigatieklik ────────────────────────── */
    mob.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            ham.classList.remove('open');
            mob.classList.remove('open');
        });
    });
}