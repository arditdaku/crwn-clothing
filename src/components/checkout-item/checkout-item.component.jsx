import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({img}) => <div className={'checkout-item'}>
    <div className="image-container">
        <img src={img} alt="item"/>
    </div>
</div>;

export default CheckoutItem;
