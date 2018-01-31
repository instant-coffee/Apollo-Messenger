import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import { channelsListQuery } from './ChannelsListWithData';

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.persist();
      mutate({
        variables: { name: event.target.value },
        refetchQueries: [{ query: channelsListQuery }],
      }) 
      .then( res => {
        event.target.value = ''
      })   
    }
  }
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  )
}

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`

const AddChannelWithMutation = graphql(addChannelMutation)(AddChannel)

export default AddChannelWithMutation