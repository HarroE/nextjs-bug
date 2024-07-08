"use client";

import { useState } from "react";

export const TestButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const redirect = () => {
    setIsLoading(true);
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <button onClick={redirect}>
        {isLoading ? "Loading..." : "External link to google.com"}
      </button>
    </div>
  );
};
