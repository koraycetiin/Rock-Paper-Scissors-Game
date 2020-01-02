let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

main = () => {
    rock.addEventListener('click', () => {
        game("Rock");
    });
    paper.addEventListener('click', () => {
        game("Paper");
    });
    scissors.addEventListener('click', () => {
        game("Scissors");
    });
}

game = (userChoice) => {
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    updateScore(winner);
    const smallUserWord = 'user'.fontsize(3);
    const smallCompWord = 'comp'.fontsize(3);
    if(winner === 'user'){
        result.innerHTML = `You won! ${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}`;
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
    }
    if(winner === 'computer'){
        result.innerHTML = `You lose! ${computerChoice}${smallCompWord} beats ${userChoice}${smallUserWord}`;
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
    }
    if(winner === 'draw'){
        result.innerHTML = `Draw! You both chose ${userChoice}`;
        document.getElementById(userChoice).classList.add('gray-glow');
        setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 1000);
    }
}

getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

getWinner = (userChoice, computerChoice) => {
    if((userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper') ||
        (userChoice === 'Paper' && computerChoice === 'Rock'))
        return 'user';
    if(userChoice === computerChoice)
        return 'draw';
    return 'computer';
}

updateScore = (winner) => {
    if(winner === 'user'){
        userScore++;
    }
    else if(winner === 'computer')
        computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

main();
