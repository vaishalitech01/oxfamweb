import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const [apk, setApk] = useState(null);

  // API se latest APK link fetch karna
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/apk`)
      .then(res => res.json())
      .then(data => setApk(data))
      .catch(err => console.error("Error fetching APK:", err));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 mt-7 gap-4">
        {/* Left Section */}
        <div className="shadow-xl rounded p-3">
          <p className="font-semibold text-2xl text-center">
            Oxfam Trading Ltd. – Company Profile
          </p>
          <p className="mt-2 text-justify pt-2 flex-wrap">
            Oxfam Trading Ltd. is a dynamic investment and trading company committed to delivering strategic financial growth through diversified trading platforms and smart investment solutions. We provide investors with access to high-potential markets, offering flexible investment plans where returns (ROI) are directly aligned with the scale and duration of investment.
          </p>
          <p className="mt-2 text-justify">
            At Oxfam, our core mission is to maximize value for our clients through transparent operations, data-driven strategies, and risk-managed portfolios. Whether you're a seasoned investor or just starting, Oxfam offers tailored opportunities designed to grow your capital securely and sustainably.
          </p>
        </div>

        {/* Right Section (APK Downloader) */}
        <div>
          <div className="shadow-xl rounded p-3 border border-gray-300">
            <p className="font-semibold text-4xl text-center">Free Downloader</p>
            <p className="pt-3 text-center text-xl">
              Get access in 30 seconds. Completely free.*
            </p>

            <div className="flex flex-wrap gap-2 md:gap-12 mt-4">
              <button
                onClick={() => window.open(apk?.link, "_blank")}
                disabled={!apk}
                className="bg-green-600 p-3 md:px-10 px-3 rounded text-white m-2 font-semibold flex gap-3 items-center text-xl disabled:bg-gray-400"
              >
                {apk ? `Download v${apk.version}` : "Loading..."} <FaArrowRight />
              </button>

              <button
                onClick={() => window.open(apk?.link, "_blank")}
                disabled={!apk}
                className="border rounded p-3 px-5 md:px-15 font-semibold disabled:opacity-50"
              >
                APK
              </button>
            </div>

            <p className="p-3 text-gray-700 text-sm">
              *Subject to our Terms of Service. Use of Oxfam’s offerings at an
              organization of more than 200 employees/contractors requires a
              paid business license unless your organization is eligible for
              discounted or free use.
            </p>
            <p className="text-center m-3">Skip registration</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5">
        <p className="text-5xl font-medium text-center">
          Manage Trusted Packages and <br /> Environments with Ease
        </p>
        <p className="text-xl text-center pt-3">
          Spend more time developing and less time managing package updates and dependencies
        </p>
      </div>

      {/* Video Section */}
      <div className="grid md:grid-cols-3 gap-4 mt-3 p-2">
        {/* Video 1 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded '>
    <iframe
         className='w-full h-100'
      src="https://www.youtube.com/embed/xiPmPXxbeqU"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'>How to make money.</p>
  </div>

  {/* Video 2 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded '>
    <iframe
     className='w-full h-100'
      src="https://www.youtube.com/embed/V87ZGyRv0JM"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'>how to withdraw</p>
  </div>

  {/* Video 3 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded'>
    <iframe
          className='w-full h-100'
      src="https://www.youtube.com/embed/mFPr08ECTSE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'> Binance Verification</p>
  </div>
  {/* Video 4 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded'>
    <iframe
          className='w-full h-100'
      src="https://www.youtube.com/embed/Dxh9V075-U4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'>Choose your Investment plan</p>
  </div>
  {/* Video 5 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded'>
    <iframe
          className='w-full h-100'
      src="https://www.youtube.com/embed/UP_yiWhE7_s"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'> spin</p>
  </div>
   {/* Video 6 */}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded'>
    <iframe
          className='w-full h-100'
      src="https://www.youtube.com/embed/PmdvAeC4bJ4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <p className='text-center font-semibold text-xl'> Sign up</p>
  </div>
   {/* Video 7*/}
  <div className='shadow-xl shadow-gray-200 border border-gray-300 p-2 rounded'>
   <iframe
   className='w-full h-100'
  src="https://www.youtube.com/embed/CRVP7pGfjfw"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
    <p className='text-center font-semibold text-xl'>login</p>
  </div>
      </div>
    </div>
  );
};

export default Home;
