import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
    const {name} = useParams();
    const api = "https://restcountries.com/v3.1/name/";
    const [countryName, setCountryName] = useState([]);
    const getSingleCountry = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setCountryName(data);
    }
    useEffect(()=> {
        getSingleCountry(`${api}${name}`)
    }, [name])
    console.log(countryName)
    return (
        <section className='flex justify-center items-center h-screen'>
            <div className='border p-5 rounded flex gap-5 max-w-[800px] flex-col sm:flex-row'>
                <div className='w-full sm:w-[50%]'>
                    <img src={countryName[0]?.flags.svg} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl'><span className='font-bold text-green-500'>Name:</span>  {countryName[0]?.name?.common}</h2>
                    <p><span className='font-bold text-green-500'>Population:</span>  {countryName[0]?.population}</p>
                    <p><span className='font-bold text-green-500'>Region: </span> {countryName[0]?.region}</p>
                    <p><span className='font-bold text-green-500'>Area: </span> {countryName[0]?.area}</p>
                <Link className='text-white rounded-sm mt-10 block bg-yellow-700 w-[100px] text-center' to='/'>{"Go To Home"}</Link>
                </div>
            </div>
        
        </section>
        
    );
};

export default Country;