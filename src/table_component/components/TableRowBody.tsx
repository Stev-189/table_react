import React from 'react'
import TableRowCell from './TableRowCell';

function TableRowBody() {
  return (
        <>
            <td>
                name 1
            </td>
            {
                //se debe retetir segun la cantidad de turnos
                <TableRowCell />
            }
        </>
  )
}

export default TableRowBody