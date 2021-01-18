import React from 'react';
 
 import { PropsUI } from './types';
 
 import './article-source.scss';
 
 function ArticleSourceUI({}: PropsUI) {
 	 return (
 		 <div className='article-source'></div>
 	 );
 }
 
 export default React.memo(ArticleSourceUI);

