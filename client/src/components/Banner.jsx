const Banner = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-around items-center">
        <div className="border-1 h-80 w-[10%]">
          <img src="#" alt="Google AdSense" />
        </div>
        <div className="bg-gray-200 w-[70%] h-80 mt-3 mb-3 pl-20 flex flex-col justify-center gap-4">
          <div className="">
            <h1 className="text-6xl">Welcome to Campfinder ! </h1>
          </div>
          <div className="text-gray-900">
            <p>
              Discover stunning campsites across the globe. From serene forests
              to breathtaking beaches, find your perfect outdoor escape with us!
            </p>
          </div>
          <div className="">
            <button className="bg-blue-600 pl-5 pr-5 pt-2 pb-2 rounded-2xl text-white hover:bg-black transition-all cursor-pointer" id="addCampground">
              Add CampGround
            </button>
          </div>
        </div>
        <div className="border-1 h-80 w-[10%]">
          <img src="#" alt="Google AdSense" />
        </div>
      </div>
    </>
  );
};

export default Banner;
