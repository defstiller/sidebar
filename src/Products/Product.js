function Product({company, colors, featured, price, name, image}) {
    const {url, width, height} = image[0]
    const productStyle = {
        width: width,
        height: height
    }
    return (
        <div>
            <h2>Company name: {company}</h2>
            <img src={url} alt={name} style={productStyle}/>
            <p>{name}</p>
            <p>Available colors: {colors}</p>
            <p>${price}</p>
            {featured  && <p>FEATURED!</p>}
        </div>
    )
}
export default Product;