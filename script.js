const upperSet="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet="qwertyuiopzxcvbnmasdfghjkl"
const numberSet="7891234560";
const symbolSet="!@#$%^&*()_-+=~`";



// Selectors
const passBox=document.getElementById("pass-box");
const totalChar=document.getElementById("total-char")
const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case");
const numberInput=document.getElementById("numbers");
const symbolInput=document.getElementById("symbols");



const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password="") =>{
    totalChar.value=totalChar.value > 30 ? 30 : totalChar.value;

    if(upperInput.checked && password.length<totalChar.value){
        password += getRandomData(upperSet);
    }

    if(lowerInput.checked && password.length<totalChar.value){
        password += getRandomData(lowerSet);
    }

    if(numberInput.checked && password.length<totalChar.value){
        password += getRandomData(numberSet);
    }

    if(symbolInput.checked && password.length<totalChar.value){
        password += getRandomData(symbolSet);
    }

    totalChar.value=totalChar.value > 30 ? 30 : totalChar.value;

    if(password.length<totalChar.value){
        return generatePassword(password);
    }

    // console.log(password);
    passBox.innerText=password;
}

document.getElementById("btn").addEventListener("click",function(){
    generatePassword();
}

)

generatePassword();