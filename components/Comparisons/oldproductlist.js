import React from 'react';
import ProductListService from '../../services/ProductListService';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    
    state = { products: [], loading: false };

    async componentDidMount() {
      this.setState({ loading: true });
      //const response = ['abc', 'def', 'ghe'];
      const response = await ProductListService.getProductList();
      this.setState({ loading: false, products: response });
    }

    
  renderItems() {
    const { products } = this.state;
    return products.map(product => {
      //return <span key={product.id}>abcdef</span> 
      return <ProductItem key={product.id}/>; //Consume product id accepted from api 
    });
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        {products.length === 0 ?
          <p>No products yet</p> :
          <ul>{this.renderItems()}</ul>
        }
      </React.Fragment>
    );
  }


}


export default ProductList;