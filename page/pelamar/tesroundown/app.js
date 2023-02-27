const toggleCategoryItems = (category) => {
  category.querySelector('.category-items').classList.toggle('visible');
};

const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
  category.addEventListener('click', () => {
    toggleCategoryItems(category);
  });
});

const filterItems = () => {
  // get all checked items
  const checkedItems = document.querySelectorAll('.filter-item:checked');

  // get all items that should be displayed
  const itemsToDisplay = Array.from(checkedItems).map((item) => item.value);

  // apply filtering logic to display items as needed
  // example: hide all items not in `itemsToDisplay`
};

// attach event listeners to filter items when checkboxes are clicked
const filterCheckboxes = document.querySelectorAll('.filter-item');
filterCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    filterItems();
  });
});
