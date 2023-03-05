import { useState } from 'react';
import TabButton from '../tab-button/tub-button';
import {
    CardContent,
    CardItem,
    CardPrice,
    CardText,
    CardTitle,
    Img,
    Specifications,
    Property,
} from './style';

function ProductItem(props) {
    const {
        description,
        price,
        property: { carbohydrates, energyValue, fats, proteins },
        specifications: { brand, type, weight },
        src,
        title,
    } = props;

    const [show, setShow] = useState({
        onDescription: 'block',
        onSpecifications: null,
        onProperty: null,
        active: '',
    });
    const { onDescription, onSpecifications, onProperty } = show;

    function onShow(e, setState) {
        switch (e.target.name) {
            case 'Описание': {
                setState({
                    onDescription: 'block',
                    onSpecifications: null,
                    onProperty: null,

                });
                break;
            }
            case 'Характеристики': {
                setState({
                    onDescription: null,
                    onSpecifications: 'block',
                    onProperty: null,
                });
                break;
            }
            case 'Свойства': {
                setState({
                    onDescription: null,
                    onSpecifications: null,
                    onProperty: 'block',
                });
                break;
            }
        }
    }

    return (
        <CardItem>
            <picture>
                <Img src={src} alt={title} width="248" height="248" />
            </picture>
            <CardContent>
                <CardTitle as="h2">{title.slice(0, 25)}...</CardTitle>
                <TabButton onClick={onShow} state={show} setState={setShow} />
                <CardText display={onDescription}>
                    {description.slice(0, 180)}...
                </CardText>
                <Specifications display={onSpecifications}>
                    {type ? (
                        <p>
                            <b>Тип: </b>
                            {type}
                        </p>
                    ) : null}
                    {brand ? (
                        <p>
                            <b>Бренд: </b>
                            {brand}
                        </p>
                    ) : null}
                    {weight ? (
                        <p>
                            <b>Вес, г: </b>
                            {weight}
                        </p>
                    ) : null}
                </Specifications>
                <Property display={onProperty}>
                    {energyValue ? (
                        <p>
                            <b>Энергетическая ценность, ккал/100 г: </b>
                            {energyValue}
                        </p>
                    ) : null}
                    {proteins ? (
                        <p>
                            <b>Белки, г/100 г: </b>
                            {proteins}
                        </p>
                    ) : null}
                    {fats ? (
                        <p>
                            <b>Жиры, г/100 г: </b>
                            {fats}
                        </p>
                    ) : null}
                    {carbohydrates ? (
                        <p>
                            <b>Углеводы, г/100 г: </b>
                            {carbohydrates}
                        </p>
                    ) : null}
                </Property>
                <CardPrice>
                    {price} руб. / {weight} гр.
                </CardPrice>
            </CardContent>
        </CardItem>
    );
}

export default ProductItem;
