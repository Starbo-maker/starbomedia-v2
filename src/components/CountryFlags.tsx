import type { ComponentType, CSSProperties } from 'react';
import SK from 'country-flag-icons/react/3x2/SK';
import CZ from 'country-flag-icons/react/3x2/CZ';
import HU from 'country-flag-icons/react/3x2/HU';
import DE from 'country-flag-icons/react/3x2/DE';
import HR from 'country-flag-icons/react/3x2/HR';
import SI from 'country-flag-icons/react/3x2/SI';
import PL from 'country-flag-icons/react/3x2/PL';
import AT from 'country-flag-icons/react/3x2/AT';
import RO from 'country-flag-icons/react/3x2/RO';
import IT from 'country-flag-icons/react/3x2/IT';
import FR from 'country-flag-icons/react/3x2/FR';
import BE from 'country-flag-icons/react/3x2/BE';

type FlagComp = ComponentType<{ title?: string; 'aria-label'?: string; style?: CSSProperties }>;

const FLAGS: Record<string, FlagComp> = { SK, CZ, HU, DE, HR, SI, PL, AT, RO, IT, FR, BE };

export const COUNTRY_NAMES: Record<string, string> = {
    SK: 'Slovensko',
    CZ: 'Česko',
    HU: 'Maďarsko',
    DE: 'Nemecko',
    HR: 'Chorvátsko',
    SI: 'Slovinsko',
    PL: 'Poľsko',
    AT: 'Rakúsko',
    RO: 'Rumunsko',
    IT: 'Taliansko',
    FR: 'Francúzsko',
    BE: 'Belgicko',
};

export default function CountryFlags({ codes, size = 22 }: { codes: string[]; size?: number }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            {codes.map((c) => {
                const Flag = FLAGS[c];
                if (!Flag) return null;
                return (
                    <Flag
                        key={c}
                        title={COUNTRY_NAMES[c] || c}
                        aria-label={COUNTRY_NAMES[c] || c}
                        style={{
                            width: size,
                            height: 'auto',
                            borderRadius: 3,
                            boxShadow: '0 0 0 1px rgba(15, 23, 42, 0.08)',
                            display: 'block',
                        }}
                    />
                );
            })}
        </div>
    );
}
