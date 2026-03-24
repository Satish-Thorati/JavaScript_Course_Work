//for
for(let i=1 ; i <=5 ; i++){
    console.log("Number:",i)
}

for(let i=10; i>= 1 ; i--){
     console.log("Decrement:",i)
}

//while ---
let j = 1;
while(j<=6){
     console.log("While:",j)
     j++
}

//do-while
let k = 8;
do{
    console.log("Do while:",k)
    k--
}while(k >=1)


//Conditional breaking statements

//break
for(let e=1; e<=4; e++){
    if(e === 3){
        break
    }
    console.log("Break:",e)
}

//Continue
for(let i=1; i<=5; i++){
    if(i === 4){
        continue
    }
    console.log("Continue:",i)
}

