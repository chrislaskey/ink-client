import { gql } from 'react-apollo'

export const labelReadAttributes = gql`
  fragment LabelReadAttributes on Label {
    id
  }
`

export const labelWriteAttributes = gql`
  fragment LabelWriteAttributes on Label {
    name
    color
  }
`

export const getLabels = gql`
  query Labels {
    labels {
      ...LabelReadAttributes
      ...LabelWriteAttributes
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`

export const createLabel = gql`
  mutation CreateLabel($name: String!, $userId: Int!) {
    create_label(name: $title, userId: $userId){
      ...LabelReadAttributes
      ...LabelWriteAttributes
      user {
        name
      }
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`
