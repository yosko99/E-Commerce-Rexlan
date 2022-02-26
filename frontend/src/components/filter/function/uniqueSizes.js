const uniqueSizes = (products) => {
  const sizes = [];
  const sizesSet = new Set();

  products.forEach((product) => {
    const isSizeAvailable = product.variation_attributes.find((attr) => attr.id === 'size');
    if (isSizeAvailable !== undefined) {
      isSizeAvailable.values.forEach((size) => {
        if (!sizes.includes(size.name)) {
          sizes.push(size.name);
          sizesSet.add(size);
        }
      });
    }
  });

  return Array.from(sizesSet);
};

module.exports = uniqueSizes;
