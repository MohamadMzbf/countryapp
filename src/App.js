import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const API_URI = "https://restcountries.com/v3.1/all";

  const getCountries = async () => {
    const { data } = await axios.get(API_URI);
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    window.addEventListener("load", getCountries);
  }, []);

  return (
    <>
      <div className=" mx-auto bg-cyan-950  p-6 ">
        <p className="text-1xl text-left text-gray-50 font-bold">
          Welcome to the Country APP
        </p>
      </div>

      {countries ? (
        <>
          <div className="container mx-auto w-auto  rounded-xl  border p-8 m-10 justify-center">
            <div className="col-span-full ">
              <div className="m-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  placeholder="Search"
                  autoComplete="street-address"
                  className="block w-3/4 h-14 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center  lg:text-lg lg:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto rounded-xl shadow border p-8 m-10">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {countries.map((country, index) => (
                <div key={index} className="group relative">
                  <div
                    className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-900 lg:aspect-none  lg:h-40 group"
                    onClick={() => {
                      console.log(country.name.common);
                    }}
                  >
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      className=" absolute h-full w-full object-cover object-center group-hover:opacity-50 lg:h-full lg:w-full"
                    />
                    <div
                      className="relative"
                      onClick={() => {
                        console.log("click");
                      }}
                    >
                      <div className="mt-1">
                        <div
                          className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                        >
                          <div className="p-2">
                            <p className="text-lg text-white">
                              County : {country.name.common}
                            </p>
                            <p className="text-lg text-white">
                              Region : {country.region}
                            </p>
                            <p className="text-lg text-white">
                              Capital : {country.capital}
                            </p>
                            <p className="text-lg text-white">
                              Population : {country.population}
                            </p>
                            {/* <button
                              className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                              onClick={() => {
                                console.log(country.name.common);
                              }}
                            >
                              Visit site
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <button
                          className="px-4 py-2 text-sm
                                            text-white bg-gray-900"
                          onClick={() => {
                            console.log("clicked");
                          }}
                        >
                          More +
                        </button>
                      </h3>
                      {/*  <p className="mt-1 text-sm text-gray-500">
                        {country.color}
                      </p> */}
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">
                      {country.price}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
      <div className="sm bg-gray-800">01</div>
      <div className="sm bg-gray-800">09</div>
    </div> */}
          </div>
        </>
      ) : (
        <div>
          <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5">
              No Data Found !
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
