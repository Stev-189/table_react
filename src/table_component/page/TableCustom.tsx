import React from 'react'
import Table_body from '../components/TableBody'
import Table_head from '../components/TableHead'
import '../styles.css'

function TableCustom() {
  return (
    <table>
      <Table_head />
      <Table_body />
    </table>
  )
}

export default TableCustom