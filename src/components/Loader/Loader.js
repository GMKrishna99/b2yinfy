import React from "react";
import "./Loader.css"; // Import CSS for the loading spinner
import { SyncLoader } from "react-spinners"; // Import the loading spinner component from react-spinners

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <SyncLoader color="#FF6347" speedMultiplier={0.7} />
    </div>
  );
};

export default LoadingSpinner;
