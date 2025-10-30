import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Breadcrumb from "../Common/Breadcrumb";


const ADMIN_EMAIL = "correo@hotmail.com";
const ADMIN_PASSWORD = "contraseña";

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Simular verificación
    setTimeout(() => {
      try {
        // Validar campos
        if (!email || !password) {
          setError("Por favor ingresa tu email y contraseña");
          setIsLoading(false);
          return;
        }

        // Verificar credenciales
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          // Credenciales correctas - marcar como logueado y redirigir
          sessionStorage.setItem('isLoggedIn', 'true');
          navigate("/admin", { replace: true });
        } else {
          setError("Credenciales incorrectas. Acceso denegado. 🚫");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("Error al iniciar sesión. Intenta nuevamente.");
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gray-50 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loading/>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb />
        </div>

        <div className="flex items-center justify-center py-8">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="mx-auto bg-red-100 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-4">
                    <span className="text-3xl">🔐</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Acceso Administrativo
                  </h1>
                  <p className="text-gray-600">
                    Ingresa tus credenciales de BEAR Collectibles
                  </p>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                      placeholder="admin@1234"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                      placeholder="1234"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Verificando...
                      </div>
                    ) : (
                      "Iniciar Sesión"
                    )}
                  </button>
                </form>

                {error && (
                  <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3 text-xl">⚠️</span>
                      <div>
                        <p className="font-semibold">Error de autenticación</p>
                        <p className="text-sm mt-1">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <span className="text-red-500 mr-2">ℹ️</span>
                    Información de acceso
                  </h3>
                  <p className="text-red-700 text-sm">
                    Solo personal autorizado puede acceder al panel de administración.
                    Contacta al administrador si necesitas acceso.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center bg-white rounded-2xl px-6 py-3 shadow-lg">
                <span className="text-gray-700 mr-2 text-3xl">🏪</span>
                <span className="font-semibold text-gray-900">BEAR collectibles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}