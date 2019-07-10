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
  // 食物的构造函数
  // 初始化小方块效果与位置的方法
  // 设置小方块的样式
  // 随机位置
}