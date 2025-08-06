'use client';

import React from 'react';

interface CustomErrorProps {
  statusCode: number;
  title?: string;
  message?: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  error: {
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--custom-error-bg, #fff)',
    color: 'var(--custom-error-text, #222)',
    transition: 'background-color 0.2s, color 0.2s',
  },
  h1: {
    display: 'inline-block',
    margin: '0 20px 0 0',
    padding: '0 23px 0 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
    lineHeight: '49px',
    borderRight: '1px solid var(--custom-error-border, rgba(0,0,0,.1))',
  },
  h2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '49px',
    margin: 0,
  },
};

// --- A helper object to store default messages for common error codes ---
const errorMessages: { [key: number]: { title: string; message: string } } = {
  400: {
    title: '400 Bad Request',
    message: 'The request is invalid or cannot be processed.',
  },
  403: {
    title: '403 Forbidden',
    message: 'You do not have permission to access this page.',
  },
};

/**
 * A reusable custom error component.
 */
export const CustomError: React.FC<CustomErrorProps> = ({
  statusCode,
  title,
  message,
}) => {
  const error = title && message ? {
    title: title,
    message: message,
  } : errorMessages[statusCode] || {
    title: '404 Not Found',
    message: 'An unexpected error occurred.',
  };

  return (
    <main>
      <div style={styles.error}>
        <div>
          <h1 style={styles.h1}>{error.title}</h1>
          <div style={{ display: 'inline-block' }}>
            <h2 style={styles.h2}>{error.message}</h2>
          </div>
        </div>
      </div>
    </main>
  );
};
