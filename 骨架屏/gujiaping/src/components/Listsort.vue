<template>
    <div class="box" @mouseup="up">
        <div class="numlist">
            <ul @mousemove="move($event)" @mouseup="ulup">
                <li v-for="(tex,i) in textdata"
                    :style="moveindex === i ? movestyle :''"
                    :key="i"
                    @mousedown="down($event,i)"
                    @mouseup="liup($event,i)"
                >{{tex.name}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Listsort',
        data() {
            return {
                textdata: [
                    {
                        name: '小王'
                    },
                    {
                        name: '小李'
                    },
                    {
                        name: '小红'
                    },
                    {
                        name: '小天'
                    },
                    {
                        name: '小黄'
                    }
                ],
                downindex: -1,
                moveindex: -1,
                moveflag: false,
                upflag: false,
                movestyle: {
                    position: 'absolute',
                    top: 0,
                    left: '20%',
                    width: '60%',
                    height: '25px',
                    lineHeight: '25px',
                    opacity: 0.8,
                    backgroundColor: '#ff6700',
                    pointerEvents: 'none'
                }
            }
        },
        created() {

        },
        methods: {
            down(ev, i) {
                ev.preventDefault()
                this.moveflag = true
                this.downindex = i
            },
            move(ev) {
                if(this.moveflag) {
                    this.upflag = true
                    this.moveindex = this.downindex;
                    this.movestyle.top = ev.layerY + 'px'
                }
            },
            liup(ev, i) {
                ev.stopPropagation()
                if(this.upflag){
                    this.moveflag = false
                    this.upflag = false
                    let arr = this.textdata.splice(this.moveindex, 1)
                    if(i > 0) {
                        console.log("i===", i)
                        if(i < this.moveindex) {
                            let firstdata = this.textdata.splice(0, i)
                            let lastdata = this.textdata
                            lastdata.unshift(arr[0])
                            this.textdata = firstdata.concat(lastdata)
                        } else {
                            let onedata = this.textdata.splice(0, (i - 1))
                            let twodata = this.textdata
                            twodata.unshift(arr[0])
                            this.textdata = onedata.concat(twodata)
                        }
                    } else {
                        this.textdata.unshift(arr[0])
                    }
                    this.downindex = -1
                    this.moveindex = -1
                }
            },
            ulup(ev) {
                ev.stopPropagation()
                this.moveflag = false
                let arr = this.textdata.splice(this.moveindex, 1)
                this.textdata.push(arr[0])
                this.downindex = -1
                this.moveindex = -1
            },
            up() {
                this.downindex = -1
                this.moveindex = -1
                this.moveflag = false
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .numlist {
        width: 300px;
        height: 400px;
        margin: 300px auto 0;
        -webkit-touch-callout: none; /* iOS Safari */

        -webkit-user-select: none; /* Chrome/Safari/Opera */

        -khtml-user-select: none; /* Konqueror */

        -moz-user-select: none; /* Firefox */

        -ms-user-select: none; /* Internet Explorer/Edge */

        user-select: none;
        /* Non-prefixed version, currently

       not supported by any browser */
    }

    .numlist ul {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .numlist ul li {

        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
        background-color: #ccc;
        border: 1px solid #ddd;
    }
</style>