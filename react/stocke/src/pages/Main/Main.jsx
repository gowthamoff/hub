import { React, useEffect, useState } from "react";
import { Card, Table } from "antd";
import Header from "./Header";
import mainColumn from "../../utils/column";
import apiAction from "./apiAction"
import { useSelector } from "react-redux";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productlist, setProductlist] = useState([]);
  const pageSize = 5;

  let currentUserState = useSelector(state => state.userDetail);
  let userType = currentUserState?.userType;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getData = async () => {
    apiAction.getAllProducts(userType.userid).then(({ data, status }) => {
      console.log('=====data fetch', status, data)
      if (status == 200)
        setProductlist(data.body.reverse())
    })
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
          columns={mainColumn}
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
