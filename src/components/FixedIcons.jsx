import React from "react";
import { FaFacebookMessenger, FaGoogle, FaSms, FaGithub } from "react-icons/fa";

function FixedIcons() {
  return (
    <div className="d-none d-lg-inline fixed-icons position-fixed top-0 start-0 ms-3 secondary-color flex-column d-lg-flex align-items-center justify-content-between">
      <div className="iconsLine"></div>
      <FaFacebookMessenger />
      <FaGoogle />
      <FaSms />
      <FaGithub />
    </div>
  );
}

export default FixedIcons;
