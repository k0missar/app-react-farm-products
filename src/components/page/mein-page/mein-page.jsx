import React from 'react';
import './style.css';

import Header from '../../layout/header/header';
import ContentPage from '../content-page/content-page';
import OrderPage from '../order-page/order-page';
import Footer from '../../layout/footer/footer';

import { farmProductsPromo, product } from '../../../mock/mock';



function MeinPage() {
    return (
        <>
            <Header />
            {/* <ContentPage promoContent={farmProductsPromo} /> */}
            <OrderPage productList={product}/>
            <Footer />
        </>
    )
}

export default MeinPage