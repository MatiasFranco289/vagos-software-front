import NavigationBarButton from "./NavigationBarButton";
import LoginButton from "./LoginButton";

export default function NavigationBar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-start p-3 sm:justify-end">
      <div className="flex flex-wrap flex-col sm:flex-row">
        <NavigationBarButton text="Inicio" url="/" />
        <NavigationBarButton text="Proyectos" url="/projects" />
        <NavigationBarButton text="Blog" url="/blog" />
        <NavigationBarButton text="Sobre Nosotros" url="/about" />
        <LoginButton />
      </div>
    </div>
  );
}
