import React from 'react';
import {LuBedSingle,LuBedDouble,LuSofa} from 'react-icons/lu';
import './room.css';

type RoomProps ={
    roomNo:number;
}

const KingRoomWithTwoBeds = () => {
     return (
       <div className="room-container_detail">
            <h2>
                <LuBedDouble />
            </h2>
            <h3>Sypialnia  2</h3>
            <p>1 podwójne łóżko</p>
            <p>1 pojedyncze łóżko</p>
       </div>
     )
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

  const SofaRoomWithTwoSofa = () => {
    return (
      <div className="room-container_detail">
            <h2><LuSofa /></h2>
            <h3>Salon</h3>
            <p>2 wygodne rozkładane kanapy <br/>- dla dwojga</p>
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
        {apartmentNumber===2 || apartmentNumber===4?<><SofaRoom /><KingRoom /></>:apartmentNumber===3?<><KingRoomWithTwoBeds /><SofaRoomWithTwoSofa/></>:<><SofaRoom /><KingRoomWithTwoBeds /></>}
    </div>
  )
}

export default Room