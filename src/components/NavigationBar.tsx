import NavigationBarButton from "./NavigationBarButton"

export default function NavigationBar(){
    return (
        <div className="absolute top-0 left-0 w-full flex justify-end">
            <div className="flex">
                <NavigationBarButton text = "Inicio"/>
                <NavigationBarButton text = "Proyectos"/>
                <NavigationBarButton text = "Blog"/>
                <NavigationBarButton text = "Sobre Nosotros"/>
            </div>
        </div>
    )
}