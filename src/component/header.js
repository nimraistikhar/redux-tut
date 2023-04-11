import React from 'react'

const Header = (props) => {

    return (
        <div className="add-to-cart">
            <span className='cart-count'>{props.data.length}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6HKr_wUOpNfCEuHG9FcMYEZpOZmNJ4PwIg&usqp=CAU" alt="cart" />
        </div>
    )
}

export default Header