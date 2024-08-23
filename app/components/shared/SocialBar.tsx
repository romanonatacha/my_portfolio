import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBar = () => {
  return (
    <ul id='social-sidebar'>
      <li>
        <a href='https://github.com/romanonatacha' target='_blank'>
          <FontAwesomeIcon className='icon' icon={faGithub} />
          <span>Github</span>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/natacha-romano/' target='_blank'>
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a href='https://www.upwork.com/ab/flservices/cl/public/org/1173655290649358337' target='_blank'>
          <FontAwesomeIcon className='icon' icon={faLaptop} />
          <span>Hire me</span>
        </a>
      </li>
      <li>
        <a href='mailto:natacharomanonr@gmail.com' target='_blank'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          <span>Email</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
