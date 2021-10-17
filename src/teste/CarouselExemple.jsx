import React from "react";
import { Carousel, Nav, Button } from "react-bootstrap";

export default function CarouselExemplo() {
  return (
    <>
      <h1>Carousel React-Bootstrap</h1>
      <Nav.Link href='/'>
        <Button variant='primary'>Home</Button>
      </Nav.Link>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.teahub.io/photos/full/2-29565_nature-wallpaper-hd-for-tablet-photography-of-download.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.teahub.io/photos/full/366-3666848_back-ground-image-nature.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.iecrs.com/wp-content/uploads/2017/06/bcf39e88-5731-43bb-9d4b-e5b3b2b1fdf2-1200x600.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
