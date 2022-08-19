"use strict";
//定义蛇的类
exports.__esModule = true;
var Snake = /** @class */ (function () {
    function Snake() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div');
        this.bodys = document.getElementById('snake').getElementsByTagName('div');
    }
    Object.defineProperty(Snake.prototype, "X", {
        //获取蛇头x轴的坐标
        get: function () {
            return this.head.offsetLeft;
        },
        //设置蛇头在X轴的坐标
        set: function (value) {
            if (value == this.X)
                return;
            //判断蛇移动的范围 0～290之间
            if (value < 0 || value > 290) {
                //只要进入这个条件，说明蛇撞墙了 抛出异常 
                throw new Error('蛇撞墙了！');
            }
            ;
            //设置蛇不能掉头
            if (this.bodys[1] && this.bodys[1].offsetLeft === value) {
                if (value > this.X) {
                    value = this.X - 10;
                }
                else {
                    value = this.X + 10;
                }
            }
            //蛇的身体移动
            this.moveBodys();
            this.head.style.left = value + 'px';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snake.prototype, "Y", {
        //获取蛇头y轴的坐标
        get: function () {
            return this.head.offsetTop;
        },
        //设置蛇头在Y轴的坐标
        set: function (value) {
            if (value == this.Y)
                return;
            //判断蛇移动的范围 0～290之间
            if (value < 0 || value > 290) {
                //只要进入这个条件，说明蛇撞墙了 抛出异常
                throw new Error('蛇撞墙了！');
            }
            ;
            //设置蛇不能掉头
            if (this.bodys[1] && this.bodys[1].offsetTop === value) {
                if (value > this.Y) {
                    value = this.Y - 10;
                }
                else {
                    value = this.Y + 10;
                }
            }
            //蛇的身体移动
            this.moveBodys();
            this.head.style.top = value + 'px';
        },
        enumerable: false,
        configurable: true
    });
    //定义一个添加蛇身体的方法
    Snake.prototype.addBodys = function () {
        // this.element.insertAdjacentElement('beforeend', '<div></div>');
        var _div = document.createElement('div');
        this.element.appendChild(_div);
    };
    //定义一个方法 蛇身体移动的方法
    Snake.prototype.moveBodys = function () {
        /**
         * 蛇移动时的规则：
         * 第4节 == 第3节的位置
         * 第3节 == 第2节的位置
         * 第2节 == 蛇头的位置
         */
        for (var i = this.bodys.length - 1; i > 0; i--) {
            //获取蛇前一个身体的位置
            var x = this.bodys[i - 1].offsetLeft;
            var y = this.bodys[i - 1].offsetTop;
            //将获取的值赋值给当前的蛇
            this.bodys[i].style.left = x + 'px';
            this.bodys[i].style.top = y + 'px';
        }
    };
    return Snake;
}());
// const snake = new Snake()
// snake.addBodys()
exports["default"] = Snake;
