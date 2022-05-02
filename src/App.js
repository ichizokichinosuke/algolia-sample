import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  DynamicWidgets,
  ClearRefinements,
  RefinementList,
  Pagination,
  Highlight,
  connectSearchBox,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Autocomplete from './Autocomplete';

import './App.css';


const searchClient = algoliasearch(
  'B1G2GM9NG0',
  // my key
  // '1I9YCX4XJQ',
  'aadef574be1f9252bb48d4ea09b5cfe5'
  // my key
  // '30380b8f48d8e5017b66de15fc1805d0'
);

class App extends React.Component {

  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="brand" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
