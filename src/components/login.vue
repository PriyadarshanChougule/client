<template>
    <div class="h-100 align-items-center login-background d-flex justify-content-center mt-5">
        <div class="card-login box-shadow">
            <div class="h5"> Log in </div>
            <div class="mt-2">
                <div> Email address </div>
                <div>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mt-2">
                <div> Password </div>
                <div>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mt-4 d-flex justify-content-center">
                <button class="btn-primary btn"> Login </button>
            </div>
            <div class="mt-2 d-flex justify-content-center">
                <button class="btn btn-danger  w-50" @click="getGoogle()">
                    Google+
                </button>
            </div>
            <div class="mt-2 text-center">
                New to App? <span class="txt-primary"> Register </span>
            </div>
        </div>
    </div>
    
</template>
<script>
// import axios from 'axios'
export default{
    name:"loginComp",
    data(){
        return {

        }
    },
    methods:{
        getGoogle(){
            window.location = 'http://localhost:3000/auth/google'
            // axios.get('http://localhost:3000/auth/google')
            // .then((res)=>{
            //     console.log(res.data);
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
        }
    }
}
</script>