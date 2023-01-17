import { IconProps } from "../../lib/interfaces"

export default function AddIcon({ width, height }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icon-tabler-plus" viewBox="0 0 24 24" width={width} height={height}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    )
}