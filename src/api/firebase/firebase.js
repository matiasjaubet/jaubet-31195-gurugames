//1) Me traigo el metodo de autenticación con firebase.
import { initializeApp } from "firebase/app";
import { collection, getFirestore} from 'firebase/firestore';

//2) Traigo los keys privados de la plataforma web.
const firebaseConfig = {
  apiKey: "AIzaSyB8aFBWFoddoUTukHwSyuJKif90KmMNjeM",
  authDomain: "gurugamescode.firebaseapp.com",
  projectId: "gurugamescode",
  storageBucket: "gurugamescode.appspot.com",
  messagingSenderId: "528701716445",
  appId: "1:528701716445:web:7a741bfde71d0143dba834"
};

//3) Me autentico usando el método del paso 1 y los keys del 2.
const app = initializeApp(firebaseConfig);

//4) Obtener una referencia/puntero a la base de datos.
export const db = getFirestore(app)

export const collectionProd = collection(db, 'productos')
