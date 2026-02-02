// const arr=[3,4,4,5];
// for(const item of arr){
//     console.log(item);
// }

// const arr1=[3,4,4,5];
// for(const item in arr1){
//     console.log(item,arr1[item]);
// }


// traverse a string char by

for(const c of "javaScript"){
    if(c=='a' || c=='e' || c=='o' || c=='u' || c=='i'){
        console.log(c);
    }
}

const colors=["Red","Yellow","Blue"];
for(const[index,color] of colors.entries())
    console.log(index,color);
