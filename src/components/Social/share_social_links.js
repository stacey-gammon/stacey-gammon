import React from 'react';
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import { FaTwitter, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

const defaultShareProps = {
  button: ShareButtonRectangle,
  buttons: [
    { network: "Twitter", icon: FaTwitter },
    { network: "Facebook", icon: FaFacebook },
    { network: "Email", icon: FaEnvelope },
    { network: "Linkedin", icon: FaLinkedin }
  ],
};

export const ShareToSocialLinks = ({ url, text, longtext }) => <ShareBlockStandard url={url} text={text} longtext={longtext} {...defaultShareProps} />
