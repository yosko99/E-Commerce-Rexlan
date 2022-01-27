import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, ProductComponent }) => {
  const defaultImg = product.image_groups[0].images[0].link;
  const [productImg, setProductImg] = useState(defaultImg);
  const swatches = product.image_groups.filter((images) => images.view_type === 'swatch');

  const changeImg = (e) => {
    const variationValue = e.target.id;
    const newProductImg = product.image_groups.find((image) => image.variation_value === variationValue);
    if (newProductImg === undefined) {
      setProductImg(defaultImg);
    } else {
      setProductImg(newProductImg.images[0].link);
    }
  };

  return (
        <ProductComponent product={product} productImg={productImg} swatches={swatches} changeImg={changeImg}/>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  ProductComponent: PropTypes.func.isRequired
};

export default Product;
