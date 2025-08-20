// If Else - launcgBrowser
function launchBrowser(){
    var browserName = "Chrome"
    if(browserName){
console.log("This is :" + browserName)
    }else{
        console.log("This is Edge browser")
    }
// for Else statement
    if(!browserName){
console.log("This is :" + browserName)
    }else{
        console.log("This is Edge browser")
    }
}

console.log("**********")

//Swith Statement
function runTest()
{
    let testType = "smoke"
    switch (testType) {
        case "smoke":
            console.log("this is:" + testType)
            break
        case "sanity":
            console.log("this is :" + testType)
            break
        case "regression":
            console.log("this is :" + testType) 
        default:
            console.log(testType)
        
    }  
}
runTest()
launchBrowser()