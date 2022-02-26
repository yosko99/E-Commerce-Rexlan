import { formSubmitUrl, uniqueSizes, uniqueSwatches, stripQueryFromUrl } from './function/allFunctions';
import { productListFilteredAction } from '../../actions/productActions';
import ProductSwatches from '../product/ProductSwatches.component';
import { categoryListAction } from '../../actions/categoryActions';
import ProductSizes from '../product/ProductSizes.component';
import Subcategory from './components/Subcategory.component';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Category from './components/Category.component';
import { Button } from 'react-bootstrap';

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subcategory: subcategoryURL } = useParams();
  const defaultGenderValue = subcategoryURL.split('-');
  const url = `/products/category/${subcategoryURL}`;

  const { products: subcategoryProducts } = useSelector((state) => state.subcategoryProductList);
  const { categories, loading: categoryLoading } = useSelector((state) => state.categoryList);

  // Change main category depending on gender
  const [genderRadioState, setGenderRadioState] = useState(defaultGenderValue[0]);

  const genderHandler = (e) => {
    const selectedGender = e.target.id;
    setGenderRadioState(selectedGender);
  };

  // Resets value to 0 and gets max price of products
  const currentValueRef = useRef();
  const [maxValueState, setMaxValueState] = useState(0);

  const setSliderValue = () => {
    currentValueRef.current = stripQueryFromUrl('price')[0] || 0;
    const maximumPrice = Math.max.apply(Math, subcategoryProducts.map(product => product.price));
    setMaxValueState(maximumPrice);
  };

  // Used to get current slider value
  const priceHandler = (e) => {
    currentValueRef.current = e.target.value;
  };

  const [swatchesState, setSwatchesState] = useState([]);
  const [sizesState, setSizesState] = useState([]);

  // Refference to filter form
  const filterFormRef = useRef();

  const colorsRef = useRef([]);
  const sizesRef = useRef([]);

  const filterOnSubmit = (e) => {
    e.preventDefault();
    dispatch(productListFilteredAction(subcategoryURL, '?' + formSubmitUrl(filterFormRef)));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setSliderValue();
    setSizesState(uniqueSizes(subcategoryProducts));
    setSwatchesState(uniqueSwatches(subcategoryProducts));
  }, [subcategoryProducts]);

  useEffect(() => {
    dispatch(categoryListAction());

    // Get attr query from url if it is any.
    colorsRef.current = stripQueryFromUrl('color');
    sizesRef.current = stripQueryFromUrl('size');
  }, []);

  return (
    <>
    <small className='mb-2'>Refine by</small>

    <Category
        genderRadioState={genderRadioState}
        categoryLoading={categoryLoading}
        genderHandler={genderHandler}
        categories={categories}
    />

    <Subcategory
        categoryLoading={categoryLoading}
        categories={categories}
        genderRadioState={genderRadioState}
    />

    <form
      method="get"
      ref={filterFormRef}
      onChange={() => navigate(`${url}?${formSubmitUrl(filterFormRef)}`)}
      onSubmit={(e) => filterOnSubmit(e)}>
      <div>
          <h6 className='mt-4'>Price greater than {currentValueRef.current} USD</h6>
          <input
            type="range"
            min='0'
            name="price"
            max={maxValueState + 1}
            value={currentValueRef.current || 0}
            onChange={(e) => priceHandler(e)}
            className="form-range"/>
      </div>

      <h6 className='mt-4'>Colors</h6>
      { swatchesState.length > 0
        ? swatchesState.map((swatch, index) =>
          (<ProductSwatches
            key={index + 1}
            swatch={swatch}
            isChecked={colorsRef.current.includes(swatch.variation_value)}
            />))
        : <Button
            className='my-2 me-2'
            variant="outline-dark"
            disabled>
              -
          </Button>
      }

      <h6 className='mt-4'>Sizes</h6>
      { sizesState.length > 0
        ? sizesState.map((size, index) =>
          (<ProductSizes
            key={index + 1}
            isPressed={sizesRef.current.includes(size.value)}
            size={size}
            />))
        : <Button
            className='my-2 me-2'
            variant="outline-dark"
            disabled>
              -
          </Button>}

        <div className='mt-4'>
          <Button variant="info" type='submit'>Filter products</Button>
        </div>
    </form>
    </>

  );
};

export default Filter;
