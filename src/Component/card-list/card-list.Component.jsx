import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.Component'; 
export const CardList = (props) => (

<div className='card-list'>
{props.Monster.map(Monster => (
  <Card key={Monster.id} Monster={Monster}/>

            ))}
    </div>
); 
