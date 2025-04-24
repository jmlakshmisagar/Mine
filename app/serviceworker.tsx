'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful:', registration);

                        // Handle updates
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            if (newWorker) {
                                newWorker.addEventListener('statechange', () => {
                                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                        if (confirm('New content is available! Click OK to refresh.')) {
                                            window.location.reload();
                                        }
                                    }
                                });
                            }
                        });
                    })
                    .catch(err => {
                        console.error('ServiceWorker registration failed:', err);
                    });
            });
        }
    }, []);

    return null;
}