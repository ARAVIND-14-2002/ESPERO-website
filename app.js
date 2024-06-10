// const hamburger_menu = document.querySelector(".hamburger-menu");
// const container = document.querySelector(".container");

// hamburger_menu.addEventListener("click", () => { 
//   container.classList.toggle("active");
// });

// // Function to check if the device is a mobile device
// function isMobileDevice() {
//   return window.innerWidth <= 768; // You can adjust this width as needed
// }

// // Function to show the message popup
// function showMessagePopup() {
//   var messagePopup = document.getElementById('message-popup');
//   messagePopup.style.display = 'flex';
// }

// // Function to toggle the menu
// function toggleMenu() {
//   var container = document.querySelector('.container');
//   container.classList.toggle('menu-active');
// }

// // Function to open the FlippingBook Viewer
// function openFlippingBookViewer() {
//   // Get the FlippingBook viewer container
//   var flippingBookViewerContainer = document.getElementById('flippingbook-viewer');

//   // Set the content of the container to the embed iframe
//   flippingBookViewerContainer.innerHTML = '<iframe src="https://online.flippingbook.com/view/1024860941/" width="100%" height="300" style="display: block; margin: 0 auto;" scrolling="no" frameborder="0" allowfullscreen="" allow="clipboard-write" class="flippingbookflip"></iframe>';

//   // Center the FlippingBook viewer on the screen
//   flippingBookViewerContainer.style.opacity = '1';
//   flippingBookViewerContainer.style.left = '50%';
//   flippingBookViewerContainer.style.transform = 'translateX(-50%)';

//   // For mobile view
//   var mobileFlippingBookViewer = document.getElementById('mobile-flippingbook-viewer');
//   mobileFlippingBookViewer.style.display = 'block';

//   // Request user interaction to resolve AudioContext issue
//   var resumeAudioContext = function () {
//     if (window.context) {
//       window.context.resume().then(() => {
//         console.log('AudioContext resumed');
//       });
//     }
//   };

//   // Create a button for user interaction
//   var interactionButton = document.createElement('button');
//   interactionButton.innerHTML = 'Start Viewer';
//   interactionButton.onclick = function () {
//     resumeAudioContext();
//     openFlippingBookViewer();
//     this.style.display = 'none'; // Hide the button after interaction
//   };

//   // Append the button to the body
//   document.body.appendChild(interactionButton);
// }

// // Function to toggle the message popup
// function toggleMessagePopup() {
//   var messagePopup = document.getElementById('message-popup');
//   messagePopup.style.display = (messagePopup.style.display === 'none') ? 'flex' : 'none';
// }

// // Function to close the message popup
// function closeMessagePopup() {
//   var messagePopup = document.getElementById('message-popup');
//   messagePopup.style.display = 'none';
// }

// // Check if it's a mobile device and show the message popup
// if (isMobileDevice()) {
//   showMessagePopup();
// }
