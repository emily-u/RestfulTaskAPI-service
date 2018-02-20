// ========== CONFIG =============
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/secAngularApp/dist' ));
// ===============================



// ==== NEW MONGOOSE CODE! =======
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taskDB');
mongoose.Promise = global.Promise;


let TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false }
}, {timestamps: true})


let Task = mongoose.model("Task", TaskSchema);
// ==============================




// ===== ROUTES! ======
// Retrieve all Tasks
app.get('/tasks', function(req, res){
    Task.find({}, function(err, results){
        if(err){
            res.json({message: "Error", error: err})
        }else{
            // console.log(results);
            res.json(results);
        }
    })
})

// Retrieve a Task by ID
app.get('/tasks/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, results){
        if(err){
            res.json({message: "Error", error: err});
        }else{
            res.json({message: "Success", data: results})
        }
    })
})

// get task by input ID
app.post("/tasks/:eventId", function(req, res) {
    eventId = req.params.eventId;
    Task.findOne({_id: eventId}, function(err, event){
        if(err){
            res.json({message: "Error", error: err});
        }else{
            console.log(event);
            res.json(event)
        }
    })
})

// Create a Task
app.post('/tasks', function(req, res){
    console.log(req.body);
    let new_task = new Task(req.body);
    new_task.save(function(err){
        if(err){
            res.json({message: "Error", error: err});
        }else{
            res.json("create success")
        }
    })
})

// Update a Task by ID
app.put('/tasks/:editTaskId', function(req, res) {
    console.log("111", req.body);
    editTaskId = req.params.editTaskId;
    console.log(editTaskId);
    Task.findOne({_id: editTaskId}, function(err, task) {
        if (err) {
			console.log('Update error', err);
		} else {
            task.title = req.body.title;
            task.description = req.body.description;
            task.save(function(err) {
                if(err) {
                    console.log("err from task update: ", err);
                }
                else {
                    res.json("success update task");
                }
            })
		}
    })
	// Task.update({_id: editTaskId}, {$set: {title: req.body.title, description: req.body.description}}, function(err) {
	// 	if (err) {
	// 		console.log('Update error', err);
	// 		res.json({message:'Error',error:err});
	// 	} else {
	// 		res.json('Success update');
	// 	}
	// })
})

// Delete a Task by ID
app.delete('/tasks/:deleteTaskId', function(req, res){
    Task.remove({_id: req.params.deleteTaskId}, function(err, results){
        if(err){
            res.json({message: "Error", error: err});
        }else{
            res.json({message:'Success delete'});
        }
    })
})



// ======================




// ==== SERVER LISTENER! =======
app.listen(8000, function(){
    console.log("Express on port 8000!")
});
// =============================




// ======= HERE BE DRAGONS (or possibly socket code) ========

// ==========================================================

