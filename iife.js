// IIFE

// dấu ; phía trước nếu nếu như code không ;
// IIFE nó là private
// => (()=> {})()

// function logger() {
//     console.log('log')
// }

// logger()
// (function name(msg) {
//     console.log(`messs`)
// })()


// chuaw ap dung
// const app = {
//     items: [],
//     add(item) {
//         this.items.push(item)
//     },
//     edit(index, item) {
//         this.items[index] = item
//     },
//     delete(index) {
//         this.items.splice(index, 1)
//     }
// }
// console.log(app.items)
// app.add('A')
// app.add('B')
// app.add('C')
// console.log(app.items)
// app.edit(0, 'AA')
// console.log(app.items)
// app.delete(0)
// console.log(app.items)

// const apps = (() => {
//     const items = ['A']
//     return {
//         showAll() {
//             return items
//         },
//         // showOne(?) {
//         //     return ?
//         // },
//         add(item) {
//             items.push(item)
//         },
//         edit(index, item) {
//             items[index] = item
//         },
//         delete(index) {
//             items.splice(index, 1)
//         },
//         // deleteAll(?){
//         //     ?
//         // }
//     }
// })()

// apps.add('A')
// apps.add('B')
// apps.add('C')
// apps.add('D')

// apps.delete(2)

// console.log(apps.showAll())

// clousure
// function createCounter() {
//     let count = 0

//     function upCount() {
//         return ++count
//     }

//     return upCount
// }


// const xeA = createCounter()
// const xeB = createCounter()

// console.log(xeA())
// console.log(xeA())
// console.log(xeA())
// console.log(xeA())

// console.log(xeB())
// console.log(xeB())
// console.log(xeB())

// let count = 0
// function logCount() {
//     count++
//     // logic
//     return count
// }


// let coun2 = 0
// function logCount2() {
//     coun2++
//     // logic
//     return coun2
// }


// console.log(logCount())
// console.log(logCount())
// console.log(logCount())
// console.log(logCount())
// console.log(logCount())

// console.log(logCount2())
// console.log(logCount2())
// console.log(logCount2())
// console.log(logCount2())
// console.log(logCount2())

// console.log('INFO | example')
// console.log('ERROR | example')

// function loggerError(msg) {
//     console.log(`ERROR | ${msg}`)
// }

// function loggerInfo(msg) {
//     console.log(`INFO | ${msg}`)
// }

// loggerError('excample')

//
// function createLogger(namespace) {
//     function logger(msg) {
//         console.log(`${namespace} | ${msg}`)
//     }
//     return logger
// }

// const infoLogger = createLogger('INFO')
// const errorLogger = createLogger('ERROR')
// const debugLogger = createLogger('DEBUG')
// infoLogger('tesst inffo 1')
// infoLogger('tesst inffo 2')
// errorLogger('tesst errorLogger 2')
// errorLogger('tesst errorLogger 2')
// debugLogger('tesst debugLogger 2')

// const string = ""
// const string = 'string ' + number
// const string = `string ${number}`


// this

// const cat = {
//     name: 'name cat', // property
//     type: '1',
//     get: () => {
//         console.log(this.name) // method
//     }
// }
// cat.add = 'key add'
// delete cat.type
// console.log(cat)




// // console.log(cat.cat())
// // console.log(cat)
// console.log(cat.catChild.cat2())

// function CatFather(name, color) {
//     this.name = name
//     this.color = color
// }

// const cat1 = new CatFather('cat1', 'red')
// const cat2 = new CatFather('cat2', 'blue')

// console.log(cat1.name)
// console.log(cat1.color)
// console.log('========')
// console.log(cat2.name)
// console.log(cat2.color)

// contructor

// function User(name, age) {
//     this.name = name
//     this.age = age

//     this.fullProfile = function () {
//         return { name: this.name, age: this.age }
//     }
// }

// let A = new User('A', 12)
// let B = new User('BB', 22)
// User.prototype.description = "description"
// User.prototype.className = function () {
//     return this.description
// }
// console.log(B)
// console.log(A)


function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storege = {
        get(key) {
            return store[key] || {}
        },
        getFull() {
            return store || {}
        },
        set(key, value = '') {
            if (!key) return
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        },
    }
    return storege
}

const settings = createStorage('settings')
// localStorage.clear()
settings.set('a', 'value')
settings.set('b', 'value')
settings.set('v', 'value')
settings.set('c', 'value')
settings.set('d', 'value')

console.log(settings.get('asdasd'))
// settings.remove('info3')


// let string = {
//     name: 'nguyen van a'
// }

// string = JSON.stringify(string)
// console.log(typeof string)

// // string

// string = JSON.parse(string)
// console.log(typeof string)
