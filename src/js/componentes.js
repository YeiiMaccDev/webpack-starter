import '../css/componentes.css';
import logo from '../assets/img/logo.png';


export const saludar = ( nombre = 'sin nombre' ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }`;

    document.body.append( h1 );

    
    // Create Img logo
    // const img = document.createElement('img');
    // img.src = logo;
    // document.body.append( img );
}
