import React from 'react'
import EditCard from '../Card/EditCard'
import { Block, Section, Blocks, Part, Parts, Head, Partss } from './style'
import {Inputs} from './../Generic'

const MyProperties = () => {
  return (
    <>
    <Section>
      <Head>
          My properties
          <Inputs border={"none"} width={200} placeholder={"Search"}  />
      </Head>
        <Block>
          <Blocks>
            <Part>

          <Partss>Listing title</Partss>
          <Parts>
          <div>Date published</div>
          <div>Status</div>
          <div>View</div>
          <div>Action</div>
          </Parts>
            </Part>
          </Blocks>
          <Blocks>
          <EditCard/>
          </Blocks>
          <Blocks>
          <EditCard/>
          </Blocks>
          <Blocks>
          <EditCard/>
          </Blocks>
          <Blocks>
          <EditCard/>
          </Blocks>
        </Block>
    </Section>
    </>
  )
}

export default MyProperties