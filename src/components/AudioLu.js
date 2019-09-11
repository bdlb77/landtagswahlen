import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import Part1 from "../media/PART_1.mp3"
import Part2 from "../media/PART_2.mp3"
import Part3 from "../media/PART_3.mp3"
import Part4 from "../media/PART_4.mp3"
import Part5 from "../media/PART_5.mp3"
import Part6 from "../media/PART_6.mp3"
import Part7 from "../media/PART_7.mp3"

const Svg = styled.svg`
  height: 75px;
  width: 75px;
  fill: ${props => props.theme.secondary};
`

const AudioLu = () => {
  const [playingM, setPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(Part7)
  const trackArray = [Part1, Part2, Part3, Part4, Part5, Part6, Part7]

  const togglePlay = () => {
    setPlaying(!playingM)
  }

  const changeTrack = () => {
    const index = trackArray.indexOf(currentTrack)
    let nextIndex = index + 1;
    let nextTrack = trackArray[nextIndex]

    if (nextIndex === 7) {
      nextTrack = trackArray[0]
      setPlaying(false)
    }
    return setCurrentTrack(nextTrack)
  }

  return (
    <>
      <ReactPlayer
        url={currentTrack}
        playing={playingM}
        height={0}
        width={0}
        onEnded={changeTrack}
      ></ReactPlayer>
      <Svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1021.000000pt"
        viewBox="0 0 1280.000000 1021.000000"
        preserveAspectRatio="xMidYMid meet"
        onClick={togglePlay}
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,1021.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M6539 10204 c-79 -15 -191 -103 -1789 -1419 l-1640 -1350 -1267 -5
  -1268 -5 -80 -27 c-201 -69 -362 -218 -439 -408 -59 -145 -57 -58 -54 -1920 3
  -1606 5 -1708 21 -1765 72 -238 236 -410 477 -497 l65 -23 1273 -5 1272 -5
  1641 -1350 c902 -742 1660 -1362 1685 -1376 99 -58 229 -62 337 -11 81 38 142
  98 180 180 l32 67 5 1190 5 1190 23 44 c70 131 198 507 267 781 133 532 187
  1002 187 1615 0 604 -54 1080 -183 1600 -67 269 -185 619 -273 805 l-26 55 0
  1163 c0 1153 0 1163 -21 1225 -51 150 -175 245 -332 252 -40 2 -84 1 -98 -1z"
          />
          <path
            d="M10780 9386 c-246 -46 -443 -196 -551 -421 -56 -116 -73 -190 -73
                      -325 0 -199 33 -283 223 -568 152 -228 241 -380 360 -622 307 -622 484 -1281
                      532 -1980 16 -243 7 -674 -21 -903 -107 -912 -428 -1747 -953 -2482 -146 -205
                      -190 -323 -191 -515 0 -210 74 -389 221 -537 136 -136 344 -222 533 -222 192
  0 404 89 540 228 80 82 276 364 424 609 547 908 862 1891 958 2992 16 189 16
  822 0 1000 -89 954 -305 1727 -707 2530 -197 394 -496 870 -630 1005 -172 171
  -431 253 -665 211z"
          />
          <path
            d="M8661 8374 c-274 -74 -465 -363 -421 -639 17 -112 44 -168 169 -360
                      141 -216 179 -281 261 -445 478 -955 559 -2045 226 -3050 -122 -370 -306 -739
                      -521 -1045 -145 -205 -176 -283 -176 -440 0 -168 49 -284 171 -405 121 -121
  237 -171 405 -171 201 -1 353 80 484 255 477 638 818 1466 945 2291 67 437 73
  962 16 1410 -102 799 -388 1560 -845 2250 -179 270 -330 366 -573 364 -48 0
  -111 -7 -141 -15z"
          />
        </g>
      </Svg>
    </>
  )
}
export default AudioLu
