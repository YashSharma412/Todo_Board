async function validateSignUp(userObj) {
    return new Promise((resolve, reject) =>{
        // console.log(userObj.password, userObj.confirmPassword)
        if(userObj.name.trim() === "") reject("Please enter a valid name.");
        if(userObj.password !== userObj.confirmPassword) reject("passwords do not match");
        if(userObj.password.trim().length < 5) reject("Password must be longer then 5 characters.");
        resolve()
    })
}

export default validateSignUp;