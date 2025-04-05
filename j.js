
const gen=document.querySelector('.generate');
const pass=document.querySelector('.password');
const con=document.querySelector('.container');
function generatePassword(){
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for(let i = 0;i<8;i++) {
        pass += alpha[Math.floor(Math.random() * alpha.length)]
    }
    return pass;
     
    
       
};
gen.addEventListener("click", function(){
    pass.innerText = generatePassword();
});

document.querySelector(".change").addEventListener("click",function(){
    con.classList.toggle("dark");
});