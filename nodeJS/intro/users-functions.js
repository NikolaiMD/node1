var  showUsers = (users) =>{
    for(var i = 0; i<users.length; i++){
        console.log(users[i].login);
    }
}
exports.showUsers = showUsers;