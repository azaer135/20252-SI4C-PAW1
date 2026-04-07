let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("image");

function simpan(){
    console.log(npm.value)
    console.log(nama.value)
    console.log(image.value)

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
        nama : nama.value,
        image: image.value
    })
    
    console.log(data)
    // lanjut simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    tampil()
}

function tampil(){
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //lakukan perulangan
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6">
            <h4 class="card-title">NPM:${element.npm}</h4>
            <h6 class="card-text">Nama: ${element.nama}</h6>
            <img src="${element.image}" alt="Image" class="img-fluid">
        </div>`
    });
}

//jalankan function tampil()
tampil()