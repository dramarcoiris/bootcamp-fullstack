import NoticeV1 from './NoticeV1';
import NoticeV2 from './NoticeV2';

export default function Fragments() {
    return (
        <>
            <NoticeV1 />
            <NoticeV2 />
        </>
    );
}

/* 
1. ¿Qué problema resuelven los fragmentos?
Resuelven la necesidad de que un componente devuelva un único elemento raíz, permitiendo agrupar varios elementos sin añadir un nodo extra al DOM.

2. ¿En qué casos puede tener sentido usarlos?
Cuando no se necesita un contenedor con significado semántico o estilos
Cuando se quiere evitar añadir elementos innecesarios al DOM
Un <div> podría afectar al layout

3. ¿Qué diferencia práctica hay entre usar un div y un fragmento en este caso?
Un div sí se renderiza en el DOM, añadiendo un nodo extra que puede afectar al diseño o a los estilos
Un fragmento no se renderiza en el DOM, por lo que no introduce ningún elemento adicional

En este caso concreto, ambos funcionan igual visualmente, pero el fragmento genera un DOM más limpio y eficiente
*/
