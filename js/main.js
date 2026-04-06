/* ============================================================
   MAIN.JS — Initialisatie: laadt alle modules
   ============================================================ */

import { initNav }     from './nav.js';
import { initReveal }  from './reveal.js';
import { initScroll }  from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initScroll();
});