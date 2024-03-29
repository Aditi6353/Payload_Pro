import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const EMPLOYEES = `
  query employees {
    employees(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const EMPLOYEE = `
  query employee($slug: String, $draft: Boolean) {
    employees(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        relatedEmployee{
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`
