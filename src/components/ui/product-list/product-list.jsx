import { SwiperSlde } from 'swiper/react';
import SwiperCore, { Pagination, Mousewhell, Scrollbar } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Mousewhell, Pagination, Scrollbar]);

import ProductItem from '../product-item/product-item';
import { CardList } from './style';

function ProductList({ productList }) {
    const itemList = productList.map((elem, index) => {
        const listProps = elem;
        return <ProductItem key={'product-item-' + index} {...listProps} />;
    });
    return <CardList>{itemList}</CardList>;
}

export default ProductList;
