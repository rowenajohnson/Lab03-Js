let people = [{
    id: "200425021",
    name: "Rowena Johnson",
    age:"20",
    mail: "rowena@gmail.com"
},{
    id: "200425022",
    name: "Kra Ken",
    age:"23",
    mail: "adam@gmail.com" 
},
{
    id: "200425023",
    name: "Taylor swift",
    age:"25",
    mail: "taylor@gmail.com"
},
{
    id: "200425024",
    name: "Riley Joseph",
    age:"24",
    mail: "riley@gmail.com"
}]

exports.find = () => {
    
    return people;
}; 


    exports.findById = (id) => {
        for (let person of people){
           if (person.id == id){
              return person;
           }
        }
     }