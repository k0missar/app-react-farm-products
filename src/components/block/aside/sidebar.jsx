import { useState } from 'react';
import { Aside } from './style';
import ProductFilter from '../../ui/product-filter/product-filter';
import MakeOrder from '../make-order/make-order';

function Sidebar({ productList }) {
    const [totalPrice, setTotalPrice] = useState(0);

    function onFilter(e) {
        if (e.target.checked) {
            const item = productList.find(
                (item) => item.title === e.target.value
            );
            setTotalPrice((count) => count + Number(item.price));
        }
        if (!e.target.checked) {
            const item = productList.find(
                (item) => item.title === e.target.value
            );
            setTotalPrice((count) => count - Number(item.price));
        }
    }

    return (
        <Aside>
            <ProductFilter
                productList={productList}
                onChange={onFilter}
            ></ProductFilter>
            <MakeOrder totalPrice={totalPrice} />
        </Aside>
    );
}

export default Sidebar;
