//nested object 

const studentinfo={
    mahesh:{
        grade:"A",
        city:"Akola"
    },
    srushti:{
        grade:"O",
        city:"Solapur"
    },
    ram:{
        grade:"B",
        city:"mumbai"
    }
}


studentinfo.mahesh.grade="O";
studentinfo.ram.city="pune";
console.log(studentinfo.srushti);
console.log(studentinfo);



