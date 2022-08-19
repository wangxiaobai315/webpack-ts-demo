"use strict";
exports.__esModule = true;
//定义一个食物类 Food
var Food = /** @class */ (function () {
    function Food() {
        //获取页面中food元素，并且赋值给element变量
        this.element = document.getElementById('food');
    }
    Object.defineProperty(Food.prototype, "X", {
        //定一个获取食物X轴坐标的方法
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "Y", {
        //定义个获取食物Y轴坐标的方法
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    //定义一个食物位置的方法（随机位置）
    Food.prototype.change = function () {
        //生成一组随机数 最小是0 最大是290
        //蛇移动一次就是一格，一格的大小就是10 所以食物坐标必须是一个
        var top = Math.round(Math.random() * 29) * 10;
        var left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    };
    return Food;
}());
//测试方法
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
exports["default"] = Food;
