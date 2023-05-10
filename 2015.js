// 获取弹窗元素
const modal = document.getElementById("myModal");

// 获取图片并将其插入到弹窗中
const img = document.getElementById("myImg");
const modalContent = modal.querySelector(".modal-content");
const modalText = modal.querySelector("p");

img.onclick = function () {
  modal.style.display = "block";
  modalText.textContent = "Residual Free Chlorine (mg/L):0.56";
};

// 获取关闭按钮
const span = modal.querySelector(".close");

// 点击关闭按钮时关闭弹窗
span.onclick = function () {
  modal.style.display = "none";
};

// 在用户点击弹窗外的任何地方时关闭弹窗
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






