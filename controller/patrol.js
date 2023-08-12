
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

    static async detail(req, res){
        res.json({
            error: false,
            message: "Data berhasil dimuat",
            data: {
                status: "belum-dikerjakan",
                alamat: "Jl Diponegoro 1",
                tanggal: "22 Juni 2023",
                jam: "22:24",
                lead: "budi@gmail.com",
                title: `Patroli Rutin 0`,
                sprin: "Sprin/130/I/PAM.5.1.3/2023",
                tujuan: "Patroli antisipasi tindak kriminal tahun 2023 yang menyasar kenakalan remaja, tindak kriminal ringan dan pemantauan keamanan",
                id: 0,
                events:[
                    {
                        id: 0,
                        image: "",
                        summary: "Sambang dengan warga sekitar untuk memastikan situasi dan kondisi aman",
                        title: "Suasana tertib",
                        action: "Dialog dengan warga",
                        lat: 0.0,
                        long: 0.0,
                        createdAt :"22 Janurai 2023 14:40",
                        author: "budi@gmail.com"
                    }
                ]
            }
        })
    }

    static async delete(req, res){
        res.json({
            error: false,
            message: "Data kejadian berhasil dihapus"
        })
    }
}

module.exports = Patrol