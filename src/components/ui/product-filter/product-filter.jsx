import FilterItem from '../filter-item/filter-item';
import { FilterList } from './style';

function ProductFilter({ productList, onChange }) {
    
    const productItem = productList.map(({ title, id }, index) => {
        return (
            <FilterItem
                title={title}
                key={'folter' + index}
                id={id}
                onChange={onChange}
            />
        );
    });

    return <FilterList>{productItem}</FilterList>;
}

export default ProductFilter;
