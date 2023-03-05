import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import { MakeOrderContent, TotalCost, InputAdres } from './style';

function MakeOrder({ totalPrice }) {
    return (
        <MakeOrderContent>
            <Title size="least" as="h2">
                Сделать заказ
            </Title>
            <InputAdres placeholder='Введите адрес доставки'></InputAdres>
            <TotalCost>
                <p>Цена</p>
                <Title size='productItem' as='p'>{totalPrice}</Title>
            </TotalCost>
            <Button position='center'></Button>
        </MakeOrderContent>
    );
}

export default MakeOrder;
