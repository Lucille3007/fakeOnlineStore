import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar/Sidebar'

const Products = () => {

    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedUse, setSelectedUse] = useState(null);
    const [category, setCategory] = useState('');


    async function getResponse() {

        const response = await fetch('https://fakestoreapi.com/products')

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }
        const data = await response.json()

        setProductData(await data);
        setFilter(await data)
    }

    useEffect(() => {
        getResponse();
    }, []);


    const handleChangePrice = event => {
        setSelectedPrice(event.target.value)
        filterProduct(category, event.target.value, selectedUse)
    }

    const handleChangeUse = event => {
        setSelectedUse(event.target.value)
        filterProduct(category, selectedPrice, event.target.value)
    }

    const filterProduct = (category, selectedPrice, selectedUse) => {
        let filteredData = productData
        let flag = true

        //Filtering the price

        if (selectedPrice != null && selectedPrice !== '') {
            flag =false
            if (category === '') {
                if (selectedPrice == 200) {
                    filteredData = filteredData.filter(product => product.price > (selectedPrice - 50) )
                }
                else {
                    filteredData = filteredData.filter(product => ((product.price > (selectedPrice - 50)) && (product.price < selectedPrice)) )
                }
            }
            else {
                if (selectedPrice == 200) {
                    filteredData = filteredData.filter(product => product.category === category 
                        && product.price > (selectedPrice - 50))
                }
                else {
                    filteredData = filteredData.filter(product => product.category === category 
                        && ((product.price > (selectedPrice - 50)) && (product.price < selectedPrice)) )
                }
            }
        }

        //Filtering the use
        if(selectedUse != null && selectedUse !== '') {
            flag = false

            if (category === '') {
                filteredData = filteredData.filter(product => product.description.toLocaleLowerCase().includes(selectedUse.toLocaleLowerCase()))
            }
            else {
                filteredData = filteredData.filter(product => product.category === category 
                    && product.description.toLocaleLowerCase().includes(selectedUse.toLocaleLowerCase()))
            }
        }

        //Filtering only the category
        if (category !== '' && flag) {
            filteredData = filteredData.filter(product => product.category === category)
        }

        setFilter(filteredData)
    }

    const ShowProducts = () => {

        return (
            <>
                <div className='buttons py-5 mb-5 pb-5'>
                    <button type='button' className='btn btn-outline-dark me-5 fs-4'
                        onClick={() => {
                            setCategory('');
                            filterProduct('', selectedPrice, selectedUse)
                        }}> All</button>

                    <button type='button' className='btn btn-outline-dark me-5 fs-4'
                        onClick={() => {
                            setCategory("women's clothing");
                            filterProduct("women's clothing", selectedPrice, selectedUse)
                        }}> Women</button>

                    <button type='button' className='btn btn-outline-dark me-5 fs-4'
                        onClick={() => {
                            setCategory("men's clothing");
                            filterProduct("men's clothing", selectedPrice, selectedUse)
                        }}> Men</button>

                    <button type='button' className='btn btn-outline-dark me-5 fs-4'
                        onClick={() => {
                            setCategory("jewelery");
                            filterProduct("jewelery", selectedPrice, selectedUse)
                        }}> Jewelery</button>

                    <button type='button' className='btn btn-outline-dark me-5 fs-4'
                        onClick={() => {
                            setCategory("electronics");
                            filterProduct("electronics", selectedPrice, selectedUse)
                        }}> Electronics</button>
                </div>

            </>
        );
    }
    return (
        <>
            <Sidebar handleChangePrice={handleChangePrice} handleChangeUse={handleChangeUse} />

            <Container className="py-3">
                <Row className="justify-content-center">
                    <Col className="mb-5 text-center">
                        <h1 className="display-4 fw-bolder" style={{ paddingTop: '120px', textShadow: '1px 1px 5px #92C7CF ' }}>Products</h1>
                        <ShowProducts />
                        <InputGroup className="mb-3 justify-content-center">
                            <InputGroup.Text>
                                <BiSearch size="2rem" />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                style={{ maxWidth: '400px' }} />
                        </InputGroup>
                    </Col>
                    <SearchFilter
                        value={searchInput}
                        data={filter}
                        renderResults={results => (
                            <Row className="justify-content-center">
                                {results.map((item, i) => (
                                    <ProductCard data={item} key={i} />
                                ))}
                            </Row>
                        )}
                    />
                </Row>
            </Container>
        </>

    );
}

export default Products;