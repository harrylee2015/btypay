<template>
    <div class="account_container">
        <home-header></home-header>
        <asset-back title="我的账户" backPath="/WalletIndex"></asset-back>
        <p>新增</p>
        <ul>
            <li v-for="(item,i) in lists" :key="i" :class="mouseEnterIndex==i?'mouseEnter':''" 
                @mouseover="mouseEnterIndex=i" @mouseleave="mouseEnterIndex=null"
                @click="mouseEnterIndex=i">
                <div class="upper">
                    <p>
                        <span>{{item.name}}</span>
                        <img @click="editHandle(item)" src="../../../assets/images/edit.png" alt="">
                    </p>
                    <img v-if="mouseEnterIndex==i" src="../../../assets/images/selected.png" alt="">
                </div>
                <div class="middle">
                    <p>总资产：<span>{{item.assets}} USD</span></p>
                    <p>
                        <span>{{item.address | addressFilter}}</span>
                        <img @click="copyHandle($event, item.address)" src="../../../assets/images/copy.png" alt="">
                    </p>
                </div>
                <div class="down">
                    <p @click.stop="delHandle(item)">
                        <img src="../../../assets/images/delAccount.png" alt="">
                        <span>删除账户</span>
                    </p>
                    <p @click.stop="exportHandle(item)">
                        <img src="../../../assets/images/exportAccount.png" alt="">
                        <span>导出账户</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import AssetBack from "@/components/AssetBack.vue";
import { clip } from "@/libs/clip.js";
export default {
    components: { HomeHeader,AssetBack },
    data(){
        return{
            lists:[
                {
                    name:'账户一',
                    assets:1000,
                    address:'12evczYyX9ZKPYvwSEvRkRyTjpSrJuLudg'
                },
                {
                    name:'账户一',
                    assets:1000,
                    address:'12evczYyX9ZKPYvwSEvRkRyTjpSrJuLudd'
                },
                {
                    name:'账户一',
                    assets:1000,
                    address:'12evczYyX9ZKPYvwSEvRkRyTjpSrJuLud1'
                },
            ],
            list:[
                {
                    name:'',
                    password:'',
                    address:'',
                    mainNodeList:[],
                    mainNode:[],
                    paraNode:[],
                    parallelNodeList:[],
                    ciphertext:'',
                    accountIndexList:null,
                    currentAccountIndex:''
                }
            ],
            mouseIsEnter:true,
            mouseEnterIndex:1,
        }
    },
    methods:{
        editHandle(val){

        },
        delHandle(val){
            console.log('删除了')
        },
        exportHandle(val){
            console.log('导出了')
        },
        copyHandle(event, text) {
          clip({
                event,
                text,
                response: (err, msg) => {
                    if (err) {
                        this.$message.error(msg);
                        return;
                    }
                    this.$message.success(msg);
                }
          });
        },
    },
    filters:{
        addressFilter(val){
            return val.substr(0,13) + '…' + val.substr(-13,13)
        }
    }
}
</script>

<style lang='scss'>
.account_container{
    >div.assetBack_container{
        padding-top: 20px;
        p:nth-of-type(2){
            top: 20.5px;
            color: #F5B947
        }
    }
    >P{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(245,185,71,1);
        position: absolute;
        right: 63px;
        top: 126px;
    }
    >ul{
        width: 366px;
        height: calc(600px - 100px - 42px - 29px - 10px);
        overflow: auto;
        margin: 29px auto 0px;
        padding: 0 17px;
        li{
            width: 332px;
            background:rgba(143,168,224,1);
            border-radius:10px;
            margin-bottom: 22px;
            padding: 17px 19px 18px 19px;
            cursor: pointer;
            div{
                display: flex; 
                font-family:Microsoft YaHei;
                &.upper{
                    align-items: center;
                    justify-content: space-between;
                    p{
                        span{
                            font-size:16px;
                            color:rgba(22,42,84,1);
                            margin-right: 11px;
                        }
                        img{
                            width: 17px;
                            height: 15px;
                            cursor: pointer;
                        }
                    }
                    >img{
                        width: 18px;
                        height: 18px;
                    }
                }
                &.middle{
                    display: block;
                    margin: 19px 0 22px;
                    padding: 0 14px 0 22px;
                    p{
                        width: 100%;
                        &:nth-of-type(1){
                            font-size:14px;
                            color:rgba(22,42,84,0.67);
                            span{
                                color:rgba(22,42,84,1);
                            }
                        }
                        &:nth-of-type(2){
                            font-size:12px;
                            color:rgba(22,42,84,1);
                            display: flex;
                            align-items: center;
                            margin-top: 15px;
                            img{
                                width: 12px;
                                height: 12px;
                                margin-left: 13px;
                                cursor: pointer;
                            }
                        }
                    }
                }
                &.down{
                    padding: 0 11px 0 24px;
                    justify-content: space-between;
                    align-items: center;
                    p{
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        span{
                            font-size:12px;
                            color:rgba(22,42,84,0.6);
                        }
                        img{
                            width: 24px;
                            height: 24px;
                            margin-right: 6px;
                        }
                    }
                }
            }
            &:nth-last-of-type(1){
                margin-bottom: 0px;
            }
            &.mouseEnter{
                background:rgba(203,216,242,1);
                box-shadow:0px 5px 16px 5px rgba(68,116,218,0.66);
            }
        }
        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background: red;
        }
    }
}
</style>