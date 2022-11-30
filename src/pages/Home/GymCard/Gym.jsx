import { useNavigate } from "react-router-dom";
import "./Gym.css"
const GymCard = ()=>{
    const navigate = useNavigate()
    let id =3;
    function goToDetails(){
        navigate(`/gymDetails/${id}`)
    }
    return (<>
    
    <div class="card_container">
    <div class="card h-100 gym_card" onClick={goToDetails}>
        <div className="gym_card-icon">

    <img src="https://al-gym.s3.me-south-1.amazonaws.com/Logo%20-%20Vertical%20%2812%29.png" className="gym_card-icon card-img-top " alt="icon" />
        </div>

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  </div>
    </>
    )
}

export default GymCard;