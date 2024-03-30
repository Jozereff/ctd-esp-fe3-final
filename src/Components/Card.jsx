const Card = ( {item: {name, username,id}} ) => {

  const addFav = ()=>{
    
    let favs = JSON.parse(localStorage.getItem("fav"))
    if (!favs ) {
    favs =[];
    }
    const siExiste = favs.filter(fav => fav.id==id) 
    if (siExiste.length>0){
      return
    }
    favs.push({name, username, id})
    localStorage.setItem("fav", JSON.stringify(favs) )
    alert("Dentist added successfully")
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./../../public/images/doctor.jpg" alt="" width={"100"} />
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <a href={`/detail/${id}`}>{name}</a>
        <p>{username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐️</button>
    </div>
  );
};

export default Card;
