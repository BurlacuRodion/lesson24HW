function showObjProp(key) {
    return this[key]
}
const obj = {
    name:'John',
    func:showObjProp
}
const obj2 = {
    name:'Mike'
}
//console.log(obj.func.call(obj2, 'name'))
//console.log(obj.func.apply(obj2, ['name']))

const bindFunc = showObjProp.bind(obj)
//console.log(bindFunc('name'))
//-----------------------------------------------//

const obj3 = {
    name:'Nicola'
}

Object.defineProperties(obj3,{
    age: {
        value:12,
        writable:false,
        enumerable:true,
        configurable:true
    },
    student: {
        value:"1st year",
        writable:false,
        enumerable:false,
        configurable:true
    },
    hobby:{
        value:'dance',
        writable:true,
        enumerable:true,
        configurable:true
    }
})
console.log(obj3)
obj3.age = 22
console.log(obj3)
obj3.hobby = 'swimming'
console.log(obj3)
//-----------------------------------------//


