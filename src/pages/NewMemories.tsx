import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import Header from '../components/Header';
import { camera } from 'ionicons/icons';

const NewMemories: React.FC = () => {
  const photo = false;
  return (
    <IonPage>
      <Header title="New Memories">
        <IonButtons slot='start'>
          <IonBackButton defaultHref='/good-memories'></IonBackButton>
        </IonButtons>
      </Header>

      <IonContent fullscreen>

        <IonGrid>
          <IonRow>

            <IonCol>

              <IonItem>

                <IonLabel position="floating">Memory Title</IonLabel>

                <IonInput type="text"></IonInput>

              </IonItem>

            </IonCol>

          </IonRow>

          <IonRow className='ion-text-center'>

            <IonCol>

              <div className='img-preview'>
                <img></img>
                {
                  photo ? <img src=''></img> : <h3>no photo chosen</h3>
                }
              </div>

              <IonButton fill='clear'>
                <IonIcon icon={camera} slot="icon-only"></IonIcon>
                <IonLabel>Take A Phote</IonLabel>
              </IonButton>

            </IonCol>

          </IonRow>

          <IonRow className='ion-text-center ion-margin-top'>

            <IonCol>

                <IonButton>
                  Add Phote
                </IonButton>

            </IonCol>

          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default NewMemories;
