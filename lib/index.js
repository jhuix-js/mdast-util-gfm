/**
 * @import {Extension as FromMarkdownExtension} from 'mdast-util-from-markdown'
 * @import {Options} from '@jhuix/mdast-util-gfm'
 * @import {Options as ToMarkdownExtension} from 'mdast-util-to-markdown'
 */

import {
  gfmAutolinkLiteralFromMarkdown,
  gfmAutolinkLiteralToMarkdown
} from 'mdast-util-gfm-autolink-literal'
import {
  gfmFootnoteFromMarkdown,
  gfmFootnoteToMarkdown
} from 'mdast-util-gfm-footnote'
import {
  gfmStrikethroughFromMarkdown,
  gfmStrikethroughToMarkdown
} from 'mdast-util-gfm-strikethrough'
import {
  gfmTaskListItemFromMarkdown,
  gfmTaskListItemToMarkdown
} from 'mdast-util-gfm-task-list-item'
import {
  gfmTableFromMarkdown,
  gfmTableToMarkdown
} from '@jhuix/mdast-util-gfm-table'

/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM (autolink
 * literals, footnotes, strikethrough, tables, tasklists).
 *
 * @returns {Array<FromMarkdownExtension>}
 *   Extension for `mdast-util-from-markdown` to enable GFM (autolink literals,
 *   footnotes, strikethrough, tables, tasklists).
 */
export function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ]
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM (autolink
 * literals, footnotes, strikethrough, tables, tasklists).
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM (autolink literals,
 *   footnotes, strikethrough, tables, tasklists).
 */
export function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(options),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  }
}
