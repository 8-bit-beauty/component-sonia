import React, { Component } from 'react';
import fetch from 'node-fetch';
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
  }

  componentDidMount() {
    fetch('http://localhost:4043/products')
      .then(response => response.json())
      .then(({ data }) => {
        const arr = [];
        let numOfItem = 6;
        if (data.length < 6) { numOfItem = data.length; }
        for (let i = 0; i < numOfItem; i += 1) {
          arr.push(data[i]);
        }

        this.setState({
          products: data,
          pageProducts: arr,
        });
      })
      .catch(err => console.log(err));
  }

  pageClickN() {
    const total = this.state.products.length;
    let numOfItem = 6;
    let pageNum = this.state.pageNum + 1;
    let startNum = pageNum * 6;

    if (startNum > total) {
      pageNum = 0;
      startNum = 0;
    } else if (startNum + numOfItem > total) {
      numOfItem = total % numOfItem;
    }
    const arr = [];
    for (let i = startNum; i < startNum + numOfItem; i += 1) {
      arr.push(this.state.products[i]);
    }
    this.setState({
      pageProducts: arr,
      pageNum,
    });
  }

  pageClickP() {
    const { products } = this.state;
    let { pageNum } = this.state;
    const total = products.length;
    let numOfItem = 6;
    pageNum -= 1;
    if (pageNum < 0) {
      pageNum = Math.floor(products.length / numOfItem);
    }
    let startNum = pageNum * 6;

    if (startNum > total) {
      pageNum = 0;
      startNum = 0;
      // endNum = 5;
    } else if (startNum + numOfItem > total) {
      numOfItem = total % numOfItem;
    }
    const arr = [];
    for (let i = startNum; i < startNum + numOfItem; i += 1) {
      arr.push(products[i]);
    }
    this.setState({
      pageProducts: arr,
      pageNum,
    });
  }


  render() {
    return (
      <div>
        <span className={styles.page}>{`Page `}{this.state.pageNum + 1}{` of `}
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
