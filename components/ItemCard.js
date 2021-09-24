import React, { useState } from 'react';
import { Button } from 'react-native';


const ItemCard = (props) => {
    const [counter, setCounter] = useState(props.start);
    
    return (
      <div>this is a counter for {props.name}
            <p>this is the count: {counter}</p>
            <Button title='add' onPress={() => {setCounter(counter+1)}}></Button>
            <Button title='subtract' onPress={() => {setCounter(counter-1)}}></Button>
      </div>
    );
  }


export default ItemCard;