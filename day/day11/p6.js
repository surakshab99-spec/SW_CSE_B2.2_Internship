//promise :is an objecet that represents future value.
/*it stands for result that is not availbale yet but will be
available later*/

//when promise is created:one of three staes:
/*1.pending:not finished yet
  2.fulfilled(resolve):completed successfully with a value
  3.rejected:failed with an error
  */


//basic promise creation
const promise = new Promise(function(resolve,reject){
    // Some functionality
    // some computation / data fetch
    const success = false;
    if (success) {
        resolve("Data Loaded");
        console.log("Promise Resolved");
    }
    else{
        console.log("Promise Rejected");
        reject(new Error("Failed to load"));
    }
});


//Promise chaining
// ATM: 1Insert card -> 2enter PIN -> 3Show Menu -> 4Withdraw -> 5Savings/Current -> 
// 6Rs. 10,000/- -> 7Checks if have valid amount
fetchData()
.then(function(data){
    return process(data);
})
.then(function(processed){
    console.log("Final Result",processed);
})
//error condition
.catch(function(err){
    console.log("Error:" ,err);
})