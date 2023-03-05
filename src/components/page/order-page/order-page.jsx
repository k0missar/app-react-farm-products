import React, { Children, useState } from 'react';
import Sidebar from '../../block/aside/sidebar';
import { Wrapper } from '../../elements';
import ProductList from '../../ui/product-list/product-list';
import { SectionPage, Content } from './style';

function OrderPage({ productList }) {
    return (
        <SectionPage>
            <Wrapper>
                <Content>
                    <Sidebar productList={productList} />
                    <ProductList productList={productList} />
                </Content>
            </Wrapper>
        </SectionPage>
    );
}

export default OrderPage;
