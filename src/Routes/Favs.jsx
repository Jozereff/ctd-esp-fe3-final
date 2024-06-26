import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favs = JSON.parse(localStorage.getItem("fav"))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      
        {favs && favs.map((item) => <Card key={item.id} item={item}/>)}
      
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
