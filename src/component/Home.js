import React from 'react'

const Home = (props) => {
    console.log("home", props)
    return (
        <div>
            <div className="add-to-cart">
                <span className='cart-count'>{props.data.length}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6HKr_wUOpNfCEuHG9FcMYEZpOZmNJ4PwIg&usqp=CAU" alt="cart" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lMsw57hb_77VEF_leozZr91mPFlnttakbNDSh57rSG9ckRnsYHTGf1uiPq4xqZeP_IU&usqp=CAU" alt="cart" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart
                    </button>
                    <button
                        onClick={
                            () => { props.removeToCartHandler() }
                        }>
                        Remove To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home