import React, { useEffect, useState } from 'react'
import { AddToCartButton, ProductCard, ProductImage, ProductList, ProductPrice, ProductsContainer, ProductTitle } from './productsListStyle';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../../models/product';
import Filters from '../../components/FilterProduct/filter';

export const ProductsList: React.FC = () => {

    const [searchParams] = useSearchParams(); // Hook para obtener los parámetros de la URL
    const categoria = searchParams.get('categoria'); // Extraer el parámetro 'categoria'
    const [price, setPrice] = useState(250); // Control del precio
     const [productos, setProductos] = useState<Product[]>([]); // Tipo para productos

    useEffect(() => {
        if (categoria === 'hombre') {
            setProductos([
                { id: 1, title: 'Producto Hombre 1', price: 150, img: '/zapatos/zapatillaForte.png' },
                { id: 2, title: 'Producto Hombre 2', price: 200, img: '/zapatos/zapatovestir.png' },
                { id: 3, title: 'Producto Hombre 3', price: 200, img: '/zapatos/zapatovestir.png' },
                { id: 4, title: 'Producto Hombre 4', price: 150, img: '/zapatos/zapatillaForte.png' },
            ]);
        } else if (categoria === 'mujer') {
            setProductos([
                { id: 1, title: 'Producto Mujer 1', price: 150, img: '/zapatos/zapatillaForte.png' },
                { id: 2, title: 'Producto Mujer 2', price: 200, img: '/zapatos/zapatovestir.png' }
            ]);
        }
    }, [categoria]);

    return (
        <ProductsContainer>
            {/* Sidebar de filtros */}
            <Filters /> 

            <ProductList>
                {productos.map((producto) => (
                    <ProductCard key={producto.id} whileHover={{ scale: 1.05 }}>
                        <ProductImage src={producto.img} alt={producto.title} />
                        <ProductTitle>{producto.title}</ProductTitle>
                        <ProductPrice>S/. {producto.price}.00</ProductPrice>
                        <AddToCartButton whileTap={{ scale: 0.9 }}>Agregar a Carrito</AddToCartButton>
                    </ProductCard>
                ))}
            </ProductList>

        </ProductsContainer>
    );
}
