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
// var subtractProductAndSum = function(n) {
//     let str = n.toString()
//     let product = 1
//     let sum = 0
//     let arr = str.split('')
//     for(let i = 0;i<arr.length;i++){
//         product *= arr[i] 
//         sum = sum + Number(arr[i])
//         // console.log(i)
//     }
//     return product - sum
   
// };
// // console.log(subtractProductAndSum(4421))
// let x = 234
// console.log(x%10 +Math.floor(x/10)%10 )
// function atta(n){



// let sum = 0
// let product =1

// while(n!=0){
//    let x = n%10
//    sum += x
//    product *= x
//    n = Math.floor(n / 10) 
// }
// return product - sum
// }

// console.log(atta(234))
 
// function triangle(n){

//    for(let i = 1;i<n;i++){

   
//    let pattern = ''
//    for(let j = 1;j<=n-i+1;j++){
//       pattern += " "
//    }
//    for(let j = 1;j<i;j++){
//       pattern += "*"
//    }
//    for(let j = 1;j<=i;j++){
//       pattern += "*"
//    }
//    console.log(pattern)
// }
//    for(let i = 1;i<=n;i++){

   
//    let pattern = ''
//    for(let j = 1;j<=i;j++){
//       pattern += " "
//    }
//    for(let j = 1;j<n-i+1;j++){
//       pattern += "*"
//    }
//    for(let j = 1;j<=n-i+1;j++){
//       pattern += "*"
//    }
//    console.log(pattern)
// }
   
// }
// triangle(4)
// function dimpnd(n){
//    for(let i = 1; i<=n;i++){
//       let patern = ''
//       for(let j = i;j<=n;j++){
//          patern += "*"

//       }
//       for(let j = 1;j<i;j++){
//          patern += " "
//       }
//       for(let j = 1;j<=i;j++){
//          patern += " "
//       }
//       for(let j = i;j<=n;j++){
//          patern += "*"

//       }
//      console.log(patern)
//    }
//    for(let i = 1; i<=n;i++){
//       let patern = ''
//       for(let j = 1;j<=i;j++){
//          patern += "*"

//       }
//       for(let j = 1;j<n-i+1;j++){
//          patern += " "
//       }
//       for(let j = 1;j<=n-i+1;j++){
//          patern += " "
//       }
//       for(let j = 1;j<=i;j++){
//          patern += "*"

//       }
//      console.log(patern)
//    }
// }

// dimpnd(4)
// function findtotal(n){
//    let sum = 0
//    let product = 1
//    while(n!=0){
//       let x = n%10
//       sum += x 
//       product *= x
//       n = Math.floor(n/10)
//    }
//  console.log(sum)
//  console.log(product)
//  return product - sum

// }
// console.log(findtotal(234))
// let n = 232
// let x = n%10
// console.log(x)
// function decimal(n){
//    let arr = []
//    while(n!=0){
//       let x = Math.floor(n/2)
//       let rem = n%2
//       arr.push(rem)
//       n = x

//    }
//    console.log(arr.reverse())

// }

// decimal(9)
// let arr = [1,2,3,4,5,6,1]
// for(let i = 0;i<=Math.floor(arr.length / 2);i++){
//      let o = arr[i]
//      arr[i] =   arr[arr.length - 1 - i]
//      arr[arr.length - 1-i] = o
   
// }
// console.log(arr)
// function binary(x){
//    let arr = []
//    while(x!=0){
//       let rem = x%2
//       arr.push(rem)
//       x = Math.floor( x/2)
//    }
//    for(let i = 0;i<= arr.length/2 ;i++){
//       let temp = arr[i]
//       arr[i] = arr[arr.length-1-i]
//       arr[arr.length-1-i] = temp
//    }
//  console.log(arr.join(''))
// }
// binary(128)
// let arr = [1,2,3,4,5,6]
// for(let i = 0;i<=arr.length;i++)[
//    console.log(arr[arr.length-1-i])
// ]

// var reverse = function (x) {
//    let ans = 0
//     while(x!= 0){
//       let y = x%10
//      ans = (ans*10)+y
//       x = Math.floor(x/10)

//     }
//  return ans

// };


// reverse(1212300)



// let arr = [1,7,5,1]
// for(let i = 0;i<arr.length - 1;i+=2){
//     let temp  = arr[i]
//     arr[i] = arr[i+1]
//     arr[i+1] = temp
//     console.log('hi')
// }

// let ans = 0 \
// function findduplicate(arr){
// let dupnicate = []
//   for(let i = 0;i<=arr.length ; i++){
//      for(let j = i + 1;j<arr.length;j++){
//         if(arr[i] === arr[j]){
//           console.log(arr[i])
//           dupnicate.push(arr[j])
//         }
       
//      }
//   }
//   console.log(dupnicate)
// }

// let arr = [4,3,2,7,8,2,3,1]
// console.log(findduplicate(arr))

// let fruits = new Set();
// fruits.add('apple');
// fruits.add('banana');
// fruits.add('orange');

// console.log(fruits); // Output: Set { 'apple', 'banana', 'orange' }

// function findDuplicate(arr){
//   let newvalue = new Set();
//   for(let i = 0 ; i < arr.length; i++){
//       if(newvalue.has(arr[i])){
//         return arr[i]
//       }
//       newvalue.add(arr[i])
//   }

// }
// let arr = [1,2,3,4,5,3]
// console.log(arr[u])

// function findDuplicate(arr) {
//   let seenElements = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (seenElements.has(arr[i])) {
//       return arr[i];
//     }
//     seenElements.add(arr[i]);
//   }
// }

// let arr = [8, 2, 2, 4, 2, 5];
// console.log(findDuplicate(arr));

// function intercaction(arr1,arr2){
//   let x = []
//   for(let i = 0;i<arr1.length;i++){
//        for(let j = 0 ;j< arr2.length;j++){
//           if(arr1[i]=== arr2[j]){
//             x.push(arr2[j])
//             arr2[j] = 'a'
//             break;
//           }
//        }

//   }
//   console.log(x)

// }
// let arr1 = [1,2,3,3,4,5]
// let arr2 = [2,4,2,3,1,9]
// intercaction(arr1,arr2)


// let sum = 5
// let arr = [1,2,3,4,5,3,7] 
// for(let i = 0 ; i<arr.length;i++){
//   for(let j = i;j<arr.length;j++){
//     if(arr[i] + arr[j] > sum){
//       break
//     }
//     if(arr[i] + arr[j] == sum ){
//       console.log(arr[i],arr[j])
//     }
//     // console.log(j)
//   }
//   // console.log(arr[i])
// }

// function pattern(n){
//   for(let i = 0;i<n;i++){
//     let patern = ''
//     for(let j = i;j<n;j++){
//       patern += '*'

//     }
//     console.log(patern)
//   }

// }
// pattern(5)

// Find the tepleat of the sum with K

// function findtepleat(n,r){
//       for(let i = 0;i<n.length;i++){
//          for(let j = i + 1 ; j<n.length;j++){
//            for(let k = j + 1 ;k<n.length;k++){
//             if(n[i]+n[j]+n[k] == r ){
//               console.log(n[i],n[j],n[k])
//               break
//             }
//            }
//          }
     

//       }
// }
// let n = [1,2,3,4,5]
// findtepleat(n,9)
// sort an array of 0 1 with sort methord
// let arr = [0,1,0,1,1,1,0,0,0,0]
// console.log(arr.sort())

// solving this with two pointer aprouch

// let arr = [0,1,0,1,1,1,0,0,0,0,2]
// let i = 0
// let j = arr.length -1 
//  while(i<j){
//   while(arr[i] == 0 && i< j ){
    
//     i++
//   }
//   while(arr[j]==1&& i<j){
//     j--
//   }
//   if(arr[i]==1&&arr[j]==0&&i<j){

//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
 
//   console.log(arr)
// }

// swipe alyonate

// let arr = [1,2,3,4,5,2]
// for(let i = 0;i<arr.length;i += 2){
 
// //  console.log(arr[i])
//  console.log(arr[i+1])
//     let temp = arr[i]
//     arr[i] = arr[i+1]
//     arr[i+1] = temp
  
// }
// console.log(arr)


// function uniquenumber(n){
//   let x = 0
//    for(let i = 0 ; i<n.length;i++){
//    x = x^n[i]

// }
// console.log(x)
// }
// let arr = [1,2,3,2,3,1,4]
// uniquenumber(arr)

// let a =0 
// let b = 9
// console.log(a^b)








// function findup(n){
//   let dup = new Set()
//   for(let i = 0;i<n.length;i++){
//      if(dup.has(n[i])){
//       return n[i]
//      }
//      dup.add(n[i])
//   }

// }
// console.log(findup([1,6,3,4,2,7,3]))
// let x = [1,2,3,2,1,4,3]
// let  y = new Set(x)
// console.log(y.has(6))
// function arr(n){
//  let ans = 0
//  for(let i = 0;i<n.length; i++){
//    ans = ans^n[i]
//  }  
//  for(let i = 1;i<n.length; i++){
//    ans = ans^i
//  }  
// console.log(ans)
// }


// let x = [1,2,3,4,9,6,9]
// arr(x)
// let arr = [7,3,2,4,2,1]

// for(let i = 0; i<arr.length;i++){
//   for(let j = i +1;j<arr.length;j++){
//      if(arr[i] > arr[j]){
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//      }
//   }
// }
// // console.log(arr.sort())
// console.log(arr)


// let arr = [1,2,3,2,4,5,3,7,8]
// let start = 0 
// let end = arr.length 
// console.log(end)
//  let mid = Math.floor((start + end/2))
// let key = 5
// while(start<= end){
//   if(arr[mid] == key ){
//     console.log(mid)
//   }
//   if(arr[mid]<key){
//     start = mid + 1
//   }
//   else{
//     end = mid -1
//   }
//   mid = (start + end )/ 2
// }


// let x = -1234

// // console.log(  x/10)
// let z = []
// while(x > 0){
//   let y = x%10 
//   z.push(y)
//   x = Math.floor(x/10)
// }
// console.log(z)

// let arr = []
// let x = [1,2,3,4]
// let y = [...arr,{rohan:'rohan'}]
// console.log([...y,{mohan:'mohan'}])
// const prompt = require('prompt-sync')();
// const x = prompt('enter value')
// console.log(x)
// const arr = [-5,-4,-3,-2,0,2,4,6,8]
// let y = false
// for(let i = 0;i<arr.length;i++){

//     for(let j = i + 1 ; j<arr.length;j++){
//       if(arr[i]+arr[j] === 0){
//         console.log(arr[i],arr[j])
//         y = true
//         break;
//       }
//       if(y){
//         break
//       }
//     }
// }

// const y = 'jazab' 
// let x = {}
// for(let i of y){
//   x[i] = (x[i] || 0) +1
//   console.log(x[i])
//   console.log(i)
// }
// console.log(x)

// let arr = [0,1,2,3,4,5,6,7,8,9]
// let x = []
// let count  = 0 
// for(let i = 0;i<arr.length;i++){
 
//    for(j = 0 ; j<arr.length;j++){
//     for(k=0;k<arr.length;k++){
//       for(let p = 0;p<arr.length;p++){
//          count++
//         console.log( [arr[i], arr[j],arr[k],arr[p]])
//         if([arr[i], arr[j],arr[k],arr[p]]===[3,5,2,7]){
//           break
//         }
//       }

//     }
   
//    }
// }

// console.log((1,3,6,5)==(1,3,4,5))
































































// // let n = 00000000000000000000000010000000
// // let arr = n.toString()
// // console.log(n)

// function pattern(n){
//     for(let i = 0;i<n;i++){
//         let pat = ''
//         for(let j = i;j<n;j++){
//             pat+="*"

//         }

//         console.log(pat)
//     }
// }
// pattern(4)

// const  btns = document.querySelectorAll('.btns')
// console.log(btns)
// const input = document.querySelector('#input')
// const btn  = document.querySelector('#btn')
// let x =  input.value;
// btn.addEventListener('click',()=>{
//    x = input.value
// })
// console.log(x)
// leaner equation quation
// const arr = [-5,-4,-3,-2,0,2,3,4,6,8]
// let left = 0
// let rigth = arr.length -1
// let sum;
// while(left < rigth){
//       sum =  arr[left] + arr[rigth]
//     if(sum === 0){
//       console.log(arr[left],arr[rigth])
//       break;
//     }else if(sum>0){
//       rigth--
//     }else{
//      left++
//     }

// }
// console.log('ji')
// const x = 'jaziib'
// const p = 'azjiibl'
// let y = {}
// for(j of x){
//    y[j] = (y[j]||0)+1
//    // console.log(j)
// }
// for(item of p){
//    console.log(item)
//    if(!y[item]){
//       console.log('false')
//    }
//    y[item]--
//    console.log(true)
// }
// console.log(y)
// function arr(x){
//    if(x.length ===0) return 0
//    let i = 0
//    for(let j = 1;j< x.length;j++){
//       if(x[i] !== x[j]){
//          i++
//          // console.log(i,j)
//         x[i] = x[j]
        
         
        


//       }
//    }
//  return i +1
// }
// console.log(arr([1,2,3,3,4,4,5,6,6]))



// function pat(){
//    for(let i = 0;i<=5;i++){
//       let patern = ''

//       for(let j= 0;j<=i;j++){
//          patern +="*"
         
//       }
//       console.log(patern)
//    }
// }
// pat()
// function forloopPattern(r,c){
//     for(let i = 0;i<=r;i++){
//         let patern = ''
//         for(let j = 1;j<=r;j++){
//         patern +="* "
//         }
//         console.log(patern)
//     }

// }
// forloopPattern(3,3)

// const arr = [9,1,23,2,4,5,4]
// for(let i = 0 ; i<arr.length;i++){
//    for(let j = i;j<arr.length;j++){
//       if(arr[j]<arr[i]){
//          let temp = arr[i]
//          arr[i] = arr[j]
//          arr[j] = temp
//       }
//       console.log(i,j)
//    }
// }

// console.log(arr)

// searhing algrothem
let arr = [1,2,3,4,5,6,7,8,9]
const find = 8
function binarysearch(x){
    let mid  = Math.floor(x.length / 2)
    let start = 0
    let end = x.length - 1
    while(start <= end){
        if(mid === find) return true

       else if(mid<find){
            start = mid
            console.log(mid)
            let xr = arr.slice(mid,arr.length)
            binarysearch(xr)
        }
        
    
    
    }
}
console.log(binarysearch(arr))













