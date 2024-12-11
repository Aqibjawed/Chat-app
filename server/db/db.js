import mongoose from 'mongoose'

const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);

        console.log('Connected to Database');
    }catch(error){
        console.log('Error Coonection DB', error.message)
    }
}

export default connectToDB;