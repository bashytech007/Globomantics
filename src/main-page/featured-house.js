import House from "../house";

export const FeaturedHouse = ({house}) => {
    if(house)
    return (
        <div>
            <div className="row feaaturedHouse">
            <h3 className="col-md-12 text">FeaturedHouse</h3>
            </div>
            <House house={house}/>
        </div>
      );
      return <div>No featured House at this time</div>
}
 
export default FeaturedHouse;