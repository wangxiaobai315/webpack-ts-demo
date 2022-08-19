//定义一个计分的类 Score
class ScoreFn {
    //声明变量 用来表示计分和等级
    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    //声明变量 
    maxLevel: number;

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById('scoreSpan')!;
        this.levelEle = document.getElementById('levelSpan')!;
        this.maxLevel = maxLevel;
    }

    //定义一个方法：计分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }

    //定义一个等级方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

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

export default ScoreFn;