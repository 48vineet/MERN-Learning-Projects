import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" type='submit'>
        <span className="button-content"> Post It </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    overflow: hidden;
    height: 2.5rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3d3a4e;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }`;

export default Button;
