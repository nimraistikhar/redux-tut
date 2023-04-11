import Home from '../component/Home'
import { connect } from 'react-redux'
import { addToCart } from '../service/Actions/Actions'

const mapStateToProps = state => ({
  data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;