import React from 'react';
import Chip from './Chip';
import { BoardNumbers } from './BoardNumbers';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: BoardNumbers, // all board items
      currentItem: {
        count: ''
      }
    }
  }

  // this function is used to update count and for setting current clicked item
  updateItem = (item) => {
    const updatedItem = { ...item, count: item.count ? <>{item.count}<Chip/></> : <Chip/>}
    this.setState({
      currentItem: updatedItem
    })
    
    return updatedItem;
  }
  
  appendChild(id) {
    // filter the required item to update its count
    const items = this.state.items.map((item) => 
      item.id === id ? this.updateItem(item) : item
    )
    
    // set state with new items
    this.setState({
      items
    })
  }

  resetBoard() {
    this.setState({
      items: BoardNumbers
    })
  }

  render() {
    const boardItems = this.state.items.map((item) => 
      <div key={item.id} className={(item.color === "black") ? 'black-item' : 'red-item'}>
        <div onClick={this.appendChild.bind(this, item.id)} className="value">
          {item.id}
          {item.count}
        </div>
      </div>
    );

    return (
      <>
        <div onClick={() => this.resetBoard()}>Reset</div>

        <div className="mainWrapper">
            <div className="container-first">
            <div className="zero-item">
              <div className="value">0</div>
            </div>

            {boardItems}

            <div className="column-item">
              <div className="value">2-1</div>
            </div>
            <div className="column-item">
              <div className="value">2-1</div>
            </div>
            <div className="column-item">
              <div className="value">2-1</div>
            </div>
          </div>

          <div className="container-second">
            <div className="doz-item">
              <div>1st 12</div>
            </div>
            <div className="doz-item">
              <div>2nd 12</div>
            </div>
            <div className="doz-item">
              <div>3rd 12</div>
            </div>
          </div>
          
          <div className="container-third">
            <div className="outside-section">
              <div>1-18</div>
            </div>
            <div className="outside-section">
              <div>EVEN</div>
            </div>
            <div className="outside-section">
              <div><div className="rhomb-red"></div></div>
            </div>
            <div className="outside-section">
              <div><div className="rhomb-black"></div></div>
            </div>
            <div className="outside-section">
              <div>ODD</div>
            </div>
            <div className="outside-section">
              <div>19-36</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;