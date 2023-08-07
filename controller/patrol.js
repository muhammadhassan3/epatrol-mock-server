
class Patrol {
    static async getAll(req, res) {
        const data = []
        let i
        for (i = 0; i < 10; i += 4) {
            data.push({
                status: "belum-dikerjakan",
                alamat: "Jl Diponegoro 1",
                tanggal: "22 Juni 2023",
                jam: "22:24",
                ketua: "budi@gmail.com",
                verified: false,
                judul: `Patroli Rutin ${i}`,
                plate: "R 1234 CH",
                id: i
            })
            data.push({
                status: "belum-dikerjakan",
                alamat: "Jl Diponegoro 1",
                tanggal: "22 Juni 2023",
                jam: "22:24",
                ketua: "ahmad@gmail.com",
                verified: false,
                judul: `Patroli Rutin ${i}`,
                plate: "R 5678 CH",
                id: i+1
            })
            data.push({
                status: "sudah-dikerjakan",
                alamat: "Jl Diponegoro 2",
                tanggal: "22 Juni 2023",
                jam: "12:30",
                ketua: "ahmad@gmail.com",
                verified: true,
                judul: `Patroli Rutin ${i + 1}`,
                plate: "R 9031 CH",
                id: i + 2
            })
            data.push({
                status: "sedang-dikerjakan",
                alamat: "Jl Diponegoro 3",
                tanggal: "22 Juni 2023",
                jam: "15:40",
                ketua: "ahmad@gmail.com",
                verified: true,
                judul: `Patroli Rutin ${i + 1}`,
                plate: "R 7777 CH",
                id: i + 3
            })
        }
        res.json({
            error: false, message: "Data berhasil dimuat", data: data
        })
    }

    static async verify(req, res){
        res.json({
            error: false,
            message: "Tugas terverifikasi"
        })
    }
}

module.exports = Patrol