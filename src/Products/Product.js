function Product({ company, colors, featured, price, name, image }) {
  const { // get default image if no image is found
    url = "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    width,
    height,
  } = image[0];
  const productStyle = {
    width: width,
    height: height,
  };
  return (
    <div>
      <h2>Company name: {company}</h2>
      <img src={url} alt={name} style={productStyle} />
      <p>{name}</p>
      <p>Available colors: {colors}</p>
      <p>${price}</p>
      {featured && <p>FEATURED!</p>}
    </div>
  );
}
export default Product;
