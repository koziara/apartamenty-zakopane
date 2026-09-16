import { useNavigate } from "react-router-dom";
import {FaArrowCircleLeft} from 'react-icons/fa';
import "./reservation.css"
import { ScrollToTop } from '../../elements';

const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className='reservation-container'>
      <button onClick={() => navigate(-1)} className='back-button'><FaArrowCircleLeft /></button>
       <ScrollToTop />
       <sohis-booking id-place="690" lang="pl" className='reservation-container_content'/>
    </div>
  )
}

export default Reservation