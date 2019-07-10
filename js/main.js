window.onload = function () {
  // 产生随机数对象
  (function (win) {
    function Random () { }
    Random.prototype.getRandom = function (min = 5, max = 10) {
      return Math.floor(Math.random() * (max - min) + min)
    }
    win.Random = new Random()
  })(window);
  // 产生小方块对象
  (function (win) {
    var map = document.querySelector('.map')
    // 食物的构造函数
    function Food (width, height, color) {
      this.width = width || 20
      this.height = height || 20
      this.color = color || 'green'
      // 坐标
      this.x = 0
      this.y = 0
      this.ele = document.createElement('div')
    }
    // 初始化小方块效果与位置的方法
    Food.prototype.init = function (map) {
      // 设置小方块的样式
      this.ele.style.width = this.width + 'px'
      this.ele.style.height = this.height + 'px'
      this.ele.style.background = this.color
      this.ele.style.position = 'absolute'
      map.appendChild(this.ele)
      this.render(map)
    }
    // 随机位置
    Food.prototype.render = function (map) {
      this.x = Random.getRandom(0, map.offsetWidth / this.width) * this.width
      this.y = Random.getRandom(0, map.offsetHeight / this.height) * this.height
      this.ele.style.left = this.x + 'px'
      this.ele.style.top = this.y + 'px'
    }

    // 实例化对象
    var food = new Food()
    food.init(map)
  })(window)
}