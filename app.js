
function countWords() {
    var inputText = document.getElementById("wordInput").value;
    var wordArray = inputText.match(/\S+/g); 
    var wordCount = wordArray ? wordArray.length : 0;

    if (wordCount > 200) {
        alert("You have exceeded the limit of 200 words.");
    } else if (wordCount === 0) {
        alert("You haven't entered any words yet.");
    } else {
        alert("You have entered " + wordCount + " word(s).");
    }

    var remainingWords = 200 - wordCount;
    alert("You have entered " + wordCount + " word(s) out of 200. " + remainingWords + " word(s) remaining.");
}