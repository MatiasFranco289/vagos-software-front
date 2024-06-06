import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationBarButtonProps {
  text: string;
  url: string;
}

export default function NavigationBarButton({
  text,
  url,
}: NavigationBarButtonProps) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/");
  const baseStyles =
    "text-white p-3 font-normal hover:text-white hover:text-lg duration-100 text-start sm:text-center";
  const activeStyles =
    currentPage === url ? "text-white pointer-events-none" : "text-slate-500";

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <Link to={url} className={`${baseStyles} ${activeStyles}`}>
      {text}
    </Link>
  );
}
