let buttonAdd = document.getElementById("add-word");
let inputWord = document.getElementById("form-word");

buttonAdd.addEventListener("click", function (event) {
  
  if (inputWord.word.value.length > 0) {
      newWord(inputWord.word.value);
    inputWord.word.value = "";
    }
  
});