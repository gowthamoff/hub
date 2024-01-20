import "./App.css";
import ImageUploaderAntd from "./component/AddImage/ImageUploaderAntd";
import Button from "./component/Button/AntButton";
import Checkbox from "./component/Checkbox/checkbox";
import Ckeditor from "./component/Ckeditor/ckeditor";
import Contentnav from "./component/Contentnav/contentNavigation";
import Datepicker from "./component/Datepicker/Datepicker";
import Input from "./component/Input/input";
import ModalPopup from "./component/ModalPopup/ModalPopup";
import NotificationPopup from "./component/Notification/NotificationPopup";
import Toster from "./component/Toster/toster";
import InputSearch from "./component/Seachinput/search";
import Togglecomponent from "./component/Toggle/toggle";
import Tables from "./component/Table/table";
import Contentmain from "./component/Content/contentMain";
import { useState } from "react";
import Selectcomponent from "./component/Select/select";
import Contentheader from "./component/Content/contentHeader";

function App() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const [productlist, setProductlist] = useState(dataSource);

  const onChange = () => {
    console.log("checkbox change");
  };

  const dateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const toggleChange = (checked) => {
    console.log(`${checked}`) ;
  };

  const selectChange = (e) => {
    console.log(e);
  };

  const Toasterdata = {
    type: "Success",
    message: "Working",
    description: "welldone",
  };


  const btnOnclick = (e) => {
    console.log('btn click')
  }

  const inputOnClick = (e) => {
    console.log(e.target.value)
  }
 

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "disabled",
      label: "Disabled",
      disabled: true,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          gap: "10px",
        }}
      >
        {/* <ImageUploaderAntd isFirst={true} /> */}
        {/* <Ckeditor onChange={false}/> */}
        {/* <Contentnav inPage={inPage}/> */}
        <Button BtnName={"click"} type={"primary"} onClick={btnOnclick}/>
        <Selectcomponent
          defaultValue={"select"}
          onChange={selectChange}
          options={options}
        />
        <Checkbox onChange={onChange} label={"select"} />
        <Datepicker onChange={dateChange} />
        <Input placeholder={"Enter name"} onChange={inputOnClick} />
        <ModalPopup open={false} />
        <Toster Toasterdata={Toasterdata} />
      </div>
      <Togglecomponent defaultChecked={false} onChange={toggleChange} />
      <Contentmain
        deleteButtonLabel={"Delete"}
        placeholder={"Search in table"}
        dataSource={productlist}
        columns={columns}
        enableRowSelection={true}
        rowKey={(record) => record.product_code}
        setDatasource={setProductlist}
        searchName={"name"}
        selectBoxLabel={"select"}
      />
      {/* <Contentheader
        contentTitle={"Header of table"}
        createbuttonlabel={"Create"}
        savebuttonlabel={"save"}
        cancelbuttonlabel={"cancel"}
      /> */}

      {/* <Tables dataSource={dataSource} columns={columns} enableRowSelection={true}
      /> */}
      {/* <InputSearch />  */}
    </>
  );
}

export default App;
