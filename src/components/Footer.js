import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="flex items-center inset-x-0 bottom-0 justify-evenly sm:h-4 p-4 bg-gray-900 sm:p-5">
      <a
        href="https://www.linkedin.com/in/shyam-sunder-muthukrishnan-5553a0146/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-gray-400" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="text-4xl text-gray-400"
        />
      </a>
      <a
        href="https://www.instagram.com/shyam_m_k/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="text-4xl text-gray-400"
        />
      </a>
      <a
        href="https://github.com/sam13007"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithubSquare}
          className="text-4xl text-gray-400"
        />
      </a>
    </div>
  );
}

export default Footer;
