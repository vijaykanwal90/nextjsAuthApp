import mongoose from 'mongoose';
export async function connect(){
    try{
mongoose.connect(process.env.MONGO_URL!);
const connection = mongoose.connection;
connection.on('connected',()=>{
    console.log("mongodb connected successfully");
})
connection.on('error',(err)=>{
    console.log('mongoDb connection error . please make sure mongoDb is running'+ err);
    process.exit();
})
    }
    catch(error){
        console.log("something went wrong")
    }
}