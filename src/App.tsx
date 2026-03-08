import { useEffect, useState } from "react";
import Index from "./pages/Index";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-core">
          <span className="loading-ring" />
          <span className="loading-ring loading-ring-delay" />
          <div className="loading-text">
            <p className="loading-kicker">Initializing portfolio</p>
            <h1>AI systems online</h1>
          </div>
        </div>
      </div>
    );
  }

  return <Index />;
};

export default App;
