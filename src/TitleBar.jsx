import React from 'react';
const Title = ({handleTheme,theme}) => {
    return ( 
        <nav  className={(theme)?'navbar navbar-expand-lg secondary-light':'navbar navbar-expand-lg secondary-dark'}>
            <span>Where in the world?</span>
            <span>
                <button onClick={handleTheme}>
                    {
                        (theme)?'Light Mode':'Dark Mode'
                    }
                </button>
                </span>
        </nav>
     );
}
 
export default Title;