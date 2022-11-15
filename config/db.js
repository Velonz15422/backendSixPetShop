import mongoose from 'mongoose';
import second from 'mongoose'

// conectar la base de datos

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`mongo conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
}

export default conectarDB