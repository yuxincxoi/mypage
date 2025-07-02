const DotImages = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <img
        className="w-80 bg-contain absolute bg-no-repeat bg-center top-[4%] left-[9%]"
        src="/img/miffy.gif"
        alt=""
      />
      <img
        className="w-80 bg-contain absolute bg-no-repeat bg-center top-[10%] left-[70%]"
        src="/img/test2.gif"
        alt=""
      />
      <img
        className="w-80 bg-contain absolute bg-no-repeat bg-center bottom-[15%] right-[15%]"
        src="/img/cherry.png"
        alt=""
      />
      <img
        className="w-96 bg-contain absolute bg-no-repeat bg-center bottom-[14%] left-[3%]"
        src="/img/test.png"
        alt=""
      />
    </div>
  );
};

export default DotImages;
