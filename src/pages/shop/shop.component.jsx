import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithspinner = WithSpinner(CollectionsOverview);
const CollectionPageWithspinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections1.0');

        collectionRef.get().then( snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
            updateCollections(collectionsMap);
            this.setState({ loading: false})
        })
    }

    render(){
        const {match} = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithspinner isLoading={loading} {...props}/>} />
            <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithspinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);