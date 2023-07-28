let numbers = document.querySelectorAll(".number");

let spanElement = document.createElement("span");
let s = "";
spanElement.style.fontSize = '50px';
spanElement.style.color = 'yellow';
let operator = "";
let no1 = 0;
let no2  = 0;

let resultElement = document.createElement("span");;

for(let i = 0;i<numbers.length;i++)
{
    let number = numbers[i];

    number.addEventListener('click',()=>{
        s = s+number.value;
        
        spanElement.appendChild(document.createTextNode(number.value));
        
        
        document.getElementById("screen").appendChild(spanElement);
    });
}


let symbols = document.getElementsByClassName("symbol");

for(let i = 0;i<symbols.length;i++)
{

    if(symbols[i].value === 'b')
    {
        symbols[i].addEventListener('click',()=>{
            let screenElement  = document.querySelector("#screen span");
            
        if(screenElement.lastChild)
        {
            screenElement.removeChild(screenElement.lastChild);
        }
        s = s.substring(0,s.length-1);
        })
    }
    else if(symbols[i].value === 'C')
    {
        symbols[i].addEventListener('click',()=>{
            s = "";
        let screenElement  = document.getElementById("screen");
       while(screenElement.lastChild)
       {
        if(screenElement.lastChild)
        {
            screenElement.removeChild(screenElement.lastChild);
        }
       }
        })
    }
    else if(symbols[i].value == '=')
    {
        symbols[i].addEventListener('click',()=>{
            
            let numbers = s.split(operator);
            let no1  = Number(numbers[0]);
            let no2  = Number(numbers[1]);
            let screen = document.getElementById("screen");
            while(screen.lastChild || spanElement.lastChild){
                if(screen.lastChild)
                {
                    screen.removeChild(screen.lastChild);
                }
                else
                {
                    spanElement.removeChild(spanElement.lastChild);
                }
            }
            doOperation(no1,no2,operator);
            
        })
    }
     else
    {
        symbols[i].addEventListener('click',()=>{
            s+= symbols[i].value;
            operator = symbols[i].value;
            spanElement.appendChild(document.createTextNode(symbols[i].value));

            document.getElementById("screen").appendChild(spanElement);
        })
    }
}

resultElement.style.fontSize = '50px';
resultElement.style.color = 'white';

const doOperation = (no1,no2,operator) => {
    let answer  = 0;
    switch(operator)
    {
        case "+":
            if(resultElement.lastChild)
            {
                resultElement.removeChild(resultElement.lastChild);
            }
            answer = no1+no2;
            s = answer; 
            
            resultElement.appendChild(document.createTextNode(s.charAt(i)));
                
            
            document.getElementById("screen").appendChild(resultElement);
            
            break;

        
        case '*':
            if(resultElement.lastChild)
            {
                resultElement.removeChild(resultElement.lastChild);
            }
            answer = no1*no2;
            s = answer; 
            resultElement.appendChild(document.createTextNode(answer));
            document.getElementById("screen").appendChild(resultElement);
            break;
        
        case '-':
            if(resultElement.lastChild)
            {
                resultElement.removeChild(resultElement.lastChild);
            }
            answer = no1-no2;
            s = answer; 
            resultElement.appendChild(document.createTextNode(answer));
            document.getElementById("screen").appendChild(resultElement);
            break;
        
        case '/':
            if(resultElement.lastChild)
            {
                resultElement.removeChild(resultElement.lastChild);
            }
            answer = no1/no2;
            s = answer; 
            resultElement.appendChild(document.createTextNode(answer));
            document.getElementById("screen").appendChild(resultElement);      
            break;
          
        

    }
}


