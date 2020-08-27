import React from 'react';
import Chip from './Chip';
import { BoardNumbers } from './BoardNumbers';
import './App.css';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: BoardNumbers, // main board numbers
         itemsRight: [{ "id": 37, "number": "2 to 1" }, { "id": 38, "number": "2 to 1" }, { "id": 39, "number": "2 to 1" }],
         bottomNumbers: [{ "id": 40, "text": "1st 12" }, { "id": 41, "text": "2nd 12" }, { "id": 42, "text": "3rd 12" }],
         lastRowNumbers: [{ "id": 43, "text": "1-18" }, { "id": 44, "text": "EVEN" }, { "id": 45, "text": "" }, { "id": 46, "text": "" }, { "id": 47, "text": "ODD" }, { "id": 48, "text": "19-36" }],

         currentItem: {
           count: ''
         }
      }
   }

   // this function is used to update count and for setting current clicked item
   updateItem = (item) => {
      const updatedItem = { ...item, count: item.count ? <>{item.count}<Chip/></> : <Chip/> }
      this.setState({
         currentItem: updatedItem
      });

      return updatedItem;
   }

   // filter the required item to update its count
   // set state with new items
   appendChild(id) {
      if (id >= 37 && id <= 39) {
         const itemsRight = this.state.itemsRight.map((item) => 
            item.id === id ? this.updateItem(item) : item
         );

         this.setState({
            itemsRight
         });
      }

      else if (id >= 40 && id <= 42) {
         const bottomNumbers = this.state.bottomNumbers.map((item) => 
            item.id === id ? this.updateItem(item) : item
         );

         this.setState({
            bottomNumbers
         });
      }

      else if (id >= 43 && id <= 48) {
         const lastRowNumbers = this.state.lastRowNumbers.map((item) => 
            item.id === id ? this.updateItem(item) : item
         );

         this.setState({
            lastRowNumbers
         });
      }

      else {
         const items = this.state.items.map((item) => 
            item.id === id ? this.updateItem(item) : item
         );
         
         this.setState({
            items
         });
      }
   }

   render() {
      const mainBoardNumbers = this.state.items.map((item) =>
         <div key={item.id} className={(item.color === "black") ? 'black-item' : 'red-item'}>
            <button onClick={this.appendChild.bind(this, item.id)} className={item.count ? 'value hideValue' : 'value'}>
               {item.id}
               {item.count}
            </button>
         </div>
      );

      const boardRightNumbers = this.state.itemsRight.map((item) =>
         <div key={item.id} className="column-item">
            <button onClick={this.appendChild.bind(this, item.id)} className={item.count ? 'value hideValue' : 'value'}>
               {item.number}
               {item.count}
            </button>
         </div>
      );

      const boardUpperBottom = this.state.bottomNumbers.map((item) =>
         <div key={item.id} className="doz-item">
            <button onClick={this.appendChild.bind(this, item.id)} className={item.count ? 'hideValue' : ''}>
               {item.text}
               {item.count}
            </button>
         </div>
      );

      const boardLastRow = this.state.lastRowNumbers.map((item) =>
         <div key={item.id} className="outside-section">
            <button onClick={this.appendChild.bind(this, item.id)} className={item.count ? 'hideValue' : ''}>
               {item.text}
               {item.count}
            </button>
         </div>
      );

      return (
         <div className="mainWrapper">
            <div className="container-first">
               {mainBoardNumbers}

               {boardRightNumbers}
            </div>

            <div className="container-second">
               {boardUpperBottom}
            </div>
         
            <div className="container-third">
               {boardLastRow}
            </div>
         </div>
      );
   }
}

export default App;