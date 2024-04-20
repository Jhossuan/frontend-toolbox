import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownComponent = ({ data, isLoading, setFileName }) => {

  return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" disabled={isLoading}>
            {
                isLoading ? "Loading..." : "Filter by filename"
            }
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={() => setFileName(undefined)}>All</Dropdown.Item>
            {
                data.map(option => {
                    return (
                        <Dropdown.Item key={option} onClick={() => setFileName(option)}>{ option }</Dropdown.Item>
                    )
                })
            }
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownComponent