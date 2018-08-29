// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import { range, clone, findIndex } from 'lodash';

type Props = {};

export const MenuIcon = (props) => (
  <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" version="1.1" xmlSpace="preserve" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.41421" {...props}>
    <rect x="0" y="0" width="64" height="64" fill="none" />
    <path d="M46.127,21.505c0.112,0.015 0.141,0.015 0.251,0.043c0.288,0.075 0.551,0.237 0.748,0.461c0.112,0.128 0.203,0.274 0.266,0.432c0.063,0.157 0.099,0.326 0.107,0.495c0.023,0.561 -0.278,1.1 -0.767,1.374c-0.149,0.082 -0.311,0.14 -0.478,0.168c-0.112,0.02 -0.141,0.017 -0.254,0.022l-28,0c-0.113,-0.005 -0.142,-0.002 -0.253,-0.022c-0.294,-0.05 -0.57,-0.189 -0.785,-0.395c-0.123,-0.118 -0.225,-0.256 -0.301,-0.408c-0.077,-0.151 -0.127,-0.316 -0.149,-0.484c-0.06,-0.468 0.11,-0.948 0.45,-1.274c0.092,-0.088 0.195,-0.164 0.306,-0.227c0.149,-0.082 0.311,-0.14 0.479,-0.168c0.111,-0.02 0.14,-0.017 0.253,-0.022l28,0c0.042,0.002 0.085,0.004 0.127,0.005Z" fillRule="nonzero" />
    <path d="M46.127,30.505c0.112,0.015 0.141,0.015 0.251,0.043c0.288,0.075 0.551,0.237 0.748,0.461c0.112,0.128 0.203,0.274 0.266,0.432c0.209,0.52 0.104,1.129 -0.266,1.55c-0.112,0.128 -0.246,0.236 -0.394,0.319c-0.149,0.082 -0.311,0.14 -0.478,0.168c-0.112,0.02 -0.141,0.017 -0.254,0.022l-28,0c-0.113,-0.005 -0.142,-0.002 -0.253,-0.022c-0.168,-0.028 -0.33,-0.086 -0.479,-0.168c-0.411,-0.231 -0.696,-0.652 -0.756,-1.119c-0.016,-0.127 -0.016,-0.255 0,-0.382c0.022,-0.168 0.072,-0.333 0.149,-0.484c0.076,-0.152 0.178,-0.29 0.301,-0.408c0.215,-0.206 0.491,-0.345 0.785,-0.395c0.111,-0.02 0.14,-0.017 0.253,-0.022l28,0c0.042,0.002 0.085,0.004 0.127,0.005Z" fillRule="nonzero" />
    <path d="M46.127,39.505c0.112,0.015 0.141,0.015 0.251,0.043c0.288,0.075 0.551,0.237 0.748,0.461c0.37,0.421 0.475,1.03 0.266,1.55c-0.063,0.158 -0.154,0.304 -0.266,0.432c-0.112,0.128 -0.246,0.236 -0.394,0.319c-0.149,0.082 -0.311,0.14 -0.478,0.168c-0.112,0.02 -0.141,0.017 -0.254,0.022l-28,0c-0.113,-0.005 -0.142,-0.002 -0.253,-0.022c-0.294,-0.05 -0.57,-0.189 -0.785,-0.395c-0.092,-0.088 -0.172,-0.188 -0.239,-0.297c-0.248,-0.401 -0.291,-0.908 -0.115,-1.345c0.064,-0.158 0.154,-0.304 0.266,-0.432c0.112,-0.128 0.246,-0.236 0.394,-0.319c0.149,-0.082 0.311,-0.14 0.479,-0.168c0.111,-0.02 0.14,-0.017 0.253,-0.022l28,0c0.042,0.002 0.085,0.004 0.127,0.005Z" fillRule="nonzero" />
  </svg>
)
export const HeaderBar = (props) => {
  return (
    <div className={styles.headerBar}>
      <span/>
      <span>Odrerir v1</span>
      <MenuIcon className={styles.headerMenu} onClick={props.onMenuToggle}/>
    </div>
  )
}

export const Hexagon = (props) => {
  return (
    <div className={`${styles.hexagon} ${styles[`octave-${props.octave}`]} ${props.className || ''}`}>
      <span>{props.note}</span>
    </div>
  )
}

export const arrayRotate = (arr, count) => {
  const array = clone(arr)
  count -= array.length * Math.floor(count / array.length)
  array.push.apply(array, array.splice(0, count))
  return array
};

export const AllKeysOutline = (props) => (
  <svg width="173px" height="184px" viewBox="0 0 173 184" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Path-3" stroke="#FF0000" strokeWidth="4" points="69.4297197 181.592124 52.6185414 152.024524 20.1738037 152.024524 2.58423713 121.466652 20.1738037 91.0827477 2.58423713 61.0367393 20.1738037 31.0342224 52.6185414 31.0342224 69.4297197 2.31972624 103.132369 2.31972624 119.636875 31.0342224 153.11426 31.0342224 170.011306 61.0367393 153.11426 91.0827477 170.011306 121.466652 153.11426 152.024524 119.636875 152.024524 103.132369 181.592124"></polygon>
      </g>
  </svg>
)

export const noteRow = [ 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯' ]
export const noteValue = { 'C': 1, 'C♯': 2, 'D': 3, 'D♯': 4, 'E': 5, 'F': 6, 'F♯': 7, 'G': 8, 'G♯': 9, 'A': 10, 'A♯': 11, 'B': 12 }
// export const allRows = noteRow.concat(noteRow)
export const allRows = noteRow;
export const sharpToFlat = { 'A♯': 'B♭', 'C♯': 'D♭', 'D♯': 'E♭', 'F♯': 'G♭', 'G♯': 'A♭' }
export const rowIncrease = -3;
export const numberOfRowsToRender = 17;
export const octaveStart = 6;

export const Home = (props) => {
  let increase = 0;
  let octaveRegister = [];
  return (
    <div className={styles.container} data-tid="container">
      <HeaderBar onMenuToggle={props.toggleMenu}/>
      <div className={styles.rowsContainer}>
        {range(0,numberOfRowsToRender).map((row, rowIndex) => {
          if (rowIndex === 0) { increase = 0; octaveRegister = []; }
          increase += rowIndex ? (rowIndex % 2 ? rowIncrease : (rowIncrease - 1)) : 0;
          console.log({rowIndex, increase})
          const thisRow = arrayRotate(allRows, increase);
          return (
            <div class={styles.row} style={{ left: rowIndex % 2 ? 50 : 0 }}>
              {thisRow.map((note, index) => {
                if (index > 10 || (index > 9 && rowIndex % 2)) { return null }
                if (index === 0) {
                  if (octaveRegister.length === 0) {
                    octaveRegister[0] = noteValue[note];
                  } else {
                    if (octaveRegister[octaveRegister.length - 1] < noteValue[note]) {
                      octaveRegister[octaveRegister.length] = noteValue[note]
                    } else {
                      octaveRegister[octaveRegister.length - 1] = noteValue[note]
                    }
                  }
                }
                const cIndex = findIndex(thisRow, n => n === 'C')
                let octave = octaveRegister[octaveRegister.length - 1] > 1 ? octaveStart - (octaveRegister.length) : octaveStart - (octaveRegister.length +1);
                octave += (index >= cIndex ) ? 1 : 0
                return (
                  <Hexagon octave={octave} note={`${note}${octave}`} className={(index === (allRows.length/2)) ? styles.highlight : ''}/>
                )
              })}
            </div>
          );
        })}
      </div>

      <div className={styles.overlayContainer}>
        <AllKeysOutline className={styles.overlay} />
      </div>
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}
