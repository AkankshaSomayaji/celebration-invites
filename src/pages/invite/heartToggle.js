import React from 'react';
import styled from 'styled-components';

const HeartToggle = ({ onToggle }) => {
  return (
    <StyledWrapper>
      <div className="love">
        <input id="switch" type="checkbox" onChange={onToggle}/>
        <label className="love-heart" htmlFor="switch">
          <i className="left" />
          <i className="right" />
          <i className="bottom" />
          <div className="round" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .love-heart:before,#switch {
   display: none;
  }

  .love-heart, .love-heart::after {
   border-color: hsl(231deg 28% 86%);
   border: 1px solid;
   border-top-left-radius: 100px;
   border-top-right-radius: 100px;
   width: 10px;
   height: 8px;
   border-bottom: 0;
  }

  .round {
   position: absolute;
   z-index: 1;
   width: 8px;
   height: 8px;
   background: hsl(0deg 0% 100%);
   box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
   border-radius: 100%;
   left: 0px;
   bottom: -1px;
   transition: all .5s ease;
   animation: check-animation2 .5s forwards;
  }

  input:checked + label .round {
   transform: translate(0px, 0px);
   animation: check-animation .5s forwards;
   background-color: hsl(0deg 0% 100%);
  }

  @keyframes check-animation {
   0% {
    transform: translate(0px, 0px);
   }

   50% {
    transform: translate(0px, 7px);
   }

   100% {
    transform: translate(7px, 7px);
   }
  }

  @keyframes check-animation2 {
   0% {
    transform: translate(7px, 7px);
   }

   50% {
    transform: translate(0px, 7px);
   }

   100% {
    transform: translate(0px, 0px);
   }
  }

  .love-heart {
   box-sizing: border-box;
   position: relative;
   transform: rotate(-45deg) translate(-50%, -33px) scale(4);
   display: block;
   border-color: hsl(231deg 28% 86%);
   cursor: pointer;
   top: 0;
  }

  input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
   border-color: hsl(347deg 81% 61%);
   box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);
  }

  .love-heart::after, .love-heart .bottom {
   content: "";
   display: block;
   box-sizing: border-box;
   position: absolute;
   border-color: hsl(231deg 28% 86%);
  }

  .love-heart::after {
   right: -9px;
   transform: rotate(90deg);
   top: 7px;
  }

  .love-heart .bottom {
   width: 11px;
   height: 11px;
   border-left: 1px solid;
   border-bottom: 1px solid;
   border-color: hsl(231deg 28% 86%);
   left: -1px;
   top: 5px;
   border-radius: 0px 0px 0px 5px;
  }

  @media (max-width: 600px) {
    .love-heart, .love-heart::after {
      width: 8px;
      height: 6.4px;
      border-top-left-radius: 80px;
      border-top-right-radius: 80px;
    }

    .round {
      width: 6.4px;
      height: 6.4px;
      left: 0px;
      bottom: -0.8px;
    }

  @keyframes check-animation {
    0% {
     transform: translate(0px, 0px);
    }
 
    50% {
     transform: translate(0px, 5.6px);
    }
 
    100% {
     transform: translate(5.6px, 5.6px);
    }
   }
 
   @keyframes check-animation2 {
    0% {
     transform: translate(5.6px, 5.6px);
    }
 
    50% {
     transform: translate(0px, 5.6px);
    }
 
    100% {
     transform: translate(0px, 0px);
    }
   }

    .love-heart {
      transform: rotate(-45deg) translate(-50%, -26.4px) scale(3.2);
    }

    input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
      box-shadow: inset 5.4px -4px 0px 0.6px hsl(347deg 99% 72%);
    }

    .love-heart::after {
      right: -7.2px;
      top: 5.6px;
    }

    .love-heart .bottom {
      width: 8.8px;
      height: 8.8px;
      left: -0.8px;
      top: 4px;
      border-radius: 0px 0px 0px 4px;
    }
  }
`;

export default HeartToggle;
