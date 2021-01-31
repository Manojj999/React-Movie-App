import React from 'react';
import PageNotFound from '../components/images/Animation/astronaout.json'
import Lottie from 'react-lottie';
const NotFound = () => {
    const PageNotFoundOptions = {
        loop: true,
        autoplay: true,
        animationData: PageNotFound,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(

     <>

     <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Lottie 
	      options={PageNotFoundOptions}
        height={400}
        width={400}
      />
  

     <h1 style={{fontSize:120,margin:0}}>4 0 4</h1>
      <h4 style={{fontSize:50,margin:0}}>Page Not Found</h4>
 
     </div>
     </>
    )
    }

export default NotFound;