import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router';

import InputControlado from './InputControlado';
import TextArea from './TextArea';
import SelectControlado from './SelectorControlado';
import Checkbox from './Checkbox';
import { ValidacionFormulario } from './ValidacionFormulario';
import MiComponente from './MiComponente';
import Clock from './Clock';
import { TechList, AlumnoList } from './TechList';
import Password from './Password';
import Header from './ElevacionEstados/Header';
import HeaderPokemon from './ElevacionEstados/HeaderPokemon';
import Listado from './ElevacionEstados/Listado';
import ThemeProvider from './context/ThemeProvider';
import ListadoPokemon from './ElevacionEstados/ListadoPokemon';
import LoginProvider from './context/LoginProvider';
import BerlinPage from './pages/BerlinPage';
import ParisPage from './pages/ParisPage';
import GibraltarPage from './pages/GibraltarPage';
import NotFoundPage from './pages/NotFoundPage';
import CiudadPage from './pages/CiudadPage';

// --- COMPONENTES ENCAPSULADOS ---
const EjercicioReloj = () => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <div>
            {mostrar && <Clock />}
            <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar reloj' : 'Mostrar reloj'}</button>
        </div>
    );
};

const EjercicioPassword = () => {
    const [reveal, setReveal] = useState(false);
    const handleClick = () => {
        setReveal(true);
        setTimeout(() => setReveal(false), 2000);
    };
    return (
        <>
            <Password reveal={reveal} />
            <button onClick={handleClick}>Ver contraseña</button>
        </>
    );
};

const EjercicioContexto = () => {
    const [search, setSearch] = useState('');
    const [searchPokemon, setSearchPokemon] = useState('');
    return (
        <ThemeProvider>
            <LoginProvider>
                <Header search={search} handleChange={setSearch} />
            </LoginProvider>
            <Listado search={search} />
            <HeaderPokemon search={searchPokemon} handleChange={setSearchPokemon} />
            <ListadoPokemon search={searchPokemon} />
        </ThemeProvider>
    );
};

const EjercicioBusquedaPokemon = () => {
    const [searchPokemon, setSearchPokemon] = useState('');
    return (
        <>
            <HeaderPokemon search={searchPokemon} handleChange={setSearchPokemon} />
            <ListadoPokemon search={searchPokemon} />
        </>
    );
};

const ApuntesDeRutas = () => {
    return (
        <BrowserRouter>
            <h1>¿Dónde vamos?</h1>
            <Link to="/ciudad/berlin">Berlin</Link>
            <Link to="/ciudad/paris">París</Link>
            <Link to="/ciudad/gibraltar">Gibraltar</Link>
            <Routes>
                {/* <Route path="/berlin" element={<BerlinPage />} />
                    <Route path="/paris" element={<ParisPage />} />
                    <Route path="/gibraltar" element={<GibraltarPage />} /> */}
                <Route path="/ciudad" element={<CiudadPage />}>
                    <Route path="berlin" element={<BerlinPage />} />
                    <Route path="paris" element={<ParisPage />} />
                    <Route path="gibraltar" element={<GibraltarPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                {/* <Route path="/ciudad/:nombre" element={<CiudadPage />} /> */}
            </Routes>
            {/* Las rutas y los links deben estar dentro de browser router */}
        </BrowserRouter>
    );
};

// --- COMPONENTE PRINCIPAL ---
export default function Notes() {
    const APUNTES = {
        Input: InputControlado,
        TextArea: TextArea,
        'Select Controlado': SelectControlado,
        Checkbox: Checkbox,
        Formulario: ValidacionFormulario,
        'Componente Sincronizado': MiComponente,
        'Reloj Digital': EjercicioReloj,
        'Validación Password': EjercicioPassword,
        'Sistema de Temas (Context)': EjercicioContexto,
        'Busqueda Pokemon': EjercicioBusquedaPokemon,
        'Listas de Alumnos': () => (
            <>
                <TechList />
                <AlumnoList />
            </>
        ),
        Rutas: ApuntesDeRutas,
    };

    const [ejercicioActivo, setEjercicioActivo] = useState(Object.keys(APUNTES)[0]);
    const ComponenteActual = APUNTES[ejercicioActivo];

    return (
        <>
            <h1>Apuntes de clase</h1>
            <select value={ejercicioActivo} onChange={(e) => setEjercicioActivo(e.target.value)}>
                <option value="">-- Selecciona un ejercicio --</option>
                {Object.keys(APUNTES).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>

            <hr />

            <main>{ComponenteActual ? <ComponenteActual /> : <p>Selecciona un ejercicio</p>}</main>
        </>
    );
}

/*
Si alguna vez hay errores al mostrar mensajes de error setteando resultados,
es probable que sean asincronías, revisarbien el código y tenerlo en cuenta
*/
