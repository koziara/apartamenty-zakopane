import React from 'react';
import {LuBedSingle,LuBedDouble,LuSofa} from 'react-icons/lu';
import './room.css';

type RoomProps ={
    roomNo:number;
}

const KingRoom = () => {
     return (
       <div className="room-container_detail">
            <h2>
                <LuBedDouble />
            </h2>
            <h3>Sypialnia  2</h3>
            <p>1 podwójne łóżko</p>
       </div>
     )
   }

   const SofaRoom = () => {
    return (
      <div className="room-container_detail">
            <h2><LuSofa /></h2>
            <h3>Salon</h3>
            <p>1 wygodna kanapa <br/>- dla dwojga</p>
      </div>
    )
  }

  const SeperateRoom = () => {
    return (
      <div className="room-container_detail">
         <h2>
             <LuBedSingle />
             <LuBedSingle />
         </h2>
         <h3>Sypialnia  2</h3>
         <p>2 pojedyncze łóżka</p>
      </div>
    )
  }

const Room = (props:RoomProps) => {
 const apartmentNumber = props.roomNo;
  return (
    <div className='room-container'>
        {apartmentNumber===8?<><SofaRoom /><SeperateRoom /></>:apartmentNumber===7?<><SofaRoom /></>:<><SofaRoom /><KingRoom /></>}
    </div>
  )
}

export default Room