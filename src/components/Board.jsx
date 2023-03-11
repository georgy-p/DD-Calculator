import React from 'react';
import { ReactComponent as AddLogo } from '../img/add.svg';

const Board = () => {
  return (
    <div className="rounded board-outer-container">
          <div className="board-inner-container">
              <AddLogo />
              <p className="board-text-highlight" >Перетащите сюда</p>
              <div className="board-text">
                <p>любой элемент из левой панели</p>
              </div>
          </div>
    </div>

  )
}

export default Board;
