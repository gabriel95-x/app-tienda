import '../style/firstStyle.css'


const Loader = () => {
  return (
    <div className="divContainer">
    <div className="minimalCard">
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  </div>
  );
};

export default Loader;
