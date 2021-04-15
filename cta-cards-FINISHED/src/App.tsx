// Components
import Card from './Card';
// Styles
import { Wrapper } from './App.styles';
// Images
import logo1 from './img/company1.png';
import logo2 from './img/company2.png';
import logo3 from './img/company3.png';
import logo4 from './img/company4.png';
import logo5 from './img/company5.png';
import logo6 from './img/company6.png';
// Movies
import video1 from './video/video1.mp4';
import video2 from './video/video2.mp4';
import video3 from './video/video3.mp4';
import video4 from './video/video4.mp4';
import video5 from './video/video5.mp4';
import video6 from './video/video6.mp4';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Card logo={logo1} video={video1} />
      <Card logo={logo2} video={video2} />
      <Card logo={logo3} video={video3} />
      <Card logo={logo4} video={video4} />
      <Card logo={logo5} video={video5} />
      <Card logo={logo6} video={video6} />
    </Wrapper>
  );
}

export default App;
