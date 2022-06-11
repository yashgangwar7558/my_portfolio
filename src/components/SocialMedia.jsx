import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/yashgangwar7558" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/yashgangwar7558" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yash-gangwar-6bab161b5/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
