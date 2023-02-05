
const News = (props) => {
const {titulo, cuerpo, imagen} = props;
let hayImg = true
if (imagen === '') { 
  hayImg = false 
}

  return (
    <div className="col-sm-12 d-flex flex-column mb-3 py-2">
      <h3 className="mx-auto " >{titulo}</h3>
      <div className="">
        { hayImg ? <img src={imagen}  className="float-end m-2 img300x200" alt="Distribuidora X" /> : null }
        {cuerpo}
      </div>
      
    </div>
  );
}

export default News;
