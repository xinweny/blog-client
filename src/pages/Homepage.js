import React from 'react';

import LandingBanner from '../components/LandingBanner';
import TopStories from '../components/TopStories';
import PostsOverview from '../components/PostsOverview';

import '../styles/Homepage.css';

function Homepage() {
  return (
    <main className="homepage">
      <div className="home-tophalf">
        <LandingBanner />
        <TopStories />
      </div>
      <PostsOverview />
    </main>
  );
}

export default Homepage;