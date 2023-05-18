function goToPage() {
  var selectedYear = document.getElementById("year-select").value;
  var pageUrl = selectedYear + ".html";
  window.location.href = pageUrl;
}