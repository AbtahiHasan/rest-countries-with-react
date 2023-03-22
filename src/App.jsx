import { useGolobalData } from './context';
import "./index.css";
import { Link } from 'react-router-dom';


function App() {
  const countres = useGolobalData();

  return (
    <section className="max-w-[1200px] mx-auto mt-10 grid sm:grid-cols-2 md:grid-cols-3 ls:grid-cols-4 gap-5">
        
        {countres.map(country => {
           return (
            <article className="w-full rounded-md shadow border p-5" key={country?.name?.common}>   
              <h2 className="2xl">{country?.name?.common}</h2>    
              <img className='h-56' src={country?.flags?.svg} alt={country?.name?.common} />
              <Link to={`country/${country?.name?.common}`} className="bg-amber-600 p-1 rounded mt-5 block text-center w-[100px]">details</Link>
            </article>
           )
        })}
          
    </section>
  )
}

export default App
