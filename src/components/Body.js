/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Body() {
  return (
    <form className="  p-6">
      <div className="text-center">
        <h1 className=" text-slate-100 font-bold text-xl ">
          Shyamsunder Muthukrishnan
        </h1>
        <p className="= text-orange-400">Blockchain developer</p>
      </div>

      <div className="flex mt-6 justify-evenly space-x-10 ">
        <button className="h-10 px-8 font-semibold rounded-md bg-white text-black">
          <div className="flex items-center ">
            <MailIcon className="h-6 pr-3" /> Email
          </div>
        </button>

        <button className="h-10 px-8 font-semibold rounded-md bg-blue-700 text-white">
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 pr-3" />
            Linkedin
          </div>
        </button>
      </div>

      <div className="mt-10 text-gray-300">
        <h1 className="font-bold text-xl pb-4">About</h1>
        <p>
          I am Blockchain developer with a particular interest in developing
          DApps in Matic and Etheruem.I try to keep up with security and best
          practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="mt-10 text-gray-300">
        <h1 className="font-bold text-xl pb-4">Interests</h1>
        <p>
          Comic book reader,Movie buff,Music,Pop culture ninja,Food
          Expert,Internet fanatic
        </p>
      </div>
    </form>
  );
}

export default Body;
