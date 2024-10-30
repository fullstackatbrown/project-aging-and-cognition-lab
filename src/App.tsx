import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/join">Join</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/research">Research</a>
          </li>
        </ul>
      </nav>
    );
  }

  // Lazy load your components
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const JoinPage = lazy(() => import("./pages/join/JoinPage"));
  const MembersPage = lazy(() => import("./pages/members/MembersPage"));
  const NewsPage = lazy(() => import("./pages/news/NewsPage"));
  const ResearchPage = lazy(() => import("./pages/research/ResearchPage"));
  // const NotFound = lazy(() => import('./NotFound')); // Import NotFound page if we implement one

  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            {/* <Route path="*" element={<NotFound />} /> Fallback route */}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
