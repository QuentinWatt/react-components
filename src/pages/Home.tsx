import React from "react";
import Button from "@components/shared/Button";
import Alert from "@components/shared/Alert";

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-3 py-6">
      <h1 className="font-bold text-3xl">Home Page</h1>

      <div className="my-3">
        <h2 className="font-bold mb-3 text-xl">Buttons</h2>
        <div className="grid grid-cols-5 gap-3">
          <Button onClick={() => alert("hi")}>Click me!</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      <div className="my-3">
        <h2 className="font-bold mb-3 text-xl">Alerts</h2>
        <div className="grid  grid-cols-5 gap-3">
          <Alert>This is a message</Alert>
          <Alert className="warning">This is a message</Alert>
          <Alert className="danger">This is a message</Alert>
          <Alert className="success">This is a message</Alert>
        </div>
      </div>
    </main>
  );
};

export default Home;
