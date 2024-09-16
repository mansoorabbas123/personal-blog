"use client"

import BaseHeading from '@tiptap/extension-heading'
import BaseLink from '@tiptap/extension-link'
import { mergeAttributes } from '@tiptap/core'

type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
}

export const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
})

export const Link = BaseLink.configure().extend({
  inclusive: false,
}) 