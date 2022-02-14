const wordsList = [
  "jirafa",
  "hipopotamo",
  "murcielago",
  "elefante",
  "serpiente",
  "avestruz",
  "camello",
  "guacamayo",
  "flamenco",
  "tiburon",
  "venado",
];

const newWord = (word) => {
  if (wordsList.length < 12) {
    localStorage.setItem("words", JSON.stringify(wordsList));
    wordsList.push(word);
  }
  
  let aux = JSON.parse(localStorage.getItem("words"));
  aux.push(word)
  localStorage.setItem("words", JSON.stringify(aux));
  console.log(JSON.parse(localStorage.getItem('words')));
}

const randomWord = () => {
  let localStorageArray = JSON.parse(localStorage.getItem('words'));
  number = parseInt(Math.random() * localStorageArray.length);
  return localStorageArray[number];
};