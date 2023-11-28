const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    guru: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    ruang: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    hari: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    jumlah_siswa: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    
})

module.exports  = mongoose.model('user', UserSchema)