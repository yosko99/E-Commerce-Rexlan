import ProductSwatches from './product/ProductSwatches.component';
import { categoryListAction } from '../actions/categoryActions';
import ProductSizes from './product/ProductSizes.component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Loading from './Loading.component';

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subcategory: subcategoryURL } = useParams();

  const defaultGenderValue = subcategoryURL.split('-');
  const [genderRadioState, setGenderRadioState] = useState(defaultGenderValue[0]);

  const [subcategoryRadioState, setSubcategoryRadioState] = useState(subcategoryURL);

  const [currentValueState, setCurrentValueState] = useState(0);
  const [maxValueState, setMaxValueState] = useState(0);

  const { categories, loading: categoryLoading } = useSelector((state) => state.categoryList);
  const { products } = useSelector((state) => state.productListFiltered);

  const [swatchesState, setSwatchesState] = useState([]);
  const [sizesState, setSizesState] = useState([]);

  const genderHandler = (e) => {
    const selectedGender = e.target.id;
    setGenderRadioState(selectedGender);
  };

  const subcategoryHandler = (e) => {
    const selectedSubcategory = e.target.id;
    navigate('/products/category/' + selectedSubcategory);

    setSubcategoryRadioState(selectedSubcategory);
  };

  const setSliderValue = () => {
    setCurrentValueState(0);
    const maximumPrice = Math.max.apply(Math, products.map(product => product.price));
    setMaxValueState(maximumPrice);
  };

  const priceHandler = (e) => {
    setCurrentValueState(e.target.value);
  };

  const swatchHandler = () => {
    const swatches = new Set();

    products.forEach((product) => {
      product.image_groups.forEach((group) => {
        if (group.view_type === 'swatch' && group.variation_value !== undefined) {
          swatches.add(group);
        }
      });
    });

    setSwatchesState(Array.from(swatches));
  };

  const sizeHandler = () => {
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

    setSizesState(Array.from(sizesSet));
  };

  const swatchOnClick = (e) => {

  };

  useEffect(() => {
    setSliderValue();
    swatchHandler();
    sizeHandler();
  }, [products]);

  useEffect(() => {
    dispatch(categoryListAction());
  }, []);

  return (
    <>
    <small className='mb-2'>Refine by</small>

    <h6 className='mt-3'>Category</h6>
    {categoryLoading || categoryLoading === undefined
      ? <Loading height='10vh'/>
      : categories.map((category, index) => (
      <div className="form-check" key={index + 1}>
        <input
          className="form-check-input"
          onChange={(e) => genderHandler(e)}
          checked={genderRadioState === category.name.toLowerCase()}
          type="radio"
          id={category.name.toLowerCase()}/>
        <label className="form-check-label fs-5">{category.name}</label>
      </div>
      ))
    }

    <h6 className='mt-4'>Subcategory</h6>
    {categoryLoading || categoryLoading === undefined
      ? <Loading height='10vh'/>
      : categories.find((category) => category.name.toLowerCase() === genderRadioState)
        .categories.map((subcategory) =>
          (subcategory.categories.map((category, index) =>
            (<div className="form-check" key={index + 1}>
            <input
              className="form-check-input my-2"
              onChange={(e) => subcategoryHandler(e)}
              checked={subcategoryRadioState === category.id}
              type="radio"
              id={category.id}/>
            <label className="form-check-label fs-5">{category.name}</label>
          </div>))))}

    <div>
        <h6 className='mt-4'>Price: {currentValueState} USD</h6>
        <input
          type="range"
          min='0'
          max={maxValueState}
          value={currentValueState}
          onChange={(e) => priceHandler(e)}
          className="form-range"/>
    </div>

    {swatchesState.length > 0 &&
      <><h6 className='mt-4'>Colors</h6>
        <ProductSwatches swatches={swatchesState} onClick={(e) => swatchOnClick(e) }/>
      </>}

    {sizesState.length > 0 &&
    <><h6 className='mt-4'>Sizes</h6>
      <ProductSizes sizes={sizesState} />
    </>}
    </>
  );
};

export default Filter;
