import React from "react";
import "./pagenav.css";

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li className='flex-grow'>
          <a>Logo Abstract</a> | Help Center
        </li>
        <li>
          <a className='btn btn--request'>Submit a request</a>
        </li>
        <li>
          <a className='btn btn--login'>Sign in</a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
