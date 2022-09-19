import '../styles-sheets/boton.css';

const Boton = ( {text, esBotonClick, manejarClick} ) => {

	return(
		<button 
			className={ esBotonClick ? 'boton-click' : 'boton-reiniciar'} 
			onClick={manejarClick}>
				{text}
		</button>
	);
};

export default Boton;