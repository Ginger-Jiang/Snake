// 食物构造函数
(function () {
  var elements = [] // 食物数组
  // 随机坐标
  function Random (max, min) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  // 私有方法
  function removeFood () {
    for (var i = 0; i < elements.length; i++) {
      var ele = elements[i]
      ele.parentNode.removeChild(ele)
      elements.splice(i, 1)
    }
  }
  // 食物有宽高颜色坐标
  function Food (width, height, color, x, y) {
    this.width = width || 20
    this.height = height || 20
    this.color = color || 'green'
    this.x = x || 0
    this.y = y || 0
    this.ele = document.createElement('div')
  }
  Food.prototype.init = function (map) {
    removeFood() // 先删除
    this.ele.style.width = this.width + 'px'
    this.ele.style.height = this.height + 'px'
    this.ele.style.position = 'absolute'
    this.ele.style.backgroundColor = this.color
    map.appendChild(this.ele)
    elements.push(this.ele)
    this.random()
  }
  Food.prototype.random = function () {
    this.x = Random(map.offsetWidth / this.width, 0) * this.width + 'px'
    this.y = Random(map.offsetHeight / this.height, 0) * this.height + 'px'
    this.ele.style.left = this.x
    this.ele.style.top = this.y
  }

  window.Food = Food
}(window));


// 蛇
(function () {
  var elements = []
  function Snake (width, height, direction) {
    this.width = width || 20
    this.height = height || 20
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'yellow' },
      { x: 1, y: 2, color: 'yellow' }
    ]
    this.direction = direction || 'right'
  }
  Snake.prototype.init = function (map) {
    remove() // 删除🐍
    for (var i = 0; i < this.body.length; i++) {
      var obj = this.body[i]
      var div = document.createElement('div')
      map.appendChild(div)
      div.style.position = 'absolute'
      div.style.width = this.width + 'px'
      div.style.height = this.height + 'px'
      div.style.left = obj.x * this.width + 'px'
      div.style.top = obj.y * this.height + 'px'
      div.style.backgroundColor = obj.color
      elements.push(div)
    }
  }
  Snake.prototype.move = function (food, map) {
    var i = this.body.length - 1 // 获取蛇身体长度(不包含头)
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    // 头
    switch (this.direction) {
      case 'right': this.body[0].x++; break
      case 'left': this.body[0].x--; break
      case 'top': this.body[0].y++; break
      case 'bottom': this.body[0].y++; break
    }
  }

  // 删除🐍
  function remove () {
    var i = elements.length - 1 // 蛇尾
    for (; i >= 0; i--) {
      var ele = elements[i]
      ele.parentNode.removeChild(ele)
      elements.splice(i, 1)
    }
  }

  window.Snake = Snake
}());

var map = document.querySelector('.map')
var fd = new Food()
fd.init(map)
var snake = new Snake()
setInterval(() => {
  console.log('蛇动了')
  // snake.move(fd, map)
  // snake.init(map)
}, 150)