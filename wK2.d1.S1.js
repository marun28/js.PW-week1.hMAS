let nums=[2,4,5,2,1,2]
let spl=nums.toString();
let K='2'
let count = 0
for (let i=0;i<=spl.length-1;i++)
{
    if(spl.charAt(i)==K)
        {
        count++
    }
}
console.log("count in k is " + "" + count)
