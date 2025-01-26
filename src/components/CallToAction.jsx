import Button from "./Button";

const CallToAction = () => {
    return (
      <div className="bg-black mt-12">
        <div className="bg-gradient-to-r from-[#3258FF] to-purple-500 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0 ">
          <div className="text-white text-center md:text-left">
            <p
              className="text-2xl sm:text-3xl outfit-font font-semibold leading-relaxed"
              style={{ whiteSpace: "pre-line" }}
            >
              It will help you improve your writing <br /> bring ideas more clearly.
            </p>
          </div>
          {/* <button className="bg-white text-black text-base inter-font font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Start 14 Days Free Trial
          </button> */}
             <Button 
        //   onClick={handleButtonClick} 
        variant="secondary"
          size="medium"
          className=" " // Optional extra class customization
        >
          Start 14 Days Free Trial
        </Button>

        </div>
      </div>
    );
  };
  
  export default CallToAction;
  