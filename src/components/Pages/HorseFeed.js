import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from './Form';
import HorsesInFeed from './HorsesInFeed';

const HorseFeed = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('token');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken, navigate])

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const useMediaQuery = (width) => {
    const [pixelWidthReached, setPixelWidthReached] = useState(false);

    const updateWidth = useCallback((event) => {
      if (event.matches) {
        setPixelWidthReached(true);
      } else {
        setPixelWidthReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener('change', updateWidth);
      if (media.matches) {
        setPixelWidthReached(true);
      }
      return () => media.removeEventListener('change', updateWidth);
    }, [updateWidth, width]);

    return pixelWidthReached;
  };

  const mobileView = useMediaQuery(668);
  const tabletView = useMediaQuery(1024);

  return (
    <SectionAroundFeed>
      {mobileView && (
        <FeedSection>
          <ButtonContainer>
            <button type="button" onClick={toggle}>
              <p>add new horse</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
          </ButtonContainer>
          <HorsesInFeed />
        </FeedSection>
      )}
      {tabletView && (
        <FeedSection>
          <div>
            <ButtonContainer>
              <button type="button" onClick={toggle}>
                <p>add new horse</p>
              </button>
              {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            </ButtonContainer>
            <HorsesInFeed />
          </div>
        </FeedSection>
      )}
      {!mobileView && !tabletView && (
        <FeedSection>
          <div>
            <ButtonContainer>
              <button type="button" onClick={toggle}>
                <p>add new horse</p>
              </button>
              {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            </ButtonContainer>
            <HorsesInFeed />
          </div>
        </FeedSection>
      )}
    </SectionAroundFeed>
  );
};

export default HorseFeed;

const SectionAroundFeed = styled.div`
`;

const FeedSection = styled.div`
`;

const ButtonContainer = styled.div`
`;
