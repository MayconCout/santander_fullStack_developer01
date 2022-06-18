//para comentar somente um linha é só usar '//'
/*para comentar 
varias linha
é so usar '/*...*/
/*function soma(a, b){
    return a + b;
}
soma(3, 5)*/
//console.log("hello world");

function returnEvenValues(array){
    let evenNums=[];
    for(let i = 0; i < array.length; i++)
        if(array[i] % 2 === 0){
             evenNums.push(array[i]);
        }
    console.log(evenNums);
}

let array = [1, 2, 5, 10, 20, 25]

returnEvenValues(array);