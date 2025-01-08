let apiURL = 'https://opentdb.com/api.php?amount=10';

window.onload = function() {

}

async function findquestions() {
    document.getElementById("main").innerHTML = "";
    try {   
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        displayQuestions(data.results);
    } catch(error) {
      console.error('Error fetching questions:', error);
    } // catch
} // searchTvShows 

function displayQuestions(results) {
  const grah = document.getElementById("main");
  grah.innerHTML = "";

    // show each tv show from search results in webpage
    for (let i in results) {
        const box = document.createElement("div");
        box.id = "box";
        box.innerHTML = `<h2>${i}</h2><p>${results.question}</p>`;
        grah.appendChild(box);
    } // for
  
} // updatePage

displa



