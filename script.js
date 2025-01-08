let apiURL = 'https://opentdb.com/api.php?amount=10';
window.onload = function() {

}

async function findquestions() {
    document.getElementById("main").innerHTML = "";
    try {   
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        console.log(data.results);
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
        console.log(i);
        const box = document.createElement("div");
        box.id = "box";
        if(results[i].incorrect_answers[2] != undefined) {
            box.innerHTML = `<h2>${Number(i) + 1}</h2><p>${results[i].question}</p><br><p id="right">${results[i].correct_answer}</p><br><p>${results[i].incorrect_answers[0]}</p><br><p>${results[i].incorrect_answers[1]}</p><br><p>${results[i].incorrect_answers[2]}</p>`;
        }
        else{
            box.innerHTML = `<h2>${Number(i) + 1}</h2><p>${results[i].question}</p><br><p id="right">${results[i].correct_answer}</p><br><p>${results[i].incorrect_answers[0]}</p>`;
        }
        grah.appendChild(box);
    } // for
  
} // updatePage



