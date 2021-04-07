import React, { CSSProperties } from 'react';
import ProductList from './ProductList';

function ProductPage() {
    return (
        <main style={rootStyle}>
            <h2 style={title}>Paintings</h2>
            <ProductList/>
        </main>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: "5%"
}

const title: CSSProperties = {
    fontSize: "3rem",
    fontWeight: "normal"
}

export default ProductPage