import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const components = {
  Header() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0 32px' }}>
        <img
          src="/logo.png"
          alt="Thompson & Associates"
          style={{ maxWidth: '480px', width: '100%' }}
        />
      </div>
    );
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={components}>
      <App />
    </Authenticator>
  </React.StrictMode>
);
