const correctAnswers = ['8','10','3','25'];
const questionForm = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');
questionForm.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [questionForm.q1.value,
        questionForm.q2.value,questionForm.q3.value,
        questionForm.q4.value];
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    result.classList.remove('d-none');
    if(score === 100){
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled','');
    }
    let point = 0;
    const showResult = setInterval(() => {
    result.querySelector('#percentage').textContent = `${point}%`;
    if(point == score){
        clearInterval(showResult);
    }
    else{
        point++;
    }
    }, 5);
});