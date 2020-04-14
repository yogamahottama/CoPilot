<template lang='html'>
  <div class='wrapper-jexcel'>
    <br>
    <input
      type='button'
      value='Add new row'
      @click='jExcelObj.insertRow()'
    />
    <input
      type='button'
      value='Delete row'
      @click='jExcelObj.deleteRow()'
    />
    <br />
    <br />
    <div id='spreadsheet' ref='spreadsheet'></div>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'
var host = 'http://10.199.14.46:8028/'
// var host = 'http://127.0.0.1:8028/'
export default {
  name: 'jexcel',
  data() {
    return {
      bio: [
        {
          'id': 0,
          'nama': null,
          'KategoriUnit_id': 1
        }
      ],
      template: {
        'id': 0,
        'nama': null
      }
    }
  },
  computed: {
    jExcelOptions() {
      return {
        data: this.bio,
        columns: [
          { type: 'hidden', title: 'ID', width: '120px', name: 'id' },
          { type: 'text', title: 'Nama', width: '300px' },
          { type: 'dropdown', title: 'Kategori', url: host + 'api/KategoriUnit', width: '300px' }
        ],
        onchange: this.changed,
        oninsertrow: this.insertedRow,
        ondeleterow: this.deleteRow,
        responsive: true
      }
    }
  },
  methods: {
    load() {
      console.log('load')
      console.log(host + 'api/Unit')
      axios.get(host + 'api/Unit').then(response => {
        console.log(response)
        var valuesOnly = response.data
        this.bio = valuesOnly
        console.log(this.bio)
      }).catch((err) => {
        console.log(err)
      })
    },
    changed(instance, cell, x, y, value) {
      x = parseInt(x)
      y = parseInt(y)
      console.log('x: ' + x + '\ny: ' + y)
      var id = y
      var data = {}
      axios.get(host + 'api/Unit').then((response) => {
        data = Object.values(response.data[id])
        data[x] = value
        console.log(data)
        axios({
          method: 'put',
          url: host + 'api/Unit/' + data[0],
          data: {
            'id': data[0],
            'nama': data[1],
            'KategoriUnit_id': data[2]
          }
        }).then((response) => {
          console.log(response.data)
        })
      })
    },
    insertedRow(instance) {
      axios({
        method: 'post',
        url: host + 'api/Unit/',
        data: {
          'KategoriUnit_id': 1,
          'nama': null
        }
      }).then((response) => {
        console.log(response.data)
      })
    },
    deleteRow(instance, row) {
      console.log(row)
      axios.get(host + 'api/Unit/').then(res => {
        console.log(res.data[row])
        var index = Object.values(res.data[row])
        // console.log(index)
        axios.delete(host + 'api/Unit/' + index[0])
      })
    }
  },
  mounted() {
    this.load()
  },
  watch: {
    bio () {
      const jExcelObj = jexcel(this.$refs['spreadsheet'], this.jExcelOptions)
      Object.assign(this, { jExcelObj })
    }
  }
}
</script>
