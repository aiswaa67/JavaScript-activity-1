console.log ("Hello World")

// let nama = "Ais"

// let greeting = "Hello nama saya "

// console.log(greeting + nama)

// daftarSiswa = ["Azrina", "Diva", "Salwa", "Bella", "Zifa"]

// console.log("1. "+daftarSiswa[0])
// console.log("2. "+daftarSiswa[1])
// console.log("3. "+daftarSiswa[2])

let daftarSiswa = ["Azrina", "Diva", "Salwa", "Bella", "Zifa"]
// daftarSiswa = "Zifa"
// console.log("1. "+daftarSiswa[0])
// console.log("2. "+daftarSiswa[1])
// console.log("3. "+daftarSiswa[2])
// console.log("4. "+daftarSiswa[3])

// daftarSiswa[4] = "Salsa"

// console.log(daftarSiswa)

// for(let i=0; i<5; i++)
// console.log(`${i+1}. ${daftarSiswa[i]}`)

// for(let i =0; i<daftarSiswa.length ; i++) {
//    console.log(`${i+1}. ${daftarSiswa[i]}`)
// }

// for(let nama of daftarSiswa) {
//    console.log(nama)
// }

// for(let index in daftarSiswa) {
//    console.log(index)
// }

let jumlah = 0
for(let i=0; i<5; i++) {
    if(daftarSiswa[i][0] == "A") {
        console.log("ketemu")
        jumlah++;
    }
}
console.log("jumlah huruf a adalah", jumlah) 