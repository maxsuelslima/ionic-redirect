/* eslint-disable react/react-in-jsx-scope */
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react"
import { useContext } from "react";
import GlobalContext from "../context/global";

const Login = () => {
    const { push } = useIonRouter()
    const { signIn } = useContext(GlobalContext);

    return (
        <IonPage>
                  <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
            </IonHeader>
            <IonContent>
                <Content />
                <h1>Login</h1>
                <IonButton onClick={async () => {
                    
                    await signIn()
                    push('/')
                }
                    
                }>Sign In</IonButton>
            </IonContent>
        </IonPage>
    )
}
const Content = () => { 
    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter event fired');
    });

    useIonViewWillLeave(() => {
        console.log('end');
    });
    return (
        <div>

        </div>
    )
}
export default Login