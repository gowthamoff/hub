//responsive breakpoints
// @media screen and (min-width:'640px') {
// }

// @media screen and (min-width:'768px') {
// }

// @media screen and (min-width:'1024px') {
// }

// @media screen and (min-width:'1280px') {
// }

// @media screen and (min-width:'1536px') {
// }
// if the redux state update is slowly reflected then use state and make the call in the separate useEffect.

// form error solve
form.setFields([
  {
    name: "min_order_quantity",
    errors: [],
  },
  {
    name: "max_order_quantity",
    errors: [],
  },
]);

// session name - faiecom
// #single select with multi select animation
const [dispatchValue, setDispatchValue] = useState([]);
const handleDispatchStatusChange = (values) => {
  if (values.length > 1) {
    const newValue = values[values.length - 1];
    setDispatchValue([newValue]);
    setDispatchStatus([newValue]);
  } else {
    setDispatchValue(values);
    setDispatchStatus(values);
  }
};
<Select
  showSearch={false}
  style={{ width: "160px", height: "36px" }}
  maxTagPlaceholder={
    <span>
      Dispatch Status <CaretDownOutlined style={{ color: "#5c5f62" }} />
    </span>
  }
  placeholder={
    <span>
      Dispatch Status <CaretDownOutlined style={{ color: "#5c5f62" }} />
    </span>
  }
  onChange={handleDispatchStatusChange}
  maxTagCount={0}
  mode="multiple"
  value={dispatchValue}
>
  <Option value="Shipped" key="1">
    Shipped
  </Option>
  <Option value="Unshipped" key="2">
    Unshipped
  </Option>
</Select>;

//use dispatch in normal js file
import { store } from "../redux/store";
import { setSessionValidate } from "../redux/reducer/auth";
const { dispatch } = store;
dispatch(setSessionValidate({ AuthPage: true })); // AuthPage is name of slice

////use select in normal js file
import { store } from "../redux/store";
const {
  AuthPage: { sessionValidate },
} = store.getState();
console.log("Session Validate:", sessionValidate);

//mobile and web same typing mode
<Input key={index} type="text" inputMode="numeric" />;

//custom antd modal btn
<Modal
  width="34em"
  maskClosable={false}
  open={deActivepopup}
  title={
    inactive === 0
      ? "Are you sure you want to hide this product"
      : "Are you sure you want to unhide this product"
  }
    
  onCancel={() => {
    deleteProduct.lookup_product_status_id = !inactive;
    setDeactivepopup(false);
  }}
>
  <div style={{ fontWeight: "500" }}>Available Quantity : 10</div>
  <div style={{ fontWeight: "600", marginTop: "0.5rem" }}>
    {inactive === 0
      ? "Hiding this product means customer will be unable to make purchases on Agricart consumer website"
      : "Unhiding this product means customer will be able to make purchases on Agricart consumer website"}
  </div>
  <div id="unique-design">
    <div className="antmodalfooter">
      <button className="antbtn antbtndefault" onClick={onCancelClick}>
        Cancel
      </button>
      <button className="antbtn antbtnprimary" onClick={onYesClick}>
        Yes
      </button>
    </div>
  </div>
</Modal>;
// #unique-design .antmodalfooter {
//   display: flex !important;
//   margin-top: 0.8rem;
//   gap: 0.4rem;
// }
// #unique-design .antbtndefault,
// #unique-design .antbtndefault:hover {
//   display: flex;
//   height: 44px;
//   padding: 14px 20px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   flex: 1 0 0;
//   border-radius: 8px;
//   border: 1px solid var(--Dark-Medium, #4f4f4f) !important;
//   background: var(--White, #fff) !important;
//   color: var(--Dark-Medium, #4f4f4f) !important;
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// }

// #unique-design .antbtnprimary,
// #unique-design .antbtnprimary:hover {
//   display: flex;
//   height: 44px;
//   padding: 14px 20px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   flex: 1 0 0;
//   border-radius: 8px;
//   background: #1e2640 !important;
//   color: var(--Grey-Light, #f5f5f5) !important;
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// }

//form valid before api call
const formRef = useRef(null);
const formInstance = formRef.current;
formInstance
.validateFields()
.then(()=>{
 //api call
})

//custom form validation
<Form
  form={form}
  disabled={edit}
  name="basic"
  layout="vertical"
  ref = {formRef} >
    <Form.Item rules={[
        { validator:  numberValidate('hsn_code',form) },
        {
          pattern: /^[0-9a-zA-Z]{10}$/,
          message: 'Exactly 10 alphanumeric characters are allowed'
        }
        ]}>
    </Form.Item>
export const numberValidate = (fieldName,form) => (rule, value, callback) => {
  if (!value) {
    callback();
    return;
  }
  const numericValue = value.replace(/\D/g, '');
  form.setFieldsValue({ [fieldName]: numericValue });
  callback();
};
{/* 

other valid method 
<Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: `Please input your ${label}!`
        },
        {
          pattern: pattern,
          message: `Please input Valid ${label} `
        },
        { validator: validator }
      ]}
       validator={(_, value) => {
            // Regular expression for validating an email address
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
            if (value !== '') {
              // Check if the input is a valid email address
              if (!emailRegex.test(value)) {
                return Promise.reject('Input must be a valid email address.');
              }
            } 
          
            return Promise.resolve();
          }}
           */}
