/* eslint-disable react/prop-types */
import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ItemTypes } from '../../itemTypes';
import { addElement } from '../../slices/uiSlice';

const Box = ({ children, name }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(addElement(item.name));
      }
    }
  }));
  const opacity = isDragging ? 0.4 : 1;
  
  return (
    <div style={{ opacity }} ref={drag} name={name}>
      {children}
    </div>
  )
}

export default Box;