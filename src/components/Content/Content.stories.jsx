import React from 'react';
import Content from './Content';

export default {
  title: 'Content',
  component: Content,
};

export const primary = () => (
  <Content
    title='This is title'
    content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, magni ad. Totam sit porro nisi suscipit, vitae explicabo placeat quod voluptate quaerat, accusamus iure? Vel dignissimos corrupti rerum suscipit repellat.'
  />
);
