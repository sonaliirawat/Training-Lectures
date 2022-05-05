const express = require('express')
const mongoDb = require('./mongoConnect')
const bodyParser = require('body-parser')
const studentModel = require('./Model/Student')
const SchoolFormListModel = require('./Model/SchoolFormList')
const EmployerslistModel = require('./Model/Employerslist')
const app = new express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,Authorization,Cache-Control',
  );
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.post('/addschoolformlist', (req, res) => {
  var model = req.body; //payload
  SchoolFormListModel.create(model, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(true);
  })

})
app.get('/schoolformlist', (req, res) => {
  SchoolFormListModel.find((error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(result);
  })
})
app.get('/sudentdetail', (req, res) => {
  SchoolFormListModel.findOne({ _id: req.query.id }, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(result);
  })
})

app.post('/updatestudent', (req, res) => {
  var model = req.body;
  SchoolFormListModel.updateOne({ _id: req.query.id }, model, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(true);
  })
})

app.post('/deletestudent', (req, res) => {
  
  SchoolFormListModel.deleteOne({ _id: req.query.id }, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(true);
  })
})

app.post('/addStudent', (req, res) => {
  var model = req.body; //payload
  studentModel.create(model, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(true);
  })

})
app.get('/studentList', (req, res) => {
  studentModel.find((error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(result);
  })

})
app.post('/addemployersdetaillist', (req, res) => {
  var model = req.body; //payload
  EmployerslistModel.create(model, (error, result) => {
    if (error) {
      return res.json(false);
    }
    return res.json(true);
  })
})


app.listen(4000, function () {
  console.log('test')
});