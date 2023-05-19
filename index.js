// Q-1 Pattern Question_

// function pat(r,c){
//     let i = 1
    
//     while(i<=r){
//         let j = 1
//         let pattern = ''
//         while(j<=c){
//            pattern +="* "
//            j++
           
//         }
//         i++
//         console.log(pattern)
      
//     }
    
// }
// pat(2,3)

// function forloopPattern(r,c){
//     for(let i = 1;i<=r;i++){
//         let patern = ''
//         for(let j = 1;j<=c;j++){
//         patern +="* "
//         }
//         console.log(patern)
//     }

// }
// forloopPattern(3,3)

// function numpattern(r,c){
//     for(let i = 1;i<=r;i++){
//         let pattern = ""
//         for(let j = 1;j<=c;j++){
//             pattern += ' '+ i
//         }
//         console.log(pattern)
//     }
// }
// numpattern(3,3)
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// function change(r,c){
//     let i = 1
    
//    while(i<=r){
//     let pattern = ''
//     let j = 1
//     while(j<=c){
//         pattern += ' '+ c-j+1
//      j++
//     }
//     console.log(pattern)
//     i++
//    }
// }
// change(4,4)
// function count(r,c){
//     let count = 1
//     for(let i = 1;i<=r;i++){
//         let pattern = ''
//         for(let j = 1;j<=c;j++){
//             pattern += count
//             count ++
//         }
       

//         console.log(pattern)
//     }
// }
// count(3,3)
// function triangle(r){
//     for(let i = 1; i<=r;i++){
       
//         let pattern = ""
//         for(let j = 1;j<=i;j++){
//             pattern += i - j +1
           
//         }
//         console.log(pattern)
//     }
// }
// triangle(4)

// function chr(r,c){
//     let count = 1
//     for(let i = 1;i<=r;i++){
//         let patern = ''
//         for(j=1;j<=c;j++){
//          patern += i + j -2
//          count ++ 
         
//         }
        

//         console.log(patern)
//     }

// }
// chr(4,4)
// const x = String.fromCharCode(67)
// console.log(x)


// function achar(r){
//     let count = 1
//    for(let i = 1;i<=2*r;i++){
//    let patern =''
//     let y = i>r?2*r - i  : i 
 
//     for(let j = 1;j<=y ;j++){
//         if(j>=r*2 -i && j<= r*2 +i ){

//             patern += "*"
//         }else{
//             patern += " "

//         }
      

       
      

//     }
//   console.log(patern)
    
//    }
// }
// function triangle(r){
//     for(let i = 1; i<r;i++){
//        let pattern = ''
//     for(let j = i;j<=r;j++){
//         pattern+=" "
//     }
//     for(let j = 1;j<i;j++){
//         pattern+="*"
//     }
//     for(let j = 1;j<=i;j++){
//         pattern+="*"
//     }
//     console.log(pattern)
//    }
//     for(let i = 1; i<=r;i++){
//        let pattern = ''
//     for(let j = 1;j<=i;j++){
//         pattern+=" "
//     }
//     for(let j = i;j<r;j++){
//         pattern+="*"
//     }
//     for(let j = i;j<=r;j++){
//         pattern+="*"
//     }
//     console.log(pattern)
//    }
// }
// triangle(5)

// function galftry(x){
//     let count = 1
//    for(let i = 1;i<=x;i++){
//     let patern = ''
//     for(let j = 1;j<=x-i+1;j++){
//         patern += ' '
//     }for(let j = 1;j<=i;j++){
        
//         patern += j
        
//     }
//     for(let j = 1;j<i;j++){
        
//         patern += j
        
//     }
//     console.log(patern)
// }

// }

// galftry(4)


// bit wise operator

// 1,2,3,4,5
// let n = 5
// let sum = 0
// let a = 0
// let b = 1
// console.log(a)
// console.log(b)
// for(let i = 0;i<=5;i++){
//     let x =  a + b

//    console.log(x)
//   a = b
//   b = x 
   
// }
// console.log(sum)
// find prime number
// let prime = 5
// for(let i = 0;i<prime;i++){
//  for(let j = i;j<=prime;j++ ){
//    if(i+j==3){
//     break;
//    }
//    console.log(j)
//  }
// // }
// let x = 656
// let y = x.toString()
// console.log(y.split(''))
// [1,2,3,4,5]
var subtractProductAndSum = function(n) {
    let str = n.toString()
    let product = 1
    let sum = 0
    let arr = str.split('')
    for(let i = 0;i<arr.length;i++){
        product *= arr[i] 
        sum = sum + Number(arr[i])
        // console.log(i)
    }
    return product - sum
   
};
// console.log(subtractProductAndSum(4421))
let x = 234
console.log(x%10 +Math.floor(x/10)%10 )








