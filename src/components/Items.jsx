import React, { useState } from "react";

export default function Items(props) {
  return (
    <div className="items">
      <li>{props.text}</li>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ff3a28">
              <path d="M45.74349,34.28802c-4.66401,0.00578 -8.85992,2.83567 -10.61285,7.15775c-1.75292,4.32207 -0.71362,9.27524 2.62873,12.52819l32.02604,32.02604l-32.02604,32.02604c-2.99552,2.87604 -4.20218,7.14678 -3.15461,11.16516c1.04756,4.01838 4.18566,7.15647 8.20404,8.20403c4.01838,1.04756 8.28912,-0.1591 11.16516,-3.15462l32.02604,-32.02604l32.02604,32.02604c2.87603,2.99556 7.14679,4.20225 11.1652,3.1547c4.0184,-1.04756 7.15652,-4.18567 8.20408,-8.20408c1.04756,-4.0184 -0.15913,-8.28917 -3.1547,-11.1652l-32.02604,-32.02604l32.02604,-32.02604c3.39139,-3.29657 4.4111,-8.33702 2.56778,-12.6926c-1.84331,-4.35558 -6.17151,-7.13275 -10.89903,-6.99334c-2.97902,0.08876 -5.80647,1.33381 -7.88333,3.47135l-32.02604,32.02604l-32.02604,-32.02604c-2.16155,-2.22196 -5.13056,-3.4742 -8.23047,-3.47135z"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
