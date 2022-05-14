const question = [
    {
        'ques' : 'What is the capital of India',
        'a' : 'Jaipur',
        'b' : 'New Delhi',
        'c' : 'Kanpur',
        'd' : 'Jodhpur',
        'correct' : 'b'
    },
    {
        'ques' : 'Largest State in india by field',
        'a' : 'Rajasthan',
        'b' : 'New Delhi',
        'c' : 'Punjab',
        'd' : 'TanimNadu',
        'correct' : 'a'
    },
    {
        'ques' : 'Largest State in india by Population',
        'a' : 'Rajasthan',
        'b' : 'New Delhi',
        'c' : 'Punjab',
        'd' : 'Utter Pradesh',
        'correct' : 'd'
    },
    {
        'ques' : 'Which of the following is markup language',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'C++',
        'correct' : 'a'
    },
    {
        'ques' : 'Which one is Pink city of india',
        'a' : 'Mumbai',
        'b' : 'Delhi',
        'c' : 'Jaipur',
        'd' : 'Jodhpur',
        'correct' : 'c'
    } 
]
let index=0;
const queText = document.getElementById('ques');
const options = document.querySelectorAll('.option');
const box = document.getElementById('box');
let right =0,total = question.length;
const loadquestion = () =>
{
    if(index==total)
    {
        box.innerHTML = `<center><h2>Thank you,Your score is ${right} out of ${total} </center>`;
        return;
    }
    let data = question[index];
    queText.innerHTML = `${index+1}) ${(data.ques)}`;
    options[0].nextElementSibling.innerHTML = data.a;
    options[1].nextElementSibling.innerHTML = data.b;
    options[2].nextElementSibling.innerHTML = data.c;
    options[3].nextElementSibling.innerHTML = data.d;
}

const submitQuiz = () =>{
    let ans = selectedOption();
    let data = question[index];
    if(data.correct==ans)
       right++;
    index++;
    optionClear();
    loadquestion()
}
const optionClear = () =>{
    options.forEach((input)=>{
        if(input.checked){
           input.checked = false;
        }
    });
}

const selectedOption = () =>{
    let ans='#';
    options.forEach((input)=>{
        if(input.checked){
           ans = input.value;
        }
    });
    return ans;
}
loadquestion()