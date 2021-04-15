// Styles
import { Wrapper } from './Card.styles';

type Props = {
  logo: string;
  video: string;
};

const Card: React.FC<Props> = ({ logo, video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <Wrapper>
      <div className="border" />
      <img src={logo} alt='logo' />
      <video
        loop
        preload='none'
        muted // Needs to be there to be able to play
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <source src={video} type='video/mp4' />
      </video>
    </Wrapper>
  );
};

export default Card;
