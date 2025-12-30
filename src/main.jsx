import './i18n.js'
// import { ViteSSG } from 'vite-plugin-ssg';
import { RouterProvider } from 'react-router-dom'
import { routes } from './Hooks/routers.jsx';
import { ViteReactSSG } from 'vite-react-ssg';

export const createApp = ViteReactSSG(
  { routes },
  ({ app }) => app,         // vite-react-ssg сам создаёт RouterProvider
  { rootContainer: '#app' }
);