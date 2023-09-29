import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the use of `Routes` instead of `Switch`
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use <Routes> instead of <Switch> */}
        <Route path="/" element={<App />} /> {/* Define the route path without `exact` */}
        <Route path="*" element={<p>Not found</p>} /> {/* Catch-all route */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
