export default function Loading() {
    return (
        <section className="flex flex-col justify-center items-center h-screen w-full">
            <div className="text-center animate-pulse">
                <h2 className="text-3xl font-bold text-red-800 tracking-widest uppercase">Cargando Pokédex</h2>
            </div>
        </section>
    );
}
