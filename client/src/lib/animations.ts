import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  setupScrollReveal();
  setupProductCardAnimations();
}

// Set up reveal animations for elements with 'reveal' class
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach(element => {
    gsap.fromTo(
      element,
      { 
        autoAlpha: 0,
        y: element.classList.contains('reveal-up') ? 30 : 0,
        x: element.classList.contains('reveal-left') ? -30 : 
           element.classList.contains('reveal-right') ? 30 : 0
      },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

// Set up hover animations for product cards
function setupProductCardAnimations() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}
