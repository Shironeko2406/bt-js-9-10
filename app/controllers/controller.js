function renderNhanVienList(nhanVienList) {
    var content = "";
    for (var i = 0; i < nhanVienList.length; i++) {
        var nhanVien = nhanVienList[i];

        var contentTr = `
            <tr>
                <td>${nhanVien.account}</td>
                <td>${nhanVien.username}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.workDate}</td>
                <td>${nhanVien.position}</td>
                <td>${nhanVien.totalSalary}</td>
                <td>${nhanVien.classification}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteNhanVien('${nhanVien.id}')"><i class="fa fa-trash"></i></button>
                    <button class="btn btn-warning" onclick="editNhanVien('${nhanVien.id}')"><i class="fa fa-edit"></i></button>
                </td>
            </tr>
        `;

        content += contentTr;

    }

    document.querySelector('#tableDanhSach').innerHTML = content
}


function getInfo() {
    var id = document.getElementById('MaNV').value;
    var account = document.getElementById('tknv').value;
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var workDate = document.getElementById('datepicker').value;
    var salary = document.getElementById('luongCB').value;
    var position = document.getElementById('chucvu').value;
    var time = document.getElementById('gioLam').value;
    // từ từ Validation sau 
    // var totalSalary = "2";
    // var classification = "Gioi";

    // return new nhanVien(id, account, username, email, password, workDate, salary, position, time, totalSalary, classification);

    // ---------------------------------------------------------------------------------------------
    var nv = new nhanVien(id, account, username, email, password, workDate, salary, position, time);

    // Tính totalSalary và classification
    nv.totalSalary = nv.calculateTotalSalary();
    nv.classification = nv.calculateClassification();

    return nv;
}


function resetForm() {
    document.querySelector('#MaNV').value = ""
    document.querySelector('#tknv').value = ""
    document.querySelector('#name').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#password').value = ""
    document.querySelector('#datepicker').value = ""
    document.querySelector('#luongCB').value = ""
    document.querySelector('#chucvu').value = ""
    document.querySelector('#gioLam').value = ""

    // Xóa thông báo lỗi
    document.querySelector('#tbTKNV').innerHTML = "";
    document.querySelector('#tbTen').innerHTML = "";
    document.querySelector('#tbEmail').innerHTML = "";
    document.querySelector('#tbMatKhau').innerHTML = "";
    document.querySelector('#tbNgay').innerHTML = "";
    document.querySelector('#tbLuongCB').innerHTML = "";
    document.querySelector('#tbChucVu').innerHTML = "";
    document.querySelector('#tbGiolam').innerHTML = "";
}

$('#myModal').on('show.bs.modal', function (e) {
    document.querySelector('#btnCapNhat').classList.add('d-none')
})

$('#myModal').on('hidden.bs.modal', function (e) {
    document.querySelector('#btnThemNV').classList.remove('d-none')
    resetForm()
})