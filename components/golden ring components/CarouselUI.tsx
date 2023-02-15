import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const CarouselUI = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      next={() => {
      }}
      prev={() => {
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <div className="">
      <Image
      alt=""
        src={
          '/images/nature.webp'
        }
        className="w-full h-[50vh]"
        width={1000}
        height={500}
      />
    </div>
  );
}

export default CarouselUI;