<template>
    <div>
        inside dashboard
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'dashboardComponent',
    data(){
        return {

        }
    },
    methods:{

    },
    mounted(){
        console.log("query paramms", this.$route.query);
        if(this.$route.query.token){
            localStorage.setItem('token',this.$route.query.token)
            axios.defaults.headers.common['Authorization'] = this.$route.query.token
        }
        else if(!localStorage.getItem("token") && !axios.defaults.headers.common['Authorization']){
            this.$router.push({path:'/login'})
        }
    }
}
</script>