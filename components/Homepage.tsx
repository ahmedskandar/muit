import Image from "next/image";
import PricingCard from "./PricingCard";

function Homepage() {
  return (
    <>
      <header className="h-20 bg-white border-b-2 border-black fixed w-full">
        <div
          className="flex py-3 h-full items-center 
         flex-col mx-auto justify-between md:flex-row md:justify-between md:w-4/5"
        >
          <h1 className="font-bold">TITLE</h1>
          <ul className="flex gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="h-[50vh]">
        <Image
          className="w-full bg-no-repeat bg-cover h-full"
          src={"/images/meeting.jpg"}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="text-center mx-auto w-4/5 mt-10">
        <h1 className="font-bold">Our feature</h1>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
          repudiandae rerum maxime labore, sint inventore aliquam ad quas?
          Excepturi et veniam nesciunt sapiente inventore illo perspiciatis
          totam rem qui?
        </p>
      </div>
      <div
        className="mt-10 gap-10 items-center flex flex-col w-full md:flex-row md:w-md
      md:justify-center md:mx-auto
      "
      >
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
      <div
        className="flex flex-col gap-5 w-full p-3 text-center md:flex-row
       md:w-9/12 md:mx-auto justify-between
      "
      >
        <Image
          className="bg-no-repeat h-80 bg-cover"
          src={"/images/meeting.jpg"}
          alt=""
          width={500}
          height={500}
        />
        <div className="">
          <h1>Values</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sunt ipsam corporis maiores cupiditate tempore quos
            cumque magnam. Necessitatibus culpa facilis possimus vel a, nobis
            cumque provident. Quaerat, totam molestias.
          </p>
          <h1>Values</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sunt ipsam corporis maiores cupiditate tempore quos
            cumque magnam. Necessitatibus culpa facilis possimus vel a, nobis
            cumque provident. Quaerat, totam molestias.
          </p>
          <h1>Values</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sunt ipsam corporis maiores cupiditate tempore quos
            cumque magnam. Necessitatibus culpa facilis possimus vel a, nobis
            cumque provident. Quaerat, totam molestias.
          </p>
        </div>
      </div>
    </>
  );
}
export default Homepage;
