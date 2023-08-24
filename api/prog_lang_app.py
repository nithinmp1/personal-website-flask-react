from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

in_memory_datastore = {
   "COBOL" : {"name": "COBOL", "publication_year": 1960, "contribution": "record data"},
   "ALGOL" : {"name": "ALGOL", "publication_year": 1958, "contribution": "scoping and nested functions"},
   "APL" : {"name": "APL", "publication_year": 1962, "contribution": "array processing"},
}

protfolio = {
   "1" : {
      "category": "Web design",
      "client": "ASU Company", 
      "project_date": "01 March, 2020",
      "url" :"www.example.com","details" :"Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.", 
      "images" : ["https://picsum.photos/id/0/5000/3333","https://picsum.photos/id/0/5000/3333"]
      },
   "2" : {
      "category": "Web design",
      "client": "ASU Company", 
      "project_date": "01 March, 2020",
      "url" :"www.example.com","details" :"Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.", 
      "images" : ["https://picsum.photos/id/0/5000/3333","https://picsum.photos/id/0/5000/3333"]
    },
   "3" : {
      "category": "Web design",
      "client": "ASU Company", 
      "project_date": "01 March, 2020",
      "url" :"www.example.com","details" :"Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.", 
      "images" : ["https://picsum.photos/id/0/5000/3333","https://picsum.photos/id/0/5000/3333"]
    },
}

service = {
   "service1" : {"name": "service1", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
   "service2" : {"name": "service2", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
   "service3" : {"name": "service3", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
   "service4" : {"name": "service4", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
   "service5" : {"name": "service5", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
   "service6" : {"name": "service6", "description" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" }
}

@app.get('/service')
def list_service():
   return {"service":list(service.values())}

@app.get('/protfolio')
def list_protfolio():
   return {"protfolio":list(protfolio.values())}

@app.get('/programming_languages')
def list_programming_languages():
   return {"programming_languages":list(in_memory_datastore.values())}

@app.route('/programming_languages/<programming_language_name>')
def get_programming_language(programming_language_name):
   return in_memory_datastore[programming_language_name]