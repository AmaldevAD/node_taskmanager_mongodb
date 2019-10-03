//crud
const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("unable to connect to database")
    }
    // console.log('Connected correctly')
   const db= client.db(databaseName)

//    db.collection('users').insertOne({
//        name:"Amald",
//        age:19
//    },(error,result)=>{
//        if(error){
//            return console.log("unable to insert user")
//        }
//        console.log(result.ops)
//    })

        db.collection('users').insertMany([
            {
                name:"jen",
                age:"48",
            },
            {
                name:"Amaldev M V",
                age:1
            }
        ], (error,result)=>{
            if(error){
                return console.log("unable to insert")
            }
            console.log(result.ops)
        }
        )
})