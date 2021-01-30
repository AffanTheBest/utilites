const message = document.getElementById('message');
const typedWords = document.getElementById('mywords');
typedWords.disabled = true;
const btn = document.getElementById('btn');
// const refresh = document.getElementById('refresh-btn');
let startTime , endTime ;

function generateQuote() {
    fetch('https://api.quotable.io/random')
    .then((response) =>  response.json())
    .then((actData) => {
        const playGame = () => {
            message.innerText = actData.content;
            typedWords.value = '';
            let date = new Date();
            startTime = date.getTime();
            btn.innerText = 'Done';
        }

        const endPlay = () => {
            let date = new Date();
            endTime = date.getTime();
            let totalTime = ((endTime - startTime)/1000);

            let totalString = typedWords.value;
            let wordCount = wordCounter(totalString);
            let speed = Math.round((wordCount / totalTime) * 60);

            let finalMessage =  "Nice You have typed " + wordCount + " words, at the speed of " + speed +"wpm .";
            finalMessage += compareWords(message.innerText, totalString);
            message.innerText = finalMessage;
        }

        const compareWords = (str1 , str2) => {
            let word1 = str1.split(' ');
            let word2 = str2.split(' ');
            let count = 0;

            word1.forEach(function (item , index) {
                if(item == word2[index]){
                    count++; // count
                }
            })

            let errorWord = (word1.length - count);
            return (count + " correct out of " + word1.length + " words and number of  misspelled words are " + errorWord +".");
        }

        const wordCounter = (str) => {
            let response = str.split(' ').length;
            return response;
        }

        btn.addEventListener('click' , function(){
            if(this.innerText == 'Start'){
                // generateQuote();
                typedWords.disabled =  false;
                playGame();
            }else if(this.innerText == 'Done'){
                typedWords.disabled =  true;
                btn.innerText = 'Start';
                endPlay();
            }
        });
    });
}
generateQuote();
