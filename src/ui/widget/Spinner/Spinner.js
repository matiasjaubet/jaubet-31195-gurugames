import './spinner.css';

const Spinner = ({mensaje}) => {
  return (
    <>
      <div className="lds-ripple"><div></div><div></div></div>
      <small className="mensaje">{mensaje}</small>
    </>
  )
}

export default Spinner