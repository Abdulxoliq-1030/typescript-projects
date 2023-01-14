import React, { useState } from "react";
import QRCode from "react-qr-code";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        width: "200px",
      }}>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
      <input
        type="text"
        style={{ marginTop: 30 }}
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default App;
