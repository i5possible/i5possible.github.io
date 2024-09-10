import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React, {
  Component,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from 'react'

type TableData = {
  data: {
    headers: string[]
    rows: string[][]
  }
}

const Table: React.FC<TableData> = ({ data }) => {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type CustomLinkProps = {
  href?: string
  children?: React.ReactNode
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  let { href, children, ...other } = props
  if (!href) return <a {...props} />

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...other}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

type RoundedImageProps = {
  alt: string
  src: string
}

const RoundedImage: React.FC<RoundedImageProps> = (props) => {
  const { alt, src, ...others } = props
  return <Image alt={alt} src={src} className="rounded-lg" {...others} />
}

type CodeProps = {
  children?: ReactNode
  // TODO: Add more props
}

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  let codeHTML = highlight(children!.toString())
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const slugify = (str: ReactNode) => {
  return str!
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

const createHeading = (
  level: number,
): Component<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> => {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading as unknown as Component<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

const CustomMDX: React.FC<MDXRemoteProps> = (props) => {
  return (
    <MDXRemote
      {...props}
      components={
        {
          ...components,
          ...(props.components || {}),
        } as unknown as MDXRemoteProps['components']
      }
    />
  )
}

export { CustomMDX }
