console.log('person 1: shows ticket');
console.log("person 2: shows ticket");

const promiseWifeBringingTicket = new Promise((res,rej)=>
{
    setTimeout(function(){
        res('ticket');
    },3000)
});
const getPopcorn = promiseWifeBringingTicket.then((ticket)=>
{
    console.log('Husband: we should go in now');
    console.log('wife: no i am hungry');

    return new Promise((res,rej)=>
    {
        res('Popcorn');
    })
});
const getButter = getPopcorn.then((popcorn)=>
{
    console.log('husband: now we should go in');
    console.log('wife: no i need butter on popcorn');

    return new Promise((res,rej)=>
    {
        res('butter');
    })
});

const getColdDrink = getButter.then((butter)=>
{
    console.log('Husband: here is your butter');
    console.log('husband: now we should go in');
    console.log('wife : no i need cold drink too');

    return new Promise((res,rej)=>{
        res('colddrink');
    })
})
getColdDrink.then((colddrink)=>
{
    console.log('husband : here is cold drink');
    console.log('husband : can we go in now');
    console.log('wife : it has been so long let go fast');
    console.log('person 3: shows ticket')
})

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");