//定义蛇的类

class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodys: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodys = document.getElementById('snake')!.getElementsByTagName('div');
    }
    //获取蛇头x轴的坐标
    get X() {
        return this.head.offsetLeft;
    }
    //获取蛇头y轴的坐标
    get Y() {
        return this.head.offsetTop;
    }

    //设置蛇头在X轴的坐标
    set X(value) {
        if (value == this.X) return;
        //判断蛇移动的范围 0～290之间
        if (value < 0 || value > 290) {
            //只要进入这个条件，说明蛇撞墙了 抛出异常 
            throw new Error('蛇撞墙了！')
        };
        //设置蛇不能掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        //蛇的身体移动
        this.moveBodys()
        this.head.style.left = value + 'px';
    }
    //设置蛇头在Y轴的坐标
    set Y(value) {
        if (value == this.Y) return;
        //判断蛇移动的范围 0～290之间
        if (value < 0 || value > 290) {
            //只要进入这个条件，说明蛇撞墙了 抛出异常
            throw new Error('蛇撞墙了！')
        };
        //设置蛇不能掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        //蛇的身体移动
        this.moveBodys()
        this.head.style.top = value + 'px';
    }
    //定义一个添加蛇身体的方法
    addBodys() {
        // this.element.insertAdjacentElement('beforeend', '<div></div>');
        let _div = document.createElement('div');
        this.element.appendChild(_div)
    }

    //定义一个方法 蛇身体移动的方法
    moveBodys() {
        /**
         * 蛇移动时的规则：
         * 第4节 == 第3节的位置
         * 第3节 == 第2节的位置
         * 第2节 == 蛇头的位置
         */
        for (let i = this.bodys.length - 1; i > 0; i--) {
            //获取蛇前一个身体的位置
            let x = (this.bodys[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodys[i - 1] as HTMLElement).offsetTop;
            //将获取的值赋值给当前的蛇
            (this.bodys[i] as HTMLElement).style.left = x + 'px';
            (this.bodys[i] as HTMLElement).style.top = y + 'px';
        }
    }

}

// const snake = new Snake()
// snake.addBodys()

export default Snake;