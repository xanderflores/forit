import React,{useEffect,useState} from 'react'



const FilterUser = ({usuarios, searchTerm, setSearchTerm, setFilteredUsuarios}) => {
    const [globalFilter, setGlobalFilter]= useState(searchTerm);

    useEffect(() => {
        const usuariosFiltrados = usuarios.filter((usuario) =>
          usuario.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
          usuario.email.toLowerCase().includes(globalFilter.toLowerCase()) ||
          usuario.address.city.toLowerCase().includes(globalFilter.toLowerCase())
        );
        setFilteredUsuarios(usuariosFiltrados);
    }, [globalFilter, usuarios, setFilteredUsuarios]);
    
    console.log(globalFilter);
  return (
    <div className='p-1 my-2 text-right'>
      <input 
        type='text'
        value={globalFilter}
        onChange={e=> setGlobalFilter(e.target.value)}
        className='text-gray-600 border border-gray-300 rounbed outline-indigo-700'
        placeholder='Buscar ...'
      />
    </div>
  )
}

export default FilterUser
