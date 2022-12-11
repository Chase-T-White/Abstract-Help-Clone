import React from "react";
import "./features.css";
import { RiGitBranchLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { HiPuzzlePiece } from "react-icons/hi2";
import { FaDollarSign } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import { BsFillChatTextFill } from "react-icons/bs";

const Features = () => {
  return (
    <section className='features'>
      <div className='row'>
        <div className='feature'>
          <RiGitBranchLine className='icon' />
          <div className='feature__text'>
            <h5>Branches</h5>
            <p>
              Abstract Branches lets you manage, version, and document your
              designs in one place.
            </p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
        <div className='feature'>
          <MdManageAccounts className='icon' />
          <div className='feature__text'>
            <h5>Manage you account</h5>
            <p>
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='feature'>
          <HiPuzzlePiece className='icon' />
          <div className='feature__text'>
            <h5>Manage organizations, teams, and projects</h5>
            <p>
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
        <div className='feature'>
          <FaDollarSign className='icon' />
          <div className='feature__text'>
            <h5>Manage billing</h5>
            <p>Change subscriptions and payment details.</p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='feature'>
          <ImKey className='icon' />
          <div className='feature__text'>
            <h5>Authenticate to Abstract</h5>
            <p>
              Set up and configure SSO, SCIM, and Just-In-Time provisioning.
            </p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
        <div className='feature'>
          <BsFillChatTextFill className='icon' />
          <div className='feature__text'>
            <h5>Abstract support</h5>
            <p>Get in touch with a human.</p>
            <button className='more-btn'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
