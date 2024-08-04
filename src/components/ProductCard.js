import React from 'react'

import './ProductCard.css'

import { Button, Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { BsCartPlus } from 'react-icons/bs';

const ProductCard = (props) => {

    let { image, price, title, description, id} = props.data;

    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }

    return (
        <Card className='text-center p-0 overflow-hidden shadow mx-auto mb-4' style={{ width: '18rem', height: 'auto' , borderRadius: '15px'}}>
            <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant='top' src={image}/>
                    </div>
            </div>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    <span className="h5" style={{color: '#405D72'}}>{title}</span>
                </Card.Title>
                <Card.Title>
                    <span className="h3">${price}</span>
                </Card.Title>
                <Button
                    className='d-flex align-item-center m-auto border-0'
                    style={{backgroundColor: '#92C7CF', borderColor:'#92C7CF'}}
                    onClick={()=> addToCart()}>
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard