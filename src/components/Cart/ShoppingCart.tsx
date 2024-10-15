import { useEffect, useState } from "react";
import { CartContainer, CartContent, CartFooter, CartHeader, CheckoutButton, EmptyMessage, ProductInfo, ProductItem, ProductName, ProductPrice, RemoveButton, TotalAmount } from "./ShoppingCartStyle";

interface ShoppingCartProps {
    isOpen: boolean
    onClose: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen,onClose }) => {

    const [products, setProducts] = useState([
        { name: "Zapato A", price: 50 },
        { name: "Zapato B", price: 75 },
    ])
    const total = products.reduce((sum, product) => sum + product.price, 0)

    const handleRemoveProduct = (index: number) => {
        setProducts(products.filter((_, i) => i !== index));
    }

    useEffect(() => {
        if (isOpen) {
            const handleOutsideClick = (event: MouseEvent) => {
                if (event.target instanceof Element && !document.getElementById("cart-container")?.contains(event.target)) {
                    onClose(); // Cierra el carrito si se hace clic fuera
                }
            };

            document.addEventListener("mousedown", handleOutsideClick);
            return () => document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [isOpen, onClose])

    return (
        <CartContainer
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <CartHeader>
                <h2>Carrito</h2>
            </CartHeader>
            <CartContent>
                {products.length === 0 ? (
                    <EmptyMessage>Tu carrito está vacío</EmptyMessage>
                ) : (
                    <>
                        {products.map((product, index) => (
                            <ProductItem key={index}>
                                <ProductInfo>
                                    <ProductName>{product.name}</ProductName>
                                    <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                                </ProductInfo>
                                <RemoveButton onClick={() => handleRemoveProduct(index)}>
                                    Eliminar
                                </RemoveButton>
                            </ProductItem>
                        ))}
                    </>
                )}
            </CartContent>
            <CartFooter>
                <TotalAmount>Total: ${total.toFixed(2)}</TotalAmount>
                <CheckoutButton>Pagar</CheckoutButton>
            </CartFooter>
        </CartContainer>
    );
};
