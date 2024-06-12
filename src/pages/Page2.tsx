import React from 'react';
import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import './Home.css';

const Page2: React.FC<any> = ({ match }) => {
    const history = useIonRouter();

    return (

        <IonPage>
            <IonHeader >
                <IonToolbar color='primary'>
                    <IonTitle>2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Content />
            <IonItem
                onClick={() => {
                    history.goBack();
                }}
            >back</IonItem>
        
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
export default Page2;
