import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DocHeader = () => (
   <Segment id="head" clearing raised>
    <Header className="head" block>
     <h1>SEMANTIC UI TEMPLATE PAGE</h1>
   <Link to='#' className="link"><Icon name="sign in" floated='right'/></Link>
     </Header>
  </Segment>
)
// 
export default DocHeader;