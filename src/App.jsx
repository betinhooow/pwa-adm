import React, { useRef } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ReadStatusBar from "./components/ReadStatusBar";
import Input from "./components/Input";
import { Form } from '@unform/web';

const App = () => {
  const formRef = useRef(null);

  const handleSubmit = () => console.log('ok')
  
  return (
    <div>
      <Header />
      <h1>opa</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="opa" />
      </Form>
      <input type="email" placeholder="Enter email" />
      <Footer />
      <ReadStatusBar />
    </div>
  );
};

export default App;
