import Link from "next/link"
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const buttons = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/MadScientistt4'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/aditya-mathur-514162167'
  },
  {
    icon: <SiLeetcode />,
    path: 'https://leetcode.com/u/MadScientistt'
  },
  // {
  //   icon: <FaEnvelope />,
  //   path: 'mailto:Aditya.c4@gmail.com'
  // }
  // {
  //     icon: <FaInstagram />,
  //     path: '/'
  // },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {
        buttons.map((item, idx) => {
          return <Link
            href={item.path}
            key={idx}
            className={iconStyles}
            target='_blank'
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        })
      }
    </div>
  )
}

export default Socials