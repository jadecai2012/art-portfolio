document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'artwork-item'
    const artworkItems = document.querySelectorAll('.artwork-item');
  
    // Loop through each artwork item
    artworkItems.forEach(item => {
      // Add a click event listener to the current item
      item.addEventListener('click', function() {
        // Check if this item is already active
        const isActive = this.classList.contains('is-active');
  
        // Optional: Close all other active items
        artworkItems.forEach(otherItem => {
          if (otherItem.classList.contains('is-active')) {
            otherItem.classList.remove('is-active');
          }
        });
  
        // If the clicked item was NOT already active, make it active
        // If it WAS active, the previous loop already closed it, so we do nothing
        if (!isActive) {
          this.classList.add('is-active');
        }
        // If you want clicking an active item to close it, use:
        // this.classList.toggle('is-active'); // instead of the if/else
      });
    });
  });