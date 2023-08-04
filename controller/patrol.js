const uuid = require("uuid")

class Patrol {
    static async getAll(req, res) {
        const data = []
        let i = 0
        for (i = 0; i < 3; i += 2) {
            data.push({
                status: "Belum dikerjakan",
                alamat: "Jl Diponegoro",
                tanggal: "22 Juni 2023",
                jam: "22:24",
                ketua: "budi@gmail.com",
                verified: false,
                judul: `Patroli Rutin ${i}`,
                id: i
            })
            data.push({
                status: "Sudah dikerjakan",
                alamat: "Jl Diponegoro",
                tanggal: "22 Juni 2023",
                jam: "12:30",
                ketua: "ahmad@gmail.com",
                verified: true,
                judul: `Patroli Rutin ${i + 1}`,
                id: i + 1
            })
        }
        res.json({
            error: false, message: "Data berhasil dimuat", data: data
        })
    }
}

module.exports = Patrol