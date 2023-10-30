import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import'../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
       <div className='socialMedia'>
            <InstagramIcon /><TwitterIcon /><EmailIcon />
            
        </div>
        <p>&copy;2023 priyapiyuse@gmail.com</p>
    </div>
  )
}

export default Footer
