import { createContext } from 'react';

export const ThemeContext = createContext('');
// Contexto es un estado centralizado

/* 
Generalmente, al crear un contexto, se crea el documento que crea el contexto,
luego el componente que actuará como Provider, y finalmente se añade al componente 
que queremos que tenga aplicado ese contexto
*/
