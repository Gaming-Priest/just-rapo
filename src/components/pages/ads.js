import React from 'react'
//import SearchBox from '../display/search'
import { Segment, Grid, Search, Container, Advertisement } from 'semantic-ui-react'

const AdsSide = () => (
   <Advertisement unit='skyscraper' test='Skyscraper' />
)

const AdsMobile = () => (
   <div>
    <Advertisement unit='mobile banner' test='Mobile Banner' />
    <Advertisement unit='mobile leaderboard' test='Mobile Leaderboard' />
  </div>
)

const AdsBanner = () => (
   <Advertisement unit='banner' test='Banner' />
)

export const SideBox = (props) => (
   <Container id="sideBox" fluid>
      <Search
      id="searchBar"
       input={{ icon: 'search', iconPosition: 'left' }}
      />
      <Segment raised>
          <p>
            The dogs' value to early human hunter-gatherers led to them quickly
            becoming ubiquitous across world cultures. Dogs perform many roles for
            people, such as hunting, herding, pulling loads, protection, assisting
            police and military, companionship, and, more recently, aiding
            handicapped individuals. This impact on human society has given them the
            nickname "man's best friend" in the Western world. In some cultures,
            however, dogs are also a source of meat.
          </p>
          </Segment>
    </Container>
)

export default SideBox