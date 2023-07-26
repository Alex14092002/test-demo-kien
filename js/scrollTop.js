document.addEventListener("DOMContentLoaded", function() {
    // Thực hiện đặt vị trí cuộn thành 0
    window.scrollTo(0, 0);
});

window.addEventListener('popstate', function(event) {
    console.log('popstate event triggered');
    window.scrollTo(0, 0);
  });
  