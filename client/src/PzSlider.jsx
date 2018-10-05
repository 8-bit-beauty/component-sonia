import React from "react";
import PropTypes from "prop-types";
import PzElement from "./PzElement.jsx";
import styles from "./main.css";

const PzSlider = props => {
  PzSlider.propTypes = {
    items: PropTypes.array.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  };
  const { items, prev, next } = props;
  return (
    <div>
      <h3 className={styles.title}>
        Customers who bought this item also bought
      </h3>
      <div className={styles.main}>
        <div className={styles.menu}>
          <button className={styles.button} type="submit" onClick={prev}>
            &#8249;
          </button>
          {items.map((elem, idx) => {
            return <PzElement key={idx} element={elem} />;
          })}
          <button className={styles.button} type="submit" onClick={next}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PzSlider;
