export type CourseProgress = { completedLessons: Record<string, boolean>; integratorScore?: number };
export const PROGRESS_STORAGE_KEY = 'spanish-a1-progress';
export function getCourseCompletion(completed: Record<string, boolean>, total: number) { const count=Object.values(completed).filter(Boolean).length; return {count,total,percent:total?Math.round(count/total*100):0}; }
