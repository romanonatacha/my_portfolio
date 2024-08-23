import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';

type CardProps = {
  image: string;
  title: string;
  link?: string;
  description: string;
  badges?: string[] | undefined;
  git?: string;
};

const Card = ({ image, title, link, description, badges, git }: CardProps) => {
  return (
    <div className='portfolio-card padding16'>
      <div className='padding16 radius8 card'>
        {image && (
          <a href={link} target='_blank'>
            <div className='portfolio-card-img'>
              <img src={image} alt={title} />
            </div>
          </a>
        )}
        <div className='portfolio-card-text bottom16'>
          {title && <h4 className='font-sm bold uppercase'>{title}</h4>}
          {description && <p className='font-xs'>{description}</p>}
        </div>
        <div className='font-xs flex_row_btw portfolio-card-footer'>
          <div>
            {badges &&
              badges.map((item, i) => (
                <div key={i} className='inline-block'>
                  <Badge className='mr-1 self_center badge padding4'>{item}</Badge>
                </div>
              ))}
          </div>
          {git && (
            <div>
              <a href={git} target='_blank'>
                <FontAwesomeIcon className='font-sm git' icon={faGithub} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
