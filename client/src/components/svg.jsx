import React from 'react';
import styles from './styles/svg.css';

module.exports = {
  search:
  <svg
    className={styles.searchIcon}
    viewBox="0 0 24 24"
    role="presentation"
    fillRule="evenodd"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" />
  </svg>,
  flag:
  <svg
    className={styles.flag}
    x="0px"
    y="0px"
    viewBox="0 0 60 60"
  >
    <path d="M51.371,3.146c-0.459-0.185-11.359-4.452-19.84,0.045C24.811,6.758,13.015,4.082,10,3.308V1c0-0.553-0.447-1-1-1   S8,0.447,8,1v3c0,0.014,0.007,0.026,0.008,0.04C8.008,4.052,8,4.062,8,4.074V33v1.074V59c0,0.553,0.447,1,1,1s1-0.447,1-1V35.375   c2.273,0.567,7.227,1.632,12.368,1.632c3.557,0,7.2-0.511,10.101-2.049c7.652-4.061,18.056,0.004,18.16,0.045   c0.309,0.124,0.657,0.086,0.932-0.102C51.835,34.716,52,34.406,52,34.074v-30C52,3.665,51.751,3.298,51.371,3.146z M50,32.665   c-3.26-1.038-11.646-3.096-18.469,0.525C24.812,36.756,13.02,34.082,10,33.308V33V5.375c3.853,0.961,15.381,3.343,22.469-0.417   C39.035,1.475,47.627,3.973,50,4.777V32.665z" />
  </svg>,
  close:
  <svg
    width="64"
    viewBox="0 0 64 64"
    className={styles.close}
    enableBackground="new 0 0 64 64"
  >
    <g>
      <path
        fill="#1D1D1B"
        d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
      />
    </g>
  </svg>,
  searchClose:
  <svg
    width="64"
    viewBox="0 0 64 64"
    className={styles.searchClose}
    enableBackground="new 0 0 64 64"
  >
    <g>
      <path
        fill="#1D1D1B"
        d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
      />
    </g>
  </svg>,
  next:
  <svg
    viewBox="0 0 41.999 41.999"
    className={styles.nextButton}
  >
    <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40   c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20   c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
  </svg>,
  prev:
  <svg
    viewBox="0 0 41.999 41.999"
    className={styles.nextButton}
    transform="scale(-1, 1)"
  >
    <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40  c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20  c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
  </svg>,
  superUser:
  <svg
    viewBox="0 0 14 24"
    role="img"
    focusable="false"
    className={styles.superUser}
  >
    <path d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823" fill="#fff" />
    <path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z" fill="#ffb400" />
    <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f" />
    <path d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z" fill="#484848" />
  </svg>,
  star:
  <svg
    viewBox="0 0 1000 1000"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className={styles.star}
  >
    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
  </svg>,
  halfStar:
  <svg
    viewBox="0 0 1000 1000"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className={styles.halfStar}
  >
    <defs>
      <linearGradient id="half">
        <stop stopOpacity="1" offset="50%" stopColor="#008489" />
        <stop stopOpacity=".3" offset="50%" stopColor="#008489" />
      </linearGradient>
    </defs>
    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
  </svg>,
  emptyStar:
  <svg
    viewBox="0 0 1000 1000"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    className={styles.emptyStar}
  >
    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
  </svg>,
};
