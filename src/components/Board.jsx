import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
// import { useSelector } from 'react-redux';
import { ReactComponent as AddLogo } from '../img/add.svg';

// For the first div on snapshot
// style={{ background: '#F0F9FF' }}

const Board = () => {
  // const elements = useSelector((state) => state.constructor.elements);
  // console.log(elements);


  return (
    <Droppable droppableId="board">
      {(provided) => (
        <div 
          ref={provided.innerRef}
            
          className="rounded board-outer-container"
          {...provided.droppableProps}
          >
            { (
              <div className="board-inner-container">
                <AddLogo />
                <p className="board-text-highlight" >Перетащите сюда</p>
                <div className="board-text">
                  <p>любой элемент из левой панели</p>
                </div>
              </div>
            )}
            {provided.placeholder}
      </div>
      )}
    </Droppable>
  )
}

export default Board;
