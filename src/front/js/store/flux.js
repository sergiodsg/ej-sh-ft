// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs, doc, deleteDoc, runTransaction, query, where, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzFb_EHdfrOVnadVSn_FyP136aQOH-Px4",
  authDomain: "ej-superhrs.firebaseapp.com",
  projectId: "ej-superhrs",
  storageBucket: "ej-superhrs.appspot.com",
  messagingSenderId: "313695523755",
  appId: "1:313695523755:web:c5acbe0fca29084cd938ee",
  measurementId: "G-27MKCS04ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			superheros:[],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//Función que recupera y actualiza en el store los superhéroes almacenados en firestore
			getSuperheros: async () => {
				const superherosCol = collection(db, "superheros");
				const superherosSnapshot = await getDocs(superherosCol);
				const superherosList = superherosSnapshot.docs.map((doc) => doc.data());
				setStore({superheros:superherosList});
			  },
		
			// Función que añade un superhéroe al firestore, recibe como parámetro un objeto con las propiedades del superhéroe
			addSuperhero: async (superhero) => {
				try {
				  const docRef = await addDoc(collection(db, "superheros"), superhero);
				  console.log("Document written with ID: ", docRef.id);
				  getActions().getSuperheros();
				} catch (e) {
				  console.error("Error adding document: ", e);
				}
			  },

			//Función que elimina un superhéroe
			removeSuperhero: async (superhero) => {
				const banksRef = collection(db, "superheros");
				const q = query(banksRef, where("id", "==", superhero.id));
				const querySnapshot = await getDocs(q);
				const idSelected = querySnapshot.docs.map((doc) => doc.id);
				for(let i = 0; i < idSelected.length; i++){
				  try {
					await runTransaction(db, async (transaction) => {
				  
					  await deleteDoc(doc(db, "superheros", idSelected[i]));
					  getActions().getSuperheros();
					});
					console.log("Transaction successfully committed!");
				  } catch (e) {
					console.log("Transaction failed: ", e);
				  }
				}
			  },

			//Función que modifica un superhéroe
			modifySuperhero: async (superhero) => {
				const superheroRef = collection(db, "superheros");
				const q = query(superheroRef, where("id", "==", superhero.idToMod));
				const querySnapshot = await getDocs(q);
				const idSelected = querySnapshot.docs.map((doc) => doc.id);
				for(let i = 0; i < idSelected.length; i++){
				  try {
					await runTransaction(db, async (transaction) => {
				  
					  await setDoc(doc(db, "superheros", idSelected[i]), {
						id: superhero.id,
    					name: superhero.name,
    					powers: superhero.powers
					  });
					  getActions().getSuperheros();
					});
					console.log("Transaction successfully committed!");
				  } catch (e) {
					console.log("Transaction failed: ", e);
				  }
				}
			  },

			//Función que busca un superhéroe por ID
			searchByIdSuperhero: async (superhero) => {
				const superheroRef = collection(db, "superheros");
				const q = query(superheroRef, where("id", "==", superhero.id));
				const querySnapshot = await getDocs(q);
				const superherosList = querySnapshot.docs.map((doc) => doc.data());
				setStore({superheros:superherosList});
			  },

			//Función que busca un superhéroe por nombre
			searchByNameSuperhero: async (superhero) => {
				const superherosCol = collection(db, "superheros");
				const superherosSnapshot = await getDocs(superherosCol);
				const superherosList = superherosSnapshot.docs.map((doc) => doc.data());
				const superherosFiltered = superherosList.filter(superheros => superheros.name.toLowerCase().search(superhero.name.toLowerCase()) != -1);
				console.log(superherosFiltered);
				setStore({superheros:superherosFiltered});
			  },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
