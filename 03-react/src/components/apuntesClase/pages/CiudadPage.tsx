import { Outlet, useParams } from 'react-router';
import BerlinPage from './BerlinPage';
import GibraltarPage from './GibraltarPage';
import ParisPage from './ParisPage';
import NotFoundPage from './NotFoundPage';

export default function CiudadPage() {
    // const { nombre } = useParams();
    // const ciudades = ['berlin', 'paris', 'gibraltar'];

    return (
        <>
            <h2>Visitando ciudad</h2>
            {/* {nombre === 'berlin' && <BerlinPage />}
            {nombre === 'paris' && <ParisPage />}
            {nombre === 'gibraltar' && <GibraltarPage />}
            {!ciudades.includes(nombre) && <NotFoundPage />} */}
            <Outlet /> {/* Este componente es equivalente a usar children */}
        </>
    );
}
