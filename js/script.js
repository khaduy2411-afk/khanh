const form = document.getElementById("form-lien-he");
const thongBao = document.getElementById("thong-bao");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const ten = document.getElementById("ten").value;
    thongBao.textContent = "Cảm ơn " + ten + ", mình đã nhận được lời nhắn!";
    form.reset(); 
});