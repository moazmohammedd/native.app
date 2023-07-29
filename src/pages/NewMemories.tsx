import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import Header from '../components/Header';
import { camera } from 'ionicons/icons';


import { Plugin } from '@capacitor/core';
import { Camera, CameraResultType , CameraSource} from '@capacitor/camera';

const NewMemories: React.FC = () => {
  const photo = false;
  const takePhoteHanlder = async () => {

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source : CameraSource.Camera,
      width: 500
    });
    console.log(image)
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;

  }
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

              <IonButton fill='clear' onClick={() => { takePhoteHanlder() }}>
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
