const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const http = require('http');

class Application{
    #app = express();
    #MONGO_URI;
    #PORT;
    constructor(mongo_uri, port){
        this.#MONGO_URI = mongo_uri;
        this.#PORT = port;
        
        this.configServer();
        this.configDB();
        this.createServer();
        this.errorHandler()
    }
    
    
    configServer(){
        this.#app.use(express.static(path.join(__dirname, "..","public")));
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({extended:true}));
    
    }
    
    async configDB(){
        try {
          await mongoose.connect(this.#MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })  
            
            console.log("Connected to mongodb");
        } catch (error) {
            console.error("Failed to connect To Mongodb", error);
        }
    
    }
    
    createServer(){
        http.createServer(this.#app).listen(this.#PORT, ()=>{
            console.log(`Server Running on  http://localhost:${this.#PORT}`);
        
        })
    
    }
    
    errorHandler(){
        this.#app.use((req,res,next)=>{
            return res.status(404).json({
                status: 404,
                message : "صفحه مورد نظر یافت نشد"
            })
        
        })
        
        this.#app.use((error,req,res,next)=>{
            const status = error.status || 500;
            const message = error.message || "InternalServerError";
            return res.status(status).json({
                status,
                message
                
            })
        
        })
        
    }
    
    

}

module.exports = {

    Application
}