<template>
    <div>
        <p>实现一个LazyMan，可以按照以下方式调用:</p>
        <p>LazyMan(“Hank”)输出:</p>
        <p>Hi! This is Hank!</p>

        <p>LazyMan(“Hank”).sleep(10).eat(“dinner”)输出</p>
        <p>Hi! This is Hank!</p>
        <p>//等待10秒..</p>
        <p>Wake up after 10</p>
        <p>Eat dinner~</p>

        <p>LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出</p>
        <p>Hi This is Hank!</p>
        <p>Eat dinner~</p>
        <p>Eat supper~</p>

        <p>LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出</p>
        <p>//等待5秒</p>
        <p>Wake up after 5</p>
        <p>Hi This is Hank!</p>
        <p>Eat supper</p>
        <p>以此类推。</p>

        <input type="text" >
    </div>
</template>
<script>
    export default {
        name: "LazyMan",
        mounted(){
            const LM = class {
                constructor(text){
                    this.list = [];
                    let fn = ()=>{
                        console.log(`Hi! This is ${text}`)
                        this.next()
                    }
                    this.list.push(fn)
                    setTimeout(()=>{
                        this.next()
                    },0)
                    return this;
                }

                eat(text){
                    let fn = ()=>{
                        console.log(`Eat ${text} ～`)
                        this.next()
                    }
                    this.list.push(fn)
                    return this;
                }

                sleep(time){
                    let fn = ()=>{
                        setTimeout(()=>{
                            console.log(`Wake up after ${time}`)
                            this.next()
                        },time * 1000)
                    }
                    this.list.push(fn)
                    return this;
                }

                sleepFirst(time){
                    let fn = ()=>{
                        setTimeout(()=>{
                            console.log(`Wake up after ${time}`)
                            this.next()
                        },time * 1000)
                    }
                    this.list.unshift(fn)
                    return this;
                }

                next(){
                    let fn = this.list.shift()
                    fn && fn()
                }
            }

            let LazyMan = (text)=> new LM(text)
//            LazyMan('Hank')
//            LazyMan('Hank').sleep(10).eat('dinner')
            LazyMan('Hank').eat('dinner').eat('supper')

//            console.log('start')  // 1
//            setTimeout(() => {
//                console.log('timer1') //4
//                Promise.resolve().then(function() {
//                    console.log('promise1')  //5
//                })
//            }, 0)
//            setTimeout(() => {
//                console.log('timer2')  //6
//                Promise.resolve().then(function() {
//                    console.log('promise2')  //7
//                })
//            }, 0)
//            Promise.resolve().then(function() {
//                console.log('promise3')  // 3
//            })
//            console.log('end')  //2


        },
    }
</script>

<style scoped>
    p{
        text-align: left;
        width:100%;
    }
</style>