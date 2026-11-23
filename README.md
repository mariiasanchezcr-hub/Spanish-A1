# Spanish-A1

Aplicación web interactiva para aprender español A1. La primera entrega incluye el mapa del curso, las Unidades 0 y 1 completas y el quiz integrador 0–1. Las Unidades 2–10 y el examen final tienen rutas preparadas, pero todavía no contienen lecciones.

## Requisitos

- Node.js 18.17 o posterior
- npm

## Instalar y ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comprobaciones

```bash
npm run typecheck
npm run build
```

## Recorrido

1. En Inicio, abre el mapa o pulsa “Comenzar Unidad 0”.
2. Completa las dos clases de Unidad 0 y las cinco clases de Unidad 1. Cada clase incluye vocabulario, explicación, práctica guiada y comunicativa, juego, tarea y mini quiz.
3. Cada clase puede marcarse completada al terminar. El progreso se conserva en `localStorage` del mismo navegador.
4. Al marcar las siete clases, abre “Quiz integrador” desde el menú o desde el mapa. El quiz incluye 19 ejercicios objetivos, escritura y una actividad oral de autoevaluación; suma hasta 100 puntos y aprueba con 80.
5. En `/progress` consulta las clases completadas y el último resultado.

## Rutas preparadas

- `/course`: mapa de las 11 unidades.
- `/units/0` y `/units/1`: unidades disponibles.
- `/units/[unitId]/lessons/[lessonId]`: clases.
- `/quizzes/unit-0-1`: evaluación integradora (desbloqueada al completar las siete clases).
- `/progress`: seguimiento local.
- `/final-exam`: placeholder del examen final.

El proyecto usa Next.js App Router, React, TypeScript y Tailwind CSS. La aplicación no requiere cuentas ni servidor de base de datos en esta fase. El contenido de unidades futuras y el examen final no están implementados.
