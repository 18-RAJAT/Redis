const client=require('./client');

async function init()
{
    // await client.set('user:6',"Hey This side alex");
    // const user_detail=await client.get('user:6');
    await client.expire('user:6',10);
    const result=await client.get('user:6');
    console.log('Result',result);
}
init();