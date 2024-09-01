import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
    <div>
        Bristol
    </div>
    <div>
        Bath
    </div>
    <div>
        Glastonbury
    </div>
    <div>
        Salisbury
    </div>
    
    <div>Bradford-on-Avon</div>
<div>Keynsham</div>
<div>Radstock</div>
<div>Corsham</div>
<div>Chippenham</div>
<div>Trowbridge</div>
<div>Melksham</div>
<div>Frome</div>
<div>Warminster</div>
<div>Midsomer Norton</div>
<div>Westbury</div>
<div>Calne</div>
<div>Devizes</div>
<div>Shepton Mallet</div>
<div>Wells</div>
<div>Bruton</div>
<div>Peasedown St John</div>
<div>Paulton</div>
<div>Wellow</div>
<div>Norton St Philip</div>


    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`