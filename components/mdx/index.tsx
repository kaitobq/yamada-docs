import * as CalendarComponents from '@yamada-ui/calendar'
import * as CarouselComponents from '@yamada-ui/carousel'
// import * as DropzoneComponents from '@yamada-ui/dropzone'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import * as UIComponents from '@yamada-ui/react'
import * as TableComponents from '@yamada-ui/table'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { CodeBlock } from './code-block'
import { Link } from './link'
import { LinkedHeading } from './linked-heading'

const { Heading, Text, Kbd, Divider } = UIComponents

export const MDXUIComponents = {
  ...UIComponents,
  ...CarouselComponents,
  // ...DropzoneComponents,
  ...TableComponents,
  ...CalendarComponents,
  FontAwesomeIcon,
} as unknown as MDXComponentsType

export const MDXBaseComponents: MDXComponentsType = {
  h1: (props) => <Heading as='h1' apply='mdx.h1' {...props} />,
  h2: (props) => <LinkedHeading as='h2' apply='mdx.h2' {...props} />,
  h3: (props) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  h5: (props) => <Heading as='h5' apply='mdx.h5' {...props} />,
  h6: (props) => <Heading as='h6' apply='mdx.h6' {...props} />,
  p: (props) => <Text apply='mdx.p' {...props} />,
  strong: (props) => <Text as='strong' apply='mdx.strong' {...props} />,
  code: (props) => <Text as='code' apply='mdx.code' {...props} />,
  pre: (props) => <CodeBlock {...props} />,
  a: (props) => <Link apply='mdx.a' {...props} />,
  hr: (props) => <Divider apply='mdx.hr' {...props} />,
  kbd: Kbd,
}

export const MDXComponents = {
  ...MDXUIComponents,
  ...MDXBaseComponents,
} as unknown as MDXComponentsType
