// Группа студентов

// 1) Реализовать функцию которая принимает имя и возраст студента
//  и возвращает объект с полями name, age, marks(пустой массив);

// 2)Реализовать функцию которая будет управлять студентами

// функция должна принимать массив студентов созданных с помощью предыдущей
// функции должна возвращать объект у которого будут следующие методы:
// добавления нового студента
// удаление студента по имени
// добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
// получение средней оценки студента по имени
// получение средней оценки группы за занятие
// получение отсортированного по именам списка студентов
// получение отсортированного по среднему балу списка студентов

// 3) Работоспособность всех методов продемонстрировать ниже


function getStudent(name, age){
    return {
        name : name,     
        age : age,      
        marks : []
    };   
}

function cloneStudents(arr) {
	return arr.slice(0);
}

function studentManagement (students) {
    
    var students = cloneStudents(students);

    var management = {

        addStudent : function (student) {
            students.push(student);
        },

        deleteStudent : function (name) {
            var index = students.findIndex(function(item){
				return item.name === name;
			});
			if(index != -1){
				students.splice(index, 1);
			} 
        },

        getStudent : function(name){
			var student = students.find(function(item){
				return item.name === name;
			});
			return student ? student : null;
        },
        
        addMark : function(name, lessonNumber, mark){
			var student = management.getStudent(name);
			
			if(student){
				student.marks[lessonNumber-1] = mark;
			}
        },
        
        averageMark : function(name){
			
			var student = management.getStudent(name);

            var sumMarks = student.marks.reduce (function (sum, current) {
                
                return sum + current;
            });

            return sumMarks / student.marks.length;
        },
        
        averageGroupMark : function(lessonNumber){
            
            var sumMarks = students.reduce (function (sum, current){

                isNaN(+(current.marks[lessonNumber-1])) ? 'pofig)' : sum += current.marks[lessonNumber-1];

                return sum;
            },0);

            return sumMarks / students.length;
        },
        
        getSortByName : function(){
			
			return students.sort (function(student1, student2){
				
			return (student1.name > student2.name) ?  1 : -1;
			});
        },
        
        getSortByAverageMark : function(){
			
			return students.sort(function(student1, student2){
				
				var student1AverageMark = management.averageMark(student1.name);
				var student2AverageMark = management.averageMark(student2.name);

				return (student1AverageMark < student2AverageMark) ? 1 : -1;
			});
		}
    };

    return management;    
}

//Проверка кода "ниже)"

// Группа студентов:

var students = [
    getStudent('Serg', 21),
    getStudent('Inna', 23),
    getStudent('Ann', 19),
    getStudent('Vic', 22),
    getStudent('Andy', 20),
    getStudent('Sam', 22)
];

var management = studentManagement(students);


// 1. добавления нового студента:

management.addStudent(getStudent('Nick', 19));
management.addStudent(getStudent('Sally', 21));

// 2. удаление студента по имени:

management.deleteStudent('Ann');
management.deleteStudent('Sam');

// 3. добавление оценки студенту за занятие
// (№ занятия === индекс оценки в массиве):

management.addMark('Serg', 1, 7);
management.addMark('Serg', 2, 9);
management.addMark('Serg', 3, 7);

management.addMark('Inna', 1, 10);
management.addMark('Inna', 2, 9);

management.addMark('Vic', 1, 9);
management.addMark('Vic', 2, 9);
management.addMark('Vic', 3, 8);

management.addMark('Andy', 1, 2);
management.addMark('Andy', 2, 3);

management.addMark('Nick', 1, 6);
management.addMark('Nick', 2, 10);

management.addMark('Sally', 1, 9);
management.addMark('Sally', 2, 6);
management.addMark('Sally', 3, 5);

// 4. получение средней оценки студента по имени:

console.log(management.averageMark('Andy'));
console.log(management.averageMark('Nick'));

// // 5. получение средней оценки группы за занятие:

console.log(management.averageGroupMark(1));
console.log(management.averageGroupMark(2));
console.log(management.averageGroupMark(3));

// // 6. получение отсортированного по именам списка студентов:

// Получаем новый отсортированный массив (для корректного отображения): 

var sortByName = management.getSortByName().slice(); 

console.log(sortByName); 

// // 7. получение отсортированного по среднему балу списка студентов 
// (от максимального к минимальному):

// Получаем новый отсортированный массив (для корректного отображения): 

var SortByAverageMark = management.getSortByAverageMark().slice();

console.log(SortByAverageMark);