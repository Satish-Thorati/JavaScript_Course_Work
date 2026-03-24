//Nested loops
for(let i=1; i<=4; i++){
    console.log("Outer Loop:",i)

    for(let j=1; j<=3; j++){
    console.log("Inner Loop:",j)
    
       for(let k=1; k<=2; k++){
       console.log("Inner Inside Loop:",k)
       }
    }
    
    for(let n=1; n<=3; n++){
    console.log("In Loop:",n)
    }
}
