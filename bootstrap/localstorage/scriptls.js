let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

function simpan(){
    console.log(npm.value)
    console.log(nama.value)

    //localStorage.setItem("npm", npm.value)
    //localStorage.setItem("nama", nama.value)

    //cek local storage sudah ad isi / belum
    if(localStorage.getItem("mahasiswa")===null){
        // simpan array kosong[]
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local storage
    let data = JSON.parse (localStorage.getItem("mahasiswa"))
    console.log(data)

    // simpan value npm dan nama ke dalam object data
    data.push({
        npm : npm.value,
        nama : nama.value
    })
    console.log(data)

    // lanjut simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
}

function tampil(){
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //lakukan perulangan
    hasil.array.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}</li>`
    });
}

//jalankan function tampil()
tampil()
