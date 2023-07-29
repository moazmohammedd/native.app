import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';

interface Props {
    title: string;
    children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                    {children}
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default Header;