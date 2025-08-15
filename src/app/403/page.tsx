'use client';

import { CustomError } from "@/components/organisms/CustomError";

export default function Page() {
  return <CustomError statusCode={403} />;
}
