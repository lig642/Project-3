function openModal(imageUrl) {
	var modal = document.getElementById("modal");
	var modalImage = document.getElementById("modal-image");
	modal.style.display = "block"; // 显示弹窗
	modalImage.src = imageUrl; // 设置弹窗中的图片
  }
  
  // 关闭弹窗
  function closeModal() {
	var modal = document.getElementById("modal");
	modal.style.display = "none"; // 隐藏弹窗
  }

  function goToHomePage() {
    window.location.href = 'homepage.html'; // 替换成你的主页链接
  }