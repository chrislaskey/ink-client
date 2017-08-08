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

export const getLabel = gql`
  query Label($id: Int!) {
    label(id: $id) {
      ...LabelReadAttributes
      ...LabelWriteAttributes
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`

export const createLabel = gql`
  mutation CreateLabel($color: String!, $name: String!) {
    create_label(color: $color, name: $name){
      ...LabelReadAttributes
      ...LabelWriteAttributes
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`

export const updateLabel = gql`
  mutation UpdateLabel($id: Int!, $name: String!, $color: String!) {
    update_label(id: $id, label: {name: $name, color: $color}) {
      ...LabelReadAttributes
      ...LabelWriteAttributes
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`

export const deleteLabel = gql`
  mutation DeleteLabel($id: Int!) {
    delete_label(id: $id) {
      ...LabelReadAttributes
      ...LabelWriteAttributes
    }
  }
  ${labelReadAttributes}
  ${labelWriteAttributes}
`
