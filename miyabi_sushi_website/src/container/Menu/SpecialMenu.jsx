import React from 'react';
import { MenuItem, SpecialSubHeading } from '../../components';
import {data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu'>
    <section className='specialMenu__header'>
    </section>
    <section className='specialMenu__body'>
      <div className='app__specialMenu-content'>
        
        <div className='app__specialMenu-content-header'>
          <SpecialSubHeading title='Our Menu' />
        </div>
        
        <div className='app__specialMenu-content-list'>
          <ul className='specialMenu__content'>
              <li className='specialMenu__content-list_nigirit'>
                <div className='specialMenu__content_empty_div'/>
                <h3 className='menu__title p__normal-text'>Nigiri</h3>
                <div className='specialMenu__content_empty_div'/>
                <ul className='specialMenu__content-list_nigiri'>
                  
                  {data.nigirit.map((nigiri, index)=> (
                    <MenuItem key={nigiri.title + index} title={nigiri.title} price={nigiri.price} tags={nigiri.tags} />
                  ))}
                  
                </ul>
              </li>
              <li className='specialMenu__content-list_makit'>
                <div className='specialMenu__content_empty_div'/>
                <h3 className='menu__title p__normal-text'>Maki</h3>
                <div className='specialMenu__content_empty_div'/>
                <ul className='specialMenu__content-list_maki'>
                  {data.makit.map((maki, index)=> (
                    <MenuItem key={maki.title + index} title={maki.title} price={maki.price} tags={maki.tags} />
                  ))}
                </ul>
              </li>
              <li className='specialMenu__content-list_laijtelmat'>
                <div className='specialMenu__content_empty_div'/>
                <h3 className='menu__title p__normal-text'>Laijtelma</h3>
                <div className='specialMenu__content_empty_div'/>
                <ul className='specialMenu__content-list_laijtelma'>
                  {data.laijtelmat.map((laijtelma, index)=> (
                    <MenuItem key={laijtelma.title + index} title={laijtelma.title} price={laijtelma.price} tags={laijtelma.tags} />
                  ))}
                </ul>
              </li>
              <li className='specialMenu__content-list_foods'>
                <div className='specialMenu__content_empty_div'/>
                <h3 className='menu__title p__normal-text'>Food</h3>
                <div className='specialMenu__content_empty_div'/>
                <ul className='specialMenu__content-list_food'>
                  {data.foods.map((food, index)=> (
                    <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
                  ))}
                </ul>
              </li>
              <li className='specialMenu__content-list_drinks'>
                <div className='specialMenu__content_empty_div'/>
                <h3 className='menu__title p__normal-text'>Drinks</h3>
                <div className='specialMenu__content_empty_div'/>
                <ul className='specialMenu__content-list_drink'>
                  {data.drinks.map((drink, index)=> (
                    <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
                  ))}
                </ul>
              </li>
          </ul>
          
        </div>
      </div>
      
    </section>
  </div>
);

export default SpecialMenu;
