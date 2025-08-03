/*
 * JavaScript for the INCREASE4MED website
 *
 * Provides responsive navigation and simple interactive components for
 * objectives and pilot region cards. Navigation toggling is essential
 * for mobile devices. Card toggling allows users to explore details
 * without leaving the page, improving engagement. These features
 * demonstrate interactive, user‑friendly design, following guidance
 * that websites should engage audiences and clearly communicate
 * information【811402958226146†L300-L317】.
 */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  // Toggle cards (objectives and pilots)
  const cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('open');
    });
  });
});