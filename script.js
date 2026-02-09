// Make background pets float slowly up and down
const dog = document.querySelector('.background-dog');
const cat = document.querySelector('.background-cat');
let offset = 0;
let direction = 1;

function animatePets() {
  offset += direction * 0.3; // speed of floating
  if (offset > 20 || offset < -20) direction *= -1; // reverse direction
  dog.style.transform = `translateY(calc(-50% + ${offset}px))`;
  cat.style.transform = `translateY(calc(-50% - ${offset}px))`;
  requestAnimationFrame(animatePets); // loop animation
}

animatePets();

// Add hover animation for labels
document.querySelectorAll('label').forEach(label => {
  label.addEventListener('mouseover', () => {
    label.style.color = '#5d5dfc';
  });
  label.addEventListener('mouseout', () => {
    label.style.color = '#333';
  });
});