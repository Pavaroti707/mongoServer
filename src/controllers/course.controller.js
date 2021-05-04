import _ from 'lodash';
import Course from '../models/course.model'

const create = (req, res) => {
    const course = Course(req.body);
    student.save((err, data) => {
        if(err){
            return res.status(400).json(err.message);
        }
        res.status(201).json(data);
    })
}

const list =(req, res) => {
    Course.find((err, data) => {
        if(err){
            return res.status(400).json(err.message);   
        }
        res.status(200).json(data);
    });
}

const read =(req, res) => {
    const id = req.params.id;
    Course.findById(id).exec ((err, data) => {
        if(err){
            return res.status(400).json(err.message);   
        }
        res.status(200).json(data);
    });
}

const update = (req, res) => {
    const id = req.params.id;
    Course.findById(id).exec ((err, data) => {
        if(err || !data){
         return res.status(400).json('Course not found!');   
        }
        const course = _.extend(data, req.body);
        course.save((err, data) => {
            if(err){
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
        })

        res.status(200).json(data);
    });
}

const remowe = (req, res) => {
    const id = req.params.id;
    Course.findById(id).exec ((err, data) => {
        if(err || !data){
            return res.status(400).json('Course not found!');
        }
        data.remove((err, data) => {
            if(err){
                return res.status(400).json('Course deleted.');
            }
            res.status(200).json(data); 
        }); 
    })
    
}

  


export default { create, list, read, update, remowe } 