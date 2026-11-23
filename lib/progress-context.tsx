'use client';
import { createContext,useContext,useEffect,useMemo,useState } from 'react';
type Progress={completedLessons:Record<string,boolean>;integratorScore?:number};
type ContextValue=Progress & {markLesson:(id:string)=>void;saveScore:(score:number)=>void;hydrated:boolean};
const ProgressContext=createContext<ContextValue>({completedLessons:{},markLesson:()=>{},saveScore:()=>{},hydrated:false});
export function ProgressProvider({children}:{children:React.ReactNode}) { const [progress,setProgress]=useState<Progress>({completedLessons:{}});const [hydrated,setHydrated]=useState(false);useEffect(()=>{try{const saved=localStorage.getItem('spanish-a1-progress');if(saved)setProgress(JSON.parse(saved) as Progress)}catch{}setHydrated(true)},[]);useEffect(()=>{if(hydrated)localStorage.setItem('spanish-a1-progress',JSON.stringify(progress))},[progress,hydrated]);const value=useMemo(()=>({...progress,hydrated,markLesson:(id:string)=>setProgress(p=>({...p,completedLessons:{...p.completedLessons,[id]:true}})),saveScore:(score:number)=>setProgress(p=>({...p,integratorScore:score}))}),[progress,hydrated]);return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider> }
export const useProgress=()=>useContext(ProgressContext);
