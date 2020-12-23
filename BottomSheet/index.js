import React from 'react';
import './style.scss';


export default function ButtomSheet({visible,onClose,children})
{

    React.useEffect(()=>{
        if(visible){
            document.body.style.overflowY="hidden";
        }
    })

    const handleclose = () => {
        if(onClose){
            onClose();
            document.body.style.overflowY="auto";
        }
    };

    return(
      <React.Fragment>
         {visible && (
              <div className="bottom-sheet">
              <div className="overlay" onClick={()=>handleclose()}></div>
              <div className="contents">{children}</div>
          </div>
          )}
      </React.Fragment>

    );
}

export const ButtomSheetIconButton=({icon,color,text,onClicked})=>
{
    return(
<div className="buttom-sheet-btn" onClick={onClicked && onClicked}>
    <div className="icon-text">
    <div className="shape" style={{backgroundColor:color}}>
    <img src={icon} alt=""/>
    </div>
    <p>{text}</p>
    </div>

    <div className="icon"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
{/* <circle cx="18" cy="16" r="13" fill="white"/> */}
</g>
<path d="M15.1583 20.825L18.975 17L15.1583 13.175L16.3333 12L21.3333 17L16.3333 22L15.1583 20.825Z" fill="#000486"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
</div>
</div>
    );
}