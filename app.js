const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => { 
  container.classList.toggle("active");
});

        // Function to check if the device is a mobile device
        function isMobileDevice() {
          return window.innerWidth <= 768; // You can adjust this width as needed
        }

        // Function to show the message popup
        function showMessagePopup() {
          var messagePopup = document.getElementById('message-popup');
          messagePopup.style.display = 'flex';
        }

        // Function to toggle the menu
        function toggleMenu() {
          var container = document.querySelector('.container');
          container.classList.toggle('menu-active');
        }

        // Function to toggle the message popup
        function toggleMessagePopup() {
          var messagePopup = document.getElementById('message-popup');
          messagePopup.style.display = (messagePopup.style.display === 'none') ? 'flex' : 'none';
        }

        // Function to close the message popup
        function closeMessagePopup() {
          var messagePopup = document.getElementById('message-popup');
          messagePopup.style.display = 'none';
        }

        // Check if it's a mobile device and show the message popup
        if (isMobileDevice()) {
          showMessagePopup();
        }