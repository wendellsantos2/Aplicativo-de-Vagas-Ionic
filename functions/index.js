const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.upUser = functions.firestore
.document('user/{userId}')
.onUpdate((chg,ctx)=>{
    const userId = ctx.params.userId;
    const newUserName = chg.after.data().userName;
    const newEmail = chg.after.data().userEmail;

    admin.auth().updateUser(userId,{
        email: newEmail,
        displayName: newUserName
    })
    .then((userRec)=> {
        console.log('Usuario atualizado',userRec);
    })
    .catch(error =>{
        console.log(error.message);
    })
})