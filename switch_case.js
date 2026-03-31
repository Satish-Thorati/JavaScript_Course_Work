//Vowels and Consonants
let chr = 'a';
switch(chr){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('vowel')
    break
    default:
        console.log('Consonant')
}

//Vowels and Consonants and Numbers
let ch = '9';
let ch_lower = ch.toLocaleLowerCase()
switch(ch_lower){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowels")
    break
    default:
    if(ch_lower >= 'a' && ch_lower <= 'z'){
        console.log("Consonents")
    }
    else if(ch >= '0' && ch <= '9'){
        console.log("Numbers")
    }
    else{
        console.log("Invalid Data")
    }

}
