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

function chr(r,c){
    let count = 1
    for(let i = 1;i<=r;i++){
        let patern = ''
        for(j=1;j<=c;j++){
         patern += i + j -2
         count ++ 
         
        }
        

        console.log(patern)
    }

}
chr(4,4)
// const x = String.fromCharCode(67)
// console.log(x)