import * as Firebase from 'firebase'
const firebase = Firebase.initializeApp({
    apiKey: "AIzaSyCRAuGNlDP12yjFo0Lb7mWxbn_KH4pL7jM",
    authDomain: "pbl-code.firebaseapp.com",
    databaseURL: "https://pbl-code.firebaseio.com",
    storageBucket: "pbl-code.appspot.com",
    messagingSenderId: "860565119602"
  })

const database = firebase.database()
export const auth = firebase.auth()

export default database.ref('Samwise')
