import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

// import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')! as HTMLElement).render(
    <ClerkProvider
    appearance={{
        
    }}
     publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>
)