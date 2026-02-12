/* ============================================================================
   FILE: main.jsx
   RESPONSIBILITY:
     Entry point for React application. Initializes and renders the root App component.
     Mounts the React application to the DOM element with id 'root'.
     Wraps application in StrictMode for development warnings and checks.
   ============================================================================ */

// Import StrictMode component from React for highlighting potential issues
import { StrictMode } from 'react'

// Import createRoot function to mount React app in DOM
import { createRoot } from 'react-dom/client'

// Import main App component (commented out index.css as it's handled differently)
// import './index.css'
import App from './App.jsx'

// Get the root DOM element from index.html and mount React application
createRoot(document.getElementById('root')).render(
  // Wrap App in StrictMode to detect potential issues during development
  <StrictMode>
    {/* Main application component */}
    <App />
  </StrictMode>,
)
