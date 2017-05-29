class Utils {
    constructor(array) {
        this.array = array;
    }


    flatten(array) {
        return [].concat.apply([], array);
    }

    max(array) {
        return Math.max(...array);
    }

    sort(array) {
        return array.map(x => x * x);
    }

    square(array) {
        return array.map(x => x * x);
    }

    sum(array) {
        return array.reduce((first, second) => first + second)

    }

    removeRedundacy(array) {
let newarray = array.filter (function (a,b,c) {
    return b==c.indexOf(a);

})
        return newarray;
    }
}

let elements=[1,2,3,55,[55,34,89,34],[55,34,89,34],34,89,34,78,990];
let utils =new Utils(elements);
let array = utils.flatten(elements);

console.log("flattend \n",utils.flatten(array));
console.log("the maxinum value: \n",utils.max(array));
console.log("sorted in descending order: \n",utils.sort(array));
console.log("remove duplicat elements: \n",utils.removeRedundacy(array));
console.log("sum of all elements : \n",utils.sum(array));
console.log("sequare of  elements: \n",utils.square(array));





