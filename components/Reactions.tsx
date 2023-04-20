'use client';

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  QuestionMarkCircleIcon,
  EyeIcon,
  HeartIcon,
  FaceSmileIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { Tooltip } from 'components';
import { Reaction } from 'store/atoms';

interface ReactionProps {
  type: (typeof Reaction)[keyof typeof Reaction];
  className: string;
}

export default function Reactions({ type, className }: ReactionProps) {
  const Icon = ({ className }: { className: string }) => {
    switch (type) {
      case '+1':
        return <HandThumbUpIcon className={className} />;
      case '-1':
        return <HandThumbDownIcon className={className} />;
      case 'confused':
        return <QuestionMarkCircleIcon className={className} />;
      case 'eyes':
        return <EyeIcon className={className} />;
      case 'heart':
        return <HeartIcon className={className} />;
      case 'hooray':
        return (
          <svg
            className={className}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 96.03 122.88"
            xmlSpace="preserve"
          >
            <g>
              <path d="M50.39,0c3.59,0,6.84,1.46,9.19,3.81C61.94,6.16,63.4,9.41,63.4,13c0,3.59-1.46,6.84-3.82,9.19 C57.23,24.55,53.98,26,50.39,26c-3.59,0-6.84-1.46-9.19-3.81c-2.35-2.35-3.81-5.6-3.81-9.19c0-3.59,1.46-6.84,3.81-9.19 C43.55,1.46,46.8,0,50.39,0L50.39,0z M25.72,37.59l9.25-6.06c2.09-1.37,7.78-2.16,13.34-2.2c5.19-0.04,10.42,0.57,12.68,1.97 l9.33,6.11l1.4,0.93c0.33,0.22,0.59,0.43,0.81,0.62c0.28-0.28,0.65-0.61,1.13-0.99l1.55-1.21c0.79-0.61,1.57-1.25,2.36-1.92 c0.77-0.65,1.54-1.34,2.32-2.06c0.81-0.74,1.57-1.46,2.29-2.17c0.72-0.7,1.41-1.41,2.1-2.11l0.09-0.09 c1.31-1.33,3.04-2.02,4.78-2.04c1.7-0.02,3.42,0.59,4.75,1.84l0.1,0.09c1.33,1.31,2.02,3.04,2.04,4.78 c0.02,1.74-0.61,3.49-1.92,4.84c-0.81,0.84-1.64,1.67-2.47,2.49c-0.85,0.84-1.7,1.64-2.53,2.41c-0.87,0.8-1.77,1.6-2.7,2.39 c-0.91,0.77-1.87,1.55-2.89,2.34l-1.4,1.09c-0.02,0.02-0.15,0.13-0.17,0.13c-3.53,2.75-5.32,4.15-8.54,4.41l-0.05,0 c-1.79,0.13-3.2-0.14-4.68-0.79c-1.34-0.59-2.65-1.45-4.37-2.6l0.79,15.3l0.28,0.28c0.25,0.28,0.49,0.56,0.7,0.87 c0.88,1.26,1.77,2.54,2.64,3.84c0.9,1.34,1.82,2.74,2.74,4.21c0.89,1.41,1.76,2.85,2.59,4.32c0.83,1.46,1.63,2.97,2.4,4.54 c3.8,7.75,3.78,7.82,1.63,14.5c-0.08,0.26-0.17,0.52-0.25,0.77c-0.13,0.41-0.26,0.8-0.36,1.13c-0.02,0.02-4.88,15.98-5.33,17.5 c-0.6,1.97-1.94,3.52-3.63,4.42c-1.68,0.9-3.7,1.16-5.67,0.56l-0.02,0c-1.97-0.6-3.52-1.94-4.42-3.63 c-0.9-1.68-1.16-3.71-0.56-5.68l5.29-17.37l0.03-0.12l0.41-1.34l0.26-0.79c0.33-1.03,0.34-1.05-0.77-3.31l-0.04-0.07 c-0.61-1.24-1.28-2.48-1.99-3.73c-0.71-1.25-1.47-2.5-2.25-3.74c-0.42-0.66-0.9-1.39-1.41-2.17l-1.02-1.53l-0.11,0.01 c0.14,0.54,0.26,1.04,0.38,1.52c0.22,0.94,0.42,1.89,0.6,2.85c1.86,9.83,1.35,10.88-2.15,17.55c-0.04,0.09-0.08,0.17-0.13,0.25 l-0.61,1.18l-0.74,1.45l-7.71,15.38c-0.92,1.84-2.5,3.14-4.31,3.74c-1.8,0.6-3.83,0.52-5.67-0.39l-0.03-0.01 c-1.84-0.92-3.14-2.5-3.74-4.31c-0.6-1.8-0.52-3.84,0.39-5.67l7.72-15.41c0.58-1.16,1.05-2.06,1.46-2.84l0.07-0.14 c0.74-1.42,1.17-2.24,1.28-3.15c0.12-1-0.06-2.35-0.54-4.85c-0.15-0.79-0.32-1.58-0.5-2.36c-0.19-0.82-0.38-1.58-0.57-2.28 c-0.18-0.64-0.41-1.41-0.69-2.3l0.01,0c-0.23-0.73-0.51-1.55-0.84-2.48l-0.01-0.03c-0.08-0.24-0.15-0.47-0.2-0.69l-0.1-0.44 c-0.03-0.1-0.06-0.2-0.07-0.31l-3.06-27.98c-1.51,0.99-3.19,2-4.67,3.06c-1.79,1.19-3.13,2.08-4.51,2.68 c-1.48,0.65-2.89,0.92-4.68,0.79c-1.66-0.12-2.97-0.57-4.36-1.36c-1.24-0.71-2.53-1.71-4.22-3.04c-0.53-0.39-1.06-0.82-1.58-1.23 c-1.02-0.78-1.98-1.56-2.89-2.34c-0.93-0.79-1.83-1.59-2.7-2.39c-0.83-0.76-1.67-1.57-2.53-2.41c-0.83-0.82-1.66-1.65-2.47-2.49 c-1.31-1.35-1.95-3.1-1.92-4.84c0.02-1.71,0.68-3.41,1.97-4.71l0.08-0.08c1.35-1.31,3.1-1.95,4.84-1.92 c1.71,0.02,3.41,0.68,4.7,1.97l0.08,0.08c0.71,0.73,1.43,1.46,2.17,2.18c0.72,0.71,1.48,1.43,2.29,2.17 c0.78,0.72,1.56,1.41,2.32,2.06c0.78,0.67,1.57,1.31,2.36,1.92c0.51,0.4,1.03,0.83,1.55,1.21c0.48,0.38,0.85,0.71,1.14,0.99 c0.2-0.18,0.43-0.37,0.73-0.58C24.73,38.23,25.23,37.92,25.72,37.59L25.72,37.59z" />
            </g>
          </svg>
        );
      case 'laugt':
        return <FaceSmileIcon className={className} />;
      case 'rocket':
        return <RocketLaunchIcon className={className} />;
      default:
        return <></>;
        break;
    }
  };
  return (
    <Tooltip arrow position="left">
      <Icon className={className} />
    </Tooltip>
  );
}
