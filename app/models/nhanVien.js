function nhanVien(_id, _account, _username, _email, _password, _workDate, _salary, _position, _time, _totalSalary, _classification) {
    this.id = _id
    this.account = _account
    this.username = _username
    this.email = _email
    this.password = _password
    this.workDate = _workDate
    this.salary = _salary
    this.position = _position
    this.time = _time
    // this.totalSalary = _totalSalary
    // this.classification = _classification


    this.calculateTotalSalary = function () {
        if (this.position === 'Sếp') {
            return this.salary * 3;
        } else if (this.position === 'Trưởng phòng') {
            return this.salary * 2;
        } else {
            return this.salary;
        }
    }

    this.calculateClassification = function () {
        if (this.time >= 192) {
            return "Xuất sắc";
        } else if (this.time >= 176) {
            return "Giỏi";
        } else if (this.time >= 160) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    }
}