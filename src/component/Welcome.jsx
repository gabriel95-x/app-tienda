import '../style/firstStyle.css'


const Welcome = ({ texto }) => {
  return (
    <div className="divContainer">
      <div className="minimalCard">
        <h2>{texto}</h2>

      </div>
    </div>
  );
};

export default Welcome;
