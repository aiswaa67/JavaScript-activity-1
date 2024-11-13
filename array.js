const nama = [
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner",
]
const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10,
]

const karyawanJunior = []
const karyawanSenior = []

//  for (let i = 0; i < nama.length; i++) {
    // cek masa kerja
    // if (masaKerja[i] < 6) {
        // jika ketemu
        // karyawanJunior.push(nama[i])
    // } // jika tidak ketemu
    // else {
        // karyawanSenior.push(nama[i])
    // }
// }

// console.log(karyawanJunior)
// console.log(karyawanSenior)

// console.log('Daftar Karyawan Senior: ')
// for(let index in karyawanSenior) {
    // console.log(`${index}. ${karyawanSenior[index]}`)
// }

// console.log('Daftar Karyawan Senior: ')
// for(let i in karyawanSenior) {
    // console.log(`${parseInt(i) +1} ${karyawanSenior[i]}`)
// }
// let karyawan = 1;

// console.log('Daftar Karyawan Junior: ')
// for(let nama of karyawanJunior) {
    // console.log(`${karyawan}. ${nama}`)
    // karyawan++
// }

function jumlahGaji() {
for (let i = 0; i < nama.length; i++) {
    // cek masa kerja
    if (masaKerja[i] < 6) {
        // jika ketemu
        console.log(`Karyawan ${nama[i]} mendapat gaji Rp 4.000.000`)
    } // jika tidak ketemu
    else {
        console.log(`Karyawan ${nama[i]} mendapat gaji Rp 7.000.000`)
    }
}
}
jumlahGaji()