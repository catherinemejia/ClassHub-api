const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//const data = require('./data');
const data = require('./mockDB');

const userRouter = require('./routes/userRouter')(data.users);
const subjectRouter = require('./routes/subjectRouter')(data.subjects);
const sectionRouter = require('./routes/sectionRouter')(data.sections);
const studentRouter = require('./routes/studentRouter')(data.students);
// const roleRouter = require('./routes/roleRouter')(Role);
const remarkRouter = require('./routes/remarkRouter')(data.remarks);
const examRouter = require('./routes/examRouter')(data.exams);
const attendanceRouter = require('./routes/attendanceRouter')(data.attendances);
const classRouter = require('./routes/classRouter')(data.classes);

const app = express();
//const db = mongoose.connect('mongodb://localhost/classhub');
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello, I'm API!");
});

app.use('/api', userRouter);
app.use('/api', subjectRouter);
app.use('/api', studentRouter);
app.use('/api', sectionRouter);
app.use('/api', attendanceRouter);
app.use('/api', examRouter);
app.use('/api', remarkRouter);
app.use('/api', classRouter);

// subjectDetail
app.get('/subjectDetail', (req, res) => {
    const subjectId = req.query.subjectId;
    const sectionId = req.query.sectionId;
    const teacherId = req.query.teacherId;

    let subjectDetail = [...data.subjectDetail];

    if (subjectId !== undefined) {
        subjectDetail = subjectDetail.filter(v => v.subjectId == subjectId);
    }

    if (sectionId !== undefined) {
        subjectDetail = subjectDetail.filter(v => v.sectionId == sectionId);
    }

    if (teacherId !== undefined) {
        subjectDetail = subjectDetail.filter(v => v.teacherId == teacherId);
    }

    return res.json(subjectDetail);
});

app.get('/sectionDetail', (req, res) => {
    const subjectDetailId = req.query.subjectDetailId;
    const studentId = req.query.studentId;

    let sectionDetail = [...data.sectionDetail];

    if (subjectDetailId !== undefined) {
        sectionDetail = sectionDetail.filter(v => v.subjectDetailId == subjectDetailId);
    }

    if (studentId !== undefined) {
        sectionDetail = sectionDetail.filter(v => v.studentId == studentId);
    }

    return res.json(sectionDetail);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
