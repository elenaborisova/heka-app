async function funPatients() {
    return fetch('/api/patients').then(res => res.json());
}

async function funDepartments() {
    return fetch('/api/departments').then(res => res.json());
}

async function funBeds() {
    return fetch('/api/beds').then(res => res.json());
}


(async function ($) {
    'use strict';

    var dataSet = [
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Denise", "Old York, Abington", "Fever", "7", "	(836) 257 1379", "denisestevens@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Dennis", "Juniper Drive, Saginaw", "Cancer", "34", "(933) 137 6201", "dennissalazar@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Jennifer", "Leland, NC", "Heart Attack", "35", "(207) 808 8863", "jenniferrobinson@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Joshua", "Bonita Springs", "Cold", "34", "	(407) 554 4146", "	joshuaguzman@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Charles", "Birch Street, El Paso", "Cancer", "	32", "(380) 141 1885", "charlesortega@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Judy Clark", "Woodside Circle, Pensacola", "Diabeties", "34", "	(359) 969 3594", "judy.clark@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Julia Sims", "Walker Dr, Houma, LA, United States", "Celiac ", "27", "	(680) 432 2662", "juliasims@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Kyle", "Fairways Cir, Vero Beach", "Fever", "	7", "	(981) 756 6128", "	kylebowman@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Linda", "Victory Garden, Tallahassee", "Heart Attack", "24", "(218) 661 8316", "	lindacarpenter@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Marie", "New Haven, Columbia", "Cold", "22", "(634) 09 3833", "mariehoward@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'> Melissa", "Milwaukee, WI", "Cancer", "35", "(192) 494 8073", "melissaburton@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Patrick", "Commerce, TX", "Celiac ", "21", "(785) 580 4514", "patrickknight@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Sandra", "Linden Avenue, Orlando", "Liver Disease", "24", "	(797) 506 1265", "sandramendez@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Terry Baker", "Hempstead, NY", "Diabeties", "63", "(376) 150 6975", "	terrybaker@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Tatyana", "Saginaw, MI,", "Fever ", "34", "(933) 137 6201", "tatyanafitzpatrick@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Michael", "Linden Avenue, Orlando", "Celiac ", "24", "	(797) 506 1265", "michaelsilva@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Paul Byrd", "Milwaukee, WI", "Asthma", "35", "(192) 494 8073", "paulbyrd@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Gloria ", "LA, United States", "Cold", "27", "	(680) 432 2662", "glorialittle@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Bradley", "Victory Garden, Tallahassee", "Liver Disease", "24", "(218) 661 8316", "	bradleygreer@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Dai Rios", "Fairways Cir, Vero Beach", "Heart Attck", "	7", "	(981) 756 6128", "dairiosn@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Jenette ", "Birch Street, El Paso", "Autoimmune", "	32", "(380) 141 1885", "jenettecaldwell@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Yuri Berry", " LA, United States", "Fever", "27", "	(680) 432 2662", "yuriberry@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Caesar ", "Birch Street, El Paso", "Asthma", "	32", "(380) 141 1885", "caesarvance@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Doris ", "Victory Garden, Tallahassee", "Diabeties", "24", "(218) 661 8316", "	doriswilder@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Angelica", "Linden Avenue, Orlando", "Liver Disease", "24", "	(797) 506 1265", "angelicaramos@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Joyce", "Milwaukee, WI", "Asthma", "35", "(192) 494 8073", "gavinjoyce@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Jennifer ", "Milwaukee, WI", "Autoimmune", "35", "(192) 494 8073", "jenniferchang@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Brenden", "New Haven, Columbia", "Infectious", "22", "(634) 09 3833", "brendenwagner@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Fiona ", "LA, United States", "Colitis", "27", "	(680) 432 2662", "fionagreen@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Shou Itou", "Fairways Cir, Vero Beach", "Asthma", "	7", "	(981) 756 6128", "shouitou@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Michelle", "Linden Avenue, Orlando", "Infectious", "24", "	(797) 506 1265", "Michelle@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Suki Burks", "Milwaukee, WI", "Colitis", "35", "(192) 494 8073", "sukiburks@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Prescott", "Milwaukee, WI", "Infectious", "35", "(192) 494 8073", "prescottbartlett@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Gavin ", "Fairways Cir, Vero Beach", "Autoimmune", "	7", "	(981) 756 6128", "gavincortez@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Martena", "LA, United States", "Diabeties", "27", "	(680) 432 2662", "martenamccray@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>  Unity", "New Haven, Columbia", "Celiac ", "22", "(634) 09 3833", "butler@example.com", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"]
    ];

    const patients_data = await funPatients();

    for (let i = 0; i < patients_data.result.length; i++) {
        dataSet.push([`<img src=${patients_data.result[i].image} style='width:50px; height:30px;'> ` + patients_data.result[i].first_name, patients_data.result[i].address, patients_data.result[i].disease, patients_data.result[i].age, patients_data.result[i].mobile, patients_data.result[i].email, "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"])
    }

    var dataSet1 = [
        ["1", "Denise", "Dentists", "Daniel", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "Jennifer", "Neurology", "Joshua", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "Joshua", "Opthalmology", "Jenni", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "Sandra", "Orthopedics", "Daniel", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "Judy Clark", "Cancer Department", "Jacob", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "Linda", "ENT Department", "Adwerd", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "Micheal", "General Surgery", "Kyle", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "Patrick", "Heart Surgery", "Paul", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "Paul", "Radiotherapy", "Patrick", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "Gloria", "Cancer Department", "Sandra", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "Deni", "	Gynaecology", "Denis", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "Jenni", "Orthopedics", "Bella", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "Joshua", "Heart Surgery", "Henry", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "Kyle", "Neurology", "Linda", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];

    let count = 14;
    const departments_data = await funDepartments();

    for (let i = 0; i < departments_data.result.length; i++) {
        count++;
        dataSet1.push([count, departments_data.result[i].doctor_name, departments_data.result[i].department_name, departments_data.result[i].department_head, `<span class='badge badge-outline-success'>${departments_data.result[i].status}</span>`, "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"])
    }


    var dataSet2 = [
        ["1", "Denise", "Neurology", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "Jennifer", "Heart Surgery", "Monday", "9:00", "11:00", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "Joshua", "Gynaecology", "Saturday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "Judy Clark", "Orthopedics", "Tuesday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "Kyle", "Radiotherapy", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "Linda", "ENT Department", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "Sandra", "General Surgery", "Tuesday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "Micheal", "Heart Surgery", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "Paul", "Radiotherapy", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "Terry", "Cancer Department", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "Gloria", "	Gynaecology", "Tuesday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "Charles", "Orthopedics", "Sunday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "Patrick", "Heart Surgery", "Saturday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "Dennis", "Neurology", "Friday", "9:00", "11:00", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];


    var dataSet3 = [
        ["APT0001", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Denise", "39", "Henry Daniels", "Cardiology", "11 Dec 2020", "10:00am-12:00am", "Cold", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0002", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Jennifer", "29", "Doris Wilder", "Gynaecology", "5 Dec 2020", "10:00am-12:00am", "Fever", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0003", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Joshua", "42", "Gavin Joyce", "Neurology", "6 Jan 2020", "10:00am-12:00am", "heart", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0004", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Judy", "23", "Yuri Berry", "Orthopedics", "19 Dec 2020", "10:00am-12:00am", "Diabeties", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0005", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Kyle", "55", "Henry Daniels", "Radiotherapy", "15 Dec 2020", "10:00am-12:00am", "Cold", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0006", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Denise", "39", "Henry Daniels", "Cardiology", "11 Dec 2020", "10:00am-12:00am", "heart", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0007", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Jennifer", "29", "Doris Wilder", "Gynaecology", "5 Dec 2020", "10:00am-12:00am", "Diabeties", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0008", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Joshua", "42", "Gavin Joyce", "Neurology", "6 Jan 2020", "10:00am-12:00am", "Fever", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT0009", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Judy", "23", "Yuri Berry", "Orthopedics", "19 Dec 2020", "10:00am-12:00am", "Asthma", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a0", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Kyle", "55", "Henry Daniels", "Radiotherapy", "15 Dec 2020", "10:00am-12:00am", "heart", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a1", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Denise", "39", "Henry Daniels", "Cardiology", "11 Dec 2020", "10:00am-12:00am", "Cold", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a2", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Jennifer", "29", "Doris Wilder", "Gynaecology", "5 Dec 2020", "10:00am-12:00am", "Asthma", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a3", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Denise", "39", "Henry Daniels", "Cardiology", "11 Dec 2020", "10:00am-12:00am", "Fever", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a4", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Jennifer", "29", "Doris Wilder", "Gynaecology", "5 Dec 2020", "10:00am-12:00am", "Diabeties", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a5", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Denise", "39", "Henry Daniels", "Cardiology", "11 Dec 2020", "10:00am-12:00am", "heart", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["APT000a6", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>Jennifer", "29", "Doris Wilder", "Gynaecology", "5 Dec 2020", "10:00am-12:00am", "Cold", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];


    var dataSet4 = [
        ["1", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "10 Nov 2020", "340$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "16 Nov 2020", "1040$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "12 Nov 2020", "740$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "16 Nov 2020", "310$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "8 Nov 2020", "900$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "10 Nov 2020", "540$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "16 Nov 2020", "300$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "12 Nov 2020", "1340$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "8 Nov 2020", "640$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "15 Nov 2020", "1240$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Credit", "16 Nov 2020", "940$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "5 Nov 2020", "1230$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "15 Nov 2020", "2330$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "Hospital Memo", "Lorem Ipsum is simply dummy text of the printing.", "Debit", "5 Nov 2020", "2210$", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];


    var dataSet5 = [
        ["1", "Jacob", "NON-AC-1st Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "Nick", "AC-3rd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "Richard", "NON-AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "Kyle", "AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "jennifer", "NON-AC-3rd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "Adwerd", "AC-1st Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "Rose", "NON-AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "Joshphe", "AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "Nelson", "NON-AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "Jacob", "AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "Nick", "AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "Richard", "AC-3rd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "Kyle", "NON-AC-1st Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "jennifer", "AC-2nd Floor", "Lorem Ipsum is simply dummy text of the printing.", "1/2", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];

    const beds_data = await funBeds();
    let count_beds = 14;

    for (let i = 0; i < beds_data.result.length; i++) {
        count_beds++;
        dataSet5.push([count, beds_data.result[i].first_name, beds_data.result[i].bed_type, beds_data.result[i].description, beds_data.result[i].bed_capacity, "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a> <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"])
    }


    var dataSet6 = [
        ["1", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "16 Dec 2020", "19 Dec 2020", "Joshua", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "09 Dec 2020", "15 Dec 2020", "Denise", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "18 Dec 2020", "22 Dec 2020", "Jennifer", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "16 Dec 2020", "19 Dec 2020", "Kyle", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "01 Dec 2020", "8 Dec2019", "Judy", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "18 Dec 2020", "22 Dec 2020", "Gavin", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "16 Dec 2020", "19 Dec 2020", "Henry", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "18 Dec 2020", "22 Dec 2020", "Judy", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "18 Dec 2020", "22 Dec2019", "Gavin", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "01 Dec 2020", "8 Dec 2020", "Henry", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "18 Dec 2020", "22 Dec 2020", "Joshua", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "09 Dec 2020", "15 Dec2019", "Denise", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "01 Dec 2020", "8 Dec 2020", "Kyle", "<span class='badge badge-outline-success'>Active</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "Summer Solstice 2020 (Southern Hemisphere)", "Lorem Ipsum is simply dummy text of the printing.", "09 Dec 2020", "15 Dec2019", "Jennifer", "<span class='badge badge-outline-danger'>Inactive</span>", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],

    ];

    var dataSet7 = [
        ["1", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Denise", "denise176@gmail.com", "New York", "	(836) 257 1340", "10 Nov 2012", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "Los Angeles", "	(836) 257 1379", "16 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Atlanta", "	(836) 257 1372", "12 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Joshua", "joshua@gmail.com", "Chicago", "	(836) 257 1374", "16 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Adwerd", "adwerd@gmail.com", "California", "	(836) 257 1371", "8 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Daniel", "daniel983@gmail.com", "New York", "	(836) 257 1375", "10 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "San Francisco", "	(836) 257 1373", "16 Nov 2020", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Los Angeles", "	(836) 257 1312", "12 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Joshua", "joshua@gmail.com", "Atlanta", "	(836) 257 1332", "8 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Adwerd", "adwerd@gmail.com", "California", "	(836) 257 1324", "15 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Daniel", "daniel983@gmail.com", "Chicago", "	(836) 257 1343", "16 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Henry", "henry@gmail.com", "San Francisco", "	(836) 257 1354", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jacob", "jacob@gmail.com", "New York", "	(836) 257 1325", "15 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Gavin", "gavin@gmail.com", "Atlanta", "	(836) 257 1131", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ];

    var dataSet8 = [
        ["1", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Bella", "bella176@gmail.com", "New York", "	(836) 257 1340", "10 Nov 2012", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "Los Angeles", "	(836) 257 1379", "16 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Atlanta", "	(836) 257 1372", "12 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Rose", "rose@gmail.com", "Chicago", "	(836) 257 1374", "16 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Abigail", "abigail@gmail.com", "California", "	(836) 257 1371", "8 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Aimee", "aimee983@gmail.com", "New York", "	(836) 257 1375", "10 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "San Francisco", "	(836) 257 1373", "16 Nov 2020", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Los Angeles", "	(836) 257 1312", "12 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Edne", "edne@gmail.com", "Atlanta", "	(836) 257 1332", "8 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Ellena", "ellena@gmail.com", "California", "	(836) 257 1324", "15 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Elly", "elly983@gmail.com", "Chicago", "	(836) 257 1343", "16 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Gennie", "gennie@gmail.com", "San Francisco", "	(836) 257 1354", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Suzanne", "suzanne@gmail.com", "New York", "	(836) 257 1325", "15 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Bella", "bella@gmail.com", "Atlanta", "	(836) 257 1131", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ];

    var dataSet9 = [
        ["1", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Denise", "denise176@gmail.com", "New York", "	(836) 257 1340", "10 Nov 2012", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["2", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "Los Angeles", "	(836) 257 1379", "16 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["3", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Atlanta", "	(836) 257 1372", "12 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["4", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Joshua", "joshua@gmail.com", "Chicago", "	(836) 257 1374", "16 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["5", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Adwerd", "adwerd@gmail.com", "California", "	(836) 257 1371", "8 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["6", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Daniel", "daniel983@gmail.com", "New York", "	(836) 257 1375", "10 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["7", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jennifer", "jennifer@gmail.com", "San Francisco", "	(836) 257 1373", "16 Nov 2020", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["8", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Kyle", "kyle698@gmail.com", "Los Angeles", "	(836) 257 1312", "12 Nov 2014", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["9", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Joshua", "joshua@gmail.com", "Atlanta", "	(836) 257 1332", "8 Nov 2009", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["10", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Adwerd", "adwerd@gmail.com", "California", "	(836) 257 1324", "15 Nov 2015", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["11", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Daniel", "daniel983@gmail.com", "Chicago", "	(836) 257 1343", "16 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["12", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Henry", "henry@gmail.com", "San Francisco", "	(836) 257 1354", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["13", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Jacob", "jacob@gmail.com", "New York", "	(836) 257 1325", "15 Nov 2017", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["14", "<img src='https://via.placeholder.com/216x62' style='width:50px; height:30px;'>", "Gavin", "gavin@gmail.com", "Atlanta", "	(836) 257 1131", "5 Nov 2010", "<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i></a>   <a href='#'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ];


    var tableOne = $('#data-table-1').DataTable({
        data: dataSet,
        columns: [
            {title: "Name"},
            {title: "Position"},
            {title: "Office"},
            {title: "Extn."},
            {title: "Start date"},
            {title: "Salary"}
        ],
    });
    var tableTwo = $('#data-table-2').DataTable({
        data: dataSet,
        columns: [
            {title: "Name"},
            {title: "Address"},
            {title: "Disease"},
            {title: "Age"},
            {title: "Phone"},
            {title: "Email"},
            {title: "Action"}
        ],
    });
    var tableThree = $('#data-table-3').DataTable({
        data: dataSet,
        columns: [
            {title: "Name"},
            {title: "Position"},
            {title: "Office"},
            {title: "Extn."},
            {title: "Start date"},
            {title: "Salary"}
        ],

    });
    var tableFour = $('#data-table-4').DataTable({
        data: dataSet,
        columns: [
            {title: "Name"},
            {title: "Position"},
            {title: "Office"},
            {title: "Extn."},
            {title: "Start date"},
            {title: "Salary"}
        ],
    });


    var tableFour = $('#data-table5').DataTable({
        data: dataSet1,
        columns: [
            {title: "#"},
            {title: "Doctor Name"},
            {title: "Department Name"},
            {title: "Department Head"},
            {title: "Status"},
            {title: "Action"},
        ],
    });

    var tableFour = $('#data-table6').DataTable({
        data: dataSet2,
        columns: [
            {title: "Serial No."},
            {title: "Doctor Name"},
            {title: "Department Name"},
            {title: "Day"},
            {title: "Start time"},
            {title: "End time"},
            {title: "Status"},
            {title: "Update"}
        ],
    });


    var tableFour = $('#data-table7').DataTable({
        data: dataSet3,
        columns: [
            {title: "ID"},
            {title: "Patient Name"},
            {title: "Age"},
            {title: "Doctor Name"},
            {title: "Department"},
            {title: "Date"},
            {title: "Time"},
            {title: "Disease"},
            {title: "Action"}
        ],
    });

    var tableFour = $('#data-table8').DataTable({
        data: dataSet4,
        columns: [
            {title: "Serial No."},
            {title: "Account Name"},
            {title: "Description"},
            {title: "Type"},
            {title: "Date"},
            {title: "Amount"},
            {title: "Action"},

        ],
    });

    var tableFour = $('#data-table9').DataTable({
        data: dataSet5,
        columns: [
            {title: "Serial No."},
            {title: "Patient Name"},
            {title: "Bed Type"},
            {title: "Description"},
            {title: "Bed Capacity"},

            {title: "Update"},

        ],
    });


    var tableFour = $('#data-table10').DataTable({
        data: dataSet6,
        columns: [
            {title: "#"},
            {title: "Title"},
            {title: "Description"},
            {title: "Start Date"},
            {title: "End Date"},
            {title: "Assign By"},
            {title: "Status"},
            {title: "Action"}

        ],
    });

    var tableFour = $('#data-table11').DataTable({
        data: dataSet7,
        columns: [
            {title: "S.No."},
            {title: "Pic"},
            {title: "Name"},
            {title: "Email"},
            {title: "Address"},
            {title: "Mobile"},
            {title: "Joining Date"},
            {title: "Update"}

        ],
    });

    var tableFour = $('#data-table12').DataTable({
        data: dataSet8,
        columns: [
            {title: "S.No."},
            {title: "Pic"},
            {title: "Name"},
            {title: "Email"},
            {title: "Address"},
            {title: "Mobile"},
            {title: "Joining Date"},
            {title: "Update"}

        ],
    });

    var tableFour = $('#data-table13').DataTable({
        data: dataSet9,
        columns: [
            {title: "S.No."},
            {title: "Pic"},
            {title: "Name"},
            {title: "Email"},
            {title: "Address"},
            {title: "Mobile"},
            {title: "Joining Date"},
            {title: "Update"}

        ],
    });
})(jQuery);

