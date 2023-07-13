fetch('projec.json')
  .then(response => response.json())
  .then(data => {
    // Process match data
    const matchesContainer = document.getElementById('matches-container');
    data.matches.forEach(match => {
      const matchElement = document.createElement('div');
      matchElement.innerHTML = `
        <h3>${match.team1} vs ${match.team2}</h3>
        <p>Date: ${match.date}</p>
        <p>Venue: ${match.venue}</p>
        <p>Tickets Available: ${match.ticketsAvailable}</p>
        <p>Ticket Price: $${match.ticketPrice}</p>
      `;
      matchesContainer.appendChild(matchElement);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('a[href="#home"]');
  const jerseysButton = document.querySelector('a[href="#jerseys"]');
  const ticketsButton = document.querySelector('a[href="#tickets"]');
  const contactButton = document.querySelector('a[href="#contact"]');
  const footerSection = document.getElementById('footer');

  homeButton.addEventListener('click', scrollToSection);
  jerseysButton.addEventListener('click', scrollToSection);
  ticketsButton.addEventListener('click', scrollToSection);
  contactButton.addEventListener('click', scrollTofooterSection);
    footerSection.scrollIntoView({ behavior: 'smooth' });

  function scrollToSection(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

fetch('projec.json')
  .then(response => response.json())
  .then(data => {
    // Process jersey data
    const jerseysContainer = document.getElementById('jerseys-container');
    data.jerseys.forEach(jersey => {
      const jerseyElement = document.createElement('div');
      jerseyElement.classList.add('jersey-item');

      // Create the image element
      const jerseyImage = document.createElement('img');
      jerseyImage.src = jersey.image;
      jerseyImage.alt = `${jersey.team} ${jersey.jerseyType}`;
      jerseyElement.appendChild(jerseyImage);

      // Create the jersey information
      const jerseyInfo = document.createElement('div');
      jerseyInfo.classList.add('jersey-info');
      jerseyInfo.innerHTML = `
        <h3>${jersey.team} ${jersey.jerseyType}</h3>
        <p>Size: ${jersey.size}</p>
        <p>Price: $${jersey.price}</p>
      `;
      jerseyElement.appendChild(jerseyInfo);

      jerseysContainer.appendChild(jerseyElement);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
