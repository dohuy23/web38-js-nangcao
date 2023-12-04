// let functA = ()=>{
//     setTimeout(()=>{
//         console.log("day là công vc");
//     },3000);
// }
// functA();


// let functB = () =>{
//     setTimeout(()=>{
//         console.log('đây là hàm b');
//     },5000);
// } 
// functB();



// callback funct
// 1.làm bai tap 3s
// 2. da bong 4s
// 3. nau cơm 5s


// cv1
// let work1 = () =>{
//     console.log("lam bai tap");
// }
// work1();
// // cv2 
// let work2 = () =>{
//     console.log("da bong");
// }
// work2();
// // cv3
// let work3 = () =>{
//     console.log("nau cơm");
// }
// work3();


// 1.làm bai tap 3s
// 2. da bong 4s
// 3. nau cơm 5s
// let work1 = (name, callback) =>{
//     console.log("bat dau cong viec");
//     console.log("thuc hanh cong viec 1: " + name);

//     setTimeout(()=>{
//         callback();
//     },3000);
// }
// let work2 = (name, callback)=>{
//     console.log("thuc hanh cong viec 2: "+ name);
//     setTimeout(()=>{
//         callback();
//     },4000);
// }
// let work3 = (name)=>{
//     console.log("thuc hanh cong viec 3: "+ name);
//     setTimeout(()=>{
//     console.log("the end");
//     },5000);
// }

// work1("lam bai tap", ()=>{
//     work2("da bong",()=>{
//         work3("nau coom");
//     });
// });



// tao ra 1 promise
// let monney = 31;
// // khoi tao 1 loi hua
// let buyIphone = new Promise((resole, reject)=>{
//  if(monney > 30){
//     resole('mua thanh cong');
//  }
//  else {
//     reject('ban qua ngheo');
//  }
// });
// // console.log(buyIphone);

// // apple
// let buyApple = new Promise((resole,reject)=>{
//     if(monney - 30 - 5 >= 0){
//         resole('mua thanh cong apple');
//     }
//     else{
//         reject('ban van nghe ma thoi');
//     }
// });
// // console.log(buyApple);


// buyIphone
// // 2 trường hợp
// .then((data)=>{
//     console.log(data);
//     return buyApple;
// })
// .then((data)=>{
//     console.log(data);
// })
// // 2 trường hợp
// .catch((err)=>{
//     console.log(err);
//     return buyApple;
// })
// .catch((err)=>{
//     console.log(err);
// })

// .finally(()=>{
//     console.log('di ve nha');
// });


let hello = async()=>{
    return "hello";
}
 hello()
 .then((data) => {
    console.log(data)}
 )