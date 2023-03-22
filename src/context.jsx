import { createContext, useEffect, useState, useContext } from 'react';
// import react from '@vitejs/plugin-react'

const appContext = createContext()

const DataProvidar = ({children}) => {
    const api = "https://restcountries.com/v3.1/all";
    const [countres, setCountres] = useState([])
    const getCountre = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setCountres(data)
    }
    useEffect(() => {
        getCountre();
    }, [])


    return <appContext.Provider value={countres}>{children}</appContext.Provider>
}

export const useGolobalData = () => {
    return useContext(appContext)
}

export default DataProvidar