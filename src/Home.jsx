import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/81AJi1Tw+VL._SX3000_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
          price={33.45}
          rating={5}
          image="https://i.ebayimg.com/images/g/SqcAAOSwVNZf~0RJ/s-l500.jpg"
        />
        <Product
          id="12321342"
          title="FLEXISPOT Classic 3 Stages Dual Motor Electric Standing Desk 55x28 in Bamboo Whole-Piece Desk"
          price={559.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61TMqJPod5L._AC_SL1500_.jpg"
        />
        <Product
          id="12321343"
          title="MOTPK Large L-Shaped Gaming Desk, 60 inch Corner Computer Gaming Desk, Writing Studying Table PC Laptop"
          price={259.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71YsIeg1gFL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="MOSISO Compatible with MacBook Pro 14 inch Case 2021 2022 Release A2442 with M1 Pro/M1 Max Chip Touch ID, Plastic Hard Shell Case&Sleeve Bag&Keyboard Skin&Webcam Cover&Screen Protector, Mint Green"
          price={36.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61UpVHsJ-SL._AC_SX679_.jpg"
        />
        <Product
          id="12321352"
          title="Yamaha YDP184 Arius Series Console Digital Piano with Bench, Dark Rosewood"
          price={2399.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81rsXj8s37L._AC_SL1500_.jpg"
        />
        <Product
          id="12321353"
          title="Boiee Art,24x36Inch Modern Hand Painted Wedding Dress Girl's Back Oil Paintings Vertical Abstract Figure Artwork Oil Hand Painting Home Decor Art Wood Inside Framed Ready to Hang for Living room"
          price={68.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71pDdp32I+L._AC_SL1100_.jpg"
        />
        <Product
          id="12321353"
          title="Original Hand-Painted Texture Oil Painting Monochrome Art Calming Achromatic Painting Black And White Oil Painting Acrylic Oil Paining (152X229CM)60X90 inches Unstretched"
          price={718.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71qb4lVIb0L._AC_SX679_.jpg"
        />
        <Product
          id="12321353"
          title="Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - for PC, PS5, PS4, Switch, Black"
          price={119.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ULL1n6mDL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
