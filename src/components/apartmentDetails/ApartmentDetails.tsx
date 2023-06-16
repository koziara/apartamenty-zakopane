import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import list from '../../apartmentList.json';
import { BookingButton, Navbar } from '../../elements';
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
  const product = list.find((item: Item) => item.apartmentId === apartmentId);
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



  if (!product) {
    return <div>
      <Navbar />
      Loading... {id}
    </div>;
  }
  else {
    const images = [
      {
        original: product.photo,
        thumbnail: product.photo,
        originalTitle: product.title,
      },
      {
        original: product.photo2,
        thumbnail: product.photo2,
      },
      {
        original: product.photo3,
        thumbnail: product.photo3,
      },
      {
        original: product.photo4,
        thumbnail: product.photo4,
      },
      {
        original: product.photo5,
        thumbnail: product.photo5,
      },
      {
        original: product.photo6,
        thumbnail: product.photo6,
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
                showFullscreenButton={false}
                showPlayButton={false}
                {...(isWideScreen>1200
                  ? { thumbnailPosition: 'right' }
                  : { showThumbnails: false })
                }
              />
            </div>
            <div className='details-container_content-info'>
              <h2>{product.title}</h2>
              <ul className='info-list'>
                <li>{product.capacity} Gości</li>
                <li>{product.size} Powierzchnia</li>
                <li>{product.noOfRooms} Sypialnie</li>
                <li> Łóżka</li>
                <li>1 Łazienka</li>
                <li>Bezpłatny parking na miejscu</li>
              </ul>
              <h4>{product.price} zł <span>/ noc</span></h4>
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
            <p>{product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quasi delectus, a illo, provident commodi sapiente dolore soluta voluptate reprehenderit ea voluptatibus blanditiis ut aliquam quae natus ab distinctio. Beatae.</p>
          </div>
          <div className="details-section_items">
            <div className="details-section_items-rooms">
              <h4>Gdzie możesz spać?</h4>
              {product.noOfRooms === 2 ? <p>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur sit nemo porro perspiciatis eveniet quia, excepturi ullam? Eveniet beatae nisi odio minima deleniti facere veritatis! Architecto inventore consequatur quas.</p> : <p>1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est labore assumenda maxime eius non laboriosam pariatur beatae architecto magni, nesciunt corrupti dolorum minus ad nobis optio amet adipisci officia.</p>}
            </div>
            <div className="details-section_items-accessories">
              <h4>Co znajdziesz?</h4>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel itaque qui reprehenderit soluta numquam animi odio quo perspiciatis optio reiciendis. Voluptates dicta vel cum, rerum corrupti delectus reprehenderit quas aut.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ApartmentDetails