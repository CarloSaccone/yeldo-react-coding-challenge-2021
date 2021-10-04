/** @jsxImportSource theme-ui */

import style from './style';



export default ({data}) => {
    const {title} = data
    return (<div sx={style}  >{title}</div>);
}
        
