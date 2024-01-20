import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import { Link } from "react-router-dom"; 
import Header from "header/Header";

const Main = ({ }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productlist, setProductlist] = useState([]);
  const pageSize = 5;

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (value, record) => {
        return (
          <Link to={`/action/${record.id}`}>
            <div style={{ display: "flex", gap: "1em" }}>
              <span>{value}</span>
            </div>
          </Link>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (value, record) => {
        return (
          <Link to={`/action/${record.id}`}>
            <div style={{ display: "flex", gap: "1em" }}>
              <span>{value}</span>
            </div>
          </Link>
        );
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (value, record) => {
        return (
          <Link to={`/action/${record.id}`}>
            <div style={{ display: "flex", gap: "1em" }}>
              <span>{value}</span>
            </div>
          </Link>
        );
      },
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://bxogqjcxj3.execute-api.us-east-1.amazonaws.com/dev/?id=0"
      );
      const data = await response.json();
      console.log("get----------->", data);
      setProductlist(data.body.reverse());
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleRows = productlist.slice(startIndex, endIndex);

  return (
    <>
      <Header getData={getData} />
      <Card className="m-2 min-h-96">
        <Table
          columns={columns}
          dataSource={visibleRows}
          rowKey={(record) => record[0]}
          pagination={{
            total: productlist.length,
            pageSize: pageSize,
            current: currentPage,
            onChange: handlePageChange,
          }}
        />
      </Card>
    </>
  );
};

export default Main;
