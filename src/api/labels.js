import { gql } from 'react-apollo'
import { labelAttributes, noteAttributes } from './attributes'

export const getLabels = gql`
  query Labels {
    labels {
      ...LabelAttributes
    }
  }
  ${labelAttributes}
`

export const getLabel = gql`
  query Label($id: Int!) {
    label(id: $id) {
      ...LabelAttributes
      notes {
        ...NoteAttributes
      }
    }
  }
  ${labelAttributes}
  ${noteAttributes}
`

export const createLabel = gql`
  mutation CreateLabel($color: String!, $name: String!) {
    create_label(color: $color, name: $name){
      ...LabelAttributes
    }
  }
  ${labelAttributes}
`

export const updateLabel = gql`
  mutation UpdateLabel($id: Int!, $name: String!, $color: String!) {
    update_label(id: $id, label: {name: $name, color: $color}) {
      ...LabelAttributes
    }
  }
  ${labelAttributes}
`

export const deleteLabel = gql`
  mutation DeleteLabel($id: Int!) {
    delete_label(id: $id) {
      ...LabelAttributes
    }
  }
  ${labelAttributes}
`
