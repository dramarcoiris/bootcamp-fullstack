export default function BackgroundDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-black rotate-45 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-black rotate-45 translate-x-1/2 -translate-y-1/2" />

            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-600 rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
    );
}
