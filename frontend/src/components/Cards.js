import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//essa parte é responsavel peloas cards com locais que atuamos
function Cards() {
  return (
    <div className='cards'>
      <h1>Veja alguns dos locais que atuamos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lore epsum'
              label='Osasco'
              path='/card1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lore epsum'
              label='São josé dos Campos'
              path='/card2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lore epsum'
              label='Jacarei'
              path='/card3'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lore epsum'
              label='São José do Barreiro'
              path='/card4'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lore epsum'
              label='Guaratingueta'
              path='/card5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
