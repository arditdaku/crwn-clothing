import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collections.styles.scss";

const CollectionsPage = ({ match }) => {
  console.log("here", match);
  return (
    <div className="category">
      <h2>Category Page</h2>
      {/* <CollectionItem /> */}
    </div>
  );
};

export default CollectionsPage;
