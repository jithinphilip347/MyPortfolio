import Link from "next/link"

import {FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/jithinphilip347'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/jithin-philip-026358196/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/i.jithin___/'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100009864248853'},
]


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social