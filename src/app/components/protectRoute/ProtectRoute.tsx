import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppContext, AppContextType } from "@/context/appContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps) => {
  const { state } = useContext(AppContext) as AppContextType;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(
      "AAAAAAAA BBBBBBBBBBb",
      state,
      state.userType,
      !allowedRoles.includes(state.userType || "")
    );
    if (state.userType !== undefined) {
      if (!allowedRoles.includes(state.userType || "")) {
        router.replace("/"); // ou "/"
      }
      setLoading(false);
    }
  }, [state]);

  return loading ? <p>Carregando</p> : <>{children}</>;
};
