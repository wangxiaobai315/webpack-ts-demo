//定义一个食物类 Food
class Food {
    element: HTMLElement;
    constructor() {
        //获取页面中food元素，并且赋值给element变量
        this.element = document.getElementById('food')!;
    }
    //定一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    //定义个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    //定义一个食物位置的方法（随机位置）
    change() {
        //生成一组随机数 最小是0 最大是290
        //蛇移动一次就是一格，一格的大小就是10 所以食物坐标必须是一个
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

//测试方法
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()

export default Food;