const daftarKaryawan = [
    {
        nama: "Devyn Ramirez",
        masaKerja: "10",
        noInduk: "1",
        gaji: "7000000"
    },
    {
        nama: "Harmony Duncan",
        masaKerja: "5",
        noInduk: "2",
        gaji: "4000000"
    },
    {
        nama: "Clarissa Burgess",
        masaKerja: "8",
        noInduk: "3",
        gaji: "7000000"
    },
    {
        nama: "Reilly Blanchard",
        masaKerja: "7",
        noInduk: "4",
        gaji: "7000000"
    },
    {
        nama: "Zion Brooks",
        masaKerja: "4",
        noInduk: "5",
        gaji: "4000000"
    },
    {
        nama: "Jovanny Mays",
        masaKerja: "10",
        noInduk: "6",
        gaji: "7000000"
    },
    {
        nama: "Cindy Chase",
        masaKerja: "9",
        noInduk: "7",
        gaji: "7000000"
    },
    {
        nama: "Kristin Mcdaniel",
        masaKerja: "8",
        noInduk: "8",
        gaji: "7000000"
    },
    {
        nama: "Macey Sanford",
        masaKerja: "7",
        noInduk: "9",
        gaji: "7000000"
    },
    {
        nama: "Alfredo Faulkner",
        masaKerja: "10",
        noInduk: "10",
        gaji: "7000000"
    },
]

let mode = 'tambah'

const tampilkanKaryawan = () => {

    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = '<tr><th>No</th><th>Nama</th><th>No Induk</th><th>Masa Kerja</th><th>Gaji</th><th>Edit</th><th>Hapus</th></tr>'

    for(let idx in daftarKaryawan) {
        console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} bernomor induk ${daftarKaryawan[idx].noInduk} dengan masa kerjanya ${daftarKaryawan[idx].masaKerja} tahun dan memiliki gaji Rp ${daftarKaryawan[idx].gaji}`)
    
        tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].noInduk}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].gaji}</td><td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`
    }
}

const tambahKaryawan = () => {

    const nama = document.getElementById('txtNama').value 
    const noInduk = document.getElementById('nbrNoInduk').value 
    const masaKerja = document.getElementById('masaKerja').value 
    const gaji = document.getElementById('nbrGaji').value

    const karyawanBaru = {
        nama: nama,
        masaKerja: masaKerja,
        noInduk: noInduk,
        gaji: gaji
    }

    if (mode == 'tambah') {
        daftarKaryawan.push(karyawanBaru)
    } else {
        // jika edit
        daftarKaryawan[mode] = karyawanBaru
    } 

    document.getElementById('txtNama').value = ""
    document.getElementById('nbrNoInduk').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('nbrGaji').value = ""

    mode = 'tambah'

    tampilkanKaryawan()
}

const cariKaryawan = (nama) => {
    for (let i=0; i<daftarKaryawan.length; i++) {
        if(daftarKaryawan[i].nama == nama) {
            return i
        }
    }
    return -1;
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariKaryawan(target)
    if (indexDihapus !== -1) {
        daftarKaryawan.splice(indexDihapus,1)
        tampilkanKaryawan()
    }
}

const editKaryawan = (target) => {
    const indexEdit = cariKaryawan(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarKaryawan[indexEdit])

    const karyawanDiedit = daftarKaryawan[indexEdit]

    const nama = document.getElementById('txtNama').value = karyawanDiedit.nama
    const noInduk = document.getElementById('nbrNoInduk').value = karyawanDiedit.noInduk
    const masaKerja = document.getElementById('masaKerja').value = karyawanDiedit.masaKerja
    const gaji = document.getElementById('nbrGaji').value = karyawanDiedit.gaji

    mode = indexEdit

    // const namaBaru = prompt('Masukkan Nama')
    // const masaKerjaBaru = prompt('Masukkan Masa Kerja')
    // const noIndukBaru = prompt('Masukkan Nomor Induk')
    // const gajiBaru = prompt('Masukkan Gaji')

    // daftarKaryawan[indexEdit] = {
        // nama: namaBaru,
        // masaKerja: masaKerjaBaru,
        // noInduk: noIndukBaru,   
        // gaji: gajiBaru
    // }
}

const batalEdit = (target) => {
    document.getElementById('txtNama').value = ""
    document.getElementById('nbrNoInduk').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('nbrGaji').value = ""
    mode = 'tambah'
} 