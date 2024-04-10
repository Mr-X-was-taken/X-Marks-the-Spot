$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(".fa-binoculars").hover(
  function () {
    $(this).addClass("fa-bounce");
  },
  function () {
    $(this).removeClass("fa-bounce");
  }
);

$(".fa-gear").hover(
  function () {
    $(this).addClass("fa-spin");
  },
  function () {
    $(this).removeClass("fa-spin");
  }
);

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("#toggleBackgroundButton");
  const contentWrapperImg = document.querySelector(".content-wrapper-img");
  const contentWrapperImg3Elements = document.querySelectorAll(
    ".content-wrapper-img3"
  ); // Select all elements with class content-wrapper-img3
  const contentWrapperImg4Elements = document.querySelectorAll(
    ".content-wrapper-img4"
  ); // Select all elements with class content-wrapper-img3
  const customButton = document.getElementById("customButton"); // Get the button by id

  toggleBackgroundButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    contentWrapperImg.classList.toggle("invert-filter");

    contentWrapperImg4Elements.forEach((element) => {
      element.classList.toggle("invert-filter");
    });

    // Toggle the invert-filter class for all content-wrapper-img3 elements
    contentWrapperImg3Elements.forEach((element) => {
      element.classList.toggle("invert-filter");
    });

    customButton.classList.toggle("invert-filter");
    customButton2.classList.toggle("invert-filter");
    side - title.classList.toggle("invert-filter");
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("customButton");
  const backgroundContainer = document.querySelector(".background-container");
  const appContainer = document.querySelector(".app");

  toggleButton.addEventListener("click", () => {
    backgroundContainer.classList.toggle("visible");
    appContainer.classList.toggle("hidden");
  });
});
$(function () {
  // Function to show the pop-up
  function showPopUp() {
    $(".overlay-app").addClass("is-active");
    $(".pop-up").addClass("visible");
  }

  // Function to hide the pop-up
  function hidePopUp() {
    $(".overlay-app").removeClass("is-active");
    $(".pop-up").removeClass("visible");
  }

  // Event listener for the "Update" button
  $(".status-button:not(.open)").on("click", function (e) {
    showPopUp();
  });

  // Event listener for the close button
  $(".pop-up .close").click(function () {
    hidePopUp();
  });

  // Event listener for the "Continue" button inside the pop-up
  $(".pop-up .content-button:not(.open)").click(function () {
    hidePopUp();
  });
});

// Add User Entry

function addEntry() {
  // Display the modal
  var modal = document.getElementById("entryModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
  document.getElementById("entryForm").onsubmit = function(event) {
    event.preventDefault();
    modal.style.display = "none";

    // Get user inputs
    var name = document.getElementById("name").value;
    var link = document.getElementById("link").value;
    var nfo = document.getElementById("nfo").value;

  if (name && link) {
    // Create list entry
    var listEntry = document.createElement("li");
    listEntry.classList.add("list-website");
    listEntry.innerHTML = `
      <div class="website-list">
        <img src="https://www.google.com/s2/favicons?sz=32&domain=${link}" alt="${link}">
        ${name}
      </div>
      <div class="button-wrapper">
        <button class="nfo-button status-button open">.nfo</button>
        <div class="nfo-content">${nfo}</div>
      </div>
      <div class="buttonHolder">
        <button class="starbutton"></button>
      </div>
    `;

    // Get or create the ul element
    var ul = document.querySelector(".content-section ul");
    if (!ul) {
      ul = document.createElement("ul");
      document.querySelector(".content-section").appendChild(ul);
    }

    ul.appendChild(listEntry);
  }

  // Create card entry
  var cardEntry = document.createElement("div");
  cardEntry.classList.add("app-card");
  cardEntry.innerHTML = `
  <span>
    <img src="https://www.google.com/s2/favicons?sz=32&domain=${link}" alt="${link}">
    <div class="text-center">${name}</div>
    <div class="buttonHolder">
      <button class="starbutton2"></button>
    </div>
  </span>
  <div class="app-card__subtext">${nfo}</div>
`;
  document.getElementById("Tiles").appendChild(cardEntry);
}
}
//tiles or list?

document.addEventListener("DOMContentLoaded", function () {
  var listSection = document.getElementById("List");
  var tilesSection = document.getElementById("Tiles");
  var toggleIcon = document.getElementById("ToggleIcon");

  // Function to toggle sections and change the icon
  function toggleSectionsAndIcon() {
    if (
      listSection.style.display === "none" ||
      listSection.style.display === ""
    ) {
      listSection.style.display = "block";
      tilesSection.style.display = "none";
      toggleIcon.className = "fa fa-th";
    } else {
      listSection.style.display = "none";
      tilesSection.style.display = "block";
      toggleIcon.className = "fa fa-list-ul";
    }
  }

  // Initially, show the "Tiles" section and set the icon
  listSection.style.display = "none";
  tilesSection.style.display = "block";
  toggleIcon.className = "fa fa-th";

  // Toggle sections and change the icon when clicked
  toggleIcon.addEventListener("click", toggleSectionsAndIcon);

  // Call the toggle function on page load
  toggleSectionsAndIcon();
});

// Open website on click
document.addEventListener("DOMContentLoaded", function () {

  function openLinkFromElement(element) {
    const link = element.querySelector("img").getAttribute("alt");
    window.open(link, "_blank");
  }

  // Event delegation for .list-website items
  document.addEventListener('click', function(event) {
    const listItem = event.target.closest('.list-website');
    if (listItem && !event.target.classList.contains('starbutton')) {
      openLinkFromElement(listItem);
    }
  });

  // Event delegation for .app-card items
  document.addEventListener('click', function(event) {
    const tileItem = event.target.closest('.app-card');
    if (tileItem && !event.target.classList.contains('starbutton2')) {
      openLinkFromElement(tileItem);
    }
  });

});

const floatingImage = document.querySelector(".floating-image");
const toggleButton = document.getElementById("toggleAnimation");
const sailImage = "assets/pictures/Pirate.gif"; // Path to Sail image (relative to the HTML file)
const anchorImage = "assets/pictures/Anchor.gif"; // Path to Anchor image (relative to the HTML file)
const backgroundVideo1 = document.getElementById("mp4Video");
const backgroundVideo2 = document.getElementById("mp4Video2"); // Get the second background video element

let currentAnimation = "floatImage"; // Track the current animation
let isAnchored = false; // Track whether the ship is anchored or not

// Set the initial content of toggleButton to the Sail image
toggleButton.innerHTML = '<img src="' + anchorImage + '" alt="Anchor">';

toggleButton.addEventListener("click", () => {
  switch (currentAnimation) {
    case "floatImage":
      // Start the anchor animation once after the floatImage loop finishes
      floatingImage.style.animation = "floatImage 17s linear forwards";
      currentAnimation = "waitingForFloatImageToFinish";
      toggleButton.innerHTML = '<img src="' + sailImage + '" alt="Sail">'; // Display the Sail image
      floatingImage.addEventListener(
        "animationend",
        () => {
          floatingImage.style.animation = "anchor 2s linear forwards";
          currentAnimation = "anchor";
          backgroundVideo1.pause(); // Pause the first background video when anchored
          backgroundVideo2.pause(); // Pause the second background video when anchored
          isAnchored = true;
        },
        { once: true }
      );
      break;
    case "waitingForFloatImageToFinish":
      // Ignore the click event while waiting for floatImage to finish
      break;
    case "anchor":
      // Start the leave animation and then go back to floatImage
      floatingImage.style.animation = "leave 2s linear forwards";
      currentAnimation = "leave";
      toggleButton.innerHTML = '<img src="' + anchorImage + '" alt="Anchor">'; // Display the Anchor image

      // Reset the animation to floatImage when leave animation finishes
      floatingImage.addEventListener(
        "animationend",
        () => {
          floatingImage.style.animation = "floatImage 17s linear infinite";
          currentAnimation = "floatImage";
          if (isAnchored) {
            backgroundVideo1.play(); // Resume the first background video when unanchored
            backgroundVideo2.play(); // Resume the second background video when unanchored
            isAnchored = false;
          }
        },
        { once: true }
      );
      break;
    default:
      break;
  }
});

// Select the button and video containers as before
const toggleBackgroundButton = document.getElementById("toggleBackground");
const videoContainer = document.querySelector(".video-container");
const videoContainerNight = document.querySelector(".video-container-night");
const sunImage = "assets/pictures/Moon.png"; // Path to Sun image (relative to the HTML file)
const moonImage = "assets/pictures/Day.png"; // Path to Moon image (relative to the HTML file)

// Check the initial background state and set the button content accordingly
let isDaytime = videoContainer.style.display !== "none";

// Function to update the button content
function updateButtonContent(isDaytime) {
  toggleBackgroundButton.innerHTML = `
          <img src="${isDaytime ? sunImage : moonImage}" alt="${
    isDaytime ? "Daytime" : "Nighttime"
  }">
      `;
}

// Call the function to set the initial button content
updateButtonContent(isDaytime);

// Add an event listener to toggle the background and update the button content
toggleBackgroundButton.addEventListener("click", () => {
  if (isDaytime) {
    videoContainer.style.display = "none";
    videoContainerNight.style.display = "block";
    isDaytime = false;
  } else {
    videoContainer.style.display = "block";
    videoContainerNight.style.display = "none";
    isDaytime = true;
  }

  // Call the function to update the button content after the background toggle
  updateButtonContent(isDaytime);
});

// Trigger the initial click to set the initial state
toggleBackgroundButton.click();

var video = document.getElementById("Clouds");
video.playbackRate = 0.4;

document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox
  var checkbox = document.getElementById("check1");

  // Get the divs to show/hide
  var videoBg = document.querySelector(".video-bg");
  var staticDay = document.querySelector(".static-day");

  // Initially hide the staticDay div
  staticDay.style.display = "none";

  // Listen for changes on the checkbox
  checkbox.addEventListener("change", function () {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // If checked, hide the video and show the static image
      videoBg.style.display = "none";
      staticDay.style.display = "flex"; // Adjust as needed (e.g., 'block', 'flex')
    } else {
      // If unchecked, show the video and hide the static image
      videoBg.style.display = "";
      staticDay.style.display = "none";
    }
  });
});







// Populate






// Markdown

let categories = []; // Defined globally to ensure accessibility
document.addEventListener("DOMContentLoaded", (event) => {
  
  function parseMarkdown(markdown) {
    const lines = markdown.split("\n");
    let currentCategory = null;
    let currentSubCategory = null;
    let currentSubSubCategory = null;

    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        // Detects category
        const title = line.substring(3).trim();
        currentCategory = { title, subCategories: [] };
        categories.push(currentCategory);
        // Reset subcategory and sub-subcategory when a new category is found
        currentSubCategory = null;
        currentSubSubCategory = null;
      } else if (line.startsWith("### ")) {
        // Detects sub-category
        const subTitle = line.substring(4).trim();
        currentSubCategory = { subTitle, subSubCategories: [] };
        if (currentCategory) {
          currentCategory.subCategories.push(currentSubCategory);
        }
        // Reset sub-subcategory when a new sub-category is found
        currentSubSubCategory = null;
      } else if (line.startsWith("#### ")) {
        // Detects sub-sub-category
        const subSubTitle = line.substring(5).trim();
        currentSubSubCategory = { subSubTitle, items: [] };
        if (currentSubCategory) {
          currentSubCategory.subSubCategories.push(currentSubSubCategory);
        }
      } else if (line.startsWith("- [")) {
        // Detects item
        const match = line.match(
          /\- \[([^\]]+)\]\(([^\)]+)\)(?:\s*\.nfo)?\s*(!star2!)?\s*(.*)/
        );
        if (match) {
          const [_, name, link, starred, info] = match;
          const item = { name, link, info, starred: !!starred };
          if (currentSubSubCategory) {
            currentSubSubCategory.items.push(item);
          } else if (currentSubCategory) {
            // Fallback to sub-category if no sub-sub-category exists
            currentSubCategory.items = currentSubCategory.items || [];
            currentSubCategory.items.push(item);
          } else if (currentCategory) {
            // Fallback to category if no sub-category exists
            currentCategory.items = currentCategory.items || [];
            currentCategory.items.push(item);
          }
        }
      }
    });
    console.log(categories); // Log the categories
  }

  // Now, outside the parseMarkdown function, fetch the markdown content
  fetch("links.md") // Make sure the path to 'links.md' is correct
    .then((response) => response.text()) // Convert the response to text
    .then((markdown) => {
      parseMarkdown(markdown); // Call parseMarkdown with the fetched content
      populateSideMenu(); // Call this right after to ensure 'categories' is ready
      populateMainHeader("Oracle's Cove");

    })
    .catch((error) => console.error("Failed to fetch links.md:", error)); // Log errors, if any
});


// populateSideMenu

function populateSideMenu() {
  const leftSide = document.querySelector(".left-side");
  if (!leftSide) {
    console.log("Left side panel not found.");
    return;
  }
  console.log("Left side panel found.");

  // Loop through each category
  categories.forEach((category, index) => {

    const sideWrapper = document.createElement("div");
    sideWrapper.className = "side-wrapper";

    const sideTitle = document.createElement("div");
    sideTitle.className = "side-title";
    sideTitle.textContent = category.title;
    sideTitle.addEventListener('click', () => {
      populateMainHeader(category.title, category.subCategories[0]?.subTitle);
    });
    const sideMenu = document.createElement("div");
    sideMenu.className = "side-menu";

    // Check for and process subCategories
    if (category.subCategories && category.subCategories.length > 0) {
      category.subCategories.forEach((subCategory, subIndex) => {

        const subCatElement = processSubCategory(subCategory);
        sideMenu.appendChild(subCatElement);
      });
    }

    sideWrapper.appendChild(sideTitle);
    sideWrapper.appendChild(sideMenu);
    leftSide.appendChild(sideWrapper);
  });

  console.log("Finished populating side menu.");
}

function processSubCategory(subCategory) {
  const subCategoryLink = document.createElement("div");
  subCategoryLink.className = "sub-title";
  const span = document.createElement("span");
  span.textContent = subCategory.subTitle;

  // Add click listener to each sub-category
  subCategoryLink.addEventListener('click', () => {
      const categoryName = subCategoryLink.closest('.side-wrapper').querySelector('.side-title').textContent;
      populateMainHeader(categoryName, subCategory.subTitle);
  });

  subCategoryLink.appendChild(span);

  // Process sub-subcategories, if present
  if (subCategory.subSubCategories && subCategory.subSubCategories.length > 0) {
      subCategory.subSubCategories.forEach((subSubCategory) => {
          const subSubCatElement = document.createElement("div");
          subSubCatElement.className = "sub-sub-title";
          subSubCatElement.textContent = subSubCategory.subSubTitle;

          // Add click event for sub-sub-category
          subSubCatElement.addEventListener('click', (e) => {
              e.stopPropagation(); // Prevent triggering click events of parent elements
              const categoryName = subSubCatElement.closest('.side-wrapper').querySelector('.side-title').textContent;
              // Call populateMainHeader with both sub-category and sub-sub-category
              populateMainHeader(categoryName, subCategory.subTitle, subSubCategory.subSubTitle);

              // Update active state visually for sub-sub-category
              document.querySelectorAll('.sub-sub-title').forEach(el => el.classList.remove('is-active'));
              subSubCatElement.classList.add('is-active');
          });

          // Append sub-sub-category element to the sub-category link or a designated container
          subCategoryLink.appendChild(subSubCatElement);
      });
  }

  return subCategoryLink;



   //  populateMainHeader



}
function populateMainHeader(selectedCategoryTitle, selectedSubCategoryTitle = null, selectedSubSubCategoryTitle = null) {
    const menuLinkMain = document.querySelector('.main-header .menu-link-main');
    const headerMenu = document.querySelector('.main-header .header-menu');
    const subHeader = document.querySelector('.sub-header'); // Targeting the .sub-header for sub-sub-categories
  
    // Clear existing content
    menuLinkMain.textContent = '';
    headerMenu.innerHTML = '';
    subHeader.innerHTML = ''; // Clear previous sub-sub-categories
  
    let subCategories;
    
    // Handling static categories with predefined sub-categories
    if (selectedCategoryTitle === "Oracle's Cove") {
        menuLinkMain.textContent = "Oracle's Cove";
        subCategories = [
            { subTitle: "Before you Sail", subSubCategories: [] },
            { subTitle: "FAQ", subSubCategories: [] }
        ];
    } else if (selectedCategoryTitle === "Personal Treasures") {
        menuLinkMain.textContent = "Personal Treasures";
        subCategories = [
            { subTitle: "Favourites", subSubCategories: [] },
            { subTitle: "Self-Dredged", subSubCategories: [] }
        ];
    } else {
        // Dynamic categories from categories array
        const selectedCategory = categories.find(category => category.title === selectedCategoryTitle);
        if (!selectedCategory) {
            console.error('Selected category not found');
            return;
        }
        menuLinkMain.textContent = selectedCategory.title;
        subCategories = selectedCategory.subCategories;
    } 

    
  
    // Populate subcategories



    
    subCategories.forEach(subCategory => {
      const isActive = subCategory.subTitle === selectedSubCategoryTitle || (!selectedSubCategoryTitle && subCategories[0] === subCategory);
      addSubCategoryLink(headerMenu, subCategory.subTitle, isActive, selectedCategoryTitle);

      // Ensure the first sub-sub-category is active if its parent sub-category is active
      if (isActive && subCategory.subSubCategories && subCategory.subSubCategories.length > 0) {
          const activeSubSubCategory = selectedSubSubCategoryTitle || subCategory.subSubCategories[0].subSubTitle;
          subCategory.subSubCategories.forEach(subSubCategory => {
              addSubSubCategoryLink(subHeader, subSubCategory.subSubTitle, subSubCategory.subSubTitle === activeSubSubCategory);
          });
      }
  });
  if (subHeader.children.length > 0) {
    subHeader.style.display = ''; // Show .sub-header if it has children
} else {
    subHeader.style.display = 'none'; // Hide .sub-header if empty
}
}
function addSubCategoryLink(container, subTitle, isActive, categoryName = '') {
  const link = document.createElement('a');
  link.className = 'main-header-link' + (isActive ? ' is-active' : '');
  link.href = '#';
  link.textContent = subTitle;
  // Set click event listener to update content based on selected sub-category
  link.addEventListener('click', (e) => {
      e.preventDefault();
      populateMainHeader(categoryName, subTitle);
  });
  container.appendChild(link);
}
  
function addSubSubCategoryLink(container, subTitle, isActive) {
  const link = document.createElement('a');
  link.className = 'sub-sub-header-link' + (isActive ? ' is-active' : '');
  link.href = '#';
  link.textContent = subTitle;
  link.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove 'is-active' class from all sub-sub-category links
      document.querySelectorAll('.sub-sub-header-link').forEach(el => el.classList.remove('is-active'));
      // Add 'is-active' class to the clicked link
      link.classList.add('is-active');
      
      // Optional: Call a function to update the main content based on the sub-sub-category
  });
  container.appendChild(link);
}

document.querySelectorAll('.side-menu .sub-title').forEach(item => {
  item.addEventListener('click', (e) => {
      e.preventDefault();

      // Adjusted to use textContent for category name since 'data-category' attribute is not set in provided HTML
      const categoryName = item.closest('.side-wrapper').querySelector('.side-title').textContent;
      // Using textContent of the span within the clicked item for subcategory name
      const subCategoryName = item.querySelector('span').textContent;
      populateMainHeader(categoryName, subCategoryName);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener to the static entry for "Oracle's Cove"
  const oracleCoveEntry = document.querySelector('#oracleCoveEntry');
  if (oracleCoveEntry) {
      oracleCoveEntry.addEventListener('click', () => {
          populateMainHeader("Oracle's Cove", "Before you Sail");
      });
  }

  // Attach event listener to the static entry for "Personal Treasures"
  const personalTreasuresEntry = document.querySelector('#personalTreasuresEntry');
  if (personalTreasuresEntry) {
      personalTreasuresEntry.addEventListener('click', () => {
          populateMainHeader("Personal Treasures", "Favourites");
      });
  }

  // Continue with your existing logic for dynamically generated categories
  document.querySelectorAll('.side-menu .sub-title').forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          const categoryName = item.closest('.side-wrapper').querySelector('.side-title').textContent;
          const subCategoryName = item.querySelector('span').textContent;
          populateMainHeader(categoryName, subCategoryName);
      });
  });
});


$(document).ready(function() {
  function centerActiveCategory() {
    const $active = $('.main-header-link.is-active');
    if ($active.length === 0) {
      return; // Exit if no active element found
    }
    const $menu = $('.header-menu');
    const activeOffset = $active.offset().left + $active.outerWidth(true) / 2;
    const menuOffset = $menu.offset().left + $menu.width() / 2;
    const scrollLeft = $menu.scrollLeft() + (activeOffset - menuOffset);
    $menu.animate({scrollLeft: scrollLeft}, 'slow');
  }

  $('#scrollLeft, #scrollRight').click(function() {
    const direction = $(this).is('#scrollLeft') ? '-=200' : '+=200';
    $('.header-menu').animate({scrollLeft: direction}, 'normal');
  });

  // Event delegation for dynamically added 'sub-title' and 'sub-sub-title'
  $(document).on('click', '.sub-title, .sub-sub-title', function() {
    // Logic to handle the click event, e.g., updating the main header or active state

    // After handling the click, center the active category in the header menu
    centerActiveCategory();
  });
});




  var link = document.querySelector('.header-link1');
  var modal = document.getElementById('entryModal2');

  // Function to show the modal
  function showModal(event) {
    event.preventDefault(); // Prevent the default action
    modal.style.display = 'block'; // Show the modal
  }

  // Function to hide the modal if the click is outside of the modal-content
  function hideModal(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  // Attach the event listener to the link to show the modal
  link.addEventListener('click', showModal);

  // Attach the event listener to the window to hide the modal when clicked outside
  window.addEventListener('click', hideModal);


document.addEventListener("DOMContentLoaded", () => {
  attachEventListeners();
});

function attachEventListeners() {
  // Assuming your category and sub-category selections are made through elements with specific classes or IDs
  // You'll need to adjust these selectors based on your actual HTML structure
  document.querySelectorAll('.side-menu .sub-title, .side-title, .menu-link-main, .main-header, .main-header-link').forEach(item => {
      item.addEventListener('click', (e) => {
          const categoryName = item.closest('.side-wrapper').querySelector('.side-title').textContent.trim();
          const subCategoryName = item.querySelector('span') ? item.querySelector('span').textContent.trim() : null;
          displayStaticContent(categoryName, subCategoryName);

      });
  });
}


function displayStaticContent(categoryName, subCategoryName = null) {
  // Hide all static content initially

  // Display the relevant static content based on selection
  if (categoryName === "Oracle's Cove" && subCategoryName === "FAQ") {
      document.getElementById('FAQ').style.display = 'flex';
      document.getElementById('Before you Sail').style.display = 'none';
  } else if (categoryName === "Oracle's Cove" && subCategoryName === "Before you Sail") {
      document.getElementById('Before you Sail').style.display = 'flex';
      document.getElementById('FAQ').style.display = 'none';
  }
}
