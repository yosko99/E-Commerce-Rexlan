const uniqueSwatches = (products) => {
  const swatches = [];
  const swatchesSet = new Set();

  products.forEach((product) => {
    product.image_groups.forEach((group) => {
      if (group.view_type === 'swatch' && group.variation_value !== undefined) {
        if (!swatches.includes(group.variation_value)) {
          swatches.push(group.variation_value);
          swatchesSet.add(group);
        }
      }
    });
  });

  return Array.from(swatchesSet);
};

module.exports = uniqueSwatches;
