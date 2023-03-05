import { ButtonList, Button } from './style';

let activArrey = [
    ['Описание', true],
    ['Характеристики', false],
    ['Свойства', false],
];

function TabButton({ onClick, setState }) {
    function ActivLink(e, arr) {
        switch (e.target.name) {
            case 'Описание':
                arr[0][1] = true;
                arr[1][1] = false;
                arr[2][1] = false;
                break;
            case 'Характеристики':
                arr[0][1] = false;
                arr[1][1] = true;
                arr[2][1] = false;
                break;
            case 'Свойства':
                arr[0][1] = false;
                arr[1][1] = false;
                arr[2][1] = true;
                break;
        }
        activArrey = arr;
    }

    const buttonList = activArrey.map((elem, index) => (
        <Button
            key={'button+' + index}
            name={elem[0]}
            onClick={(e) => {
                onClick(e, setState);
                ActivLink(e, activArrey);
            }}
            active={elem[1]}
        >
            {elem[0]}
        </Button>
    ));
    return <ButtonList>{buttonList}</ButtonList>;
}

export default TabButton;
