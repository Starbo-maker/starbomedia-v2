'use client';

import { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const GTM_ID = 'GTM-KHPVW4NB';

// Production hostnames where the shared GTM container should actually run.
// On staging (*.vercel.app) and localhost GTM stays OFF so test traffic does
// not pollute production analytics and the cookie banner does not load.
const PROD_HOSTS = ['starbomedia.sk', 'www.starbomedia.sk'];

export default function GtmProduction() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (PROD_HOSTS.includes(window.location.hostname)) {
            setEnabled(true);
        }
    }, []);

    return enabled ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
