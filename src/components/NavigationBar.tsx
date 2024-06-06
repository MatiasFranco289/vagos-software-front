import NavigationBarButton from "./NavigationBarButton"

export default function NavigationBar(){
    return (
        <div className="absolute top-0 left-0 w-full flex justify-end">
            <div className="flex">
                <NavigationBarButton text = 'Inicio' url = '/'/>
                <NavigationBarButton text = 'Proyectos' url = '/projects'/>
                <NavigationBarButton text = 'Blog' url = '/blog'/>
                <NavigationBarButton text = 'Sobre Nosotros' url = '/about'/>
            </div>
        </div>
    )
}