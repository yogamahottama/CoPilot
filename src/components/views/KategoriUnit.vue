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
  // name: 'App',
  data() {
    return {
      KategoriUnit: [],
      form: {
        id: '',
        nama: ''
      }
    }
  },
  mounted() {
    let spreadsheet = jexcel(this.$el, this.jexcelOptions)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    newRow() {
      axios.post('http://10.199.14.46:8028/api/KategoriUnit/', this.form).then(res => {
        console.log(res.data)
      })
    },
    updateRow(instance, cell, columns, row, value) {
      axios.get('http://10.199.14.46:8028/api/KategoriUnit/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://10.199.14.46:8028/api/KategoriUnit/' + index[0], {
          id: index[0],
          nama: index[1]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow(instance, row) {
      axios.get('http://10.199.14.46:8028/api/KategoriUnit/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(row)
        axios.delete('http://10.199.14.46:8028/api/KategoriUnit/' + index[0])
      })
    }
  },
  computed: {
    jexcelOptions() {
      return {
        data: this.KategoriUnit,
        allowToolbar: true,
        url: 'http://10.199.14.46:8028/api/KategoriUnit/',
        onchange: this.updateRow,
        oninsertrow: this.newRow,
        ondeleterow: this.deleteRow,
        columns: [
          { type: 'hidden', title: 'id', width: '50px' },
          { type: 'text', title: 'nama', width: '200px' }
        ]
      }
    }
  }
}
</script>
