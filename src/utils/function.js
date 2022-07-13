import { renderSimpleIcon } from 'react-icon-cloud';

export const renderCustomIcon = (icon, bg) => {
    return renderSimpleIcon({
        icon,
        size: 64,
        bgHex: bg,
        bg: bg,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};
