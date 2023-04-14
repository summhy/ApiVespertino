const express = require("express");
const app =  express();
const puerto = 3001;
const personas = require("./personas.json")
app.use(express.json()) //reconoce json


app.get("/mantenedor",(req,res)=>{    
    res.status(200).json(personas)
});

app.get("/mantenedor/:id",(req,res)=>{    
    const {id} = req.params;
    let indice;
    personas.forEach((element, index)=>{
       
        if(element.id == id){
            indice = index;
        }
    })
    res.status(200).json(personas[indice]) 
});
app.post("/mantenedor",(req,res)=>{
    try{
        const id = personas.length+1
        const persona = {id,...req.body};
        personas.push(persona)
        res.status(201).json(personas) 
    }catch (e){
        res.status(500).json({"error":e})
    }
    
});

app.put("/mantenedor/:id",(req,res)=>{res.send("PUT")})

app.delete("/mantenedor/:id",(req,res)=>{
    const {id} = req.params;
    let indice;
    personas.forEach((element, index)=>{
       
        if(element.id == id){
            indice = index;
        }
    })
    if(indice){
        personas.splice(indice,1);
    }
    

    res.status(200).json(personas) 
});




app.listen(puerto)