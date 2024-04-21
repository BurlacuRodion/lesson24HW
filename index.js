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

const obj4 = {
    name:'Miron'
}
Object.preventExtensions(obj4)
obj4.age = 13
//console.log(obj4.age) // undefined
Object.freeze(obj4)
obj4.name='Andrei'
console.log(obj4)
//-----------------------------------------//

function func(list,el) {
    return list.reduce((acc,curr)=>{
        if(!acc) return acc;
        return curr === el
    },true)
}
console.log(func([5,5,5],5))
//------------------------------------------//

function func1(list,el) {
    return list.reduce((acc,curr,idx)=>{
        if(acc !== -1 ) return acc;
        return curr === el ? idx : -1
    }, -1)
}

console.log(func1([6,7,8],4))
//--------------------------------------------//

function func3(list, el) {
    return list.reduce((acc, curr)=>{
        if(curr === el) {
            acc.push(el)
        };
        return acc
    },[])
}
console.log(func3([1,4],2))
//------------------------------------------//
