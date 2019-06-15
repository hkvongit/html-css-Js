var a=[2,4,5,6,1]
var l 
var len=a.length
for(let i=0;i<len-1;i++)
{
    if(a[i]>a[i+1])
    {
        l=a[i]
         
    }else{
        l=a[i+1]
    }
    
}

console.log(l);

