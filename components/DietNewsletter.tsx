
function DietNewsletter() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div
          className="flex flex-col w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 pt-2 p-2 rounded-2xl 
          bg-gray-500
        md:flex-row
        "
        >
          <div>
            <img
              className="w-full rounded-l-xl h-60"
              src="https://imgs.search.brave.com/QO-PGIJoVCRbjXTNZSLKzw-KpNs1Ec8qE8Mp_5Hq3dE/rs:fit:366:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/MUFpdHFaSWRad3h2/VzdvczRNc1F3SGFK/bCZwaWQ9QXBp"
              alt=""
            />
          </div>
          <div className="px-5 md:px-0 md:w-full md:flex md:flex-col md:justify-center md:items-center">
            <h3 className="font-bold mt-5 text-center">
              Get diet and fitness tips in your inbox
            </h3>
            <p className="mt-3 text-center italic">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter
            </p>
            <div className="flex flex-col my-3 gap-3 md:flex-row">
              <input
                className="w-full rounded-md bg-transparent text-center border p-2"
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <button className="w-full text-center bg-yellow-500 p-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DietNewsletter