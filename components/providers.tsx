'use client';
import { ProgressProvider } from '@/lib/progress-context';
export function Providers({children}:{children:React.ReactNode}) { return <ProgressProvider>{children}</ProgressProvider> }
