// Import functions from Hotel model
import {
    insertUser,
    updateUserById,
    deleteUserById
} from '../models/userModel.js';

// Tạo thêm User
export const createUser=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'User add successfully', results });
        }
    });
};
// Cập nhật thông tin users
export const updateUser = (req, res) => {
    const id = req.params.id; 
    const tourData = req.body; 

    updateUserById(id, tourData, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'User updated successfully', results });
        }
    });
};
// Xóa users
export const deleteUser=(req,res)=>{
    const id = req.params.id;
    deleteUserById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'User delete successfully', results });
        }
    });
};