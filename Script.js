function toggleFunFact() {
  const fact = document.getElementById('funFact');
  fact.style.display = fact.style.display === 'block' ? 'none' : 'block';
}


document.querySelectorAll('.nav-items a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.textContent;

    if (section === 'Dash') {
      alert('📊 Welcome to the Dashboard!');
    } else if (section === 'About') {
      alert('ℹ️ About this project: Gibuhat nako ni kay para makapasar ko sa HCI');
    } else if (section === 'Contact') {
      alert('📫 Contact us at: www.hcdc.edu.ph');
    }
  });
});
