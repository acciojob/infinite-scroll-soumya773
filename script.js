//your code here!
const listContainer = document.getElementById('list'); // Assuming your list has id="list"
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    listContainer.appendChild(li);
  }
}

// Initial load of 10 items
addItems(10);

// Detect scroll to bottom
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2); // Add 2 more items
  }
});


