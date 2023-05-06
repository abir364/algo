const array = [76,5,9,16,3,10,2,40,99,37];

const print = (a) => {
    let s = '';
    a.forEach(element => {
        s+=`${element} `;
    });
    console.log(s);
}

print(array);

const swap = (a,i,j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const bubbleSort = (a) => {
    let n = a.length;
    while (n>=0) {
        for(let i = 0; i<n; i++){
            if(a[i]>a[i+1]){
                swap(a,i,i+1);
            }
        }
        n--;
    }
    return a;
}

const selectionSort = (a) => {
    const n = a.length;
    let curMin = 0;
    for(let i=0; i<n-1; i++) {
        curMin = i;
        for (let j = i+1; j < n; j++) {
            if(a[curMin]>a[j]) {
                curMin = j;
            }
        }
        swap(a,i,curMin);
    }
    return a;
}

const insertionSort = (a) => {
    const n = a.length;
    let temp = 0;
    let j = 0;
    for (let i = 1; i < n; i++) {
        temp = a[i];
        j = i-1;
        while (j>=0 && a[j]>temp) {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = temp;
    }
    return a;
}

const merge = (left,right) => {
    let b =[];
    let l = 0;
    let r = 0;
    while(l<left.length && r<right.length) {
        if(left[l]<=right[r]) {
            b.push(left[l]);
            l++;
        }
        else {
            b.push(right[r]);
            r++;
        }
    }

    // return [...b, ...left, ...right];
    // is equivalent to next lines;
    while(l<left.length) {
        b.push(left[l]);
        l++;
    }
    while(r<right.length) {
        b.push(right[r]);
        r++;
    }
    return b;
}

const mergeSort = (a) => {
    if(a.length<=1) {
        return a;
    }
    let mid = Math.floor(a.length/2);
    let left = mergeSort(Array.from(a).slice(0,mid));
    let right = mergeSort(Array.from(a).slice(mid));
    return merge(left,right);
}

const partition = (a,l,r) => {
    let pivot = a[r];
    let i = l-1;
    for (let j=l; j<r-1; j++) {
        if(a[j]<pivot) {
            i++;
            swap(a, i, j);
        }
    }
    swap(a,i+1,r);
    return i+1;
}

const quickSort = (a, l, r) => {
    if(l>=r) {
        return;
    }
    let p = partition(a,l,r);
    quickSort(a,l,p-1);
    quickSort(a,p+1,r);
}

const arrB = [76,5,9,16,3,10,2,-40,99,37];

// print(bubbleSort(arrB));

// print(selectionSort(arrB));

// print(insertionSort(arrB));

// print(mergeSort(arrB));

// this is for quick sort both lines needed as it is sorted in space
// quickSort(arrB,0,arrB.length-1)
// print(arrB);

// print(array);