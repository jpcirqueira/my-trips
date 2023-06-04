import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type LinkWrapperProps = {
    href: string;
    children: React.ReactNode;
}


const LinkWrapper = ({href, children}: LinkWrapperProps) => {

    return(
        <div className={styles.container}>
            <Link href={href}>
                {children}
            </Link>
        </div>
    );
}

export { LinkWrapper};