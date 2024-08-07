document.addEventListener("DOMContentLoaded", function () {
  // Get all accordion items
  const accordionItems = document.querySelectorAll(".accordion li");

  // Function to handle accordion behavior
  function handleAccordion() {
      accordionItems.forEach(item => {
          const label = item.querySelector("label");
          const content = item.querySelector(".content");
          
          // Add click event to label
          label.addEventListener("click", function () {
              // If the label is already active, just toggle it off
              if (item.querySelector("input").checked) {
                  item.querySelector("input").checked = false;
              } else {
                  // Uncheck all other radio buttons
                  document.querySelectorAll(".accordion input[type='radio']").forEach(input => {
                      input.checked = false;
                  });
                  item.querySelector("input").checked = true;
              }
          });
      });
  }

  // Initialize accordion
  handleAccordion();
});