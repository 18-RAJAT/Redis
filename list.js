const client=require('./client');

async function init()
{
    // await client.lpush('message','Hello');
    // await client.lpush('message','World');
    // await client.lpush('message','This');

    // const result=await client.lpop('message');
    const result=await client.rpop('message');
    // const result=await client.blpop('message',30);
    console.log('Result',result);
}
init();