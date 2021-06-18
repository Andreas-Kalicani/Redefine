import styled from 'styled-components';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll'




/*const IconWrapper = styled.div ` 
    color: brown;

`;*/

const TextContainer = styled.div ` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: blck;
    

height: 20%;

`;






 const LandingPageText = () =>  {
     const [checked, setChecked] = useState(false);
     useEffect(() => {
         setChecked(true);
     },[])
    
    
    return ( 
    
        <div> 
            
            <h1>Heading</h1>
            <TextContainer> 
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,<br /> sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            </TextContainer>
              <Scroll to='H1' smooth={true}> 
             <icons> 
                 <FaAngleDown style={{ fontSize: '36px' }} />  
            </icons>
            </Scroll>
        </div>

       
    
    );
}

export default LandingPageText;