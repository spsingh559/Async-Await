var controller_promise=require('./controller_promise');
console.log(controller_promise);
loginOperation =(name,password) =>{
    controller_promise.login(name,password).then(
        res=>{ //result
            console.log(`result of login operation`, res);
            if(res) return true
            return false
        },err=>{ //error
            console.error(err.msg);
        }
    ).then(
        res=>{
            console.log('operation result from first chain', res);
        },err=>{
            console.error('issue in operation');
        }
    )
}

loginOperation("Alice","Alice");
