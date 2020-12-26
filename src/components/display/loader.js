import React from 'react'
import { Image, Segment } from 'semantic-ui-react'

const SegmentExampleLoading = () => (
   <Segment loading>
   
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </Segment>
)

export default SegmentExampleLoading;

import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleSizes = () => (
   <div>
    <Segment>
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleSizes