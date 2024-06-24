import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Hello",
  description: "Everyone",
};
import React from "react";
import Provider from "@components/Provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
