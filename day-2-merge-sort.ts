
type Arr = number[]

const mergeSort = (arr:Arr):Arr=>{
    if(arr.length < 2 ) return arr 

    const mid = Math.floor(arr.length / 2)

    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


const merge = (leftArr:Arr, rightArr:Arr):Arr=>{
    const tempArr = []
    let l = 0; 
    let r = 0; 

    while(l < leftArr.length && r < rightArr.length){
        if(leftArr[l] <= rightArr[r]){
            tempArr.push(leftArr[l])
            l++
        }else{
            tempArr.push(rightArr[r])
            r++
        }
    }

    return [...tempArr, ...leftArr.slice(l), ...rightArr.slice(r)]
}

const arr = [9, 2 , 3, 6, 8,3 ,2]

console.log(mergeSort(arr))