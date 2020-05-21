import React from "react";
import './linkButton.less';
//通用按钮
export default function LinkButton(props) {
    return <button {...props} className='link-button'/>;
}