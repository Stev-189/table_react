import React from 'react'
import './styles.css'
const Table = () => {
  return (
    <>
        <div className="table-fixed-column-outter">
        <div className="table-fixed-column-inner">
          <table className="table-fixed-column table-fixed-column table table-bordered table-striped">
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
                <th>Header 6</th>
                <th>Header 7</th>
                <th>Header 8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Some Title 1</td>
                <td>Some Val 2</td>
                <td>Some Val 3</td>
                <td>Some Val 4</td>
                <td>Some Val 5</td>
                <td>Some Val 6</td>
                <td>Some Val 7</td>
                <td>Some Val 8</td>
              </tr>
              <tr>
                <td>Some Title 1</td>
                <td>Some Val 2</td>
                <td>Some Val 3</td>
                <td>Some Val 4</td>
                <td>Some Val 5</td>
                <td>Some Val 6</td>
                <td>Some Val 7</td>
                <td>Some Val 8</td>
              </tr>
              <tr>
                <td>Some Title 1</td>
                <td>Some Val 2</td>
                <td>Some Val 3</td>
                <td>Some Val 4</td>
                <td>Some Val 5</td>
                <td>Some Val 6</td>
                <td>Some Val 7</td>
                <td>Some Val 8</td>
              </tr>
              <tr>
                <td>Some Title 1</td>
                <td>Some Val 2</td>
                <td>Some Val 3</td>
                <td>Some Val 4</td>
                <td>Some Val 5</td>
                <td>Some Val 6</td>
                <td>Some Val 7</td>
                <td>Some Val 8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Table