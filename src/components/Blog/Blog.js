// Dependencies
import React from 'react'
// Components
import PanelLeft from '../Global/Panels/Panel-left'
import PanelRight from '../Global/Panels/Panel-right'
// Assets
import '../panel-text.css'

class Blog extends React.Component {
  render() {
    return (<div className="Items">
      <div className="row Items-row">
        <PanelLeft>
          <h2 className='Items-title'>Blog</h2>
          izquierda
        </PanelLeft>
        <PanelRight>
          derecha
        </PanelRight>
      </div>
    </div>);
  }
}

export default Blog;
