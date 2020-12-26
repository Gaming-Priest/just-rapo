/* eslint-disable max-len */

import React from 'react'
import {Segment, Container} from 'semantic-ui-react'

const Layout = (props) => (
    <Container id="layout" fluid>
    <Segment raised>
    {props.children}
    </Segment>
    </Container>
)

export default Layout;


