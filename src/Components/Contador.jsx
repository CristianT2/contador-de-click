import '../styles-sheets/contador.css';

const Contador = ({numclics}) => {

  return (
    <div className="contador">
	  {numclics}
	</div>
  );
};

export default Contador;