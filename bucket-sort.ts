type Numbers = number[];

const insertionSort = (array: Numbers): Numbers => {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        const temp = array[i];

        let j = i - 1;

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = temp;
    }

    return array;
};

const bucketSort = (array: Numbers, bucketSize: number = 5): Numbers => {
    if (array.length === 0) {
        return array;
    }

    let minValue = array[0];
    let maxValue = array[0];

    
    array.forEach((currentValue) => {
        if (currentValue < minValue) {
            minValue = currentValue;
        } else if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    });


    const bucketCount =
        Math.floor((maxValue - minValue) / bucketSize) + 1;

    const buckets: Numbers[] = new Array(bucketCount);

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }


    array.forEach((currentValue) => {
        const bucketIndex = Math.floor(
            (currentValue - minValue) / bucketSize
        );

        buckets[bucketIndex].push(currentValue);
    });

    array.length = 0;

    buckets.forEach((bucket) => {
        insertionSort(bucket);

        bucket.forEach((element) => {
            array.push(element);
        });
    });

    return array;
};

console.log(bucketSort([29, 25, 3, 49, 9, 37, 21, 43]));