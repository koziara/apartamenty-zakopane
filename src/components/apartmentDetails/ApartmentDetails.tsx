import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import list from '../../lists/apartmentList.json';
import accessoryList from '../../lists/accessoryList.json';
import { Accessories, BookingButton, Navbar, Room } from '../../elements';
import { Footer } from '../index.js';
import ScrollToTop from '../../ScrollToTop';
import './apartmentDetails.css';

type Item = {
  apartmentId: number;
  photo: string;
  title: string;
  capacity: string;
  size: string;
  noOfRooms: number;
  price: number;
  description: string;
};



const ApartmentDetails = () => {

  const { id } = useParams<{ id: string }>();
  const apartmentId = id ? parseInt(id, 10) : null;
  const apartment = list.find((item: Item) => item.apartmentId === apartmentId);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setIsWideScreen(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  if (!apartment) {
    return <div>
      <Navbar />
      Loading... {id}
    </div>;
  }
  else {
    const images = [
      {
        original: apartment.photo,
        thumbnail: apartment.photo,
        originalTitle: apartment.title,
      },
      {
        original: apartment.photo2,
        thumbnail: apartment.photo2,
      },
      {
        original: apartment.photo3,
        thumbnail: apartment.photo3,
      },
      {
        original: apartment.photo4,
        thumbnail: apartment.photo4,
      },
      {
        original: apartment.photo5,
        thumbnail: apartment.photo5,
      },
      {
        original: apartment.photo6,
        thumbnail: apartment.photo6,
      },
      {
        original: apartment.photo7,
        thumbnail: apartment.photo7,
      }
    ];
    return (

      <div>
        <div className='details-container'>
          <Navbar />
          <ScrollToTop />
          <div className="details-container_content">
            <div className='details-container_content-photos'>
              <ImageGallery
                items={images}
                showPlayButton={false}
                {...(isWideScreen>1200
                  ? { thumbnailPosition: 'right' }
                  : { showThumbnails: false })
                }
              />
            </div>
            <div className='details-container_content-info'>
              <h2>{apartment.title}</h2>
              <ul className='info-list'>
                <li>Maksymalna liczba gości: {apartment.capacity}</li>
                <li>Powierzchnia: {apartment.size} </li>
                <li>Liczba pokoi: {apartment.noOfRooms}</li>
                <li>Prywatna łazienka</li>
                <li>Bezpłatny parking na miejscu</li>
                {apartment.balcony?<li>Balkon</li>:null}
              </ul>
              <h4>{apartment.price} zł <span>/ noc</span></h4>
              <div className='booking-btn'>
                <BookingButton />
              </div>
            </div>
          </div>
          <div className='booking-btn_outside'>
                <BookingButton />
              </div>
        </div>
        <div className='details-section'>
          <div className="details-section_description">
            <h2>Opis</h2>
            <p>{apartment.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quasi delectus, a illo, provident commodi sapiente dolore soluta voluptate reprehenderit ea voluptatibus blanditiis ut aliquam quae natus ab distinctio. Beatae.</p>
          </div>
          <div className="details-section_items">
            <div className="details-section_items-rooms">
              <h4>Gdzie możesz spać?</h4>
              <Room roomNo={apartment.apartmentId}/>
            </div>
            <div className="details-section_items-accessories">
              <h4>Co znajdziesz?</h4>
              <div>
                {accessoryList.map(accessory => (
                  <Accessories key={accessory.accessoryId} imagePath={accessory.imagePath} title={accessory.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer visible={true}/>
      </div>
    )
  }
}

export default ApartmentDetails