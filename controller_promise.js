var controller = {} //Create controller object which can later reference in index file
var userData = require('./userData');//import sample user data


controller.login = (name, password) => { //login function
    let promise = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log('timedelay simulation');
                let result = userData.find(data => data.name === name && data.password === password); //find user data
                console.log(`result ${result}`);
                resolve(result)
            }, 1000);
        } catch (e) {
            console.error('Login operation failed', e);
            reject({ msg: 'login operation failed' });
        }
    })
    return promise;

}



module.exports = controller; //export all the function attached to controller object