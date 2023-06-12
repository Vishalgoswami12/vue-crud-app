<template>
    <div class="container">
<div class="card">
    <div class="card-header">
        <h4>Card
            <RouterLink to="/card/create" class="btn btn-primary float-end">
                Add card
            </RouterLink>
        </h4>
    </div>
    <div class="card-body">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="this.card.length>0">
                <tr v-for="(ele,index) in this.card" :key="index">
                    <td>{{ ele.id }}</td>
                    <td>{{ ele.title }}</td>
                    <td>{{ ele.body }}</td>
                    <td>
                        <RouterLink :to="{path :`/card/`+ele.id+`/edit`}" class="btn btn-success">
                      Edit
                     </RouterLink>
                     <button @click="removeCard(index)" type="button" class="btn btn-danger">
                        Delete
                    </button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Loading...</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
</template>

<script>

import axios from "axios"

export default{
    name : "card",
    data(){
        return {
            card:[]
        }
    },
    mounted(){
        this.getCard()
    },
    methods:{
        getCard(){
            axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
                console.log(res);
                this.card = res.data

                console.log(this.card,"check")
                console.log(res)
            })
            // fetch("https://jsonplaceholder.typicode.com/posts/")
            // .then((res) => res.json())
            // .then((res) => {
            //     this.card= res
            // })
            
        },
        removeCard(index) {
            this.card.splice(index,1)
        }
    }
}
</script>