import { User } from "./user.model";
import bcrypt from 'bcryptjs';
const findUserByEmail = async (email) => {
    return User.findOne({ email: email });
};
const createUser = async (email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    return await user.save();
};
const ValidatePassword = async (inputPassword, userPassword) => {
    return bcrypt.compare(inputPassword, userPassword);
};
export const userServices = {
    findUserByEmail,
    createUser,
    ValidatePassword
};
