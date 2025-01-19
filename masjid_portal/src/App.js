import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrayerTimes from "./components/PrayerTimes";

const App = () => {
  const [user, setUser] = useState(null); // User state includes mosqueId after login

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/portal" element={<Login setUser={setUser} />} />

        {/* PrayerTimes route */}
        {user && (
          <Route path="/prayer-times" element={<PrayerTimes user={user} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
