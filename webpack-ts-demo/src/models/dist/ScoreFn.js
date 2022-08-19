"use strict";
exports.__esModule = true;
//定义一个计分的类 Score
var ScoreFn = /** @class */ (function () {
    function ScoreFn(maxLevel) {
        if (maxLevel === void 0) { maxLevel = 10; }
        //声明变量 用来表示计分和等级
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('scoreSpan');
        this.levelEle = document.getElementById('levelSpan');
        this.maxLevel = maxLevel;
    }
    //定义一个方法：计分方法
    ScoreFn.prototype.addScore = function () {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % 10 === 0) {
            this.levelUp();
        }
    };
    //定义一个等级方法
    ScoreFn.prototype.levelUp = function () {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    };
    return ScoreFn;
}());
//测试方法
// const scoreFn = new ScoreFn()
// scoreFn.addScore()
// scoreFn.addScore()
// scoreFn.addScore()
// scoreFn.addScore()
// scoreFn.addScore()
// for (let i = 0; i < 20; i++) {
//     scoreFn.addScore()
// }
exports["default"] = ScoreFn;
