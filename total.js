
        // Vue.filter('forMat', (val) => {
        //      val.toLocaleDateString()
        // })
       
        Vue.filter('forMat',(val)=>{
            return val.toLocaleDateString()
            

        })
        // 转换时间
        
        const url = window.location.href;
        const parm = decodeURI(url);
        const userparm = parm.split('?user=')[1];
        var userInfo = decrypted("qwf+6SAWmJ8gvk7gkJetwYRLxSL28IZRZQD4t/hG+gP/amqOtEXiCCcYLgPr9cYeOGQK+12yrZl+PuwcNqsTSQ4qfO/CYA/KHZ+rNmT69FkZ0v4pxRt47ggIUQ1h77Dxen+NLcQ8iH50+tWbJ5DjnmshuLCx0n/JCIEjUjF/WqdREFDHd+zhzHm/29RKIELpSs+oXbOBZks75fj78A/eoerTirJNkyviJsWjU6bDxOOpbmDlPoB7oCjHmPD064rObixbnvISbK6JzJiEnm9Ik7dbueb+YPEw4Bja3JRfE6wLAFbai0mXyJ8OrbG1zVpSWljOCaAPi/WHyJgkhhn0SYKv8X/HvqEwYr6p3RnI/nLpAFNfeaxzQHuXpKkMM5qAKmX7zWrUCr7wyPk65SARgSt37kXTUMjggujsX2lERdadGMtNwNc4M8eA+Zd7IMdeRHmrMYg8vvlBCcC8JbsbPuRol/cuWxr7sIiw1pMDVGiUagEhPSOEO5RjTUwHtzIQ")
        // var userInfo = decrypted(userparm)

        const { data: adminData } = JSON.parse(userInfo)
        const orgNo =Number(adminData.org.orgNo)
        // const formate=  function(time) {
        //     var date =new Date(parseInt(time))
        //     var year =date.getFullYear()
        //     var mon=date.getMonth()+1
        //     var day =date.getDate()
        //     return year+'/'+mon+'/'+day
        //    }
        // console.log(orgNo)
        // console.log(userparm);
        // 加密方法
        // encrypted()
        // 解密方法
        // decrypted()
        var app = new Vue({
            el: '#app',

            data: {
                time:Date.now(),
                // 用户信息
                // isAdmin: userinfo,
                // 权限判定
                power: adminData.isAdmin,
                // power: false,
                // 用户名
                userName: adminData.name,
                // 营销名单开关
                isshow: true,
                // collect: false,
                searchVal: '',
                // 首页分页数据
                reqParams: {
                    modelName: "",
                    page: 1,
                    size: 6
                },
                // 首页总数
                indexTotal: 100,

                // type: 'text',
                curent: ['营销名单', '名单维护'],
                active: '营销名单',
                indexData: [
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '8888888882516516161',
                        modelData: new Date(),
                        modelDownNum: '60060600',
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBoxId: ''

                    },

                ],
                // 激活样式
                activeButton: {
                    backgroundImage: 'linear-gradient(270deg, #8A68F3 0%, #0D45FE 100%)',
                    // background: 'red',
                    color: '#fff',
                    fontFamily: 'PingFangSC-Medium',
                    fontSize: '24px',
                    borderRadius: '3px',
                    // backGroudColor: 'Red',
                    // backGroundImage: 'linearGradient(270deg, #8A68F3 0%, #0D45FE 100%)',
                    width: '140px',
                    height: '44px',
                    lineHeight: ' 42px',
                    textAlign: "center"
                },
                // 全部下载
                downloadAllParams:{
                    modelId:'',
                    modelName:'',
                    dataBoxId:'',
                    orgNo:orgNo,
                    userName:adminData.name
                },

                //名单维护数据
                repairParams: {
                    modelName: "",
                    page: 1,
                    size: 10
                },
                // 维护查询
                repairSearchVal: '',
                // 维护总数
                repairTotal: 100,
                // 发布状态
                // status: true,
                tableData: [{
                    userName: '北京分行',
                    number: '1',
                    createTime: '2016-05-02',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    status:false
                }, {
                    userName: '北京分行',
                    number: '2',
                    createTime: '2016-05-04',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    status:true
                }, {
                    userName: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    status:true
                }, {
                    userName: '北京分行',
                    number: '4',
                    createTime: '2016-05-03',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    status:false
                }, {
                    userName: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    statsu:false
                }, {
                    userName: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑',
                    status:true
                }
                ],
                // 重建页数据
                rebuild: false,
                // 上传视频名称
                fileName: null,
               // 进度条
               videoUploadPercent:0,
               //是否显示进度条
               videoFlag: true,
                formData: {
                    modelName: '信用卡拉新模型',
                    // 关联地址
                    dataBoxId: '',
                    modelIntroduce: '评论内容',
                    // 视频地址
                    videoUrl: 'localhost:8080',
                    // 发布状态 0保存 1发布
                    status: null,
                    // 创建人
                    userName:adminData.name
                    // userName: '张三',
                    // // 创建时间
                    // createTime:'',
                    // // 更新时间
                    // updateTime:''


                },
                // 编辑页数据
                editData: false,
                  // 上传视频名称
                editFileName: null,
              // 进度条
              videoEditPercent:0,
              //是否显示进度条
              videoEditFlag: true,
                editFormData: {
                    // 模型ID
                    modelId:'',
                    modelName: '信用卡拉新模型',
                    // 关联地址
                    dataBoxId: '',
                    modelIntroduce: '评论内容',
                    // 视频地址
                    videoUrl: 'localhost:8080',
                    // 发布状态 0保存 1发布
                    status: null,
                    // 创建人
                    userName:adminData.name
                    // userName: '张三',
                    // // 创建时间
                    // createTime:'',
                    // // 更新时间
                    // updateTime:''


                },
                // 详情页数据

                detail: false,
                // 统计分行下载
                totalBank:'',
                // 详情页日期
                detailDate:'2016-05-02',
                detailInfo:{},
                // 视频地址
                // 详情页日期选择
                // xiangqing
                detailOption:[{value:Date.now()},{value:Date.now()},{value:Date.now()},{value:Date.now()}

                

                ],

                detailParams: {
                    
                    modelId:'',
                    dataBoxId:'',
                    orgNo:''
                }, 
                detailDownParams:{
                    modelId:'',
                    modelName:'',
                    dataBoxId:'',
                    orgNo:'',
                    userName:''

                },
                tableDatadetail: [{
                    // 下载日期
                    downloadTime: '2020/11/14',
                    // 下载账户
                    userName: '王小虎',
                    // 所属分行
                    affiliatedBranch: '上海市普陀区金沙江路 1517 弄'
                }, {
                    downloadTime: '2016-05-04',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1517 弄'
                }, {
                    downloadTime: '2016-05-01',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1519 弄'
                }, {
                    downloadTime: '2016-05-03',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1516 弄'
                },
                {
                    downloadTime: '2016-05-01',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1519 弄'
                }, {
                    downloadTime: '2016-05-01',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1518 弄'
                }, {
                    downloadTime: '2016-05-01',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1519 弄'
                }, {
                    downloadTime: '2016-05-01',
                    userName: '王小虎',
                    affiliatedBranch: '上海市普陀区金沙江路 1519 弄'
                },]
                ,
                // 分析页数据
                analy: false,
                // 日志加粗
                fontwe: {
                    fontWeight: 900
                },
                // 获取分析数据
                getFormAna:{
                    modelId:'',
                    dataBoxId:'',
                    orgNo:''
                },
                // 录入需要数据
                formAna: {
                    modelId:'',
                    dataBoxId:'',
                    // 分行id
                    orgNo:'',
                    id:'',
                    userName:adminData.name,
                    // 干预人数
                    interventionNum: null,
                    // 转化人数
                    convertNum: null,
                    // AUM提升
                    aumPromote: null,
                    // 转化率
                    // conversionRate:null,
                    // 数据上传日期
                    dataTime:''
                    // trouble: null,
                    // trasform: null,
                    // incres: null,
                    // value: '选项1',
                },
                // 转化率
                // conversionRate: null,
                // 所属分行
                affiliatedBranch: '',
                // 分析数据
                tableDataAna: [{
                    dataTime: Date.now(),

                    // 日志下拉
                    // caretBottom: true,
                    convertNum: '1',
                    interventionNum: '300',
                    aumPromote:1,
                    conversionRate: '0.33',
                    logs: [{
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }
                    ]
                }, {
                    dataTime: Date.now(),
                    convertNum: '1',
                    // openfm: true,
                    // caretBottom: true,
                    interventionNum: '300',
                    aumPromote:1,
                    conversionRate: '0.33',
                    logs: [{
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }
                    ]
                }, {
                    dataTime: Date.now(),
                    convertNum: '1',
                    interventionNum: '300',
                    aumPromote:1,
                    // openfm: true,
                    // caretBottom: true,
                    conversionRate: '0.33',
                    logs: [{
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }
                    ]
                }, {
                    dataTime: Date.now(),
                    convertNum: '1',
                    interventionNum: '300',
                    aumPromote:1,
                    // openfm: true,
                    // caretBottom: true,
                    conversionRate: '0.33',
                    logs: [{
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }, {
                        // 录入时间
                        insertDate: '2020',
                        // 录入姓名
                        userName: '王小虎',
                        // 录入机构
                        affiliatedBranch: '北京银行',
                        // 月份
                        insertMonth: '09'
                    }
                    ]
                }],
                // 352100 中信银行国际(中国)有限公司上海
                // 733600 中信银行宁波分行
                // 758000 中信银行银川分行
                // 722100 中信银行沈阳分行
                // 728100 中信银行南昌分行
                

                options: [{
                    value: 352100,
                    label: '中信银行国际(中国)有限公司上海'
                }, {
                    value: 733600 ,
                    label: '中信银行宁波分行'
                }, {
                    value: 758000,
                    label: '中信银行银川分行'
                }, {
                    value: 722100,
                    label: '中信银行沈阳分行'
                }, {
                    value:  728100,
                    label: '中信银行南昌分行'
                }],

            },
            computed:{
                // 计算转化率
                trans(){
                  return   ((this.formAna.convertNum / this.formAna.interventionNum) * 100).toFixed(2)+'%'
                },
                // 计算详情分行数
                // totalBank(){
                //     let  detailArr=this.tableDatadetail.concat()
                //     for(var i=0;i<detailArr.length;i++){
                //                for(j=i+1;j<detailArr.length;j++){
                //                    if(detailArr[i].affiliatedBranch===detailArr[j].affiliatedBranch){
                //                        detailArr.splice(j,1)
                //                        j--
                //                    }
                //                }
                //            }
                //         //    console.log(detailArr)   
                //     return detailArr.length

                // },
                // 详情日期选择
                // 详情转换日期格式
                // selectDate(){

                //   let data=this.detailOption.forEach((item,index)=>{
                //     formate(item.value)
                //     })
                //     console.log(this.data)

                //     return data
                // }
            },
            watch: {
              

            },
            created() {
                // 检查权限
                this.checkPower()
                // 分析数据计算

            },

            mounted() {
                this.getData()
                this.getRepairData()
                this.initData()

            },
            methods: {
              

                // 详情页表格样式操作
                // 名单维护表格样式操作
                headdetailClass() {
                    return 'text-align: center;background:#F5F7FA;height:40px'
                },
                headrepairClass() {
                    return 'text-align: center;background:#F5F7FA;height:58px'
                },
                rowClass() {
                    return 'text-align: center;'
                },
                // 营销名单切换
                handleCurent(val) {
                    // console.log(val)
                    if (this.active !== val) {
                        this.isshow = !this.isshow
                    }
                    this.active = val



                },
                // 退出登录
                logOut() {

                    this.$confirm('老铁，此操作将退出登录, 是否继续?', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {
                            window.location.href = "about:blank";
                            window.close();
                        } else {
                            window.opener = null;
                            window.open("", "_self");
                            window.close();
                        }
                    })



                },
               
                // 判断权限
                checkPower() {
                    this.power = this.power === 'false' ? false : true

                    // ?false:true
                    // console.log(flag)
                    
                    if (!this.power) {
                        // console.log(this.curent)
                        this.curent = ['营销名单']
                        // this.active='营销名单'
                        // console.log(this.curent)
                        // console.log(this.active)
                    }
                },
                // 查询营销名单内容
                searchContent() {
                    // this.reqParams.modelName=this.searchVal
                    // this.reqParams.page = 1
                    // this.getData()

                },
                // 重置营销名单内容
                resetContent() {
                    // this.reqParams.modelName="",
                    // this.reqParams.page=1,
                    // this.reqParams.size=6
                    // this.getData()
                },
                // 获得数据
                async getData() {

                    // const {data:{data}} =await axios.post('model/getModelList',this.reqParams)
                    // console.log(data)
                    // this.indexData=data.list
                    // this.indexTotal=data.total
                },
                // 首页全部下载
                downloadAll(val){
                   console.log(val)
                    this.downloadAllParams.modelId=val.modelId,
                    this.downloadAllParams.modelName=val.modelName,
                     this.downloadAllParams.dataBoxId=val.dataBoxId,
                    this.downloadAllParams.userName=this.userName,
                    this.downloadAllParams.orgNo=orgNo
                // console.log(this.downloadAllParams)
                    this.$confirm('老铁，此操作将退出登录, 是否继续?', '温馨提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(async() => {
                //    const{data} =axios.post('download/getData',this.downloadAllParams)
                //    if(data.code==200){
                //        this.$message.success('上传成功')
                //    }else{
                //         this.$message.error('上传失败')
                //    }
                })
                        
                },
                // 打开详情页
               async openDetail(val) {
                    this.detail = true
                    // console.log(val)
                    // this.detailParams.modelId=val.modelId
                    // this.detailParams.dataBoxId=val.dataBoxId
                    this.detailParams.orgNo=orgNo
                        this.getDetailDate()
                        this.totaldetailBank()
                        // 1611611616161616if


                },
                // 获取详情页数据
                getDetailDate(){
                    // const {data:{data}} = await axios.post('model/getDetail',this.detailParams)
                    // this.detailInfo =data.detail
                    // this.tableDatadetail=data.log
                    
                       
    
                    

                },
                // 统计分行下载
                totaldetailBank(){
                    let  detailArr=this.tableDatadetail.concat()
                    
                    for(var i=0;i<detailArr.length;i++){
                               for(j=i+1;j<detailArr.length;j++){
                                   if(detailArr[i].affiliatedBranch===detailArr[j].affiliatedBranch){
                                       detailArr.splice(j,1)
                                       j--
                                       
                                   }
                               }
                           }
                        //    console.log(detailArr)  
                    this.totalBank= detailArr.length
                    // console.log(this.totalBank,this.tableDatadetail,this.time)
                },
                // 选择日期
                changeDetailDate(val){
                    console.log(val)
                    // this.detailDate=val
                    // console.log(this.detailDate)
                },
                
                // 详情页下载
                detailDown(){
                        this.detailDownParams.modelId=this.detailInfo.modelId,
                        this.detailDownParams.modelName=this.detailInfo.modelName,
                        this.detailDownParams.dataBoxId=this.detailInfo.dataBoxId,
                        this.detailDownParams.userName=this.userName,
                        this.detailDownParams.orgNo=orgNo
                        // console.log(this.detailDownParams)
                        this.$confirm('老铁，此操作将退出登录, 是否继续?', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(async() => {
                        //    const{data} =axios.post('download/getData',this.detailDownParams)
                        //    if(data.code==200){
                        //        this.$message.success('上传成功')
                        //    }else{
                        //         this.$message.error('上传失败')
                        //    }
                        })
                },
                // 获取维护页数据
              async  getRepairData(){
                      // const {data:{data}} =await axios.post('model/getList',this.repairParams) 
                      // console.log(data)
                    // this.tableData=data.list
                    // this.repairTotal=data.total 
                },
                // 查询维护页模型
                searchRepairConcetn() {
                    // this.repairParams.modelName=this.repairSearchVal
                    // this.repairParams.page = 1
                    // this.getRepairData()
                    // this.repairSearchVal=''
                    
                },
                // 维护页重置
                resetRepairContent() {
                    // this.repairParams.modelName="",
                    // this.repairParams.page=1,
                    // this.repairParams.size=10
                //    this.getRepairData()
                },
                // 重建与编辑页方法
                // 打开编辑页
                openEdit(row){
                        this.editData=true
                        console.log(row)
                        // this.editFormData.modelId=row.modelId
                        this.editFormData.modelName=row.modelName
                        // this.editFormData.modelIntroduce=row.modelIntroduce
                        // this.editFormData.dataBoxId=row.dataBoxId
                        this.editFormData.status=row.status
                        // console.log(this.editFormData.status)

                },
                // 上传文件变动
                changeFile(file, fileList) {
                    // console.log(file,fileList)
                    this.fileName = file.name
                    // let selectFile=this.$refs.selectFile
                    // console.log(selectFile)
                },
                editChangeFile(file, fileList) {
                    // console.log(file,fileList)
                    this.editFileName = file.name
                    // let selectFile=this.$refs.selectFile
                    // console.log(selectFile)
                },
               
                // 自定义上传
                uploadSectionFile(parm) {
                    // console.log(parm)
                    let fileObj = parm.file;
                    console.log(fileObj)
                    // FormData 对象
                    let form = new FormData();
                    // 文件对象
                    form.append("video", fileObj);
                    console.log(form)
                    //  axios({
                    //     method: 'post',
                    //     url: 'http://22.5.241.7/dacp/upload',
                    //      headers: { 'Content-Type': 'multipart/form-data'
                    //      },
                    //      data:form
                    //  }).then((res)=>{
                    //         console.log(res)
                        // this.formData.videoUrl=res.videoPath

                    //  }),
                    // console.log(res)
                    // this.fileNumberName=null
                },
                editUploadSectionFile(parm) {
                    // console.log(parm)
                    let editFileObj = parm.file;
                    console.log(editFileObj)
                    // FormData 对象
                    let editForm = new FormData();
                    // 文件对象
                    editForm.append("video", editFileObj);
                    console.log(editForm)
                    //  axios({
                    //     method: 'post',
                    //     url: 'http://22.5.241.7/dacp/upload',
                    //      headers: { 'Content-Type': 'multipart/form-data'
                    //      },
                    //      data:editForm
                    //  }).then((res)=>{
                    //         console.log(res)
                        // this.editFormData.videoUrl=res.videoPath
                    //  }),
                    // console.log(res)
                    // this.fileNumberName=null
                },
                // 手动上传
                submitUpload() {
                    // let upload = this.$refs.upload
                    this.$refs.upload.submit();
                    // this.$refs.upload.clearFiles();
                    // console.log(upload)

                },
                editSubmitUpload() {
                    // let editUpload = this.$refs.editUpload
                    this.$refs.editUpload.submit();
                    // this.$refs.upload.clearFiles();
                    // console.log(upload)

                },
                // 关联地址
                relation() {
                    // let upData=this.$refs.upData
                    // this.$refs.upData.submit();
                    // this.$refs.upload.clearFiles();
                    // console.log(upload)
                    if (this.formData.dataBoxId == '') {
                        this.$message.error('内容不能为空')
                        return
                    }

                    console.log(this.formData.dataBoxId)

                    setTimeout(() => {
                        this.$message.success('关联成功')
                    }, 2000);

                },
                editRelation() {
                    // let upData=this.$refs.upData
                    // this.$refs.upData.submit();
                    // this.$refs.upload.clearFiles();
                    // console.log(upload)
                    if (this.editFormData.dataBoxId == '') {
                        this.$message.error('内容不能为空')
                        return
                    }

                    console.log(this.editFormData.dataBoxId)

                    setTimeout(() => {
                        this.$message.success('关联成功')
                    }, 2000);

                },
                handleSuccess(event, file, filelist) {
                    // this.videoFlag=true
                    console.log(event,file,filelist)
                    // this.videoFlag = true;
                    // this.videoUploadPercent = file.percentage.toFixed(0) * 1;
                },
                editHandleSuccess(event, file, filelist) {
                    //  this.videoEditFlag=true
                     console.log(event,file,filelist)
                    //  this.videoEditPercent = file.percentage.toFixed(0) * 1;
                },
                // 发布
               async publish() {
                    
                    this.formData.status = true
                    // const { data } = axios.post('model/saveModel', this.formData)
                    // if(data.code==200){
                    //     this.$message.success('发布成功')
                    // }else{
                    //     this.$message.error('发布失败')
                    // }
                    // console.log(data)
                    // this.formData.modelName='',
                    // this.formData.modelIntroduce='',
                    // this.formData.videoUrl='',
                    // this.formData.dataBoxId=''
                    // this.fileName=''
                    // this.getRepairData()
                    this.rebuild=false
                },
              async  editPublish() {
                    // this.editFormData.status = true
                    // const { data } = axios.post('model/updateModel', this.editFormData)
                    // if(data.code==200){
                    //     this.$message.success('保存成功')
                    // }else{
                    //     this.$message.error('保存失败')
                    // }
                    // console.log(data)
                    // this.formData.modelName='',
                    // this.formData.modelIntroduce='',
                    // this.formData.videoUrl='',
                    // this.formData.dataBoxId=''
                    // this.fileName=''
                    // this.getRepairData()
                },
                // 保存
              async  save() {
                    this.formData.status = false
                    // const { data } = axios.post('model/saveModel', this.formData)
                    // console.log(data)
                    // if(data.code==200){
                    //     this.$message.success('保存成功')
                    // }else{
                    //     this.$message.error('保存失败')
                    // }
                    // this.getRepairData()
                },
               async editSave() {
                    // this.editFormData.status = false
                    // const { data } = axios.post('model/updateModel', this.editFormData)
                    // console.log(data)
                    // this.getRepairData()
                },
                // 打开分析页
                openAya(val) {
                    // console.log(val)
                    this.analy = true
                    this.getFormAna.modelId=val.modelName
                    this.getFormAna.dataBoxId=val.dataBoxId
                    this.getFormAna.orgNo=orgNo
                    this.getDataAna()

                },
                // 表格合计
                // getColumns
                // 打开表格（手风琴）
                toogleExpand(row) {
                    // this.msg=true
                    // console.log(row)
                    let $table = this.$refs.table;
                    row.caretBottom = !row.caretBottom
                    row.logColor = !row.logColor
                    this.tableDataAna.map((item) => {
                        // console.log(item)
                        if (row.date != item.date) {
                            // console.log(row.data)
                            // console.log(item)
                            // console.log(item.caretBottom)
                            item.caretBottom = false
                            item.logColor = false
                            $table.toggleRowExpansion(item, false)
                        }
                    })
                    // row.caretBottom=false
                    $table.toggleRowExpansion(row)


                },
                // 表格转化率计算
                initData() {
                    // this.tableDataAna.forEach(item => {
                    //     // item.trans = ((item.num / item.num2) * 100).toFixed(2)
                    //     // 录入打开
                    //     item.openfm = true
                    //     // 日志下拉
                    //     item.caretBottom = false
                    //     // 日志颜色加粗
                    //     item.logColor = false
                    // })
                    // console.log(this.tableDataAna)
                },
                // 接口获取对表格处理
               async getDataAna() {
                //   const{data:{data}} =await axios.post('analys/getAnalyse',this.getFormAna)
                //   console.log(data)
                    // this.tableDataAna=data
                    this.tableDataAna.forEach(item => {
                        // item.trans = ((item.num / item.num2) * 100).toFixed(2)
                        // 录入打开
                        var date =new Date(parseInt(item.dataTime))
                        var year =date.getFullYear()
                        var mon=date.getMonth()+1
                        var day =date.getDate()
                        item.dataTime=year+'/'+mon+'/'+day
                        item.openfm = true
                        // 日志下拉
                        item.caretBottom = false
                        // 日志颜色加粗
                        item.logColor = false
                    })
                },
                // 表格总计
                handleSummary({ columns, data }) {
                    // console.log(columns, data)
                    var sum = []
                    var totalnum = 0;
                    var totalnum2 = 0;
                    data.forEach((item, index) => {
                        totalnum += Number(item.convertNum)
                        totalnum2 += Number(item.interventionNum)
                    })
                    columns.forEach((item, index) => {

                        if (index === 0) {
                            sum[index] = '总计'
                            return
                        }
                        if (item.label === '转化率') {


                            sum[index] = ((totalnum / totalnum2) * 100).toFixed(2) + '%'
                            return
                        }
                        sum[1] = totalnum2
                        sum[2] = totalnum
                        sum[3] = totalnum

                    })
                    // return ['总和', 1200, 300, 300, 300, '33%']
                    return sum

                },
                // 下拉选择变化
                changeVal(val) {
                    // console.log(val)
                    // 调接口重新渲染
                    this.affiliatedBranch = val;
                    console.log(this.affiliatedBranch)
                    // console.log(this.formAna.value)
                },
                // 表单录入打开
                openform(row) {
                    // console.log(row)
                    row.openfm = false
                    this.tableDataAna.map((item) => {
                        // console.log(item)
                        if (row.date != item.date) {
                            item.openfm = true


                        }
                    })
                    // this.formAna = {         
                    //   trouble: row.num2,
                    //   trasform: row.num,
                    //   incres: row.num,
                    //   value: '选项1',
                    // }
                    this.formAna.modelId=row.modelId,
                    this.formAna.dataBoxId=row.dataBoxId,
                    this.formAna.id=row.id,
                    this.formAna.userName=adminData.name,
                    this.formAna.orgNo=orgNo,
                    this.formAna.interventionNum = row.interventionNum,
                    this.formAna.convertNum = row.convertNum,
                    this.formAna.aumPromote = row.aumPromote,
                    this.formAna.dataTime=row.dataTime
                    // this.formAna.conversionRate
                    // console.log(row)
                    // console.log(this.tableDataAna)
                },
                // 录入完成
              async  onsubmit(row) {
                    let param = {
                        modelId:this.formAna.modelId,
                        dataBoxId:this.formAna.dataBoxId,
                        orgNo:orgNo,
                        id:this.formAna.id,
                        userName:this.formAna.userName,
                        interventionNum: this.formAna.interventionNum,
                        convertNum: this.formAna.convertNum,
                        aumPromote: this.formAna.aumPromote,
                        dataTime:this.formAna.dataTime
                        // conversionRate: this.trans,
                        // insertMonth:Date.now()
                        // value: this.formAna.value,
                    }
                    // row.num=null
                    // row.num2=null
                    // this.formAna = {
                    //   trouble: null,
                    //   trasform: null,
                    //   incres: null,
                    //   value: '选项1',
                    // }
                        console.log(param)


                    if (param.interventionNum == "" || isNaN(param.interventionNum) ) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字')
                        return
                    }

                    if (param.convertNum == "" || isNaN(param.convertNum)) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字')
                        return
                    }

                    if (param.aumPromote == "" || isNaN(param.aumPromote)) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字')
                        return
                    }


                    // const{data}=axios.post('analys/update',param)
                    // if(data.code==200){
                    //     this.$message.success('录入成功')
                     // 调用接口重新渲染
                    // this.getDataAna()
                    // }else{
                    //     this.$message.error('录入失败')
                    // }
                    // console.log(data)
                   

                    this.formAna.interventionNum = null
                    this.formAna.convertNum = null
                    this.formAna.aumPromote = null
                    row.openfm = true

                },
                // 退出录入
                signOut(row) {
                    // this.formAna = {
                    //   trouble: null,
                    //   trasform: null,
                    //   incres: null,
                    //   value: '选项1',
                    // }
                    this.formAna.interventionNum = null,
                    this.formAna.convertNum = null,
                    this.formAna.aumPromote = null,
                    row.openfm = true
                },
                // 分页事件
                changePager(newPage) {
                    // console.log(newPage)
                    this.reqParams.page = newPage
                    // this.getData()
                },
                // 维护页分页事件
                repairChangePager(newPage) {
                    this.repairParams.page = newPage
                    // this.getRepairData()
                },
                // 滑块开关事件
                changeSwich(val) {
                    // console.log(val)
                },
                // 分析页表头表格样式
                ayaheadClass() {
                    return 'text-align: center;background:#F5F7FA;height:40px'
                },
                // 分析页日志表格格式
                ayaLogheadClass() {
                    return 'text-align: center;background:#f5f8ff;height:40px'
                },
                // 日志页
                ayarowClass() {
                    return 'text-align: center;background:#f5f8ff'
                },
                rowClass() {
                    return 'text-align: center;'
                }


            }
        });
    