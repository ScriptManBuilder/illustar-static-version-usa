import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(-8px) rotate(0deg);
  }
  75% {
    transform: translateY(-20px) rotate(-5deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(74, 144, 226, 0.4);
  }
  50% {
    box-shadow: 0 0 60px rgba(74, 144, 226, 0.8);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  
  ${({ $isComplete }) => $isComplete && css`
    animation: ${fadeOut} 0.8s ease-in-out forwards;
    pointer-events: none;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(74, 144, 226, 0.2) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${glow} 3s ease-in-out infinite;
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
`;

export const Logo = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 0.8rem 0;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  background: linear-gradient(45deg, #fff, #e1e8ff, #c3d9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export const Tagline = styled.p`
  font-size: 1.3rem;
  margin: 0 0 3rem 0;
  opacity: 0.9;
  letter-spacing: 1px;
  font-weight: 300;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SpinnerContainer = styled.div`
  position: relative;
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-width: 3px;
  }
`;

export const AnimatedElements = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  pointer-events: none;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const FloatingIcon = styled.div`
  position: absolute;
  font-size: 2rem;
  animation: ${float} 4s ease-in-out infinite;
  opacity: 0.8;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  &:nth-child(1) {
    top: -10px;
    left: -10px;
  }
  
  &:nth-child(2) {
    top: -10px;
    right: -10px;
  }
  
  &:nth-child(3) {
    bottom: -10px;
    left: -10px;
  }
  
  &:nth-child(4) {
    bottom: -10px;
    right: -10px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin: 2rem 0 1.5rem 0;
  
  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22d3ee, #a78bfa, #f59e0b);
  border-radius: 20px;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.1s ease-out;
  position: relative;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const ProgressText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #e1e8ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 1rem 0 0 0;
  max-width: 400px;
  line-height: 1.5;
  animation: ${fadeIn} 0.5s ease-out;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 300px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 250px;
  }
`;