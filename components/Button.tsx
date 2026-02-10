/**
 * Button Component
 * Reusable button with variants, sizes, and animations
 * Requirements: 1.5, 8.2
 */

'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  ripple?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

interface RippleEffect {
  x: number;
  y: number;
  size: number;
  id: number;
}

/**
 * Button Component
 * 
 * Features:
 * - Three variants: primary, secondary, outline
 * - Three sizes: sm, md, lg
 * - Ripple effect on click
 * - Hover scale animation
 * - Support for both button and link (href) modes
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  ripple = true,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const [ripples, setRipples] = useState<RippleEffect[]>();
  const rippleIdRef = useRef(0);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary-600 hover:bg-primary-50 shadow-md hover:shadow-lg border border-primary-200',
    outline: 'bg-transparent text-primary-600 border-2 border-primary-500 hover:bg-primary-50 hover:border-primary-600',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Base styles
  const baseStyles = 'relative overflow-hidden rounded-lg font-medium transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Handle ripple effect
  const handleRipple = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!ripple || disabled) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: RippleEffect = {
      x,
      y,
      size,
      id: rippleIdRef.current++,
    };

    setRipples((prev) => [...(prev || []), newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => (prev || []).filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  // Handle click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    handleRipple(event);
    if (onClick && !disabled) {
      onClick();
    }
  };

  // Motion variants for hover animation
  const hoverVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Common props for both button and link
  const commonProps = {
    ref: buttonRef as any,
    className: combinedStyles,
    onClick: handleClick,
    'aria-label': ariaLabel,
    'aria-disabled': disabled,
  };

  // Ripple elements
  const rippleElements = ripples?.map((ripple) => (
    <span
      key={ripple.id}
      className="absolute rounded-full bg-white opacity-50 animate-ripple pointer-events-none"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
        animation: 'ripple 600ms ease-out',
      }}
    />
  ));

  // Render as link if href is provided
  if (href && !disabled) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={hoverVariant}
        className="inline-block"
      >
        <Link
          {...commonProps}
          href={href}
          className={combinedStyles}
        >
          {rippleElements}
          <span className="relative z-10">{children}</span>
        </Link>
      </motion.div>
    );
  }

  // Render as button
  return (
    <motion.button
      {...commonProps}
      type={type}
      disabled={disabled}
      initial="rest"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      variants={hoverVariant}
    >
      {rippleElements}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Add ripple animation to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.5;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  if (!document.querySelector('style[data-ripple-animation]')) {
    style.setAttribute('data-ripple-animation', 'true');
    document.head.appendChild(style);
  }
}
