import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';
const Project = ({ color, img, title, desc, live, front, node, rails, id }) => {
  const nodeBackend =
    node === '' ? (
      ''
    ) : (
      <a target="_blank" rel="noopener noreferrer" href={node}>
        <FaNodeJs className="logo" />
      </a>
    );

  const railsBackend =
    rails === '' ? (
      ''
    ) : (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={rails}
      >
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="1.42222in"
          height="1.42222in"
          viewBox="0 0 128 128"
        >
          <path
            id="Imported Path"
            fill="white"
            stroke="black"
            strokeWidth="0"
            d="M 100.56,10.82
           C 90.81,6.01 80.82,5.52 70.60,9.13
             61.19,12.46 53.69,18.41 48.11,26.51
             38.67,40.23 31.81,55.19 27.97,71.45
             26.00,79.77 24.72,87.75 25.07,97.20
             26.92,98.86 24.72,98.86 24.72,98.86
             24.72,98.86 72.94,98.86 72.94,98.86
             72.80,98.86 72.71,98.57 72.59,98.26
             70.05,91.79 68.05,85.37 66.66,78.56
             64.66,68.78 63.62,59.02 65.68,49.14
             68.56,35.31 76.45,25.44 89.73,20.27
             97.26,17.34 104.40,18.23 110.67,24.46
             110.67,24.46 112.72,21.37 112.72,21.37
             108.77,17.61 104.44,14.68 99.68,12.34
             99.68,12.34 100.56,10.82 100.56,10.82 Z
           M 25.07,75.15
           C 25.07,75.15 15.62,74.44 15.62,74.44
             15.62,74.44 14.55,83.59 14.55,83.59
             14.55,83.59 23.44,84.65 23.44,84.65
             23.44,84.65 25.07,75.15 25.07,75.15 Z
           M 33.07,47.14
           C 30.18,46.01 27.49,44.95 24.71,43.86
             23.78,46.50 22.91,48.95 22.00,51.54
             25.86,57.20 23.82,60.06 24.73,60.06
             24.73,60.06 27.28,52.93 27.28,52.93
             27.28,52.93 33.07,47.14 33.07,47.14 Z
           M 72.54,89.99
           C 75.61,96.07 81.95,88.85 70.16,87.83
             65.63,84.61 63.51,87.72 69.93,87.32
             69.48,86.55 69.47,84.90 69.90,82.48
             69.88,75.06 69.30,84.58 70.98,86.51
             72.66,95.55 69.30,95.55 69.30,95.55
             69.30,95.55 72.54,89.99 72.54,89.99 Z
           M 47.24,23.89
           C 47.24,23.89 40.89,19.68 40.89,19.68
             39.19,21.58 37.55,23.42 35.81,25.36
             35.81,25.36 42.34,29.75 42.34,29.75
             42.34,29.75 47.24,23.89 47.24,23.89 Z
           M 67.48,66.52
           C 65.11,68.80 68.51,71.12 69.48,73.63
             72.58,73.53 67.50,73.46 65.83,73.34
             60.52,73.32 65.53,73.18 65.10,72.96
             64.25,70.86 63.94,68.73 62.83,66.39
             59.32,66.27 64.96,66.14 66.80,66.07
             72.61,66.07 64.96,66.07 64.96,66.07
             64.96,66.07 67.48,66.52 67.48,66.52 Z
           M 65.59,8.87
           C 65.59,8.87 61.24,3.93 61.24,3.93
             61.24,3.93 55.26,7.05 55.26,7.05
             55.26,7.05 59.61,12.36 59.61,12.36
             59.61,12.36 65.59,8.87 65.59,8.87 Z
           M 68.32,48.15
           C 66.62,49.31 70.06,49.72 71.86,51.21
             77.39,56.45 69.05,47.59 73.11,45.80
             72.80,45.78 72.30,45.57 72.13,44.25
             70.87,41.09 69.68,39.43 68.41,43.52
             69.86,42.08 71.16,41.49 72.52,41.49
             72.52,41.49 68.32,48.15 68.32,48.15 Z
           M 78.27,6.28
           C 80.55,10.75 85.09,6.04 76.64,5.93
             73.77,5.31 72.57,5.85 76.28,5.31
             75.45,4.33 75.42,3.09 76.10,0.85
             75.85,-6.06 75.41,3.07 80.13,8.54
             80.13,8.54 78.27,6.28 78.27,6.28 Z
           M 80.97,34.77
           C 81.08,34.42 80.35,33.99 79.88,33.06
             77.66,29.68 76.48,27.91 76.48,27.91
             76.48,27.91 72.68,31.40 72.68,31.40
             72.68,31.40 77.94,37.23 77.94,37.23
             78.64,36.00 79.27,34.94 79.86,33.85
             79.86,33.85 80.97,34.77 80.97,34.77 Z
           M 85.07,23.17
           C 85.88,24.67 86.61,26.03 87.34,27.39
             90.89,25.44 91.24,24.73 89.98,21.93
             89.98,21.93 85.07,23.17 85.07,23.17
             85.07,23.17 85.07,23.17 85.07,23.17 Z
           M 102.07,10.17
           C 104.46,13.21 103.76,14.80 104.62,14.80
             104.62,14.80 105.68,13.14 105.68,13.14
             105.68,13.14 99.76,8.81 99.76,8.81
             98.79,8.60 101.26,8.64 102.46,10.37
             103.80,10.37 101.26,10.37 101.26,10.37
             101.26,10.37 102.07,10.17 102.07,10.17 Z
           M 106.00,21.87
           C 103.00,21.52 102.00,21.17 100.00,20.81
             100.00,20.81 100.00,23.52 100.00,23.52
             102.00,23.70 103.00,23.86 106.00,24.04
             106.00,24.04 106.00,21.87 106.00,21.87 Z
           M 18.92,104.53
           C 18.92,104.53 18.92,126.00 18.92,126.00
             18.92,126.00 24.40,126.00 24.40,126.00
             24.40,126.00 24.40,120.41 24.40,120.41
             24.40,120.41 29.38,125.39 29.38,125.39
             29.38,125.39 37.78,125.39 37.78,125.39
             37.78,125.39 31.12,118.73 31.12,118.73
             31.12,118.73 35.91,118.65 36.28,111.72
             36.28,105.36 31.48,104.53 25.93,104.53
             25.93,104.53 18.92,104.53 18.92,104.53
             18.92,104.53 18.92,104.53 18.92,104.53 Z
           M 24.66,110.36
           C 24.66,110.36 29.38,110.36 29.38,110.36
             29.38,110.36 29.38,114.18 29.38,114.18
             29.38,114.18 24.66,114.18 24.66,114.18
             24.66,114.18 24.66,110.36 24.66,110.36 Z
           M 48.36,104.62
           C 45.36,104.60 40.94,97.46 54.27,97.46
             54.27,97.46 54.27,112.38 54.27,112.38
             54.27,112.38 59.89,112.38 59.89,112.38
             59.89,112.38 59.89,108.73 59.89,108.73
             59.89,108.73 65.34,108.73 65.34,108.73
             65.34,108.73 65.34,112.30 65.34,112.30
             65.34,112.30 70.98,112.30 70.98,112.30
             70.98,112.30 70.98,96.65 70.98,96.65
             70.98,91.75 65.53,91.55 62.61,91.55
             62.61,91.55 61.42,91.55 61.42,91.55
             61.42,91.55 48.36,104.62 48.36,104.62 Z
           M 59.97,96.94
           C 59.97,96.94 65.25,96.94 65.25,96.94
             65.25,96.94 65.25,102.82 65.25,102.82
             65.25,102.82 59.97,102.82 59.97,102.82
             59.97,102.82 59.97,96.94 59.97,96.94
             59.97,96.94 59.97,96.94 59.97,96.94 Z
           M 63.55,104.63
           C 63.55,104.63 69.36,104.63 69.36,104.63
             69.36,104.63 69.36,125.17 69.36,125.17
             69.36,125.17 63.55,125.17 63.55,125.17
             63.55,125.17 63.55,104.63 63.55,104.63 Z
           M 75.45,104.91
           C 75.45,104.91 75.45,125.44 75.45,125.44
             75.45,125.44 89.45,125.44 89.45,125.44
             89.45,125.44 89.45,119.99 89.45,119.99
             89.45,119.99 81.18,119.99 81.18,119.99
             81.18,119.99 81.18,104.82 81.18,104.82
             81.18,104.82 75.36,104.82 75.36,104.82
             75.36,104.82 75.45,104.91 75.45,104.91 Z
           M 107.99,104.72
           C 107.99,104.72 107.99,110.27 107.99,110.27
             107.99,110.27 98.63,110.27 98.63,110.27
             98.63,110.27 98.63,112.26 98.63,112.26
             98.63,112.26 102.62,112.26 102.62,112.26
             102.62,112.26 109.08,112.17 109.08,118.72
             109.08,125.26 106.08,125.62 99.99,125.62
             99.99,125.62 92.63,125.62 92.63,125.62
             92.63,125.62 92.63,120.62 92.63,120.62
             92.63,120.62 101.08,120.62 101.08,120.62
             103.63,120.62 103.77,119.80 103.77,119.07
             103.77,118.35 102.47,118.02 99.82,118.02
             97.17,118.02 92.27,116.72 92.27,111.63
             92.27,106.54 94.81,104.63 99.90,104.63
             104.99,112.81 108.08,112.81 108.08,112.81
             108.08,112.81 107.99,104.72 107.99,104.72 Z"
          />
        </svg>
      </a>
    );

  return (
    <div className="project" style={{ backgroundImage: color }}>
      <p className="work-number">{id}</p>

      <img src={img} alt="" />
      <div className="stack">
        <div>
          <a
            className="sub-title"
            target="_blank"
            rel="noopener noreferrer"
            href={live}
          >
            <p>
              {title} <TiArrowForward className="arrow" />
            </p>
          </a>
        </div>
        <div style={{ float: 'right', marginTop: '10px' }}>
          <a target="_blank" rel="noopener noreferrer" href={front}>
            {front ? <FaReact className="logo" /> : null}
          </a>
          {nodeBackend}
          {railsBackend}
        </div>
      </div>

      <p className="title">{desc}</p>
    </div>
  );
};

export default Project;
