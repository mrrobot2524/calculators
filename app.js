const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const mult = document.getElementById('multiply');
const division = document.getElementById('division');


action = '+'

// console.log(input1.value);
// console.log(input2.value);
// resultElement.textContent = 42 - 23;



plusBtn.addEventListener('click', () =>{
    action = '+';
});
minusBtn.addEventListener('click', () =>{
    action = '-';
});
mult.addEventListener('click', () =>{
    action = '*';
});
division.addEventListener('click', () => {
    action = '/';
})

resultEffect = (result) =>{
    if(result < 0){
        resultElement.style.backgroundColor = 'red';
    }else{
        resultElement.style.backgroundColor = 'green';
        resultElement.style.padding = '30px';
    }
}

opperationWithNumbers = (inp1, inp2, action) =>{
    if(action == '+'){
        return Number(inp1.value) + Number(inp2.value);
    }else if(action == '-'){
        return Number(inp1.value) - Number(inp2.value);
    }else if(action == '*'){
        return Number(inp1.value) * Number(inp2.value);
    }else if(action == '/'){
        return Number(inp1.value) / Number(inp2.value);
    }
}

submitBtn.addEventListener('click', () =>{
    sum = resultElement.textContent = opperationWithNumbers(input1, input2, action);
    resultEffect(sum);
});