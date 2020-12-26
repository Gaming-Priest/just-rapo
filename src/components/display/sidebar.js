import React from 'react'
import MenuBar from './menu'
import {
   Button,
   Dropdown,
   Checkbox,
   Grid,
   Header,
   Icon,
   Image,
   Menu,
   Segment,
   Sidebar,
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible }) => (
   <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
    id='sidemenu'
  >
    <Menu.Item
    className='sidemenu'
    as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
    <Menu.Item as='a'>
    Home
    </Menu.Item>
      <Dropdown text='pages' pointing='left' className='link-item'>
         <Dropdown.Menu id='dropmenu'>
            <Dropdown.Item as='a'>home</Dropdown.Item>
            <Dropdown.Item as='a'>about</Dropdown.Item>
            <Dropdown.Item as='a'>contact</Dropdown.Item>
            <Dropdown.Item as='a'>suport</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
  </Sidebar>
)

function DocSidebar(props) {
   const [state, setState] = React.useState(false)

   return (
      <div>
    <Segment id="nav-prop" raised >
     <Header id="nav">
        <Icon 
        id="nav-button"
        onClick={() =>
        (!state) ? setState(true) : setState(false)
         }
        name='bars' 
        size="large" />
      <MenuBar />
      </Header>
      </Segment>
      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        
       
          <VerticalSidebar
            animation='overlay'
            direction='left'
            visible={state}
          />
      

        <Sidebar.Pusher>
          <Segment id="Pcontainer" basic>
          {props.children}
           </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
   )
}

export default DocSidebar;





const getOptions = (number, prefix = 'Choice ') =>
   _.times(number, (index) => ({
      key: index,
      text: `${prefix}${index}`,
      value: index,
   }))

const DropdownExampleFluid = () => (
   <Menu vertical>
    <Menu.Item as='a'>Link 1</Menu.Item>
    <Menu.Item as='a'>Link 2</Menu.Item>
    <Menu.Item header>All Sections</Menu.Item>
    <Menu.Item>
      <Dropdown placeholder='More' fluid selection options={getOptions(3)} />
    </Menu.Item>
  </Menu>
)

