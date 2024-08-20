let Student = {
    id: 101,
    sname: "Nikhil",
    age: 23,
    isWorking: false,
    img:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
}

let{id,sname,age,isWorking,img} = Student

let info =`
    <h1>Welcome</h1>
    <img src="${img}" alt="No image" height="100px" width="100px">
    <h2>ID: ${id}</h2>
    <h2>Name: ${sname}</h2>
    <h3>Age: ${age} yr old </h3>
    <h3>Working/Student: ${isWorking ? "Working Profession": "Student"}

`
document.write(info)