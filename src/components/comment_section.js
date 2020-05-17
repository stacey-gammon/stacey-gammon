import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

export const CommentSection = ({ id, title, siteUrl, location }) => {
  let disqusConfig = {
    url: `${siteUrl+location.pathname}`,
    identifier: id,
    title,
  }

  return (
    <>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}