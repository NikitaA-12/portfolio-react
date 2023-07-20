import './style.css';
import gitHubIcon from './gitHub-black.svg';

import React from 'react';

export const BtnGitHub = ({ link }) => {
  return (
    <a href={link} className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};
