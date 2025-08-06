'use client'; // Error components must be Client Components

import { CustomError } from '@/libs/components/templates/CustomError';
import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <CustomError statusCode={500} />
      </body>
    </html>
  );
}
