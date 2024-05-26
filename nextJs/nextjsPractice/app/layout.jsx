import "@styles/globals.css";

export const metadata = {
  title: "Hello",
  description: "Everyone",
};
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient">
          </div>
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
