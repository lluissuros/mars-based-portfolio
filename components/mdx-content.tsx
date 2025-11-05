import { JSX, ReactNode } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'
import SendEmailToMyselfButton from '@/components/send-email-to-myself-button'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props }: any) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Helper function to extract text from React children
function extractText(children: ReactNode): string {
  if (typeof children === 'string') {
    return children
  }
  if (typeof children === 'number') {
    return children.toString()
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join('')
  }
  if (children && typeof children === 'object' && 'props' in children) {
    const childWithProps = children as { props: { children?: ReactNode } }
    return extractText(childWithProps.props.children)
  }
  return ''
}

// Helper function to generate ID from heading text
function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Heading({ as: Component, children, ...props }: any) {
  const text = extractText(children)
  const id = generateHeadingId(text)

  return (
    <Component id={id} {...props}>
      {children}
    </Component>
  )
}

const components = {
  code: Code,
  h1: (props: JSX.IntrinsicElements['h1']) => <Heading as='h1' {...props} />,
  h2: (props: JSX.IntrinsicElements['h2']) => <Heading as='h2' {...props} />,
  h3: (props: JSX.IntrinsicElements['h3']) => <Heading as='h3' {...props} />,
  h4: (props: JSX.IntrinsicElements['h4']) => <Heading as='h4' {...props} />,
  h5: (props: JSX.IntrinsicElements['h5']) => <Heading as='h5' {...props} />,
  h6: (props: JSX.IntrinsicElements['h6']) => <Heading as='h6' {...props} />,
  Counter,
  SendEmailToMyselfButton
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
