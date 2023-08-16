const uid = require("uuid")
class User {
    static async login(req, res){
        res.json({
            error: false,
            data: {
                token: uid.v4(),
                user: {
                    nama_lengkap: "Budi santoro",
                    email: "budi@gmail.com",
                    nrp: "0543536543216",
                    profile: "https://picsum.photos/200/200",
                    jabatan: "Banit Turjawali Satsamapta Polresta Cilacap"
                }
            },
            message: "Data berhasil dimuat"
        })
    }
}

module.exports = User