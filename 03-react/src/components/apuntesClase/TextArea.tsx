import { useState } from 'react';

export default function TextArea() {
    const [bio, setBio] = useState('');

    return (
        <section>
            <label htmlFor="bio">Biografía: </label>
            <br />
            <textarea className="bg-white" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            <p>{bio}</p>
            <button className="botones" onClick={() => setBio('')}>
                Limpiar
            </button>
        </section>
    );
}
