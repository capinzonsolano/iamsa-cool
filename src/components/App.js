//Dependencies
import React from 'react';
//Components
import Header from './Global/Header/Header';
import Content from './Global/Content/Content';
//Data
import itemsMenu from '../Data/data-menu';

// Assets
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        <Header items={itemsMenu}/>
        <Content
          body={this.props.children}
        />
      </div>);
  }
}

export default App;
