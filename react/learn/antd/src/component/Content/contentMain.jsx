/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Main page Content side
 *
 *    Usage                  :  Reuseable Content page
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { useEffect, useState } from 'react';
import Search from '../Seachinput/search';
import Table from '../Table/table';
// import { images } from '../../utils/images';
import Selectcomponent from '../Select/select';
// import FilterTab from '../../pages/Merchant/Orders/Order/filtertab';
// import ManageStockFilterTab from '../../pages/Branch/Inventory/managestockfiltertab';
import { Space } from 'antd';
import Select from '../Select/select';
import './style.scss';
// import BranchOrderFilterTab from '../../pages/Branch/Orders/BranchOrder/branchorderfiltertab';

const { Option } = Select;
const Contentmain = ({
  selectBoxLabel,
  deleteButtonLabel,
  placeholder,
  columns,
  dataSource,
  enableRowSelection,
  manageStocks,
  orderStocks,
  setDatasource,
  searchName,
  rowKey, 
  setSelectedrow,
  selectRow,
  createCollections,
  createBranchOrder
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = enableRowSelection
    ? {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectedRowKeys(selectedRowKeys);
          // setdeleterowscount(selectedRows.length); 
          setSelectedrow && setSelectedrow(selectedRows);
        }
      }
    : undefined;
  useEffect(() => {
    selectRow?.length > 0 && setSelectedRowKeys(selectRow);
  }, [selectRow]);

  return (
    <div className="contentmain">
      <div className="topcontentmain">
        {selectBoxLabel && (
          <div>
            <Selectcomponent style={{ width: '8em' }} placeholder={'Branch'} />
          </div>
        )}
        <div>
          {deleteButtonLabel && selectedRowKeys?.length > 0 && (
            <button className="buttondelete">{deleteButtonLabel}</button>
          )}
        </div>
        {orderStocks && <FilterTab />}
        {manageStocks && <ManageStockFilterTab />}
        {createBranchOrder && <BranchOrderFilterTab />}
        {createCollections && (
          <Space.Compact block>
            {/* <RangePicker
        style={{ width: "230px", height: "36px" }}
        placeholder={RangePicName}
        onChange={handleDateRangeChange}
      /> */}
            <Select
              style={{ width: '140px', height: '36px' }}
              placeholder="Category"
              mode="multiple"
              // onChange={handleOrderStatusChange}
              maxTagCount="responsive"
              className="searchfilter">
              <Option value="Pending">Pending</Option>
              <Option value="Confirmed">Confirmed</Option>
              <Option value="Completed">Completed</Option>
              <Option value="Cancelled">Cancelled</Option>
              <Option value="Declined">Declined</Option>
            </Select>
            {/* <Select
        style={{ width: "140px", height: "36px" }}
        placeholder="Payment Status"
        mode="multiple"
        // onChange={handlePaymentStatusChange}
        maxTagCount	="responsive"
      >
        <Option value="Paid">Paid</Option>
        <Option value="Unpaid">Unpaid</Option>
      </Select> */}
            <Select
              style={{ width: '140px', height: '36px' }}
              placeholder="Sub Catgory"
              mode="multiple"
              // onChange={handleDispatchStatusChange}
              maxTagCount="responsive"
              className="searchfilter">
              <Option value="Pending">Pending</Option>
              <Option value="Shipped">Shipped</Option>
              <Option value="Delivered">Delivered</Option>
            </Select>
          </Space.Compact>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Search
            placeholder={placeholder}
            searchName={searchName}
            dataSource={dataSource}
            setDatasource={setDatasource}
          />
        </div>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true }}
          rowKey={record => record.key}
          rowSelection={rowSelection}
          manageStocks={manageStocks}
          orderStocks={orderStocks}
        />
      </div>
    </div>
  );
};

export default Contentmain;
