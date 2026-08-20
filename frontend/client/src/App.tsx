/* Quiet Civic Modernism: the app shell stays light and editorial; the working surface is a calm data instrument. */
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

export default function App() {
  return <ErrorBoundary><TooltipProvider><Toaster /><Home /></TooltipProvider></ErrorBoundary>;
}
