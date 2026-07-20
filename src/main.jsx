import './i18n.js'
// import { ViteSSG } from 'vite-plugin-ssg';
import { RouterProvider } from 'react-router-dom'
import { routes } from './app/routers.jsx';
import { ViteReactSSG } from 'vite-react-ssg';
import { AuthProvider } from './domains/auth/useAuth.jsx';
const redirect = sessionStorage.getItem("redirect");

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) =>
      console.error("SW registration failed:", err)
    );
  });
}

export const createApp = ViteReactSSG(
  { routes },
  ({ app }) => (
    <AuthProvider>
      {app}
    </AuthProvider>
  ),         // vite-react-ssg сам создаёт RouterProvider
  { rootContainer: '#app' }
);