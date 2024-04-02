// fetch data 
function fetchNhanVienList() {
    nhanVienServ.getNhanVien()
        .then(function (response) {
            console.log('response:', response.data)
            renderNhanVienList(response.data)

        }).catch(function (error) {
            console.log('error:', error)

        })
}
fetchNhanVienList()


function deleteNhanVien(id) {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
        nhanVienServ.deleteNhanVienByID(id)
            .then(function (response) {
                console.log('Nhân viên đã xóa:', response)
                fetchNhanVienList()

            }).catch(function (error) {
                console.log('error:', error)

            })
    } else {
        console.log("Người dùng đã hủy bỏ xóa sản phẩm.")
    }
}

// thêm nhân viên có check validation 
function addNhanVien() {
    var nv = getInfo()
    console.log('nv:', nv)

    nhanVienServ.getNhanVien().then(function (response) {
        var nhanVienList = response.data

        var isValid = kiemTraRong(nv.account, "#tbTKNV", "Tài khoản không được để trống")
            && kiemTraDoDai(nv.account, "#tbTKNV", 4, 6, "Độ dài kí tự 4 - 6")
            && kiemTraTrung(nv.account, nhanVienList, "#tbTKNV", "Tài khoản đã tồn tại")

        isValid &= kiemTraRong(nv.username, "#tbTen", "Họ và tên không được để trống")
            && kiemTraChuoi(nv.username, "#tbTen", "Tên phải là chuỗi không chứa số và kí tự đặc biệt")

        isValid &= kiemTraRong(nv.email, "#tbEmail", "Email không được để trống")
            && kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng")
            && kiemTraEmailTrung(nv.email, nhanVienList, "#tbEmail", "Email đã được sử dụng");

        isValid &= kiemTraRong(nv.password, "#tbMatKhau", "Mật khẩu không được để trống")
            && kiemTraMatKhau(nv.password, "#tbMatKhau", "Mật khẩu phải chứa 6 - 10 kí tự, 1 ký tự số, 1 chữ hoa, 1 ký tự đặc biệt")

        isValid &= kiemTraRong(nv.workDate, "#tbNgay", "Ngày làm không được để trống")
            && kiemTraNgayLam(nv.workDate, "#tbNgay", "Ngày làm không đúng")

        isValid &= kiemTraRong(nv.salary, "#tbLuongCB", "Lương không được để trống")
            && kiemTraTrongKhoang(nv.salary, "#tbLuongCB", 1000000, 20000000, "Lương từ 1.000.000 - 2.0000.000")

        isValid &= kiemTraRong(nv.position, "#tbChucVu", "Phải chọn chức vụ")

        isValid &= kiemTraRong(nv.time, "#tbGiolam", "Thời gian không được để trống")
            && kiemTraTrongKhoang(nv.time, "#tbGiolam", 80, 200, "Thời gian làm từ 80 - 200")


        if (isValid) {
            nhanVienServ.addNewNhanVien(nv).then(function (response) {
                console.log('response:', response.data)
                $('#myModal').modal('hide');
                fetchNhanVienList()

            }).catch(function (error) {
                console.log('error:', error)

            })
        }
    }).catch(function (error) {
        console.log('errorw:', error)

    })


}

// edit bằng cách lấy data nhân viên theo id và truyền vào form 
function editNhanVien(id) {
    nhanVienServ.getNhanVienById(id).then(function (response) {
        console.log('response:', response.data)

        var nv = response.data

        document.querySelector('#MaNV').value = nv.id
        document.querySelector('#tknv').value = nv.account
        document.querySelector('#name').value = nv.username
        document.querySelector('#email').value = nv.email
        document.querySelector('#password').value = nv.password
        document.querySelector('#datepicker').value = nv.workDate
        document.querySelector('#luongCB').value = nv.salary
        document.querySelector('#chucvu').value = nv.position
        document.querySelector('#gioLam').value = nv.time

        $('#myModal').modal('show')

        document.querySelector('#btnThemNV').classList.add('d-none')
        document.querySelector('#btnCapNhat').classList.remove('d-none')

    }).catch(function (error) {
        console.log('error:', error)

    })
}


// function updateNhanVien(id) {
//     var nv = getInfo();
//     console.log('nv:', nv)

//     var id = document.querySelector('#MaNV').value;

//     var isValid = kiemTraRong(nv.account, "#tbTKNV", "Tài khoản không được để trống")
//         && kiemTraDoDai(nv.account, "#tbTKNV", 4, 6, "Độ dài kí tự 4 - 6")

//     isValid &= kiemTraRong(nv.username, "#tbTen", "Họ và tên không được để trống")
//         && kiemTraChuoi(nv.username, "#tbTen", "Tên phải là chuỗi không chứa số và kí tự đặc biệt")

//     isValid &= kiemTraRong(nv.email, "#tbEmail", "Email không được để trống")
//         && kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng")

//     isValid &= kiemTraRong(nv.password, "#tbMatKhau", "Mật khẩu không được để trống")
//         && kiemTraMatKhau(nv.password, "#tbMatKhau", "Mật khẩu phải chứa 6 - 10 kí tự, 1 ký tự số, 1 chữ hoa, 1 ký tự đặc biệt")

//     isValid &= kiemTraRong(nv.workDate, "#tbNgay", "Ngày làm không được để trống")
//         && kiemTraNgayLam(nv.workDate, "#tbNgay", "Ngày làm không đúng")

//     isValid &= kiemTraRong(nv.salary, "#tbLuongCB", "Lương không được để trống")
//         && kiemTraTrongKhoang(nv.salary, "#tbLuongCB", 1000000, 20000000, "Lương từ 1.000.000 - 2.0000.000")

//     isValid &= kiemTraRong(nv.position, "#tbChucVu", "Phải chọn chức vụ")

//     isValid &= kiemTraRong(nv.time, "#tbGiolam", "Thời gian được để trống")
//         && kiemTraTrongKhoang(nv.time, "#tbGiolam", 80, 200, "Thời gian làm từ 80 - 200")

//     if (isValid) {
//         nhanVienServ.updateNhanVienById(id, nv).then(function (response) {
//             console.log('response:', response)
//             $('#myModal').modal('hide')
//             fetchNhanVienList()

//         }).catch(function (error) {
//             console.log('error:', error)

//         })
//     }
// }



// update nhân viên có check validation 
function updateNhanVien(id) {
    var nv = getInfo();
    console.log('nv:', nv)

    var id = document.querySelector('#MaNV').value;

    nhanVienServ.getNhanVien().then(function (response) {
        var nhanVienList = response.data;

        // Tìm nhân viên cần chỉnh sửa
        var nhanVienToUpdate = nhanVienList.find(function (nv) {
            return nv.id === id;
        });

        if (!nhanVienToUpdate) {
            console.log('Nhân viên không tồn tại');
            return;
        }

        // Kiểm tra xem tài khoản có được thay đổi không trước khi kiểm tra trùng
        var isAccountChanged = nv.account !== nhanVienToUpdate.account;
        var isEmailChanged = nv.email !== nhanVienToUpdate.email; // Kiểm tra xem email có thay đổi không


        var isValid = true;

        if (isAccountChanged) {
            isValid = kiemTraRong(nv.account, "#tbTKNV", "Tài khoản không được để trống")
                && kiemTraDoDai(nv.account, "#tbTKNV", 4, 6, "Độ dài kí tự 4 - 6")
                && kiemTraTrung(nv.account, nhanVienList, "#tbTKNV", "Tài khoản đã tồn tại");
        }

        isValid &= kiemTraRong(nv.username, "#tbTen", "Họ và tên không được để trống")
            && kiemTraChuoi(nv.username, "#tbTen", "Tên phải là chuỗi không chứa số và kí tự đặc biệt");

        if (isEmailChanged) {
            isValid &= kiemTraRong(nv.email, "#tbEmail", "Email không được để trống")
                && kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng")
                && kiemTraEmailTrung(nv.email, nhanVienList, "#tbEmail", "Email đã được sử dụng");
        }

        isValid &= kiemTraRong(nv.password, "#tbMatKhau", "Mật khẩu không được để trống")
            && kiemTraMatKhau(nv.password, "#tbMatKhau", "Mật khẩu phải chứa 6 - 10 kí tự, 1 ký tự số, 1 chữ hoa, 1 ký tự đặc biệt");

        isValid &= kiemTraRong(nv.workDate, "#tbNgay", "Ngày làm không được để trống")
            && kiemTraNgayLam(nv.workDate, "#tbNgay", "Ngày làm không đúng");

        isValid &= kiemTraRong(nv.salary, "#tbLuongCB", "Lương không được để trống")
            && kiemTraTrongKhoang(nv.salary, "#tbLuongCB", 1000000, 20000000, "Lương từ 1.000.000 - 2.0000.000");

        isValid &= kiemTraRong(nv.position, "#tbChucVu", "Phải chọn chức vụ");

        isValid &= kiemTraRong(nv.time, "#tbGiolam", "Thời gian không được để trống")
            && kiemTraTrongKhoang(nv.time, "#tbGiolam", 80, 200, "Thời gian làm từ 80 - 200");

        if (isValid) {
            nhanVienServ.updateNhanVienById(id, nv).then(function (response) {
                console.log('response:', response);
                $('#myModal').modal('hide');
                fetchNhanVienList();
            }).catch(function (error) {
                console.log('error:', error);
            });
        }

    }).catch(function (error) {
        console.log('error:', error);
    });
}

// Tìm nhân viên theo loại nhân viên 
function sreachNhanVienByClassification() {
    var classification = document.querySelector('#searchName').value.trim().toLowerCase()

    nhanVienServ.getNhanVien().then(function (response) {
        console.log('response:', response.data)

        var nhanVienList = response.data

        var result = nhanVienList.filter(function (nv) {
            return nv.classification.toLowerCase().includes(classification)
        })

        renderNhanVienList(result)

    }).catch(function (error) {
        console.log('error:', error)

    })
}

document.querySelector('#searchName').addEventListener('input', function () {
    sreachNhanVienByClassification()
})

