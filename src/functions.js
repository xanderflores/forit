/* import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; */
//Funciones 
export function agregarUsuario(usuarios,setUsuarios,nuevoUsuario) {
    const id= usuarios.length > 0 ? usuarios[usuarios.length-1].id + 1:1;
    nuevoUsuario.id=id;
    setUsuarios([...usuarios,nuevoUsuario]);
}
/* export function show_alerta(mensaje, icono,foco) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    });
    
} */
//Funcion Interna

function onfocus(foco) {
    if(foco !==''){
        document.getElementById(foco).focus();
    }
}
