// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function scoreAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var accumulation = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return accumulation / scores.length;
}
;
console.log(scoreAverage(45, 55, 67, 34, 46));
