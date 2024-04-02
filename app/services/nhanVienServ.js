// const BASE_URL = 'https://65e5d97fd7f0758a76e79454.mockapi.io/api/products';

// var productServ = {
//     getProduct: function () {
//         return axios({
//             url: BASE_URL,
//             method: 'GET',
//         });
//     },

//     deleteProductByID: function (id) {
//         return axios({
//             url: `${BASE_URL}/${id}`,
//             method: 'DELETE',
//         });
//     },

//     addNewProduct: function (sp) {
//         return axios({
//             url: BASE_URL,
//             method: 'POST',
//             data: sp,
//         })
//     },

//     getProductByID: function (id) {
//         return axios({
//             url: `${BASE_URL}/${id}`,
//             method: 'GET',
//         })
//     },

//     updateProductByID: function(id, sp){
//         return axios({
//             url: `${BASE_URL}/${id}`,
//             method: 'PUT',
//             data: sp,
//         })
//     }
// };

const BASE_URL = 'https://65250fcb67cfb1e59ce68289.mockapi.io/Nhanvien';

var nhanVienServ = {
    getNhanVien: function () {
        return axios({
            url: BASE_URL,
            method: 'GET',
        });
    },

    deleteNhanVienByID: function (id) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'DELETE'
        })
    },

    addNewNhanVien: function (nv){
        return axios({
            url: BASE_URL,
            method: 'POST',
            data: nv,
        })
    },

    getNhanVienById: function(id){
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'GET'
        })
    },

    updateNhanVienById: function(id, nv){
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'PUT',
            data: nv,
        })
    }
}
