<template>
    <div class="container mt-5">
        <RouterLink to ="/card">
        <button type="button" class="btn btn-primary" >Back</button>
        </RouterLink>
        <div class="card">
            <div class="card-header">
                <h4>Edit Card </h4>
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
                    <button @click="updateCard" type="button" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name:"CardEdit",
    data(){
        return{
            id:"",
            model : {
                card:{
                    title:"",
                    body:""
                }
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        // console.log(this.$route.params.id)
        this.getCardData(this.$route.params.id)
    },
    methods:{


        getCardData(id){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id} `).then(res => {

                console.log(res.data, "check")
                this.model.card.title = res.data.title;
                this.model.card.body = res.data.body;
            })
        },

        updateCard() {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id} ` ,this.model.cart)
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