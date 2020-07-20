import React, { useRef } from "react";
import { Form } from "@unform/web";
import Header from "../../layout/Header";
import Input from "../../components/Input";
import Footer from "../../layout/Footer";
import ReadStatusBar from "../../components/ReadStatusBar";
import Table from "../../components/Table";
import Box from "../../components/Box";

const TablePage = () => {
  const formRef = useRef(null);

  const handleSubmit = () => console.log("ok");

  const heads = [
    "Rendering engine",
    "Browser",
    "Platform(s)",
    "Engine version",
    "CSS grade",
  ];

  const rows = [
    ["Trident", "Internet Explorer 4.0", "Win 95+", "4", "X"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", "5", "C"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", "5.5", "A"],
    ["Trident", "Internet Explorer 6", "Win 98+", "6", "A"],
  ];

  return (
    <div>
      <Header />
      {/* <h1>opa</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="opa" />
      </Form>
      <input type="email" placeholder="Enter email" /> */}

        <Box title="Table component">
            
        <Table heads={heads} rows={rows} />
        </Box>
      <Footer />
      <ReadStatusBar />
    </div>
  );
};

export default TablePage;
