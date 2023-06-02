import React from "react"
import axios from "axios"
import PropTypes from 'prop-types';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"

export const ProductCart = ({ id, cover, name, price }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
    axios.post("http://localhost:8080", {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link>
            <img src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart} >
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
