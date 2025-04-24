const correctAnswers = ['E','E','E','E'];
const questionForm = document.querySelector('.question-form');
const result = document.querySelector('.result');
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
    let point = 0;
    const showResult = setInterval(() => {
    result.querySelector('span').textContent = `${point}%`;
    if(point == score){
        clearInterval(showResult);
    }
    else{
        point++;
    }
    }, 10);
});

// setTimeout(()=>{
//     console.log('test');
// },2000)

// setInterval(() => {
//     console.log('test');
// }, 1000); 

// let i = 0;
// const yaz = setInterval(() => {
//     console.log('test2');
//     i++;
//     if(i == 4){
//         clearInterval(yaz);
//     }
// }, 1000); 