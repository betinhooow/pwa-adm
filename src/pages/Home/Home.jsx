import React, { useRef } from "react";
import { Form } from '@unform/web';
import Header from "../../layout/Header";
import Input from "../../components/Input";
import Footer from "../../layout/Footer";
import ReadStatusBar from "../../components/ReadStatusBar";

const Home = () => {
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

export default Home;
