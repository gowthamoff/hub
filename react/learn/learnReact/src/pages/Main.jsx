import React, { useState, useEffect } from "react";
import { Card, Table } from "antd";
import productApi from './apiAction';

const Main = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    productApi.getProducts().then(({ status, data }) => {
      console.log("Response status:", status);
      console.log("Response data:", data);
  
      try {
        // Parse the value of the 'body' property into a JavaScript array
        const parsedData = JSON.parse(data.body);
        console.log("Parsed data:", parsedData);
  
        // Update the state with the parsed data
        setProductlist(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }, []);
  
  
  const columns = [
    // {
    //   title: "Product ID",
    //   dataIndex: 0, // Use array index as the dataIndex
    //   key: "id",
    // },
    {
      title: "Product Name",
      dataIndex: 1, // Use array index as the dataIndex
      key: "name",
    },
    {
      title: "Price",
      dataIndex: 2, // Use array index as the dataIndex
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: 3, // Use array index as the dataIndex
      key: "quantity",
    },
  ];
  

  return (
    <>
      <Card style={{ minHeight: "350px" }}>
      <Table columns={columns} dataSource={productlist} rowKey={(record) => record[0]} />

      </Card>
    </>
  );
};

export default Main;
