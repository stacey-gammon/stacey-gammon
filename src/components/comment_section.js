import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

export const CommentSection = (props) => {
  console.log('props', props);
  const { post, siteUrl, location } = props;
  let disqusConfig = {
    url: `${siteUrl+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}