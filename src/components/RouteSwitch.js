import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from '../pages/Homepage';
import PostPage from '../pages/PostPage';
import SearchResultPage from '../pages/SearchResultPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Footer from './Footer';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;