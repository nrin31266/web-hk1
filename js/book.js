function booking() {
    var place = document.getElementById("book1");
    var guests = document.getElementById("book2");
    var arrival = document.getElementById("book3");
    var leaving = document.getElementById("book4");

    if (place.value.trim() === "") {
        alert("Chọn địa điểm!");
        place.focus();
        return false;
    }

    if (guests.value === "") {
        alert("Số lượng người tham gia?");
        guests.focus();
        return false;
    }

    var guestsNumber = parseInt(guests.value);
    if (isNaN(guestsNumber) || guestsNumber < 1 || guestsNumber > 100) {
        alert("Số người không hợp lệ!");
        guests.focus();
        return false;
    }

    if (arrival.value === "") {
        alert("Làm ơn chọn thời gian bắt đầu!");
        arrival.focus();
        return false;
    }

    if (leaving.value === "") {
        alert("Làm ơn chọn thời gian kết thúc!");
        leaving.focus();
        return false;
    }

    var today = new Date();
    today.setHours(0, 0, 0, 0); // Reset giờ phút giây để so sánh chính xác
    var minArrivalDate = new Date(today);
    minArrivalDate.setDate(minArrivalDate.getDate());

    var arrivalDate = new Date(arrival.value);
    var leavingDate = new Date(leaving.value);

    if (arrivalDate < minArrivalDate) {
        alert("Thời gian bắt đầu không hợp lệ!");
        arrival.focus();
        return false;
    }

    if (leavingDate <= arrivalDate) {
        alert("Thời gian kết thúc phải sau thời gian bắt đầu.");
        leaving.focus();
        return false;
    }

    alert("Hoàn tất đặt vé!");
    return true;
}