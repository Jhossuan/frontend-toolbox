import axios from "axios"

export const getFormatedData = async(file) => {
    const filter = file ? `?fileName=${file}` : ""
    try {
        const res = await axios.get(`http://localhost:5000/files/data${filter}`)
        return {
            status: res.status,
            response: res.data
        }
    } catch (error) {
        return {
            status: 404,
            response: "Data not found"
        }
    }
}

export const getFiles = async() => {
    try {
        const res = await axios.get(`http://localhost:5000/files/list`)
        return {
            status: res.status,
            response: res.data
        }
    } catch (error) {
        return {
            status: 404,
            response: "Data not found"
        }
    }
}