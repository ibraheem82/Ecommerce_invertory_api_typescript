import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";
async function main() {
    await mongoose.connect(config.db_url);
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`);
    });
}
main()
    .then(() => console.log("Mongodb is connected successfully!"))
    .catch(error => console.log(error));
