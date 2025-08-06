'use client';

import { CustomError } from "@/libs/components/templates/CustomError";

export default function Page() {
  return <CustomError statusCode={403} />;
}
