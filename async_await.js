console.log('person1 : shows ticket');
console.log('person2: shows ticket');


const Movie = async ()=>
{
    const getTicket = new Promise((res,rej)=>
    {
        res('ticket');
    })
    const getPopcorn = new Promise((res,rej)=>
    {
        res('popcorn');
    })
    const getButter = new Promise((res,rej)=>{
        res('butter');
    })
    const getColdDrink = new Promise((res,rej)=>
    {
        res('coldDrink');
    })

    let ticket = await getTicket;
    console.log(`husband: now we should go in as we have ${ticket}`)
    console.log('wife: no i am hungry');
    console.log('husband: ok let me get popcorn');

    let popcorn = await getPopcorn;

    console.log(`husband: here are ${popcorn}`);
    console.log('husband: now we should go in');
    console.log('wife: where is butter');
    console.log("huband:ok let me get butter");

    let butter = await getButter;
    
    console.log(`husband: here is ${butter}`);
    console.log("husband: now we should go in");
    console.log("wife: i need cold drink too");
    console.log("huband: ok let me get cold drink");

    let coldDrink = await getColdDrink;

    console.log(`husband: here is ${coldDrink}`);
    console.log("husband: now we should go in");
    console.log("wife: i am telling this for so long");
    console.log("huband: sorry darling my bad");

    return ticket;

}
Movie().then((ticket)=>
{
    console.log("person3: shows ticket");
})
console.log("person4: shows ticket");
console.log("person5: shows ticket");