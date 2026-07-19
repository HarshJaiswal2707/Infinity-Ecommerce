import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@infinity.ygsp56f.mongodb.net/?appName=Infinity`;
    try {
        await mongoose.connect(URL)
            .then(() => {
                console.log("Database Connected");
            })
            .catch((err) => {
                console.log("Error while connecting to database", err);
            });
        console.log("Database connect Successfully");
    }
    catch (error) {
        console.log("Error while connecting to database", error.message);
    }
}

export default Connection;