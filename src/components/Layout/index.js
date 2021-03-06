import React from 'react';
import './style.css'

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
)

export default layout;
