let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelectorAll('#form-close');
let registerForm = document.querySelector('.register-form-container');
let goToRegister = document.querySelector('#go-to-register');
let goToLogin = document.querySelector('#go-to-login');

var loginStatus = false;
var userKey = "";

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

// window.addEventListener('scroll', () => {
//     loginForm.classList.remove('active');
//     registerForm.classList.remove('active');
// });

formClose.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    });
});

goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

function dangKy() {
    var userName = document.getElementById("ten-dk");
    var fullName = document.getElementById("ho-va-ten");
    var email = document.getElementById("email-dk");
    var password = document.getElementById("mat-khau-dk");
    var rePassword = document.getElementById("nhap-lai-mat-kau-dk");

    // Kiểm tra tên đăng nhập không được rỗng và không chứa khoảng trắng
    if (userName.value.trim() === "") {
        alert("Vui lòng nhập tên đăng nhập!");
        userName.focus();
        return false;
    }
    if (userName.value.includes(' ')) {
        alert("Tên đăng nhập không được chứa khoảng trắng!");
        userName.focus();
        return false;
    }
    // Kiểm tra xem userName đã tồn tại chưa
    if (localStorage.getItem(userName.value) !== null) {
        alert("Tên đăng nhập đã tồn tại!");
        userName.focus();
        return false;
    }
    // Kiểm tra tên không được rỗng
    if (fullName.value.trim() === "") {
        alert("Vui lòng nhập họ và tên!");
        fullName.focus();
        return false;
    }
    // Kiểm tra email không được rỗng
    if (email.value === "") {
        alert("Vui lòng nhập địa chỉ email!");
        email.focus();
        return false;
    }
    // Kiểm tra xem email đã tồn tại chưa
    if (localStorage.getItem(email.value) !== null) {
        alert("Email đã được đăng ký!");
        email.focus();
        return false;
    }

    // Kiểm tra password không được chứa khoảng trắng
    if (password.value.includes(' ')) {
        alert("Mật khẩu không được chứa khoảng trắng!");
        password.focus();
        return false;
    }

    // Kiểm tra rePassword không được chứa khoảng trắng
    if (rePassword.value.includes(' ')) {
        alert("Mật khẩu nhập lại không được chứa khoảng trắng!");
        rePassword.focus();
        return false;
    }
    // Kiểm tra mật khẩu không được rỗng
    if (password.value === "") {
        alert("Vui lòng nhập mật khẩu!");
        password.focus();
        return false;
    }

    // Kiểm tra mật khẩu nhập lại phải trùng khớp
    if (password.value !== rePassword.value) {
        alert("Mật khẩu nhập lại không khớp!");
        rePassword.focus();
        return false;
    }

    // Nếu thông tin hợp lệ, tiến hành đăng ký thành công

    var user = {
        userName: userName.value,
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        rePassword: rePassword.value
    };

    var json = JSON.stringify(user);

    // Lưu vào localStorage với key là userName và email
    localStorage.setItem(userName.value, json);
    localStorage.setItem(email.value, json); // Lưu cả email với cùng một đối tượng user

    alert("Đăng ký thành công");

    // Chuyển sang phần đăng nhập
    registerForm.classList.remove('active');
    loginForm.classList.add('active');

    // Ngăn chặn form reload
    return false;
}



function dangNhap() {
    event.preventDefault();
    var userNameOrEmail = document.getElementById("tk-dn");
    var password = document.getElementById("mk-dn");
    if (userNameOrEmail.value.trim() === "") {
        alert("Vui lòng nhập tên tài khoản hoặc email!");
        return;
    }
    if (password.value.trim() == "") {
        alert("Vui lòng nhập mật khẩu!");
        return;
    }
    var user = localStorage.getItem(userNameOrEmail.value);
    if (user == null) {
        alert("Tài khoản không tồn tại");
        return;
    }
    var data = JSON.parse(user);

    if (userNameOrEmail.value == data.userName || userNameOrEmail.value === data.email) {
        if (password.value == data.password) {
            alert("Đăng nhập thành công!");
            loginForm.classList.remove('active');
        } else {
            alert("Sai mật khẩu!");
        }
    } else {
        alert("Đăng nhập thất bại!");
    }
    // Ngăn chặn form reload
    return false;
}

function clearForm(i) {
    if (i == 1) {
        var userName = document.getElementById("tk-dn").value = '';
        var password = document.getElementById("mk-dn").value = '';
    } else if (i == 2) {
        var userName = document.getElementById("ten-dk").value = '';
        var fullName = document.getElementById("ho-va-ten").value = '';
        var email = document.getElementById("email-dk").value = '';
        var password = document.getElementById("mat-khau-dk").value = '';
        var rePassword = document.getElementById("nhap-lai-mat-kau-dk").value = '';
    }
}

