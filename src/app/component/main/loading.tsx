export default function Loading() {
    return (
        <div className="my-10 flex flex-col items-center justify-center">
            <svg viewBox="-12.5 -12.5 25 25" className="w-16 h-16 items-center justify-center">
                <circle cx="0" cy="0" r="10" fill="transparent" strokeWidth="3" stroke="currentColor" stroke-dasharray="30 20" stroke-linecap="round" className="animate-inverse-nonlinear-spin"/>
                <circle cx="0" cy="0" r="5" fill="transparent" stroke="#e74c3c" strokeWidth="3" stroke-dasharray="20 20" stroke-linecap="round" className="animate-nonlinear-spin"></circle>
                    </svg>
            <p className="text-white text-xl">
                Loading...
            </p>
        </div>
    )
}
