import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.comonent';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return <div>
        {
            collections.map(({id, ...otherprops}) => <CollectionPreview key={id}{...otherprops} />)
        }
        </div>
    }
};

export default ShopPage;