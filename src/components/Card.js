import "./catalog.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div class="card-body">
          <img src={props.product.img}></img>
          
        </div>
        <p className="title">{props.product.name}</p>
        <p className="price">{props.product.price}</p>
      </div>
    </>
  );
}

export default Card;
