import { firebaseApp, provider } from './firebase'
import { timeout } from 'q';

function apifetcher() {
  return new Promise((resolve, reject) => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then((res) => {
        resolve(res.results)
      })
      .catch(function (error) {
        reject(error)
      });
  })
}

function loginWithFacebook() {
  return new Promise((resolve, reject) => {
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebaseApp.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;
      console.log(user)
      resolve(user)
    }).catch(function (error) {
      var errorMessage = error.message;
      console.log(errorMessage)
      reject(errorMessage)
    });

  })

}

let authFunc = () => {

  return new Promise((resolve, reject) => {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user)
      } else {
        reject(false)
      }

    })

  });
}


let timer = () => {

  return new Promise(function (resolve, reject) {
    var count = 15;
    var interval = setInterval(function () {
      count--;
      
      if (count === 0) {
        clearInterval(interval);
        console.log('timout')
        reject(count)
        // or...
        alert("You're out of time!");
      }
      else{
      resolve(count)
        
      }

    }, 1000);
 


  })
}

let logout= ()=>{
  return new Promise ((resolve,reject)=>{
      firebaseApp.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
  })

}

export { apifetcher, loginWithFacebook, authFunc, timer, logout } 