import React from 'react';
 
 import ArticleSourceUI from './ArticleSourceUI';
 
 import { Props, MotionState, Style, OwnProps, StateProps, DispatchProps } from './types';
 
 function ArticleSource({}: Props) {
 	 const [style, setStyle] = React.useState<Style>({});
 	 const [motionState, setMotionState] = React.useState<MotionState>({});
 
 	 return <ArticleSourceUI />;
 }
 export default ArticleSource;

