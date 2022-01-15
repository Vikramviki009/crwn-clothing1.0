import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items,routeName, history, match }) => (
    <div className="collection-preview">
        <div className="title" onClick={() => {
            history.push(`${match.url}/${routeName}`);
            window.scrollTo({top: 0, brhavior: 'smooth'})
        }}>{title}</div>
        <div className="preview">
            {
                items.filter((item, idx)=> idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}  />
                ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);