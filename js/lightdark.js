/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  // Khi button được click thì tìm đến thẻ body có id là myBody
  // Dùng classlist để gọi thuộc tính class của thẻ body
  // Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. 
  // Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. 
  // Ngược lại, nếu thẻ body đang có class dark thì toggle sẽ xóa class dark đi.
  document.getElementById("Mybody").classList.toggle("dark");
  // Tương tự cho thẻ có id là navbarTogglerDemo02
  document.getElementById("navbarTogglerDemo02").classList.toggle("dark");
};
