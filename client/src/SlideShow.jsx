import React, { Component } from 'react';

import PzSlider from './PzSlider.jsx';
import styles from './main.css';
// import React from 'react';

class RelatedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      pageNum: 0,
      pageProducts: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }


  getProducts() {
    fetch('http://localhost:4043/products')
      .then(response => response.json())
      .then(({ data }) => {
        const arr = [];
        let noI = 6;
        if (data.length < 6) { noI = data.length; }
        for (let i = 0; i < noI; i++) {
          arr.push(data[i]);
        }

        console.log('data is : ', data);
        this.setState({
          products: data,
          pageProducts: arr,
        });
      })
      .catch(err => console.log(err));
  }

  pageClickN() {
    const total = this.state.products.length;
    let noI = 6;
    let pageNum = this.state.pageNum + 1;
    let startNum = pageNum * 6;

    if (startNum > total) {
      pageNum = 0;
      startNum = 0;
    } else if (startNum + noI > total) {
      noI = total % noI;
    }
    const arr = [];
    for (let i = startNum; i < startNum + noI; i++) {
      
      arr.push(this.state.products[i]);
    }
    this.setState({
      pageProducts: arr,
      pageNum,
    });
  }

  pageClickP() {
    const total = this.state.products.length;

    let noI = 6;
    let pageNum = this.state.pageNum - 1;
    if (pageNum < 0) {
      pageNum = Math.floor(this.state.products.length / noI);
    }
    let startNum = pageNum * 6;

    if (startNum > total) {
      pageNum = 0;
      startNum = 0;
      // endNum = 5;
    } else if (startNum + noI > total) {
      noI = total % noI;
    }
    const arr = [];
    for (let i = startNum; i < startNum + noI; i++) {
      arr.push(this.state.products[i]);
    }
    this.setState({
      pageProducts: arr,
      pageNum,
    });
  }


  render() {
    return (
      <div>
        <span className={styles.page}>
        Page
          {' '}
          {this.state.pageNum + 1}
          {' '}
of
          {' '}
          {(this.state.products.length - this.state.products.length % 6) / 6 + 1}
                </span>
        <button type="submit" className={styles.previous} onClick={() => { this.pageClickP(); }}>&#8249;</button>
        <PzSlider items={this.state.pageProducts} />
        <button type="submit" className={styles.next} onClick={() => { this.pageClickN(); }}>&#8250;</button>
      </div>
    );
  }
}

export default RelatedItems;
