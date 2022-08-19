//定义控制键盘的类
import Food from "./Food"
import Snake from "./Snake"
import ScoreFn from "./ScoreFn"

class ControlGame {
    //定义三个属性
    //食物的属性
    food: Food;
    //蛇的属性
    snake: Snake;
    //计分属性
    scoreFn: ScoreFn;

    //声明变量 用于存放当前按下键的key(方向键)
    direction: string = '';
    //声明变量 游戏自动移动的总开关 
    isStart = true;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scoreFn = new ScoreFn();
        //调用游戏初始化，游戏开始
        this.init()
    }

    //定义一个方法，用来初始化事件
    init() {
        document.addEventListener('keydown', this.keydownGameHandle.bind(this))
        //调用run方法，游戏开始
        this.run()
    }

    keydownGameHandle(event: KeyboardEvent) {
        // console.log(this)
        //KeyboardEvent 是键盘事件中用于键盘按下时返回当前健所对应的那个值
        this.direction = event.key;
        // ArrowUp
        //ArrowDown
        //ArrowLeft
        //ArrowRight
        //方便测试
        // this.run()
    }

    //创建一个方法 用于控制蛇移动的方法
    run() {
        /**
         *  根据方向(this.direction) 来使蛇发生改变
         *  向上 top 减少
         *  向下 top 增加
         *  向左 left 减少
         *  向右 left 增加
         */

        //获取当前蛇现在的位置
        let x = this.snake.X; //x == left
        let y = this.snake.Y; // y === top
        switch (this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
        }
        this.checkEat(x, y)
        //修改蛇现在的位置
        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e) {
            alert('蛇撞墙了，GAME OVER！');
            this.isStart = false;
        }
        //设置蛇自动移动  开启定时的调用
        this.isStart && setTimeout(this.run.bind(this), 300 - (this.scoreFn.level - 1) * 30)
    }

    //定义一个方法 用来检测蛇是否吃到食物 
    checkEat(x: number, y: number) {
        if (x == this.food.X && y == this.food.Y) {

            //移动食物的位置
            this.food.change()
            //计数加分
            this.scoreFn.addScore()
            //增加蛇的身体
            this.snake.addBodys()
        }
    }
}

export default ControlGame;
