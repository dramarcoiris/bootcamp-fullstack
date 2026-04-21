import { useState } from 'react';

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

export default function Notes() {
    const [mostrarReloj, setMostrarReloj] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [search, setSearch] = useState('');
    const [searchPokemon, setSearchPokemon] = useState('');

    function handleClick() {
        setReveal(true);
        setTimeout(() => setReveal(false), 2000);
    }

    return (
        <>
            <h2>Apuntes de clase</h2>
            <ThemeProvider>
                <Header search={search} handleChange={setSearch} />
                <Listado search={search} />
                <HeaderPokemon search={searchPokemon} handleChange={setSearchPokemon} />
                <ListadoPokemon search={searchPokemon} />
            </ThemeProvider>

            <Password reveal={reveal} />
            <button onClick={handleClick}>Ver contraseña</button>
            <TechList />
            <AlumnoList />

            <InputControlado />
            <InputControlado />
            <TextArea />
            <SelectControlado />
            <Checkbox />
            <ValidacionFormulario />
            <MiComponente />

            {mostrarReloj && <Clock />}
            <button onClick={() => setMostrarReloj((prev) => !prev)}>
                {mostrarReloj ? 'Ocultar reloj' : 'Mostrar reloj'}
            </button>
        </>
    );
}

/*
Si alguna vez hay errores al mostrar mensajes de error setteando resultados,
es probable que sean asincronías, revisarbien el código y tenerlo en cuenta
*/
