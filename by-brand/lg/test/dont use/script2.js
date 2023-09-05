// Access and display JSON data
const outputDiv = document.getElementById("output");

// Fetch JSON data from the external file
fetch('./data2.json')
  .then((response) => response.json())
  .then((jsonData) => {
    outputDiv.innerHTML = `
      <p>Name: ${jsonData.name}</p>
      <p>Age: ${jsonData.age}</p>
      <p>City: ${jsonData.city}</p>
    `;
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
