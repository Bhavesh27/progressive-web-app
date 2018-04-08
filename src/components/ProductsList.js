import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import { productPropType } from '../views/Products/reducer';

class ProductsList extends Component {
  render() {
    const list = this.props.products.map(element => (
      <ProductCard
        key={element.id}
        id={element.id}
        src={element.images[0].src}
        name={element.name}
        price={element.price}
        categories={element.categories}
      />
    ));

    return (
      <div>
        <Header textAlign="center">{this.props.title}</Header>
        {list}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductsList;
