import { useEffect, useState } from "react";
import '../css/productos.css';
import { useNavigate } from "react-router-dom";

function Productos() {
    const [characters, setCharacters] = useState([]);
    const [pagina, setPagina] = useState(1);
    const navigate = useNavigate()
  
   
    const nextPage = () => {
        if(pagina < 42){
            setPagina(pepito => pepito + 1);
        }else {
            //   navigate('/endpage') 
            alert('No hay mas personajes')
        }
        
     };

    const previousPage = () => {
        if (pagina > 1) {
            setPagina(prevPagina => prevPagina - 1);
        }else {
            navigate('/') 
      }
        
    };
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
            .then(response => response.json())
            .then(data => setCharacters(data.results));
        
            
    }, [pagina]);

    return (
       <>
        <div className="titulo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="si" width='40%'></img>
        </div>
        
        <div className="contenedor">
            
            {characters.map((character, id) => (
                <div key={id}>
                    
                   <div className="card">
                   <img src={character.image} alt="up"></img>
                
                   <div className="info">
                   <h3>{character.name}</h3>
                   <h6> Numero: {character.id} </h6>
                   <h6> Genero: {character.gender}</h6>
                   <h6> Especie: {character.species}</h6>
                   <h6> Ubicación: {character.location.name}</h6>
                   </div>
                   
                   </div>
                    
                </div>
            ))}
        </div>

        <div className="botones">
        <button onClick={previousPage}>Back</button>
        <button onClick={nextPage}>Next</button>
        </div>
        
        </>
        
    );
}

export default Productos;