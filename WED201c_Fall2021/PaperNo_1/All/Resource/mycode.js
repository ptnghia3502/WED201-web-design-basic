function buy() {
    var phone=prompt('Xac nhan so dien thoai cua ban:');
    if (phone==parseInt(phone)) {
        alert("Minh Phuong store will contact you in 30 minutes:" + phone);
    }
    else {
        alert("Please enter valid number");
    } 
}