console.log("---Section 1: ---");
let array = [];
array.push(55);
console.log(array);
array.unshift(13, 18);
console.log(array);
array.push(127);
console.log(array);
console.log(array[0]);
console.log(array.length);
console.log(typeof array);
console.log("--while loop--");
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++
}
console.log("--do while loop--");
i=0;
do{
    console.log(array[i]);
    i++;
}while(i<array.length);
console.log("--for loop --")
for(i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("--for of array--");
for(const element of array){
    console.log(element);
}
console.log("--total--")
let total = 0;
for(i=0; i<array.length; i++)(
    total += array[i]
)
console.log(total);
console.log("log all elements that divided by 3 or 5 using for loop")
for(i=0; i<array.length; i++){
    if (!(array[i]%3===0 && array[i]%5===0)){
        console.log(array[i])
    }
}
console.log("skipting numbers that devided by 11 & 5")
for(i=0; i<array.length; i++){
    if (!(array[i]%5===0 && array[i]%11===0)){
        console.log(array[i])
    }
}
console.log("when you find a variable that divided by 3, exit the loop.")
for(i=0; i<array.length; i++){
    if(array[i] % 3 ===0){
        break
    }
    else{
        console.log(array[i]);
    }
}
array.shift();
console.log(array);
array.pop();
console.log(array);
for(i=0; i<array.length; i++){
    console.log(array[i])
}
console.log("---Section 2: ---");

loop_1: for (let i = 0; i <= 5; i++) {
    loop_2: for (let j = 0; j <= 5; j++) {
        loop_3: for (let k = 0; k <= 5; k++){
            if(i == j -1 && j == k-1){
                break loop_1;
            }
            console.log(`i=${i} - j=${j} - k=${k}`);
        }
    }
}