<template>
    <div class="box">

    </div>
</template>

<script>

    const LiDom = class li {
        constructor(data){
            this.width = '100%'
            this.height = 30
            this.text = data
        }

        createDom (){
            let html = document.createElement('li')
            html.style.width = this.width
            html.style.height = this.height + 'px'
            html.innerText = this.text
            return html
        }
    }

    const Sort = class so{
        constructor(data){
            this.listdata = data
            this.width = 300
            this.height = 400
            this.backgroundColor = '#ccc'
            this.className = 'ulDom'
        }

        createDom (){
            let html = document.createElement('ul')
            html.style.width = this.width + 'px'
            html.style.height = this.height + 'px'
            html.style.backgroundColor = this.backgroundColor

            this.listdata.forEach((e,i)=>{
                html.appendChild(new LiDom(e).createDom())
            })
            console.log(html)
            return html
        }
    }

    export default{
        name: 'Objlistsort',
        data(){
            return {
                textdata:[1,2,3,4,5,6]
            }
        },
        mounted(){
            let html = new Sort(this.textdata).createDom()
            console.log($('.box'))
            $('.box')[0].appendChild(html)
        },
        methods:{

        }
    }
</script>