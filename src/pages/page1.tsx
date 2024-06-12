import React from 'react';
import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import './Home.css';

const Page1: React.FC<any> = ({ match }) => {
    const history = useIonRouter();




    return (

        <IonPage>
            <IonHeader >
                <IonToolbar color='danger'>
                    <IonTitle>1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Content />
            <IonItem
                onClick={() => {
                    history.goBack();
                }}
            >back</IonItem>
            <IonItem routerLink='/2'>2</IonItem>
        </IonPage>
    );
};

const Content = () => { 
    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter event fired');
    });

    useIonViewWillLeave(() => {
        console.log('end');
    });
    return (
        <IonContent>

        </IonContent>
    )
}
export default Page1;
