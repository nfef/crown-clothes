import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


const Directory = ({ sections }) => {
  console.log('SECTIONS VALUE', sections);
  return (
  <div className='directory-menu'>
  {
    sections.map( ({id, title, imageUrl, size ,linkurl}) => (
      <MenuItem key={id} title={title}  imageUrl={imageUrl} size={size} linkurl={linkurl}/>
    ) )
  }
</div>
);
}    
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);