// 瓶子掉落的时间间隔和数量
const interval = 500;
const count = 5000;

// 递归函数控制瓶子依次掉落
function dropBottle(index) {
    const bottle = document.createElement("img");
    bottle.setAttribute("class", "bottle");
    bottle.setAttribute("src", "glass.png");
    document.querySelector(".container").appendChild(bottle);
    bottle.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // 随机设置水平位置
    requestAnimationFrame(() => {
        bottle.style.animation = `bottleDrop ${Math.random() * 2 + 2}s linear forwards`; // 随机设置掉落动画时间
        requestAnimationFrame(() => {
            bottle.style.top = "100%";
            bottle.style.transform = "translateX(-50%) rotate(720deg)";
            if (index < count - 1) {
                dropBottle(index + 1); // 递归调用下一个瓶子掉落
            }
        });
    });
}

dropBottle(0); // 启动第一个瓶子掉落

function goToHomePage() {
    window.location.href = 'homepage.html'; // 替换成你的主页链接
  }