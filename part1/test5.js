/*function modifyArray(array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr. push (callback(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function dosth(num){

    return num * 2 ;
}

modifyArray([1,2,3], dosth);*/

function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);}, 1000);
    setTimeout(function(){console.log(3);}, 0);
    console.log(4);

}

printNums();