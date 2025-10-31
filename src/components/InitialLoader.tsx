import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText,
  AnimatedElements,
  FloatingIcon,
  GlowEffect
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 20) return 'Initializing illustration courses platform...';
    if (progress < 40) return 'Loading creative assets and resources...';
    if (progress < 60) return 'Preparing your art learning environment...';
    if (progress < 80) return 'Setting up interactive drawing tools...';
    if (progress < 95) return 'Almost ready for your creative journey...';
    return 'Welcome to your illustration courses!';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <GlowEffect />
      <LoaderContent>
        <Logo>ILLUSTRATION COURSES</Logo>
        <Tagline>Master Digital Art & Design</Tagline>
        
        <SpinnerContainer>
          <Spinner />
          <AnimatedElements>
            <FloatingIcon style={{ animationDelay: '0s' }}>🎨</FloatingIcon>
            <FloatingIcon style={{ animationDelay: '1s' }}>✏️</FloatingIcon>
            <FloatingIcon style={{ animationDelay: '2s' }}>🖌️</FloatingIcon>
            <FloatingIcon style={{ animationDelay: '3s' }}>🎭</FloatingIcon>
          </AnimatedElements>
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;