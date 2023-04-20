'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, useState } from 'react';
import { Portal } from 'components';

type CustomTooltip = typeof Tooltip & {
  Text: typeof Text;
};

type XPosition = 'top' | 'left' | 'bottom' | 'right';
type YPostion = '-start' | '' | '-end';
type Position = `${XPosition}${YPostion}`;

interface TooltipProps extends Partial<HTMLAttributes<HTMLElement>> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  position?: Position;
  arrow?: boolean;
}

interface TooltipTextProps extends Partial<HTMLAttributes<HTMLElement>> {
  children?: React.ReactNode;
}

interface TooltipContextProps {
  as: React.FC<React.HTMLAttributes<HTMLElement>>;
  rect?: DOMRect;
  setRect: React.Dispatch<React.SetStateAction<DOMRect | undefined>>;
  position: Position;
  arrow: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const TooltipContext = createContext({} as TooltipContextProps);

const useTooltip = () => {
  return useContext(TooltipContext);
};

const Tooltip = ({ as: Wrapper = 'div', children, position, arrow, ...props }: TooltipProps) => {
  const [rect, setRect] = useState<DOMRect>();
  const [show, setShow] = useState<boolean>(false);
  return (
    <TooltipContext.Provider
      value={{
        show,
        setShow,
        as: Wrapper as never as React.FC<React.HTMLAttributes<HTMLElement>>,
        arrow: arrow || false,
        position: position || 'bottom',
        rect: rect,
        setRect,
      }}
    >
      <TooltipWrapper {...props}>{children}</TooltipWrapper>
    </TooltipContext.Provider>
  );
};

const Text = ({ children, ...props }: TooltipTextProps) => {
  // container.id = 'tooltip';
  const textRef = useRef<HTMLDivElement>(null);
  const { show, rect, position, arrow } = useTooltip();

  const setStylePosition = (): React.CSSProperties => {
    if (!rect) {
      return { top: 0, left: 0 };
    }
    const { width, height, top, left } = rect;
    switch (position) {
      case 'bottom':
        return { top: top + height, left: left + width / 2, transform: 'translateX(-50%)' };
      case 'bottom-end':
        return { top: top + height, left: left + width, transform: 'translateX(-100%)' };
      case 'bottom-start':
        return { top: top + height, left: left };
      case 'top':
        return { top: top, left: left + width / 2, transform: 'translate(-50%, -100%)' };
      case 'top-end':
        return { top: top, left: left + width, transform: 'translate(-100%, -100%)' };
      case 'top-start':
        return { top: top, left: left, transform: 'translateY(-100%)' };
      case 'right':
        return { top: top + height / 2, left: left + width, transform: 'translate(0%, -50%)' };
      case 'right-end':
        return { top: top + height, left: left + width, transform: 'translateY(-100%)' };
      case 'right-start':
        return { top: top, left: left + width };
      case 'left':
        return { top: top + height / 2, left: left, transform: 'translate(-100%, -50%)' };
      case 'left-end':
        return { top: top + height, left: left, transform: 'translate(-100%, -100%)' };
      case 'left-start':
        return { top: top, left: left, transform: 'translateX(-100%)' };
      default:
        return { top: rect?.top || 0, left: rect?.bottom || 0 };
    }
  };

  if (!rect) return null;

  return (
    <Portal selector="#portal">
      {show && (
        <div
          ref={textRef}
          className={`fixed ${arrow && `tooltip-arrow tooltip-${position}`} ${props.className || 'tooltip'}`}
          role="tooltip"
          style={{ ...setStylePosition() }}
        >
          {children}
        </div>
      )}
    </Portal>
  );
};

Text.displayName = 'Text';

const TooltipWrapper = React.memo(({ children, ...props }: TooltipProps) => {
  const { setRect, as: Wrapper, setShow } = useTooltip();
  const hide = () => setShow(false);
  useEffect(() => {
    document.addEventListener('scroll', hide);
    return () => {
      document.removeEventListener('scroll', hide);
    };
  }, []);
  const onMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    setRect(e.currentTarget.getBoundingClientRect());
    setShow(true);
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setShow(false);
  };
  return (
    <Wrapper onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} {...props}>
      {children}
    </Wrapper>
  );
});

Object.assign(Tooltip, { Text });

export default Tooltip as CustomTooltip;
