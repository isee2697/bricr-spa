import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

interface DirectoryIconProps extends DefaultSvgIconProps {
  id: string;
  variant?: 'primary' | 'secondary';
  weight?: number;
}

export const DirectoryIcon = (props: DirectoryIconProps) => {
  const theme = useTheme();
  const { id = '', variant = 'primary', weight: weightProp = 0 } = props;
  const weight = weightProp > 5 ? 5 : weightProp;
  const color = variant === 'primary' ? theme.palette.blueGradients : theme.palette.aquaGradients;

  const filterId = id + '_filter';
  const paintId = id + '_paint';

  return (
    <SvgIcon width="93" height="74" viewBox="0 0 93 74" fill="none" {...props}>
      <g filter={`url(#${filterId})`}>
        {weight > 1 && (
          <path
            d="M48.7664 10.499C50.138 11.6154 51.9887 12.2414 53.9172 12.2414H56.7693H64.1759C62.2475 12.2414 60.3968 11.6154 59.0251 10.499L54.4096 6.74248C53.0378 5.62603 51.1872 5 49.2588 5H39C40.9284 5 42.7792 5.62603 44.1508 6.74248L48.7664 10.499Z"
            fill={color[200]}
          />
        )}
        {weight > 0 && (
          <path
            d="M34.1506 6.74248L38.7662 10.499C40.1378 11.6154 41.9886 12.2414 43.917 12.2414H46.7692H54.1758C52.2473 12.2414 50.3966 11.6154 49.025 10.499L44.4094 6.74248C43.0376 5.62603 41.187 5 39.2586 5H29.183H29C30.9284 5 32.779 5.62617 34.1506 6.74248Z"
            fill={color[100]}
          />
        )}
        <path
          d="M84.6034 12.069H67.0172H64.1651H56.7584H53.9063H46.5H43.6479C41.7194 12.069 39.8687 11.4429 38.4971 10.3265L33.8815 6.56999C32.5097 5.45355 30.6591 4.82751 28.7307 4.82751H18.6552H8.39659C5.96845 4.82751 4 6.44859 4 8.44824V15.6897V16.8966V61.5518C4 63.5515 5.96845 65.1726 8.39659 65.1726H84.6034C87.0316 65.1726 89 63.5515 89 61.5518V15.6897C89 13.6899 87.0316 12.069 84.6034 12.069ZM53.8276 20.5172C53.8276 21.8502 52.5154 22.931 50.8966 22.931H49.431C47.8122 22.931 46.5 21.8502 46.5 20.5172V19.3103C46.5 17.9773 47.8122 16.8965 49.431 16.8965H50.8966C52.5154 16.8965 53.8276 17.9773 53.8276 19.3103V20.5172ZM83.138 20.5172C83.138 21.8502 81.8258 22.931 80.207 22.931H59.6896C58.0708 22.931 56.7586 21.8502 56.7586 20.5172V19.3103C56.7586 17.9773 58.0708 16.8965 59.6896 16.8965H80.2068C81.8256 16.8965 83.1378 17.9773 83.1378 19.3103L83.138 20.5172Z"
          fill={`url(#${paintId})`}
        />
        <path
          d="M80.4482 17H59.931C58.3122 17 57 18.0808 57 19.4138V20.6207C57 21.9537 58.3122 23.0345 59.931 23.0345H80.4482C82.067 23.0345 83.3792 21.9537 83.3792 20.6207V19.4138C83.3794 18.0808 82.0672 17 80.4482 17Z"
          fill={color[100]}
        />
        <path
          d="M50.8966 16.8966H49.431C47.8122 16.8966 46.5 17.9774 46.5 19.3104V20.5173C46.5 21.8503 47.8122 22.9311 49.431 22.9311H50.8966C52.5154 22.9311 53.8276 21.8503 53.8276 20.5173V19.3104C53.8276 17.9774 52.5154 16.8966 50.8966 16.8966Z"
          fill={color[200]}
        />
        {weight > 2 && (
          <path
            d="M58.7664 10.499C60.138 11.6154 61.9887 12.2414 63.9172 12.2414H66.7693H74.1759C72.2475 12.2414 70.3968 11.6154 69.0251 10.499L64.4096 6.74248C63.0378 5.62603 61.1872 5 59.2588 5H49C50.9284 5 52.7792 5.62603 54.1508 6.74248L58.7664 10.499Z"
            fill={color[300]}
          />
        )}
        {weight > 3 && (
          <path
            d="M68.7664 10.499C70.138 11.6154 71.9887 12.2414 73.9172 12.2414H76.7693H84.1759C82.2475 12.2414 80.3968 11.6154 79.0251 10.499L74.4096 6.74248C73.0378 5.62603 71.1872 5 69.2588 5H59C60.9284 5 62.7792 5.62603 64.1508 6.74248L68.7664 10.499Z"
            fill={color[400]}
          />
        )}
        {weight > 4 && (
          <path
            d="M78.7664 10.499C80.138 11.6154 81.9887 12.2414 83.9172 12.2414H85.5H86L82.5 9C81.1282 7.88355 77.9284 5 76 5H69C70.9284 5 72.7792 5.62603 74.1508 6.74248L78.7664 10.499Z"
            fill={color[600]}
          />
        )}
      </g>
      <defs>
        <filter
          id={filterId}
          x="0"
          y="0"
          width="93"
          height="78"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id={paintId} x1="12.5" y1="16" x2="84" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor={color[100]} />
          <stop offset="1" stopColor={color[500]} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};
