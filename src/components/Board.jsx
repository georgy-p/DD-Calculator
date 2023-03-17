import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as AddLogo } from '../img/add.svg';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../itemTypes';
import { constructorComponents } from './constructor';
// style={{ background: '#F0F9FF' }}

const Board = () => {
  const elements = useSelector((state) => state.ui.elements.board);
  const renderElements = () => (
    <div style={{display: 'flex', flexDirection: 'column', border: 'none', alignItems: 'center' }}>
      {elements.map((el) => <div key={el}>{constructorComponents[el]()}</div>)}
    </div>
  )
  const renderBoard = () => (
    <div className="board-inner-container">
        <AddLogo />
        <p className="board-text-highlight" >Перетащите сюда</p>
        <div className="board-text">
          <p>любой элемент из левой панели</p>
        </div>
    </div>
  );

  const containerRender = elements.length > 0 ? renderElements() : renderBoard();
  
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Board' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  let backgroundColor = isActive ? '#F0F9FF' : '#fff';

  return (
        <div ref={drop} style={{ backgroundColor }}
          className="rounded board-outer-container"
          >
          {containerRender}
      </div>
  )
}

export default Board;
