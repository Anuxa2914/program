// var box=document.getElementById("box")
// function change(){
//     box.style.backgroundColor="red"
    
// }

// var xavi=document.getElementById("btn1")
// var anu=document.getElementById("btn2")
// var cyrus=document.getElementById("btn3")
// var result=document.getElementById("result")


// function xavi(){
//     result.textContent=xavi.textContent

// }

// function anu(){
//     result.textContent=anu.textContent

// }

// function cyrus(){
//     result.textContent=cyrus.textContent

// }

// event function

// function update(event){
//     result.textContent=event.target.textContent
// }
// function update(event){
//     result.textContent=event.target.textContent
// }

// function del(event){
//     event.target.remove()
// }

// var div=document.querySelectorAll(".one")
// // console.log(div[0])
// for(count=0;count<div.length;count=count+1)
//     {
//         console.log(div[count].textContent)
//     }

// var fruit="apple"
// console.log(fruit)

// var fruit=["apple","Orange","Grapes","Banana"]
// console.log(fruit)
// console.log(fruit.length)
// for(count=0;count<=fruit.length;count=count+1)
//     {
//         console.log(fruit[count])
//     }

// for(count=1;count<=5;Count=count+1)
// {
//         console.log(count)
// }

// <!-- append prepand, inert-adjust HTML -->

// var div=document.querySelector("div")
// div.append("hellow")
// div.prepend("welcome")
// var h1=document.createElement("h1")
// h1.textContent="Hellow"
// div.insertAdjacentElement("beforebegin",h1)---added in begin of div
// div.insertAdjacentElement("afterend",h1)----added after div end
// div.insertAdjacentElement("afterbegin",h1)---added div 1st child
// div.insertAdjacentElement("afterend",h1)-----added div last child


// var btnEl=document.getElementById("btn")
// var tableEl=document.getElementById("tbl")

// var nameEl=document.getElementById("name")
// var ageEl=document.getElementById("age")
// var countryEl=document.getElementById("country")

// btnEl.addEventListener('click',()=>{

//     var nameR=nameEl.value
//     var ageR=ageEl.value
//     var counrtyR=countryEl.value

//     let template=`
//     <tr>
//     <td>${nameR}</td>
//     <td>${ageR}</td>
//     <td>${counrtyR}</td>
//     </tr>`

//     tableEl.innerHTML+=template
//     tableEl.innerHTM=""

// })

// for (let i=0;i<=10;i++)
// {
//     console.log(i)
// }

// let arr=[]
// for(let i=0;i<100;i++)
// {
//     arr.push(i)
// }
// console.log(arr)

// array-tp print 1 to 100 even SVGAnimatedNumberList

// let arr=[]
// for(let i=0;i<=200;i+=2)
// {
//     arr.push(i)
// }
// console.log(arr)
// console.log(arr[26])

// nested for loop two dimensional Array format

// let arr=[]
// for(let i=0;i<3;i++)
// {
//     arr.push([])
//     for (let j=0;j<3;j++)
//     {
//         arr[i].push(j)
//     }
// }

// console.log(arr)
// console.table(arr)

// dis play array value

// let Names=["Xavi","Anu","Cyrus"]
// for(let i=0;i<Names.length;i++)
// {
//     console.log(Names[i])
// }

// // for of Loop- get the all valuen in Array
// console.log("For of Loop:")
// for(let member of Names)
// {
//     console.log(member)
// }

// for(let family of Names)
// {
//     console.log(family)
// }

// for in loop-get the kay and values in Object

// let family={
//     Father:"Xavi",
//     Mother:"Anu",
//     Child:"Cyrus"
// }
// for (let member in family)
// {   
//     console.log(member+":"+family[member])
//     console.log(family[Mother])
// }

// conver obj to array keys and values
//  let keysfamily=Object.keys(family)
// console.log(keysfamily)

// let valuefamily=Object.values(family)
// console.log(valuefamily)

// get the mather value or specific value

// let mothervalue=family.Mother
// console.log(mothervalue)

// Break Statement
// for (let i=0;i<10;i++)
//     { 
//         console.log(i)
//         if(i==4)
//         {
//             break;
//         }
//     }

// continue statement

// for(let i=0;i<10;i++)
// {
//     if(i==4)
//     {
//         continue
//     }
//     console.log(i)
// }

// print odd value using continue

// for(let i=0;i<10;i++)
//     {
//         if(i%2==0)
//         {
//             continue
//         }
//         console.log(i)
//     }

// concat() and concodination(Manual)

// let firstName="Anusuya"
// let LastName="Devi"
// let initial="T"

// //Manual concadination
// c=firstName+LastName
// console.log("Manual:"+c)

// concat()
// c=firstName.concat(' ',LastName,' ',initial)
// console.log("concat:"+c)

//Append
// t="Anusuya "
// t+="Devi"
// console.log(t)

//escaping
// x='she can\'t run'
// console.log(x)



// firstName="Anusuya"
//length()
// x=firstName.length
// console.log("Length:"+x)

//uppercase
// x=firstName.toUpperCase()
// console.log("Uppercase:"+x)

//lowercase
// x=firstName.toLowerCase()
// console.log("Lowercase:"+x)

//Index of
// x=firstName.indexOf('u')
// console.log("Index of U:"+x)
// x=firstName.lastIndexOf('u')
// console.log("Last Index of U:"+x)

//Chat At

// x=firstName.charAt(3)
// console.log("char At 3:"+x)

//carecode At(ASCII Value)
// x=firstName.charCodeAt(3)
//  console.log("charcode At 3:"+x)

//subsrting(posotion,needed length)
// x=firstName.substr(0,3)
// console.log("substring:"+x)

// let text="01234567890"

//Substring(Startindex,EndIndex) also negative value not accepted ,that is treated as zero
// x=text.substring(0,4)
// console.log("Substring:"+x)
// x=text.substring(4)
// console.log("Substring:"+x)
// x=text.substring(4,0) 
// console.log("Substring:"+x)
// x=text.substring(35,40)
// console.log("Substring is invalid length:"+x)//output value is empyt
// x=text.substring(-1,3)
// console.log("Substring is invalid length:"+x)

//slice()
// x=text.slice(4,8)
// console.log("Slice:"+x)
// x=text.slice(8,4)
// console.log("Slice:"+x)
// x=text.slice(-7)
// console.log("Slice:"+x)
// x=text.slice(30,40)
// console.log("Slice:"+x)

//split function
// let text="Hi welcome to the program"
// x=text.split(" ")
// console.log("split:"+x)

// let fullname="Anusuya"
// x=fullname.split("")
// console.log(x)

//replace()
// let text="I am from Theni"
// console.log("Before replace:"+text)
// x=text.replace('Theni','Chennai')
// console.log("After replace:"+x)

//Include()-->To find the particular word is there or not (Yes means true or not found means false )

// let animals=["cat","rat","dog","monkey"]
// console.log(animals.includes('cat'))
// console.log(animals.includes('fish'))

//Trim (To remove unwanted white space)

// a=" Anusuya "
// console.log("Before trim:"+a.length)
// a=a.trim()
// console.log("After trim:"+a.length)

// pad start & pad End(No of digits,characters)

// let number="7"
// number=number.padStart(3,0)
// console.log("before padding:"+number)

// number=number.padEnd(3,0)
// console.log("After padding:"+number)

//String .from charcode()
// console.log(String.fromCharCode(65,66,67,))

//Template string literals (Used for to create dynamic content)
//  fullname="Anusuya"
//  Lastname="Devi"
//  output=""

//  output+=`<table border="1">
//  <tr>
//  <th>Full Name:</th><td>${fullname}</td>
//  <th>Last Name:</th><td>${Lastname}</td>

//  </tr>`
// document.body.innerHTML=output

// Array Creation-normal way

// let array=[10,20,30]
// console.log(array)
// console.table(array)
// console.log(array[1])

//create array using consractor 

// let family=new Array("Xavi","Anu","cyrus")
// console.log(family)

//array include objects

// let students=new Array("Anusuya",1993,true,{m1:100,m2:99,m3:98})
// console.log(students)
// console.table(students)

//Important 25 array methods

//for each

//ex:1
// let number=[1,2,3,4,5,6,7,8,9,10]
// //(value,index,array)
// number.forEach((value) =>{
//     console.log(value)
// })

// ex:2 complex 

// let users=[{firstname:"Anusuya",LastName:"Devi",gender:"female",mark:98,city:"Theni"},
//     {firstname:"Xavier",LastName:"fracsis",gender:"male",mark:99,city:"Chennai"},
//     {firstname:"Cyrus",LastName:"Xavier",gender:"male",mark:100,city:"Chennai"}
// ]

// users.forEach((value)=>{
//     console.log(value.firstname)
//     console.log(value.city)
// })

// let colors = ["red", "blue", "green", "yellow"];
// colors.forEach((value)=>{
//     console.log(value)
// })

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach((value,index)=>{
//     console.log(value,index)
// })

// let numbers = [1, 2, 3, 4, 5];
// let sum=0
// numbers.forEach((value)=>{
//     sum+=value
// })
// console.log(sum)

// let numbers = [1, 2, 3, 4, 5];
// double=[]
// numbers.forEach((value)=>{
//     double.push(value*2)
// })
// console.log(double)

// let users = [
//     { firstName: "Alice", age: 25 },
//     { firstName: "Bob", age: 30 },
//     { firstName: "Charlie", age: 35 }
// ];

// users.forEach((value)=>{
//     console.log(value.firstName,value.age)
    
// })

// let cities = ["New York", "Los Angeles", "Chicago"];
// cities.forEach((value)=>{
//     console.log(value.toUpperCase())
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((value)=>{
//     if(value % 2=== 0)
//         {
//        console.log(value)
//     }
// })

// let students = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// students.forEach((value)=>{
//     value.grade="A"
// })
// console.log(students)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((value)=>{
//     if(value % 2 !== 0)
//     {
//         console.log(value)
//     }
// })

// let numbers = [1, 2, 3, 6, 7, 8, 10];
// let count=0

// numbers.forEach((value)=>{
//     if(value>5)
//     {
        
//         count++
//     }
// })
// console.log(count)

// let numbers = [10, 5, 8, 1, 9, 12];
// max=numbers[0]
// numbers.forEach((value)=>{
//     if(value>max)
//     {
//         max=value
//     }
// })
// console.log(max)

// let users = [
//     { firstname: "John", LastName: "Doe" },
//     { firstname: "Jane", LastName: "Smith" },
//     { firstname: "Emily", LastName: "Jones" }
// ];

// users.forEach((value)=>{
//     console.log(value.firstname,value.LastName)
// })

// let str = "banana";
// count=0
// var char="a"
// str.split("").forEach((value)=>{
//     if(value==char)
//     {
//         count++
//     }
// })
// console.log(count)

// });

// let cities = ["New York", "Los Angeles", "Chicago"];
// cities.forEach((value)=>{
//     console.log(value.toLowerCase())
// })

// let students = [
//     { name: "Alice", mark: 45 },
//     { name: "Bob", mark: 75 },
//     { name: "Charlie", mark: 60 }
// ];

// students.forEach((value)=>{
//     value.passed=value.mark>=50
// })
// console.log(students)
    

//Map function-->we can do the changes in the every element

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sqrt=numbers.map((value)=>{
//     return Math.sqrt(value).toFixed(2)
// })
// console.log(sqrt)
// console.table(sqrt)

// let users = [
//     { firstName: "Alice", age: 25 },
//     { firstName: "Bob", age: 30 },
//     { firstName: "Charlie", age: 35 }
// ];

// let eligible=users.map((value)=>({
//     ...value,
//     Status:value.age>30?"eligible":"not Eligible"


// }))
// console.table(eligible)

// let numbers = [1, 2, 3, 4, 5];
// let double=numbers.map((value)=>{
//     return value*2
// })
// console.log(double)


// let cities = ["New York", "Los Angeles", "Chicago"];
// let upper=cities.map((value)=>{
//     return value.toUpperCase()
// })
// console.log(upper)

// let users = [
//     { firstName: "Alice", lastName: "Doe" },
//     { firstName: "Bob", lastName: "Smith" },
//     { firstName: "Charlie", lastName: "Brown" }
// ];
// let first=users.map((value)=>{
//     return value.firstName
// })
// console.log(first)

// let students = [
//     { name: "Alice", mark: 45 },
//     { name: "Bob", mark: 75 },
//     { name: "Charlie", mark: 60 }
// ];

// let newstd=students.map((value)=>({
//     ...value,
//     result:value.mark>=50


// }))
// console.table(newstd)
// let numbers = [1, 2, 3, 4, 5];
// let newnum=numbers.map((Value)=>{
//     return Value +1
// })
// console.log(newnum)

// let names = ["Alice", "Bob", "Charlie"];
// let newnames=names.map((value)=>{
//     return "Name:"+value
// })
// console.log(newnames)

// let words = ["apple", "banana", "cherry"];
// let length=words.map((value)=>{
//     return value.length
// })
// console.log(length)

// let items = ["Item 1", "Item 2", "Item 3"];
// let newitem=items.map((value)=>{
//     return `<li>${value}</li>`
// })
// console.log(newitem)

// let booleans = [true, false, true, false];
// let newname=booleans.map((value)=>{
//     return value.toString()
// })
// console.log(newname)

// let numbers = [1, 4, 9, 16, 25];
// let newsqrt=numbers.map((value)=>{
//     return Math.sqrt(value)
// })
// console.log(newsqrt)

// Array slice ()(It used to extract/cut a portion of an array into a new array without modifying the original array.)
//slice(start,end)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers)
// console.log(numbers.slice())
// console.log(numbers.slice(2))
// console.log(numbers.slice(2,7))

//Splicew ()(to remove the element in array, it will change the original array)
//new arr=splice(start,length,new element)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newnum=numbers.splice(2)
// console.log(newnum)
// console.log(numbers)

// let newnum=numbers.splice(2,2)
// console.log(newnum)
// console.log(numbers)

// let newnum=numbers.splice(2,2,26,28)
// console.log(newnum)
// console.log(numbers)

// let newnum=numbers.splice(2,0,20,30)
// console.log(newnum)
// console.log(numbers)


// let newnum=numbers.splice(2,0,20,30,40,)
// console.log(newnum)
// console.log(numbers)

// let newnum=numbers.splice(2,0,[20,30,40])
// console.log(newnum)
// console.log(numbers)

//concat method

// let a=[10,20,30]
// let b=[40,50,60]
// let c=[70,80,90]

// let d=a.concat(b)
// console.log(d)
// let e=a.concat(b,c)
// console.log(e)
// let f=a.concat(b,c,100,110,120,130)
// console.log(f)
// let g=a.concat(b,c,10,20,['a','b'])
// console.log(g)

//sort()
// let fruits = ['Banana', 'Apple', 'Cherry', 'Date'];
// fruits.sort()
// console.log(fruits)

// let numbers = [4, 2, 5, 1, 3];
// numbers.sort()
// console.log(numbers)

// // let n1=[22,100,34,45,9,7] //asending
// // n1.sort((a,b)=>{
//      return a-b
//     })
// // console.log(n1)

// let n1=[22,100,34,45,9,7] //desending
// n1.sort((a,b)=>{
//     return a-b
// })
// console.log(n1)

// let items = [
//     { name: 'cherry', price: 30 },
//     { name: 'Banana', price: 10 },
//     { name: 'Apple', price: 20 }
// ];

// items.sort((a,b)=>{
//  nameA=a.name.toLowerCase()
//  nameB=b.name.toLowerCase()
//  if(nameA<nameB)return -1
//  if(nameA>nameB)return 1
//  if(nameA===nameB) return 0
// })
// console.log(items)

// items.sort((a,b)=>{
//     if(a.price<b.price)return -1
//     if(a.price>b.price)return 1
//     return 0
//     })
//   console.log(items)

//fill()(it is used to fill the all elements od array)
//array.fill(value,start,end)
// let a=[1,2,3,4,5,6,7]
// a.fill(7)
// a.fill(7,3)
// a.fill(8,2,5)
// console.log(a)

//include() (it is used to determine whether an certain value , returning true or false as appropriate.)* it is case sensitive
//array.include(value,start-index)- also find the duplicates

// let fruits = ['Apple', 'Banana', 'Cherry']
// result=fruits.includes("Banana")
// result=fruits.includes("Carrot")
// result=fruits.includes("Apple,2")
// console.log(result)

//join()(it concodinate all array elements into string)
// Array.join(seperator)

// let fruits = ['Apple', 'Banana', 'Cherry']
// let result=fruits.join()//Default seperatot(,)
// let result=fruits.join('-')
// console.log(result)

//reverse

// let a=[10,20,30,40,50,60,70]
// a.reverse()
// console.log(a)

//push()(Add the new element into arary)

// let array1=["ram","sita"]
// let array2=["krishna","karna","kannan"]
// array1.push(...array2)
// console.log(array1)
// array1.push("Beema")
// console.log(array1)

//POP()(Remove the element form last Index)


// let a=[ 'ram','sita', 'krishna', 'karna', 'kannan', 'Beema' ]
// a.pop()
// console.log(a)

// shift() remove the element from first Index

// let a=[ 'ram','sita', 'krishna', 'karna', 'kannan', 'Beema' ]
// a.shift()
// console.log(a)
// a.shift()
// console.log(a)

//Unshift()(Add the element at start)

// let a=[ 'ram','sita', 'krishna', 'karna', 'kannan', 'Beema' ]
// let newA=a.unshift("Diya")
// console.log(a)
// let newB=a.unshift("Jan","Riya")
// console.log(a)

// IndexOf()(Find the index of the element)
// let a=[ 'ram','sita', 'krishna', 'karna', 'kannan', 'Beema' ]
// let x=a.indexOf("Ram")
// console.log(x)

// let Names="Anusuya Devi"
// // let index=Names.indexOf("u")
// // console.log(index)

// let index=Names.indexOf("u",3)
// console.log(index)

//Last IndexOf()(Find the Last accerance of the element)
// let a=[ 'ram','sita', 'krishna', 'karna', 'kannan', 'Beema' ,'ram']
// let x=a.lastIndexOf("ram")
// console.log(x)

// let Names="Hi Anusuya welcome to the Anusuya devi home"
// let index=Names.lastIndexOf("Anu")
//  console.log(index)

//every() & some()(used to test whether elements in an array pass a specified condition or not)
//every()-all elemnts satisfied the condition the result will bw true other wise false
//some()-any one of the element ,pass the condition the result will be true otherwise false

// let a=[2,4,6,8,10,12]
// let result=a.every((value)=>{
//     return value%2==0
// })
// console.log(result)

// let b=[1,12,3,5,7,9]
// let results=b.some((value)=>{
//     return value%2==0
// })
// console.log(results)

//filter()
// let age=[10,25,26,28,29]
// let adult=age.filter((value)=>{
//     return value>=18
// })
// console.log(adult)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even=numbers.filter((value)=>{
//     return value % 2 == 0
   
// })
// let odd=numbers.filter((value)=>{
//     return value % 2 == 1
// })
// console.log(odd)
// console.log(even)

// let strings = ["apple", "banana", "pear", "kiwi", "strawberry"];
// let small=strings.filter((value)=>{
//     return value.length<5
// })
// console.log(small)

// let numbers = [-3, -1, 2, -7, 4, 0, 5];
// let positive=numbers.filter((value)=>{
//     return value >0
// })
// console.log(positive)

// let fruits = ["apple", "banana", "pineapple", "grape", "apple pie"];
// let substring1=fruits.filter((value)=>{
//     return value.includes("apple")
// })
// console.log(substring1)

// let people = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 21 },
//     { name: 'Jim', age: 15 },
//     { name: 'Jake', age: 25 }
// ];

// let children=people.filter((value)=>{
//     return value.age<=18
// })
// console.log(children)



















    
















