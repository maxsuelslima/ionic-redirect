import React from 'react';
import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import './Home.css';

const Home: React.FC<any> = ({match}) => {
  const history = useIonRouter();
  
  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired', match);
  });

  useIonViewWillLeave(() => {
    console.log('end');
  });


  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Content />
      <IonItem
        onClick={() => { 
          history.goBack();
        }}
      >back</IonItem>
      <IonItem routerLink='/1'>1</IonItem>
    </IonPage>
  );
};
const Content = () => { 
  useIonViewWillEnter(() => {
      console.log('ionViewWillEnter event fired home');
  });

  useIonViewWillLeave(() => {
      console.log('end');
  });
  return (
      <IonContent>

      </IonContent>
  )
}
export default Home;
