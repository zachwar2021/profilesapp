import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import './index.css'
import { Authenticator, Heading, View } from "@aws-amplify/ui-react";

const components = {
  Header() {
    return (
      <View textAlign="center" padding="2rem 0 1rem 0">
        <Heading level={1}>Zachary Warren</Heading>
      </View>
    );
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authenticator components={components}>
      <App />
    </Authenticator>
  </StrictMode>
);