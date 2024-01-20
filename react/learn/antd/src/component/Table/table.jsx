/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Common Module
 *
 *    Usage                  :  Reuseable component
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Table } from "antd";
import './style.scss';

const Tables = ({
  columns,
  dataSource,
  pagination,
  onChange,
  rowKey,
  rowSelection,
  scroll,
  size
}) => {
  return (
      <Table
        size={size}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onChange}
        rowKey={rowKey}
        rowSelection={rowSelection}
        scroll={scroll}
      />
  );
};

export default Tables;
