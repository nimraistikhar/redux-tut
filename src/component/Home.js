import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6HKr_wUOpNfCEuHG9FcMYEZpOZmNJ4PwIg&usqp=CAU" alt="cart" />
        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://freesvg.org/img/1527145993.png" alt="mobile" />
            </div>
            <div className="text-wrapper item">
                <span>I-phone</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button>Add cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home