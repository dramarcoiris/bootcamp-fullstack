export default function PokemonStats({ stats }: { stats: any[] }) {
    return (
        <div className="pt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60">Estadísticas Base</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {stats.map((stat) => (
                    <div
                        key={stat.stat.name}
                        className="flex justify-between items-center border-b border-gray-400 py-1">
                        <span className="text-[10px] uppercase font-medium opacity-70">
                            {stat.stat.name.replace('-', ' ')}
                        </span>
                        <span className="text-sm font-bold">{stat.base_stat}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
