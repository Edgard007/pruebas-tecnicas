interface IconProps {
  onClick: () => void;
}

export const WorldIcon = ({ onClick }: IconProps): JSX.Element => (
  <svg
    fill="var(--color-secundary)"
    height="800px"
    width="800px"
    version="1.1"
    id="Layer_1"
    // xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    // xml:space="preserve"
    onClick={onClick}
  >
    <path
      d="M236.3,65.6c1.2,0,2.7,0.6,4,2.4c-5.8-8.3,6.5-4.7,7.2-12.6c7-5.2,4.5-8.6,6.5-8.8l2.2-1.8c-4.3,1.6-5.8,1.9-7,1.9
	c-0.3,0-0.6,0-0.9,0c-0.3,0-0.7,0-1.1,0c-1.5,0-4,0.3-9.9,2.1c-13.5,1-23.2,15.6-27.8,16c-4.7,2.5-4.5,3-3.4,3
	c0.3,0,0.7-0.1,1.1-0.1c0.4,0,0.7-0.1,1-0.1c1.1,0,0.8,0.5-5.6,3.5c1.5,0.4-11.2,6-11.3,14.8c-0.4,3.4,1,5.7,3.3,5.7
	c2,0,4.5-1.5,7.2-5.3c9-10.4,28-11.4,36.2-17.7C232.9,68.2,233.9,65.6,236.3,65.6z M190.6,69.1c-0.9,0,0.3-1.1,1.6-2.2
	c1.4-1.1,3-2.2,3-2.2c0,0,0,0-0.1,0.1c5.4-2.1,2.1-2.6,5-4c-0.1,0-0.1,0-0.2,0c-0.6,0,0.5-0.8,1.5-1.7c1-0.8,1.9-1.7,1-1.7
	c-0.5,0-1.8,0.3-4,1.2c0.7-1,3.4-1.7,7.2-3.8c-5.5,1.8-9.8,2.9-10.3,2.9c-0.4,0,1.9-0.8,8.8-2.9c0.3,0,0.6,0.1,0.8,0.1
	c0.7,0,1-0.2,0.9-0.4c-0.1-0.2-0.5-0.3-1.2-0.3h0c-9.9,0.8-17.3,7-15.1,7.8c1.3-0.4,2.2-0.6,2.8-0.6c1.3,0,0.7,1.1-1.9,2.7
	c1.2,2.8-20,10-22.4,12.6c1.2-0.7,2-0.9,2.4-0.9c1.6,0-0.5,3.1-2.6,4.6c1.3,1.2,2.3,1.6,3.1,1.6c2.1,0,3-2.9,4.8-3.8
	c0.4,0.8,0.8,1.2,1.3,1.2c1.7,0,3.8-4.2,5.5-6.4c0.5,0.5,1.1,0.9,1.9,0.9c1.6,0,4-1.3,7.8-5C191.4,69,190.8,69.1,190.6,69.1z
	 M167.6,87.5c-3.6,2.2-5.5,3.1-6.3,3.1c-1.5,0,0.5-2.8,2.3-5.7c1.8-2.8,3.4-5.6,1.1-5.6c-1.1,0-3.1,0.6-6.3,2.2
	c-8.7,5.8-23.4,21.8-29.9,21.8c-0.2,0-0.4,0-0.6,0c10.5-7.7,7.4-22.8,22.1-26.7c14.5-8.3,24.4-5.7,37.3-15.2c-3.8,1.9-9.4,4-10.7,4
	c-0.8,0,0.4-1,5.6-3.5c-0.5,0.1-0.9,0.2-1.2,0.2c-3.5,0,23-9.5,24.3-9.7C194.4,53.9,176.8,63,174.4,63c-0.3,0-0.3-0.1-0.3-0.3
	c0.4-0.3,0.4-0.5,0-0.5c-1.3,0-6.7,1.8-12.2,3.6c-5.4,1.8-10.9,3.7-12.1,3.7c-0.4,0-0.4-0.2,0.2-0.6c-47.2,26.8-86.6,72-98.9,125.6
	c5.1,11.7,1.6,34,10,40.5c9.6,8.1-8.2,31.6-3.5,46.1c4.8,26.2,25.5,44.1,27.7,70.9c3.8,18.4,17.7,40.9,23.5,52.6
	c4.4,4.4,16.5,17.1,18.6,17.1c0.8,0,0.3-1.9-2.9-7c-2-5.7-13.6-20.6-8-20.6c0.3,0,0.6,0,1,0.1c-6.9-7,15.3-5.1-0.2-14.6
	c-1.8-2.2-2.2-2.9-1.8-2.9c0.5,0,1.9,0.8,3.5,1.6c1.7,0.8,3.7,1.6,5.3,1.6c2.5,0,4.2-1.7,3.2-7.9c0.4,0.2,0.8,0.2,1.1,0.2
	c2.6,0,1.7-5.1,1.9-10.2c0.2-5.1,1.5-10.2,8.5-10.2c0.8,0,1.7,0.1,2.6,0.2c16.2-8.8,2.1-33.1,20.7-42c-0.7-20.2-27.8-21.2-38-29.4
	c-1.7,1-3.3,1.3-4.9,1.3c-1.8,0-3.4-0.4-4.8-0.9c-1.4-0.4-2.7-0.9-3.6-0.9c-0.2,0-0.4,0-0.6,0.1c17.4-4.6,4.7-28.8-9.7-28.8
	c-0.3,0-0.7,0-1,0c-1.1-10.5-6.5-6.5-7.1-15.2c-0.9,0.5-1.8,0.7-2.7,0.7c-2.4,0-4.6-1.7-6.5-3.3c-1.9-1.7-3.5-3.3-4.9-3.3
	c-1.1,0-2.1,1.1-3,4.3c1-4.9,0.7-6.5-0.3-6.5c-1,0-2.8,1.7-4.8,3.4c-1.9,1.7-4.1,3.4-5.8,3.4c-0.2,0-0.3,0-0.5,0
	c-11.7-8.3,0.1-23-6.1-34.3c4-4.3,5.6-11.6,3.8-11.6c-0.9,0-2.7,1.8-5.5,6.7c-4-10.2,6.6-33.3,15.6-34.6c0.3,0,0.5-0.1,0.8-0.1
	c1.6,0,3.2,0.8,4.6,2.5c0.8,4.7-1.2,14.6-0.4,14.6c0.4,0,1.2-2,3.2-7.2c2.6-11.9,20.8-20.5,22.7-27.8c0.1,0.1,0.1,0.1,0.2,0.1
	c2.1,0,15.6-11.9,21.5-13.2c2.3-2.3,3.9-3.1,5.1-3.1c1.3,0,2,1,2.5,1.9c0.5,1,0.9,1.9,1.4,1.9c0.4,0,0.9-0.6,1.8-2.3
	c-3.1-6.1,4.9-11.9,2.7-11.9c-0.8,0-3.2,0.8-8.1,2.8c-0.8,0.4-1.2,0.5-1.4,0.5c-0.6,0,1.8-1.6,5.3-3.2c3.5-1.6,7.9-3.2,11.6-3.2
	c1.8,0,3.4,0.4,4.6,1.4c15.5-3.7,7-8.8,7.8-8.8c0,0,0.1,0,0.2,0C162.4,103.4,161.1,93.6,167.6,87.5z M98.3,128.4
	c-0.2,0,0.7-1.3,3.7-5c6.2-4.6,11.2-7.7,5.5-10.7c2.5-1.1,4.9-2.4,7.2-3.8c-0.1,4.9-4.2,16.8-6.4,16.8c-0.5,0-1-0.7-1.2-2.2
	c1.3-2.3,1.4-3.2,0.9-3.2c-0.8,0-3.1,2-5.3,4.1C100.5,126.3,98.5,128.4,98.3,128.4z M104,131.1c-2.7,0-2.2-1.7,6.1-3.4
	c3.6-0.5,0.8-0.3,5.1-1.3C111,129.8,106.3,131.1,104,131.1z M259.5,121c1.2-0.2,2.1-0.2,2.8-0.2c2.9,0,1.6,1.2-0.1,2.4
	c-1.7,1.2-3.8,2.4-2.6,2.4c0.7,0,2.6-0.4,6.5-1.5c19.7-1.4-7.7-18.1-3.3-23.7l-1.2-0.4C253.5,110.3,267,110.5,259.5,121z
	 M251.3,121.4c1.4,0,3.2-1.6,5.1-6.1c2.6-3.1,1.5-3.5-1.3-5C247.4,112.3,248.1,121.4,251.3,121.4z M320.3,153.1
	c-0.3,0-0.5,0.1-0.7,0.2c0.8,0.2,1.6,0.4,2.4,0.4C321.2,153.3,320.7,153.1,320.3,153.1z M454.6,178c1.7,3.7,2.6,5.2,2.7,5.2
	c0.7,0-12.6-32.4-18.1-38.2c-28.7-47.2-75.9-83.3-129.7-96.8h-0.1c-1.4,0,0.2,0.7,2.1,1.4c1.9,0.7,4.2,1.4,4.2,1.4
	c0,0-1.5-0.5-6.1-1.8c-5.1-1.5-10.3-2.6-15.6-3c-0.9,0.3,21.9,9.3,37.2,14c-5.1-1.6-10.4-3-11.7-3c-0.9,0,0,0.6,3.7,2.2
	c-4.5-1.3-6.4-1.9-6.6-1.9c-0.3,0,6,2.1,11.9,4.2c6,2.1,11.7,4.2,10.1,4.2c-0.4,0-1.5-0.2-3.2-0.5c5.1,2.8,6.9,3.9,6.6,3.9
	c-0.5,0-6.8-3-13.3-6c-6.4-3-12.9-6-13.8-6c-0.5,0,0.8,1,5.2,3.6c6,2.6,12,5.2,10.3,5.2c-0.8,0-3.1-0.5-7.6-1.8
	c10,5.1-7.1,3.1-1.3,10c-3.2-3-4.5-4-4.8-4s0.5,1.2,1.3,2.4c0.8,1.2,1.4,2.4,0.7,2.4c-0.1,0-0.1,0-0.2,0c7,7.6-4.9,0.8,3.6,7.6
	c-6.4-2.9-17.3-7.7-12.4-7.7c1.2,0,3.5,0.3,7.1,1.1c-6.5-7.6-24.9-7.9-25.3-8.8c-4.6,0.3-4.7,3.8-3.9,10.2
	c-0.1,10.1-10,10.3-8.7,16.1c0-0.1,0.1-0.1,0.1-0.1c0.2,0,0.3,2,0.9,4.1c0.7,2,1.9,4.1,4.5,4.1c1.4,0,3.2-0.6,5.4-2.1
	c3.1,5.6,5.9,7.6,8.1,7.6c3.3,0,5.3-4.5,5.1-8.6c-3.6-2-8.3-18.6-3.1-18.6c0.8,0,1.8,0.4,3.1,1.3c-8.1,19.9,32,6.6,9.3,15.7
	c5.1,6.7-3.2,6.4-0.8,14.5c-3.9,1.1-8.2,2.1-12,2.1c-5.6,0-9.9-2.4-9.4-10.8c-7,3.7,7,16.2-6.9,16.2h-0.8
	c-6.7,12.3-31.8,8.1-12.1,21.1c1.1,5.7-2.5,6.7-7.1,6.7c-1.2,0-2.5-0.1-3.8-0.2c-1.3-0.1-2.6-0.1-3.8-0.1c-5.2,0-8.9,1.3-5.7,9.4
	c-2.3,8.4,3.1,12.1,9.7,12.1c8,0,17.8-5.2,18.5-13.8c4.3-6.5,9.8-9.2,15.5-9.2c9,0,18.5,6.8,24.7,15.2c0.5,0.8,0.9,1.1,1.1,1.1
	c0.5,0,0-2-0.2-4c-0.2-1.6-0.2-3.2,0.4-3.7c-8.9-2.5-15.7-13.3-12.7-13.3c1,0,3.1,1.2,6.5,4.4c0.2,0,0.4,0,0.5,0
	c5.6,0,10,4.4,13.4,8.8c3.5,4.4,6.1,8.8,8.4,8.8c0.9,0,1.8-0.8,2.6-2.6c-0.4-0.6-1.4-2.3-1.9-4c-0.6-2.1-0.6-4.2,2.1-4.2
	c1.1,0,2.6,0.4,4.7,1.2c6.8-1.8-4.3-19.5,4.7-19.5c0.9,0,2,0.2,3.4,0.6c-0.1,3.1,1.3,4.2,2.6,4.2c2.6,0,5.2-3.7-1.1-4.8
	c2.4-2.3,3.8-3.2,4.8-3.2c3.5,0,0.7,11.6,12.8,11.6c4.1,9.7-35.6,0.7-22.9,19.3c2.9,2.1,6.5,2.5,10,2.5c1.1,0,2.1,0,3.1-0.1
	c1,0,2-0.1,2.9-0.1c6.2,0,10.6,1.5,7.9,14.3c-3.3,2.4-7,3.2-10.8,3.2c-3.4,0-6.8-0.6-10.1-1.2c-3.3-0.6-6.5-1.2-9.4-1.2
	c-4.5,0-8.1,1.5-10.3,6.7c-11.7-4.8-27.1-5-25.6-19.5c-20.4,2.9-41.7,1.4-56.7,13.9c-0.9,18.3-32.3,24.2-24.7,45
	c-9.1,19.2,11,46.1,31.5,46.1c0.7,0,1.5,0,2.2-0.1c11.2-0.1,22.5-5.1,32.4-5.1c5.1,0,9.7,1.3,13.7,5.3c0.9-0.1,1.7-0.2,2.4-0.2
	c15.3,0-4.9,24.3,13.4,28.4c16.6,17.2-10.2,34.9,2.9,51.4c1.4,12.9,7.8,23.7,7.8,36.3c1.7,0.2,3.3,0.3,5,0.3
	c21.1,0,34.3-18.4,46.7-32.3c-3.8-20.8,29.5-24.9,18.1-48.2c-5.3-25.5,25.1-40.6,23.4-66.1c0.3-3.6-0.7-4.7-2.2-4.7
	c-1.5,0-3.7,1.1-5.8,2.1c-2.2,1.1-4.6,2.1-6.5,2.1c-2.5,0-4.4-1.7-4.6-7.3c-14.7-13.7-21.4-32.3-35.1-47.4
	c17.8,8.6,27.9,28,36.1,45.6c0.7,0.2,1.4,0.3,2.2,0.3c14.5,0,34.7-34.7,12.7-43.1c-1.2,3.3-2.8,4.5-4.7,4.5c-3.3,0-7.1-4-9.8-7.9
	c-2.7-4-4.1-8-2.6-8c1,0,3.2,1.6,7,5.8c4.3,2.7,8.5,3.4,12.9,3.4c4.3,0,8.7-0.7,13.3-1.1c5.8,2.3,8.3,9.7,10.1,9.7
	c0.3,0,0.7-0.3,1-1c4.6,11,9.9,30.6,14.7,35.9C459.5,212.3,458.9,194.5,454.6,178z M398.8,154.9c-11.3-2.9-15-16.9-23.9-25
	c-0.1-2.2,3.2-1.8,2.4-5.5c12,3.7,8.1,7.4,7,8.1C388.7,139.8,401,144.8,398.8,154.9z M243.5,78.8c-10.9,3.2-12.4-0.3-10.5,6.4
	c0.8,0.6,2.3,0.8,3.8,0.8C242.1,86.1,249.3,83,243.5,78.8z M403.6,354.3c14.3-12.1,16.1-26.5,16.8-41.1
	C414,325.7,395,339.5,403.6,354.3z M338.5,159.3c-0.1,0.1-0.1,0.1-0.1,0.2c0.1,0.2,0.2,0.2,0.2,0.2
	C338.6,159.7,338.6,159.6,338.5,159.3z M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c141.4,0,256-114.6,256-256S397.4,0,256,0z
	 M256,492.3C125.5,492.3,19.7,386.5,19.7,256S125.5,19.7,256,19.7S492.3,125.5,492.3,256S386.5,492.3,256,492.3z"
    />
  </svg>
);

export const MoonIcon = ({ onClick }: IconProps): JSX.Element => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z"
      fill="var(--color-secundary)"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="var(--color-secundary)"
    />
  </svg>
);

export const SunIcon = ({ onClick }: IconProps): JSX.Element => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <circle cx="12" cy="12" r="3.5" stroke="var(--color-secundary)" />
    <path d="M12 5V3" stroke="var(--color-secundary)" strokeLinecap="round" />
    <path d="M12 21V19" stroke="var(--color-secundary)" strokeLinecap="round" />
    <path
      d="M16.9498 7.04996L18.364 5.63574"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
    <path
      d="M5.63608 18.3644L7.05029 16.9502"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
    <path
      d="M19 12L21 12"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
    <path
      d="M3 12L5 12"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
    <path
      d="M16.9498 16.95L18.364 18.3643"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
    <path
      d="M5.63608 5.63559L7.05029 7.0498"
      stroke="var(--color-secundary)"
      strokeLinecap="round"
    />
  </svg>
);
