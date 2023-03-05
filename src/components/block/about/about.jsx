import React from 'react';
import Title from '../../ui/title/title';
import AboutDecorations from '../../decorations/about-decorations/adout-decoration';
import { AboutDiv, AboutInfo, Text } from './style';

function About() {
    return (
        <AboutDiv>
            <AboutInfo>
                <Title size='big' as='h2'>Магазин фермерских продуктов с доставкой</Title>
                <Text>
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </Text>
            </AboutInfo>

            <AboutDecorations />
        </AboutDiv>
    )
}

export default About