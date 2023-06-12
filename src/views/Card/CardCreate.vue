<template>
    <div class="container mt-5">
        <RouterLink to ="/card">
        <button type="button" class="btn btn-primary" >Back</button>
        </RouterLink>
        <div class="card">
            <div class="card-header">
                <h4>Add Card </h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Title</label>
                    <input type="text" v-model="model.card.title" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="">Body</label>
                    <input type="text" v-model="model.card.body" class="form-control" required />
                </div>
                <div class="mb-3">
                    <button @click="saveCard" type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name:"CardCreate",
    data(){
        return{
            model : {
                card:{
                    title:"",
                    body:""
                }
            }
        }
    },
    methods:{
        saveCard() {
            axios.post("https://jsonplaceholder.typicode.com/posts/",this.model.card)
            .then(res => {
                console.log(res.data)
                alert("Submit Sucessfully")

                this.model.card = {
                    title:"",
                    body:""
                }
            })
            // .catch(function (error) {
            //     if(error.response){
            //         if(error.response.status == 422){

            //         }
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //     }else if(error.response) {
            //         console.log(error.request)
            //     }else {
            //         console.log("Error" ,error.message)
            //     }
            // });
        }
    },
}
</script>