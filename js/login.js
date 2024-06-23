let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelectorAll('#form-close');
let registerForm = document.querySelector('.register-form-container');
let goToRegister = document.querySelector('#go-to-register');
let goToLogin = document.querySelector('#go-to-login');
let goForgotPassword = document.querySelector('#go-to-forgot-password');
let formUserActive = document.querySelector('.user-active-form-container');
let formForgotPassword = document.querySelector('.forgot-password-form-container');
let logOut = document.querySelector('#log-out');
let getCode = document.querySelector('.button-code');
let forgotSubmit = document.querySelector('#btn-fg-pass');


// var loginStatus = false;
// var userKey = "";

formBtn.addEventListener('click', () => {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == null) {
        loginForm.classList.add('active');
    } else {
        formUserActive.classList.add('active');
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userName = document.getElementById('user-account-name');
        userName.textContent = "Account: " + currentUser.userName;
    }
});
var otpNumber = 0;

getCode.addEventListener('click', (e) => {
    e.preventDefault();
    var email = document.getElementById('email-fg');
    if (email.value.trim() === "") {
        alert("Vui lòng nhập email!");
        return false;
    }

    if (localStorage.getItem(email.value) === null) {
        alert("Email sai!");
        email.focus();
        return false;
    }

    otpNumber = generateSixDigitNumber();
    alert("OTP: " + otpNumber);

});
forgotSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    var inOtp = document.getElementById('box-code');
    var email = document.getElementById('email-fg');
    var password = document.getElementById('pw-fg');
    var rePassword = document.getElementById('rpw-fg');


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

    if (inOtp.value.trim() === "") {
        alert('Bạn chưa nhập mã otp!');
        return false;
    }
    if (inOtp.value == otpNumber) {
        var user = localStorage.getItem(email.value);
        if (user) {
            var data = JSON.parse(user); // Chuyển chuỗi JSON thành đối tượng
            data.password = password.value; // Thay đổi giá trị của biến trong đối tượng

            var updatedUserJSON = JSON.stringify(data); // Chuyển đối tượng trở lại thành chuỗi JSON
            localStorage.setItem(email.value, updatedUserJSON); // Lưu lại vào localStorage

            var user1 = localStorage.getItem(data.userName);
            if (user1) {
                var data1 = JSON.parse(user1); // Chuyển chuỗi JSON thành đối tượng
                data1.password = password.value; // Thay đổi giá trị của biến trong đối tượng

                var updatedUserJSON1 = JSON.stringify(data1); // Chuyển đối tượng trở lại thành chuỗi JSON
                localStorage.setItem(data.userName, updatedUserJSON1); // Lưu lại vào localStorage
            }

            alert('Đổi mật khẩu thành công!');

            formForgotPassword.classList.remove('active');
            loginForm.classList.add('active');
            clearForm(3);
        } else {
            alert('User not found.');
        }
    }
    else {
        alert('Mã otp không hợp lệ!');
    }
    return false;
});


// window.addEventListener('scroll', () => {
//     loginForm.classList.remove('active');
//     registerForm.classList.remove('active');
// });

formClose.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
        formForgotPassword.classList.remove('active');
        formUserActive.classList.remove('active');
    });
});

goForgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    formForgotPassword.classList.add('active');
});

logOut.addEventListener('click', (e) => {
    e.preventDefault();
    formUserActive.classList.remove('active');
    loginForm.classList.add('active');
    // Xóa dữ liệu khi người dùng đăng xuất
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
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
        userNameOrEmail.focus();
        return;
    }
    if (password.value.trim() == "") {
        alert("Vui lòng nhập mật khẩu!");
        password.focus();
        return;
    }
    var user = localStorage.getItem(userNameOrEmail.value);
    if (user == null) {
        alert("Tài khoản không tồn tại");
        userNameOrEmail.focus();
        return;
    }
    var data = JSON.parse(user);

    if (userNameOrEmail.value == data.userName || userNameOrEmail.value === data.email) {
        if (password.value == data.password) {
            alert("Đăng nhập thành công!");
            // Chuyển đối tượng user thành chuỗi JSON để lưu vào localStorage
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', true); // Có thể dùng để kiểm tra trạng thái đăng nhập
            loginForm.classList.remove('active');
        } else {
            alert("Sai mật khẩu!");
            password.focus();
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
    } else if (i == 3) {
        var inOtp = document.getElementById('box-code').value='';
        var email = document.getElementById('email-fg').value='';
        var password = document.getElementById('pw-fg').value='';
        var rePassword = document.getElementById('rpw-fg').value='';
    }
}
function generateSixDigitNumber() {
    // Tạo một số ngẫu nhiên từ 0 đến 999999
    let randomNumber = Math.floor(Math.random() * 1000000);

    // Đảm bảo rằng số này luôn có 6 chữ số bằng cách thêm số 0 ở đầu nếu cần thiết
    let sixDigitNumber = randomNumber.toString().padStart(6, '0');

    return sixDigitNumber;
}
