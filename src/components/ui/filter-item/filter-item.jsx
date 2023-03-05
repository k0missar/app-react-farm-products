import { FilterPoint, FilterInput, FilterLabel } from "./style";

function FilterItem({title, id, onChange}) {

    return (
        <>
            <FilterPoint>
                <FilterInput
                    type="checkbox"
                    name="itemProduct"
                    value={title}
                    id={'itemProduct' + id}
                    onChange={onChange}
                />
                <FilterLabel htmlFor={'itemProduct' + id}>
                    {title.slice(0, 25)}...
                </FilterLabel>
            </FilterPoint>
        </>
    );
}

export default FilterItem;