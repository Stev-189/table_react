import React from 'react'

//debe recivir las fechas o los dias d elos periodos

function TableHead() {
  return (
    <thead>
        <tr>
            <th rowSpan={3}>
                Nombre
            </th>
            
            {
                //se debe repetir tantas veces como dias cambiando por el mes
                <th colSpan={3}>
                Mes
                </th>
            }
            <th rowSpan={3}>
                Total turnos
            </th>
            <th rowSpan={3}>
                Total Domingos Feriados
            </th>

        </tr>

        {
            //fragmento se debe repetir tantas veces como dias agregando dia y fecha
            <>
            <tr>
                <th colSpan={3}>
                    Dia Fecha
                </th>
            </tr>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
            </>
        }

        
    </thead>
  )
}

export default TableHead