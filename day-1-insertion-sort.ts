type Arr = number[]
const insertionSort = (arr:Arr):Arr=>{

    const result = [...arr]

    for(let i = 1; i < result.length; i++){
        let j = i - 1;
        while(j >=0 && result[j+1] <= result[j]){
            let temp = result[j+1]
            result[j+1] = result[j]
            result[j] = temp
            j--
        }
    }

    return result

}

const arr = [2, 3, 5, 2, 1, 9, 4, 6,3,1]

console.log(insertionSort(arr))