import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import Header from '../components/Header';
import { add } from 'ionicons/icons';

const GoodMemories: React.FC = () => {
  return (
    <IonPage>
      <Header title="Good Memories">
        {
          isPlatform('ios') && (
            <IonButton fill="clear" slot="end" routerLink='/new-memories'>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          )
        }
      </Header>

      <IonContent fullscreen>
        {
          !isPlatform('ios') && (

            <IonFab vertical="center" horizontal="end">
              <IonFabButton routerLink='/new-memories'>
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
            </IonFab>

          )
        }
      </IonContent>
    </IonPage>
  );
};

export default GoodMemories;
