import React from 'react';
import Button from '../../ui/button/button';
import { Content, ContentTitle, ContentList, ItemHeader, ItemText, ContentItem, Description } from './style';
import Title from '../../ui/title/title';
import About from '../../block/about/about';

function ContentPage({promoContent}) {
    let farmProductsPromoList = promoContent.map(
        ({img, farmProduct, title, isGood, description}, index) => {
            return (
                <ContentItem item={isGood} key={index}>
                    <ItemHeader>
                        <div>
                            <img src={img} width='52' height='52' />
                        </div>
                        <div>
                            <ItemText>{farmProduct}</ItemText>
                            <Title size='least' as='h3'>{title}</Title>
                        </div>
                    </ItemHeader>
                    <Description>{description}</Description>
                </ContentItem>
            )
            
        });
    return (
        <Content>
            <About />
            <ContentTitle as='h2'>Почему фермерские продукты лучше</ContentTitle>
            <ContentList>{farmProductsPromoList}</ContentList>
            <div className='content-page__button'>
                <Button position='center' />
            </div>    
        </Content>
    )
}

export default ContentPage