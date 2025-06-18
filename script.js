
    document.addEventListener("DOMContentLoaded", () => {
      const userId = "123"; // mock user ID

      function showSection(id) {
        document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
        document.getElementById(id).style.display = "block";

        if (id === 'transactions') loadTransactions();
      }

      function loadTransactions() {
        const container = document.getElementById('transactions');
        container.innerHTML = '<div class="spinner">Loading...</div>';

        setTimeout(() => {
          const transactions = [
            { date: '2025-06-15', action: 'Purchased Golden Frame', points: -500 },
            { date: '2025-06-10', action: 'Raffle Win', points: +300 }
          ];

          container.innerHTML = '<h2>Transaction History</h2>' +
            '<table><thead><tr><th>Date</th><th>Action</th><th>Points</th></tr></thead><tbody>' +
            transactions.map(t => `<tr><td>${t.date}</td><td>${t.action}</td><td>${t.points}</td></tr>`).join('') +
            '</tbody></table><button onclick="loadTransactions()">Load More</button>';
        }, 1000);
      }

      window.showSection = showSection;
    });
 
 
   
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }

  // This function is called when sidebar buttons are clicked
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Auto-hide sidebar if on mobile
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    }
  }

