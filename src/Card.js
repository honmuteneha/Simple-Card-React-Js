function Card(props){
    return(
      <div style={
        {
          boxShadow:"0px 0px 10px black",
          width:"200px",
          padding:"20px"
          }}>
        <img width="200px" src={props.image}></img> 
        <h2>{props.name}</h2>
        <p>Price :--{props.price}</p>
        <button>Buy</button>
      </div>);
}

export default Card;