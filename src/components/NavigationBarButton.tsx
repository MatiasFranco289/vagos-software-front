import { Link } from "react-router-dom"

interface NavigationBarButtonProps {
    text: string
}

export default function NavigationBarButton({text}: NavigationBarButtonProps){
    return (
        <Link to = '/' className="text-white p-3">
            {text}
        </Link>
    )
}