import React, {useState ,useEffect} from 'react';

const SearcComponents = () =>{
    // Setear los hooks useState
    const [users,setUsers] = useState([]);
    const [search, setSearch] = useState("")
    // Funcion para traer los datos de la API
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    const sendData = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }

    //Metodo de filtrado 
    let result = []
    if(!search){
        result = users
    }else{
        result = users.filter((item)=> item.name.toLowerCase().includes(search.toLocaleLowerCase()) )
        result = users.filter((item)=> item.username.toLowerCase().includes(search.toLocaleLowerCase()) )
        result = users.filter((item)=> item.email.toLowerCase().includes(search.toLocaleLowerCase()) )
    }


    //Función de busquedad
    const busquedad = (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    
    useEffect(()=>{
        sendData()
    },[])
    //Renderizamos la vista


    return(
        <>
        <div className='container'>
            <input value={search} onChange={busquedad} type="text" placeholder='Search' className="form-control"/>
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-header text-white'>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((user,index)=>( 
                        <tr key={index}>
                            <td> {user.name} </td>
                            <td> {user.username} </td>
                            <td> {user.email} </td>

                        </tr>
                    ))}
                </tbody>

            </table>
            </div>
        </>
    )
}
export default SearcComponents;