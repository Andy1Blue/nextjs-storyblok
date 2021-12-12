import React from 'react';
import DynamicComponent from '../components/DynamicComponent';
import { sbEditable } from '@storyblok/storyblok-editable';

const Grid = ({ blok }: any) => {
  return (
    <div className="grid" {...sbEditable(blok)}>
      {blok.columns.map((blok: any) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
