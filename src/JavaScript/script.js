class GuessGame {
    
    btnGuess = document.getElementById('btnGuess');
    btnReset = document.getElementById('btnReset');
    btnEasy = document.getElementById('btnEasy');
    btnMedium = document.getElementById('btnMedium');
    btnHard = document.getElementById('btnHard');

    attempts = document.getElementById('attempts');
    guessInput = document.getElementById('guessInput');
    feedback = document.getElementById('feedback');

    secretNumber = 0;
    maxAttempts = 0;
    currentAttempt = 1;

    constructor(){
        this.AddClickListeners();        
    }

    AddClickListeners(){
        this.btnEasy.addEventListener('click', () => this.StartGame(this.btnEasy.value));
        this.btnMedium.addEventListener('click', () => this.StartGame(this.btnMedium.value));
        this.btnHard.addEventListener('click', () => this.StartGame(this.btnHard.value));

        this.btnGuess.addEventListener('click', () => this.CheckGuess(this.guessInput.value))
        this.btnReset.addEventListener('click', () => this.ResetGame())
    }

    StartGame(difficultyValue ){
        this.secretNumber = Math.floor(Math.random() * 20) + 1;
        this.maxAttempts = parseInt(difficultyValue);
        this.currentAttempt = 1;
        this.DisplayGame();
    }
    
    CheckGuess(guess) {        
        this.attempts.innerHTML = `Attempt ${this.currentAttempt} out of ${this.maxAttempts.toString()}`;

        if(guess < 1 || guess > 20){
            this.feedback.innerHTML = "Just numbers between 1 and 20.";
            return;
        }
        
        if (guess == this.secretNumber) {
            this.feedback.innerHTML = "You did it! Great job on your win!";
            this.btnReset.classList.remove('hidden');
            return;
        } else if (guess > this.secretNumber) {
            this.feedback.innerHTML = "The secret number is <u>lower</u>.";
        } else {
            this.feedback.innerHTML = "The secret number is <u>higher</u>.";
        }
    
        this.currentAttempt++;

        if (this.currentAttempt > this.maxAttempts) {
            this.feedback.innerHTML = "You've run out of attempts, you lost.";
            this.btnReset.classList.remove('hidden');
        }
    }
    
    DisplayGame(){
        document.getElementById('difficulty').classList.add('hidden');
        document.getElementById('game').classList.remove('hidden');
        this.btnReset.classList.add('hidden');
        this.attempts.innerHTML = `Attempt ${this.currentAttempt} out of ${this.maxAttempts}`;
    }

    ResetGame(){
        document.getElementById('difficulty').classList.remove('hidden');
        document.getElementById('game').classList.add('hidden');
        this.feedback.innerHTML = "";
        this.guessInput.value = '';
    }
}

window.addEventListener('DOMContentLoaded', () => new GuessGame());




