<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <div>
        <input type="button" value="Add New Row" @click="() => spreadsheet.insertRow()" />
        <input type="button" value="Delete Selected Row" @click="() => spreadsheet.deleteRow()" />
    </div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      mahasiswa: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      axios.get('http://10.199.14.46:8028/api/mahasiswa/').then(response => {
        var options = {
          url: 'http://10.199.14.46:8028/api/mahasiswa/',
          data: response.data,
          oninsertrow: this.create,
          onchange: this.update,
          ondeleterow: this.delete,
          allowToolbar: true,
          columns: [
            { type: 'hidden', title: 'id', width: '120px' },
            { type: 'text', title: 'NRP', width: '120px' },
            { type: 'text', title: 'Nama', width: '240px' },
            { type: 'dropdown', title: 'Angkatan', width: '80px', source: [ '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019' ] },
            { type: 'dropdown', title: 'jk', width: '80px', source: [ 'laki-laki', 'perempuan' ] },
            { type: 'calendar', title: 'Tanggal Lahir', width: '100px', options: { format: 'DD/MM/YYYY' } },
            { type: 'image', title: 'Photo', width: '120px' },
            { type: 'checkbox', title: 'Aktif', width: '80px' }
          ]
        }
        let spreadsheet = jexcel(this.$el, options)
        Object.assign(this, { spreadsheet })
        // handle success
        console.log(response)
      })
    },
    create() {
      axios.post('http://10.199.14.46:8028/api/mahasiswa/', {nrp: '', nama: '', angkatan: '', jk: '', tgl: '', foto: '', aktif: ''}).then(res => {
        console.log(res.data)
      })
    },
    update(instance, cell, columns, row, value) {
      axios.get('http://10.199.14.46:8028/api/mahasiswa/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        axios.put('http://10.199.14.46:8028/api/mahasiswa/' + index[0], {
          id: index[0],
          nrp: index[1],
          nama: index[2],
          angkatan: index[3],
          jk: index[4],
          tgl: index[5],
          foto: index[6],
          aktif: index[8]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    delete(instance, row) {
      axios.get('http://10.199.14.46:8028/api/mahasiswa/').then(res => {
        var index = Object.values(res.data[row])
        console.log(row)
        axios.delete('http://10.199.14.46:8028/api/mahasiswa/' + index[0])
      })
    }
  }
}
</script>
