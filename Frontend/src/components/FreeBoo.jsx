import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards.jsx';
const FreeBoo = () => {
    const filterData=list.filter((data)=>data.category==="Free")
    // console.log(filterData)
    var settings={
        dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    }
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-4xl'>Free Book</h1>
    <p className='text-md font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur perspiciatis nulla neque corporis harum illum sapiente architecto aspernatur rerum?</p>
    </div>
    
    <div className='font-xl max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <Slider {...settings}>
  {filterData?.map((item) => (
    item?.id ? <Cards item={item} key={item.id} /> : null
  ))}
</Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBoo