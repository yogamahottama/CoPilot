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
      Capaian_Unit: [],
      form: {
        DataDasar_id: '',
        Unit_id: '',
        waktu: '',
        capaian: ''
      }
    }
  },
  mounted() {
    let spreadsheet = jexcel(this.$el, this.jexcelOptions)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    newRow() {
      axios.post('http://10.199.14.41:8028/api/Capaian_Unit/', this.form).then(res => {
        console.log(res.data)
      })
    },
    updateRow(instance, cell, columns, row, value) {
      axios.get('http://10.199.14.41:8028/api/Capaian_Unit/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://10.199.14.41:8028/api/Capaian_Unit/' + index[0], {
          DataDasar_id: index[0],
          Unit_id: index[1],
          waktu: index[2],
          capaian: index[3]
        }).then(res => {
          console.log(res.data)
        })
      })
    },
    deleteRow(instance, row) {
      axios.get('http://10.199.14.41:8028/api/Capaian_Unit/').then(res => {
        var index = Object.values(res.data[row])
        // console.log(index)
        console.log(row)
        axios.delete('http://10.199.14.41:8028/api/Capaian_Unit/' + index[0])
      })
    }
  },
  computed: {
    jexcelOptions() {
      return {
        data: this.Capaian_Unit,
        allowToolbar: true,
        url: 'http://10.199.14.41:8028/api/Capaian_Unit/',
        onchange: this.updateRow,
        oninsertrow: this.newRow,
        ondeleterow: this.deleteRow,
        columns: [
          { type: 'text', title: 'DataDasar', width: '50px' },
          { type: 'text', title: 'Unit_id', width: '50px' },
          { type: 'calendar', title: 'waktu', width: '50px' },
          { type: 'text', title: 'capaian', width: '200px' }
        ]
      }
    }
  }
}
</script>
