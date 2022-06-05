import json

from flask import Flask, render_template, request, redirect, url_for, jsonify
from sqlalchemy import create_engine

app = Flask(__name__)

SQLALCHEMY_DATABASE_URI = "postgresql://sphudzeeatsxwn:29ca33d9eb3c774422bb7e65d20bd2cd4f5b6da215f23044890b0b48204d5b76@ec2-52-30-67-143.eu-west-1.compute.amazonaws.com:5432/dc0sqadmrkr3t3"
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
engine = create_engine(SQLALCHEMY_DATABASE_URI)


@app.route('/')
def index():
    select_query = f"""
                SELECT first_name, specialist, image
                FROM doctors
                """

    with engine.connect() as connection:
        doctors = connection.execute(select_query).fetchall()

    return render_template('index.html', doctors=doctors)


@app.route('/add-doctor')
def add_doctor():
    return render_template('pages/doctor/add-doctor.html')


@app.route("/add-doctor", methods=["POST"])
def handle_add_doctor():
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    email = request.form["email"]
    password = request.form["password"]
    designation = request.form["designation"]
    department = request.form["department"]
    address = request.form["address"]
    specialist = request.form["specialist"]
    mobile = request.form["mobile"]
    image = request.form["image"]
    biography = request.form["biography"]
    date_of_birth = request.form["date-of-birth"]
    blood_group = request.form["blood-group"]
    sex = request.form["sex"]

    insert_query = f"""
    INSERT INTO doctors(first_name, last_name, email, password, designation, department, address, specialist, mobile, image, biography, date_of_birth, blood_group, sex)
    VALUES ('{first_name}', '{last_name}', '{email}', '{password}', '{designation}', '{department}', '{address}', '{specialist}', '{mobile}', '{image}', '{biography}', '{date_of_birth}', '{blood_group}', '{sex}')
    """

    with engine.connect() as connection:
        connection.execute(insert_query)

        return redirect(url_for("doctor_list"))


@app.route('/doctor-list')
def doctor_list():
    select_query = f"""
                SELECT first_name, last_name, specialist, address, image
                FROM doctors
                """

    with engine.connect() as connection:
        doctors = connection.execute(select_query).fetchall()

    return render_template('pages/doctor/doctor-list.html', doctors=doctors)


@app.route('/add-patient')
def add_patient():
    return render_template('pages/patient/add-patient.html')


@app.route("/add-patient", methods=["POST"])
def handle_add_patient():
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    create_id = request.form["create-id"]
    mobile = request.form["mobile"]
    email = request.form["email"]
    blood_group = request.form["blood-group"]
    occupation = request.form["occupation"]
    marital_status = request.form["marital-status"]
    image = request.form["image"]
    date_of_birth = request.form["date-of-birth"]
    address = request.form["address"]
    history = request.form["history"]
    prefer_to = request.form["prefer-to"]
    sex = request.form["sex"]
    age = request.form["age"]
    disease = request.form["disease"]

    insert_query = f"""
    INSERT INTO patients(first_name, last_name, create_id, mobile, email, blood_group, occupation, marital_status, image, date_of_birth, address, history, prefer_to, sex, age, disease)
    VALUES ('{first_name}', '{last_name}', '{create_id}', '{mobile}', '{email}', '{blood_group}', '{occupation}', '{marital_status}', '{image}', '{date_of_birth}', '{address}', '{history}', '{prefer_to}', '{sex}', '{age}', '{disease}')
    """

    with engine.connect() as connection:
        connection.execute(insert_query)

        return redirect(url_for("patient_list"))


@app.route('/patient-list')
def patient_list():
    return render_template('pages/patient/patient-list.html')


@app.route("/api/patients")
def patients_api():
    select_query = f"""
                    SELECT first_name, address, mobile, email, age, disease, image
                    FROM patients
                    """

    with engine.connect() as connection:
        patients = connection.execute(select_query).fetchall()

    return jsonify({'result': [dict(row) for row in patients]})


@app.route('/add-department')
def add_department():
    return render_template('pages/department/add-department.html')


@app.route("/add-department", methods=["POST"])
def handle_add_department():
    doctor_name = request.form["doctor-name"]
    department_name = request.form["department-name"]
    department_head = request.form["department-head"]
    status = request.form["status"]

    insert_query = f"""
    INSERT INTO departments(doctor_name, department_name, department_head, status)
    VALUES ('{doctor_name}', '{department_name}', '{department_head}', '{status}')
    """

    with engine.connect() as connection:
        connection.execute(insert_query)

        return redirect(url_for("department_list"))


@app.route('/department-list')
def department_list():
    return render_template('pages/department/department-list.html')


@app.route("/api/departments")
def departments_api():
    select_query = f"""
                    SELECT doctor_name, department_name, department_head, status
                    FROM departments
                    """

    with engine.connect() as connection:
        departments = connection.execute(select_query).fetchall()

    return jsonify({'result': [dict(row) for row in departments]})


@app.route('/doctor-report')
def doctor_report():
    return render_template('pages/report/doctor-report.html')


@app.route('/patient-report')
def patient_report():
    return render_template('pages/report/patient-report.html')


@app.route('/total-report')
def total_report():
    return render_template('pages/report/total-report.html')


@app.route('/add-employee')
def add_employee():
    return render_template('pages/human-resource/add-employee.html')


@app.route('/add-nurse')
def add_nurse():
    return render_template('pages/human-resource/add-nurse.html')


@app.route('/add-pharmacist')
def add_pharmacist():
    return render_template('pages/human-resource/add-pharmacist.html')


@app.route('/add-representative')
def add_representative():
    return render_template('pages/human-resource/add-representative.html')


@app.route('/employee-list')
def employee_list():
    return render_template('pages/human-resource/employee-list.html')


@app.route('/nurse-list')
def nurse_list():
    return render_template('pages/human-resource/nurse-list.html')


@app.route('/pharmacist-list')
def pharmacist_list():
    return render_template('pages/human-resource/pharmacist-list.html')


@app.route('/representative-list')
def representative_list():
    return render_template('pages/human-resource/representative-list.html')


@app.route('/add-bed')
def add_bed():
    return render_template('pages/bed-manager/add-bed.html')


@app.route("/add-bed", methods=["POST"])
def handle_add_bed():
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    room_number = request.form["room-number"]
    bed_type = request.form["bed-type"]
    admit_date = request.form["admit-date"]
    bed_capacity = request.form["bed-capacity"]
    description = request.form["description"]
    sex = request.form["sex"]

    insert_query = f"""
    INSERT INTO beds(first_name, last_name, room_number, bed_type, admit_date, bed_capacity, description, sex)
    VALUES ('{first_name}', '{last_name}', '{room_number}', '{bed_type}', '{admit_date}', '{bed_capacity}', '{description}', '{sex}')
    """

    with engine.connect() as connection:
        connection.execute(insert_query)

        return redirect(url_for("bed_list"))


@app.route('/bed-list')
def bed_list():
    return render_template('pages/bed-manager/bed-list.html')


@app.route("/api/beds")
def beds_api():
    select_query = f"""
                    SELECT first_name, bed_type, description, bed_capacity
                    FROM beds
                    """

    with engine.connect() as connection:
        beds = connection.execute(select_query).fetchall()

    return jsonify({'result': [dict(row) for row in beds]})


if __name__ == '__main__':
    app.run()
