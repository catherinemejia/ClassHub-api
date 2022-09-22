module.exports = {
    roles: [
        { 'id': '1', 'role': 'Admin' },
        { 'id': '2', 'role': 'Teacher' },
        { 'id': '3', 'role': 'Parent' }
    ],
    users: [
        { 'id': '1', 'userName': 'gambore', 'password': 'password123', 'fullName': 'Rey Gamboa', 'contactNumber': '09173057623', 'emailAddress': 'rey@school.edu', 'roleId': '1' },
        { 'id': '2', 'userName': 'terrence', 'password': 'password123', 'fullName': 'Thoughtful Terrence', 'contactNumber': '09173057623', 'emailAddress': 'terrence@school.edu', 'roleId': '2' },
        { 'id': '3', 'userName': 'roger', 'password': 'password123', 'fullName': 'Raging Roger', 'contactNumber': '09173057623', 'emailAddress': 'roger@school.edu', 'roleId': '2' },
        { 'id': '4', 'userName': 'tigreal', 'password': 'password123', 'fullName': 'Thinking Tigreal', 'contactNumber': '09173057623', 'emailAddress': 'tigreal@school.edu', 'roleId': '2' },
        { 'id': '5', 'userName': 'irene', 'password': 'password123', 'fullName': 'Independent Irene', 'contactNumber': '09173057623', 'emailAddress': 'irene@school.edu', 'roleId': '3' },
        { 'id': '6', 'userName': 'anna', 'password': 'password123', 'fullName': 'Single Mama Anna', 'contactNumber': '09173057623', 'emailAddress': 'anna@school.edu', 'roleId': '3' },
        { 'id': '7', 'userName': 'vince', 'password': 'password123', 'fullName': 'Competitive Vince', 'contactNumber': '09173057623', 'emailAddress': 'vince@school.edu', 'roleId': '3' },
    ],
    students: [
        { 'id': '1', 'name': 'Vexana' },
        { 'id': '2', 'name': 'Eudora' },
        { 'id': '3', 'name': 'Irithel' },
        { 'id': '4', 'name': 'Clint' },
        { 'id': '5', 'name': 'Clint' },
        { 'id': '6', 'name': 'Clint' },
        { 'id': '7', 'name': 'Karrie' },
        { 'id': '8', 'name': 'Karina' },
        { 'id': '9', 'name': 'Alucard' },
        { 'id': '10', 'name': 'Gondar' },
    ],
    subjects: [
        { 'id': '1', 'name': 'Math' },
        { 'id': '2', 'name': 'English' },
        { 'id': '3', 'name': 'Science' },
    ],
    sections: [
        { 'id': '1', 'name': 'Targaryen' },
        { 'id': '2', 'name': 'Lannister' },
    ],
    subjectDetail: [
        { 'id': '1', 'subjectId': '1', 'sectionId': '1', 'teacherId': '2' },
        { 'id': '2', 'subjectId': '2', 'sectionId': '1', 'teacherId': '3' },
        { 'id': '3', 'subjectId': '3', 'sectionId': '1', 'teacherId': '4' },
        { 'id': '4', 'subjectId': '1', 'sectionId': '2', 'teacherId': '2' },
        { 'id': '5', 'subjectId': '2', 'sectionId': '2', 'teacherId': '3' },
        { 'id': '6', 'subjectId': '3', 'sectionId': '2', 'teacherId': '4' },
    ],
    sectionDetail: [
        { 'id': '1', 'subjectDetailId': '1', 'studentId': '1' },
        { 'id': '2', 'subjectDetailId': '1', 'studentId': '2' },
        { 'id': '3', 'subjectDetailId': '1', 'studentId': '3' },
        { 'id': '4', 'subjectDetailId': '1', 'studentId': '4' },
        { 'id': '5', 'subjectDetailId': '1', 'studentId': '5' },
        { 'id': '6', 'subjectDetailId': '2', 'studentId': '1' },
        { 'id': '7', 'subjectDetailId': '2', 'studentId': '2' },
        { 'id': '8', 'subjectDetailId': '2', 'studentId': '3' },
        { 'id': '9', 'subjectDetailId': '2', 'studentId': '4' },
        { 'id': '10', 'subjectDetailId': '2', 'studentId': '5' },
        { 'id': '11', 'subjectDetailId': '3', 'studentId': '1' },
        { 'id': '12', 'subjectDetailId': '3', 'studentId': '2' },
        { 'id': '13', 'subjectDetailId': '3', 'studentId': '3' },
        { 'id': '14', 'subjectDetailId': '3', 'studentId': '4' },
        { 'id': '15', 'subjectDetailId': '3', 'studentId': '5' },
        { 'id': '16', 'subjectDetailId': '4', 'studentId': '6' },
        { 'id': '17', 'subjectDetailId': '4', 'studentId': '7' },
        { 'id': '18', 'subjectDetailId': '4', 'studentId': '8' },
        { 'id': '19', 'subjectDetailId': '4', 'studentId': '9' },
        { 'id': '20', 'subjectDetailId': '4', 'studentId': '10' },
        { 'id': '21', 'subjectDetailId': '5', 'studentId': '6' },
        { 'id': '22', 'subjectDetailId': '5', 'studentId': '7' },
        { 'id': '23', 'subjectDetailId': '5', 'studentId': '8' },
        { 'id': '24', 'subjectDetailId': '5', 'studentId': '9' },
        { 'id': '25', 'subjectDetailId': '5', 'studentId': '10' },
        { 'id': '26', 'subjectDetailId': '6', 'studentId': '6' },
        { 'id': '27', 'subjectDetailId': '6', 'studentId': '7' },
        { 'id': '28', 'subjectDetailId': '6', 'studentId': '8' },
        { 'id': '29', 'subjectDetailId': '6', 'studentId': '9' },
        { 'id': '30', 'subjectDetailId': '6', 'studentId': '10' }
    ],
    attendances: [
        { 'id': '1', 'isPresent': false, 'date': '2022-01-01', 'subjectDetailId': '1', 'studentId': '1' },
    ],
    exams: [
        { 'id': '1', 'topic': 'Algebra', 'isPass': false, 'subjectDetailId': '1', 'studentId': '1' },
    ],
    remarks: [
        { 'id': '1', 'comment': 'Makuliiiit', 'isMerit': false, 'subjectDetailId': '1', 'studentId': '1' },
    ],
    messages: [
        { 'id': '1', 'type': 'Attendance', 'notification': '' }
    ]
};