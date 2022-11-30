import { useParams } from "react-router-dom";


const GymDetails =()=>{
    let {id} = useParams()
    return(<>
    <h3> to query and get the gym details using the id from the url {id}</h3>
    </>)
}
export default GymDetails;