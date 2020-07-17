const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['YES!', 'No.', 'Maybe.', 'I am not sure', 'Try again!'];


const shakeBall = () => {

    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 3000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';       
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = '\n' + 'The question must be completed "?".';
        answer.textContent = ''        
    } else {
        error.textContent = 'You must ask some question';
        answer.textContent = ''  
    }
    
    ball.classList.remove('shake-animaton');      
}


const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)