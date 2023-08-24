import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import OrderForm from "./OrderForm";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Checkout = () => {
    const { cart, resetCart } = useContext(CartContext);

    const [loading, setLoading] = useState(false);
    const [orderId, setOrder] = useState(null);

    const db = getFirestore();

    const total = cart.reduce(
        (prev, curr) => prev + curr.precio * curr.cantidad,
        0
    );
    const orderCollection = collection(db, "ordenes");

    const createOrder = async ({ nombre, apellido, mail }) => {
        try {
            setLoading(true);
            const orden = {
                nombre: nombre,
                apellido: apellido,
                mail: mail,
                detalle: cart.map((item) => {
                    return {
                        id: item.id,
                        nombre: item.nombre,
                        precio: item.precio,
                        cantidad: item.cantidad,
                        subtotal: item.precio * item.cantidad,
                    };
                }),
                total: total,
            };
            await addDoc(orderCollection, { ...orden, fecha: new Date() }).then(
                ({ id }) => setOrder(id)
            );
        } catch (error) {
            console.error(error);
        } finally {
            resetCart();
            setLoading(false);
        }
    };
    cart
    if (loading) {
        return (
            <div>
                <Loader />
                <div className="mt-3">
                    <h3>Generando orden...</h3>
                </div>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="mt-3">
                <h1>Su orden es: {orderId}</h1>;

                <Link to="/products/all">
                    {" "}
                    <p>Volver al catalogo</p>
                </Link>
            </div>
        );
    }

    return (
        <>
            {cart.length > 0 ?
                <div>
                    <OrderForm total={total} onConfirm={createOrder} />
                </div>
                :
                <Link to="/products/all">
                    {" "}
                    <p>Volver al catalogo</p>
                </Link>
            }
        </>
    );
};

export default Checkout;