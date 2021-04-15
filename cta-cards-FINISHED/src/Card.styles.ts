import styled from 'styled-components';

export const Wrapper = styled.div`
  --border-radius: 0.7rem;
  --transition-time: 0.3s;

  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%);
  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 16px 17px -5px #000000;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);

  :hover {
    transform: scale(1.05);

    .border {
      border: 3px solid rgba(255, 255, 255, 0.7);
    }

    video {
      opacity: 100;
    }
  }

  .border {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #42444f;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-clip: border-box;
    z-index: 10;
    transition: all var(--transition-time);
    pointer-events: none;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }

  video {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
  }
`;
