function ActionButtons({onGreet,onShowInfo}){
    return(
        <div>
            <button onClick={onGreet}>Greet</button>
            <button onClick={onShowInfo}>Show info</button>
        </div>
    );
}
function ActionButtonDemo(){
    function handleGreet(){
    alert("hello from parent");
    }
    function handleShowInfo(){
        alert("info button clicked");
    }
    return(
        <div>
         <h2>Action Buttons Demo</h2>
            <ActionButtons onGreet={handleGreet} onShowInfo = {handleShowInfo}/>
        </div>
    )
}
export default ActionButtonDemo;
        
    


