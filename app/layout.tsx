import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { Providers } from '@/components/providers';
export const metadata: Metadata = { title: 'Spanish-A1 | Curso de español', description: 'Aprende español A1 con clases, actividades y quizzes interactivos.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body><Providers><SiteHeader />{children}<footer className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-slate-500">Spanish-A1 · Aprende paso a paso · Contenido inicial: Unidades 0 y 1</footer></Providers></body></html>; }
