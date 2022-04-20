import Tiles from "./Tiles"

const TilesRow = ({ rowList }) => {

   return( 
      <>
      { rowList.map( (producto, i) =>{
         return (
            <Tiles producto = { producto } key = {i}/>
            ) }
         )}
      </>
      
   )
}     

export default TilesRow