import './catalog.css';
import Card from './Card';
import Menu from './Menu';

function Catalog(props) {
    return (
      <>
      <Menu filters={props.filters}/>
      <div className="container">
          {props.products.map((product)=>{
              return <Card product={product} />
          })}
      </div>
      </>
    );
  }
  
  export default Catalog;