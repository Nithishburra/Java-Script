class class_one{
     sub_one="java";
     sub_two="adv java";
     sub_three="jdbc";
}

let obj1 = new class_one();
console.log(
    obj1.sub_one,
    obj1.sub_two,
    obj1.sub_three

);


class class_two{
    sub_one="js";
    sub_two="angular";
    sub_three="html";
    sub_four="css"
}

let obj2 = new class_two();
console.log(
    obj2.sub_one,
    obj2.sub_two,
    obj2.sub_three,
    obj2.sub_four
);



class class_three{
    sub_one="CSS3";
    sub_two="HTML5";
    sub_three="HTML";
    sub_four="CSS";
}

let obj3 = new class_three();
console.log(
    obj3.sub_one,
    obj3.sub_two,
    obj3.sub_three,
    obj3.sub_four
);







class class_four{
    sub_one="SBMS";
    sub_two="JRTP";
    sub_three="Spring"


getSubOne(){
    return this.sub_one;
}
getSubTwo(){
    return this.sub_two;
}
getSubThree(){
    return this.sub_three
}
};

let obj4 = new class_four();

console.log(
    obj4.getSubOne(),
    obj4.getSubTwo(),
    obj4.getSubThree()
);



class class_five{
    sub_one="Array";
    sub_two="Json";
    sub_three="Classes";
    sub_four="Ajax";

    getSubOne(){
        return this.sub_one;
    }

    getSubTwo(){
        return this.sub_two;
    }
    getSubThree(){
        return this.sub_three;
    }
    getSubFour(){
        return this.sub_four;
    }
};

let obj5 = new class_five();
console.log(
    obj5.getSubOne(),
    obj5.getSubTwo(),
    obj5.getSubThree(),
    obj5.getSubFour(),
);
                                                        //Array Json Classes Ajax


class class_six{
    sub_one="hello_1";
    sub_two="hello_2";
    sub_three="hello_3";
}

let obj6 = new class_six();
console.log(
    obj6.sub_one,
    obj6.sub_two,
    obj6.sub_three
);
                                        //hello_1 hello_2 hello_3