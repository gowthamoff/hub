import React from 'react';
import './index.scss';
import { Tooltip } from 'antd';
import { Link,useNavigate } from 'react-router-dom';

function CategoryCard({ image, subcategory,linkData }) {
 const {id, category_id, category_name}=linkData
 const navigate=useNavigate()

const gotoCategoryProducts=()=>{
  navigate(`/product/${id}/category/${category_id}/${category_name}`)
  window.scrollTo(0, 0);
}
  const isMobile = window.innerWidth <= 576; // Adjust the breakpoint as needed
  const maxLength = isMobile ? 18 : 30;

  const truncatedSubcategory = subcategory?.length > maxLength
    ? `${subcategory.slice(0, maxLength)}...`
    : subcategory;
  return (
    <div>
      <div className="fc_justify_content">
        <div onClick={gotoCategoryProducts} style={{cursor:'pointer'}}className="fc_home_main_card_padding">
        {/* <Link to={`/product/${id}/category/${category_id}/${category_name}`}> */}

          <img src={image} className="fc_sub_category_img" />
          <Tooltip color='blue-inverse' placement="bottom" title={subcategory}>
            <div className="fc_sub_category_name">{truncatedSubcategory}</div>
          </Tooltip>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
