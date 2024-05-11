const client=require ('./client');

async function init()
{
    // await client.sadd('user:6','Alex');
    // await client.sadd('user:6','John');
    // await client.sadd('user:6','Doe');
    // await client.sadd('user:6','Alex');
    // const result=await client.smembers('user:6');
    // console.log('Result',result);


    // await client.srem('user:6','Alex');
    // const result=await client.smembers('user:6');
    // console.log('Result',result);

    const result=await client.scard('user:6');
    console.log('Result',result);
}
init();