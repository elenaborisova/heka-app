from flask import Flask, render_template
from sqlalchemy import create_engine

app = Flask(__name__)
# engine = create_engine("postgresql:///heka_database")


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add-doctor')
def add_doctor():
    return render_template('pages/doctor/add-doctor.html')


@app.route('/doctor-list')
def doctor_list():
    return render_template('pages/doctor/doctor-list.html')


@app.route('/add-patient')
def add_patient():
    return render_template('pages/patient/add-patient.html')


@app.route('/patient-list')
def patient_list():
    return render_template('pages/patient/patient-list.html')


@app.route('/add-department')
def add_department():
    return render_template('pages/department/add-department.html')


@app.route('/department-list')
def department_list():
    return render_template('pages/department/department-list.html')


@app.route('/add-schedule')
def add_schedule():
    return render_template('pages/doctor-schedule/add-schedule.html')


@app.route('/schedule-list')
def schedule_list():
    return render_template('pages/doctor-schedule/schedule-list.html')


@app.route('/add-payment')
def add_payment():
    return render_template('pages/payment/add-payment.html')


@app.route('/payment-list')
def payment_list():
    return render_template('pages/payment/payment-list.html')


@app.route('/payment-invoice')
def payment_invoice():
    return render_template('pages/payment/payment-invoice.html')


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


@app.route('/bed-list')
def bed_list():
    return render_template('pages/bed-manager/bed-list.html')


@app.route('/add-notice')
def add_notice():
    return render_template('pages/notice/add-notice.html')


@app.route('/notice-list')
def notice_list():
    return render_template('pages/notice/notice-list.html')


if __name__ == '__main__':
    app.run()
