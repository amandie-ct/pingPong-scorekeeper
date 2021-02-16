// EN: Select elements and store them into a variable.
// PT: Selecione os elementos e armazene numa variável.

const p1Display = document.getElementById('p1score')
const p2Display = document.getElementById('p2score')
const player1 = document.getElementById('p1Button');
const player2 = document.getElementById('p2Button');
const resetButton = document.getElementById('resetButton');
let player1score = 0;
let player2score = 0;
let winningScore = 0;
let isGameOver = false;
let numberRounds = document.getElementById('nOfRounds');


// EN: Set the winningScore to be whatever the selected option value is;
// PT: Utilizar o valor do option selecionado através do input select como valor para a variável winningScore.

numberRounds.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

// EN: Reset - set isGameOver to false, set scores to zero and update the display for each player.
// PT: Reset - define isGameOver como falso, define os scores como zero e atualiza o display pra cada jogador.

function reset(){
    isGameOver = false;
    player1score = 0;
    player2score = 0;
    p1Display.textContent = player1score;
    p2Display.textContent = player2score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    player1.disabled = false;
    player2.disabled = false;
}

// EN: While not isgameOver, clicking updates the variable playerscore; isGameOver = true prevents from clicking and updating the score. 
// The display is updated with textContent.
// When the player score is equal to the winning score, it receives a class of winner, while the other player receives the class of loser.

// PT: Enquanto isGameOver for falso, clicar nos botões de player aumenta em 1 o valor de playerscore; isGameOver = true impede cliques e a atualização do score.
// O display/placar é atualizado utilizando textContent.
// Quando o score do jogador é igual ao score vencedor, recebe a classe de vencedor (winner), enquanto o outro player recebe a classe de perdedor (loser).

player1.addEventListener ('click', () => {
    if (!isGameOver){
        player1score += 1;
        if (player1score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            player1.disabled = true;
            player2.disabled = true;
        }
    }    
    p1Display.textContent = player1score;
})
    
player2.addEventListener ('click', () => {
    if (!isGameOver){
        player2score += 1;
        if (player2score === winningScore){
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
            player1.disabled = true;
            player2.disabled = true;
        }
    }
    p2Display.textContent = player2score;
})

resetButton.addEventListener('click', reset);
