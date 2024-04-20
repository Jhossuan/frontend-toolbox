import React, { useEffect, useState } from 'react'
import TableComponent from '../components/TableComponent'
import { getFiles, getFormatedData } from '../services/CSVServices'
import DropdownComponent from '../components/DropdownComponent'

const CSVPage = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ csvData, setCsvData ] = useState([])
  const [ fileOptions, setFilesOptions ] = useState([])
  const [ fileName, setFileName ] = useState(undefined) 

  const getData = async() => {
    setIsLoading(true)
    const response = await getFormatedData(fileName)
    if(response.status === 200){
      setCsvData(response.response)
      setIsLoading(false)
      return
    }
    setCsvData([])
    setIsLoading(false)
  }

  const getFilesOptions = async() => {
    setIsLoading(true)
    const response = await getFiles()
    if(response.response){
      setFilesOptions(response.response)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [fileName])

  useEffect(() => {
    getFilesOptions()
  }, [])

  return (
    <div style={{ width:'80vw' }}>
      <DropdownComponent data={fileOptions} isLoading={isLoading} setFileName={setFileName} />
      <TableComponent data={csvData} isLoading={isLoading} />
    </div>
  )
}

export default CSVPage