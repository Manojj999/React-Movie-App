import React from 'react';
import { StyledGrid,StyledGridContent} from '../styles/StyledGrid'


const Grid = ({header,children}) => {
    return(
        <diStyledGridv>
            <h1>{header}</h1>
            <StyledGridContent>
                {children}
            </StyledGridContent>
        </diStyledGridv>
    )
}
export default Grid;