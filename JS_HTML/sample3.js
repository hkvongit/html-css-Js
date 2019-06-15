var a=[1,3,4,6,7]
var sum=0
var b=[]
var len=a.length-1
for(let i=0;i<len;i++)
{
    sum=sum+a[i]
    b.push(sum)
}
console.log(b)
var blen=b.length-1
let s=0
for(let i=0;i<blen;i++)
{
    if(b[i]>b[i+1])
    {
        s=b[i]
    }else{
        s=b[i+1]
    }
    
}
console.log(s);
