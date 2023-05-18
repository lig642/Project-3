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

		// 获取容器元素和文本元素
		var container = document.getElementById('container');
		var text = document.getElementById('text');

		// 绑定容器鼠标移入事件
		container.addEventListener('mouseenter', function(event) {
			// 显示文本
			text.style.display = 'block';
		});

		// 绑定容器鼠标移出事件
		container.addEventListener('mouseleave', function(event) {
			// 隐藏文本
			text.style.display = 'none';
		});

		// 绑定容器鼠标移动事件
		container.addEventListener('mousemove', function(event) {
			// 设置文本位置为鼠标移动位置
			text.style.top = event.clientY + 'px';
			text.style.left = event.clientX + 'px';
		});








