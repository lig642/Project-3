var searchInput = document.getElementById('search');
var resultContainer = document.getElementById('result');

// 异步加载 JSON 数据文件
function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'imageData.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

// 页面加载完成后执行代码
document.addEventListener('DOMContentLoaded', function() {
  loadJSON(function(imageData) {
    searchInput.addEventListener('input', function() {
      var keyword = searchInput.value.toLowerCase(); // 获取输入的关键词并转为小写

      // 在 imageData 数组中查找匹配的对象
      var matchedImage = imageData.find(function(item) {
        return item.keyword === keyword;
      });

      // 更新图片容器中的图片
      if (matchedImage) {
        var imagePath = 'images/' + matchedImage.imageFile; // 假设图片位于 "images" 文件夹中
        resultContainer.innerHTML = '<img src="' + imagePath + '">';
      } else {
        resultContainer.innerHTML = ''; // 如果没有匹配的图片，清空容器
      }
    });
  });
});


    