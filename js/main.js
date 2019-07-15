(function (win) {
  var map = document.querySelector('.map')
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
  Food.prototype.init = function () {
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

  win.Food = Food
}(window));

new Food().init()
