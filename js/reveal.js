/* ============================================================
   REVEAL.JS — Scroll-reveal animaties via IntersectionObserver
   ============================================================ */

export function initReveal() {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    /* Voeg vertraging toe aan kinderen van .stagger-containers */
    document.querySelectorAll('[data-stagger]').forEach(parent => {
        parent.querySelectorAll('.reveal').forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.08}s`;
        });
    });

    /* Observer: voeg .in toe zodra element in beeld komt */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    /* Optioneel: stop observeren na eerste animatie */
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    elements.forEach(el => observer.observe(el));
}