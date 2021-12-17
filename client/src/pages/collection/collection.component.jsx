import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;
    return collection ? (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.name} item={item} />
                ))}
            </div>
        </div>
    ) : (
        <div>
            <h1>Wrong category</h1>
        </div>
    );
};

export default CollectionPage;
