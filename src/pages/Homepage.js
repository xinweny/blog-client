import React from 'react';

import LandingBanner from '../components/LandingBanner';
import TopStories from '../components/TopStories';
import PostsOverview from '../components/PostsOverview';

function Homepage() {
  return (
    <main>
      <LandingBanner />
      <TopStories />
      <PostsOverview />
    </main>
  );
}

export default Homepage;