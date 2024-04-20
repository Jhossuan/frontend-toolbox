import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const TableComponent = ({ data, isLoading }) => {
  const [formatedData, setFormatedData] = useState([])

  const formatDataForTable = () => {
      let newArray = [];
      data.forEach(item => {
        item.lines.forEach(line => {
          let template = {
            ...line,
            file: item.file,
          }
          newArray.push(template)
        })
      })
      setFormatedData(newArray)
  }

  useEffect(() => {
    if (!isLoading) {
      formatDataForTable()
    }
  }, [data])

  return (
    <div style={{ maxHeight: '80vh', width:'100%', overflowY: 'auto' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4">Loading ...</td>
            </tr>
          ) : formatedData.length === 0 ? (
            <tr>
              <td colSpan="4">Data not found...</td>
            </tr>
          ) : (
            formatedData.map((item, index) => (
              <tr key={index}>
                <td>{item.file}</td>
                <td>{item.text}</td>
                <td>{item.number}</td>
                <td>{item.hex}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent
