function Message(){
    let name="Syed Affan Hameed";
    if(name){
        return <h1>This is the first TSX from {name}</h1>
    }
    else{
        return <h1>This is the first TSX</h1>
    }

}
export default Message;