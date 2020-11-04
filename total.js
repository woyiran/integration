
        // Vue.filter('forMat', (val) => {
        //      val.toLocaleDateString()
        // })
        // Vue.filter('forNumber',(val)=>{
        //     return val.toLocaleString()

        // })
        const url = window.location.href;
        const parm = decodeURI(url);
        const userparm = parm.split('?user=')[1];
        var str = decrypted("qwf+6SAWmJ8gvk7gkJetwYRLxSL28IZRZQD4t/hG+gP/amqOtEXiCCcYLgPr9cYeOGQK+12yrZl+PuwcNqsTSQ4qfO/CYA/KHZ+rNmT69FkZ0v4pxRt47ggIUQ1h77Dxen+NLcQ8iH50+tWbJ5DjnmshuLCx0n/JCIEjUjF/WqdREFDHd+zhzHm/29RKIELpSs+oXbOBZks75fj78A/eoerTirJNkyviJsWjU6bDxOOpbmDlPoB7oCjHmPD064rObixbnvISbK6JzJiEnm9Ik7dbueb+YPEw4Bja3JRfE6wLAFbai0mXyJ8OrbG1zVpSWljOCaAPi/WHyJgkhhn0SYKv8X/HvqEwYr6p3RnI/nLpAFNfeaxzQHuXpKkMM5qAKmX7zWrUCr7wyPk65SARgSt37kXTUMjggujsX2lERdadGMtNwNc4M8eA+Zd7IMdeRHmrMYg8vvlBCcC8JbsbPuRol/cuWxr7sIiw1pMDVGiUagEhPSOEO5RjTUwHtzIQ")
        // var str = decrypted(userparm)
        console.log(str)

        // var userinfo=JSON.parse(str)
        const { data: adminData } = JSON.parse(str)
        console.log(adminData)

        // console.log(userparm);
        // 加密方法
        // encrypted()
        // 解密方法
        // decrypted()

        var app = new Vue({
            el: '#app',

            data: {
                // 用户信息
                // isAdmin: userinfo,
                // 权限判定
                // power: adminData.isAdmin,
                power: false,
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
                        modelNumber: '888888888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },
                    {
                        modelName: '单卡(信用卡)拉新模型',
                        modelNumber: '88888',
                        modelData: new Date(),
                        modelDownNum: 20,
                        modelIntroduce: '简介内容简介内容简介内容简介简介内容简介内容简介内容简介',
                        dataBox: ''

                    },

                ],
                // 激活样式
                activeButton: {
                    backgroundImage: 'linear-gradient(270deg, #8A68F3 0%, #0D45FE 100%)',
                    // background: 'red',
                    color: '#fff',
                    fontFamily: 'PingFangSC-Medium',
                    fontSize: '24px',
                    borderRadius: '4px',
                    // backGroudColor: 'Red',
                    // backGroundImage: 'linearGradient(270deg, #8A68F3 0%, #0D45FE 100%)',
                    width: '140px',
                    height: '44px',
                    lineHeight: ' 42px',
                    textAlign: "center"
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
                status: true,
                tableData: [{
                    address: '北京分行',
                    number: '1',
                    createTime: '2016-05-02',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }, {
                    address: '北京分行',
                    number: '2',
                    createTime: '2016-05-04',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }, {
                    address: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }, {
                    address: '北京分行',
                    number: '4',
                    createTime: '2016-05-03',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }, {
                    address: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }, {
                    address: '北京分行',
                    number: '3',
                    createTime: '2016-05-01',
                    updateTime: '2016-05-02',
                    modelName: '王小虎',
                    operation: '编辑'
                }
                ],
                // 重建页数据
                rebuild: false,
                // 上传视频名称
                fileName: null,
              
                formData: {
                    modelName: '信用卡拉新模型',
                    // 关联地址
                    dataBoxId: '',
                    modelIntroduce: '评论内容',
                    // 视频地址
                    videoUrl: '',
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
              
                editFormData: {
                    modelName: '信用卡拉新模型',
                    // 关联地址
                    dataBoxId: '',
                    modelIntroduce: '评论内容',
                    // 视频地址
                    videoUrl: '',
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
                detailParams: {
                    // 视频地址
                    videoUrl: null,
                    modelName: null,
                },
                tableDatadetail: [{
                    // 下载日期
                    downloadTime: '2016-05-02',
                    // 下载账户
                    userName: '王小虎',
                    // 所属分行
                    affiliatedBranch: '上海市普陀区金沙江路 1518 弄'
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
                    affiliatedBranch: '上海市普陀区金沙江路 1519 弄'
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
                formAna: {
                    // 干预人数
                    interventionNum: null,
                    // 转化人数
                    convertNum: null,
                    // AUM提升
                    aumPromote: null,
                    // trouble: null,
                    // trasform: null,
                    // incres: null,
                    // value: '选项1',
                },
                // 转化率
                conversionRate: null,
                // 所属分行
                affiliatedBranch: '选项1',
                // 分析数据
                tableDataAna: [{
                    date: '1月',

                    // 日志下拉
                    // caretBottom: true,
                    address: '上海市普陀区金沙江路 1518 弄',
                    num: '1',
                    num2: '300',
                    trans: 'kk',
                    log: [{
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
                    date: '2月',
                    address: '上海市普陀区金沙江路 1517 弄',
                    num: '1',
                    // openfm: true,
                    // caretBottom: true,
                    num2: '300',
                    trans: 'kk',
                    log: [{
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
                    date: '3月',
                    address: '上海市普陀区金沙江路 1519 弄',
                    num: '1',
                    num2: '300',
                    // openfm: true,
                    // caretBottom: true,
                    trans: 'kk',
                    log: [{
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
                    date: '4月',
                    address: '上海市普陀区金沙江路 1516 弄',
                    num: '1',
                    num2: '300',
                    // openfm: true,
                    // caretBottom: true,
                    trans: 'kk',
                    log: [{
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

                options: [{
                    value: '选项1',
                    label: '北京分行'
                }, {
                    value: '选项2',
                    label: '上海分行'
                }, {
                    value: '选项3',
                    label: '广东分行'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],

            },
            watch: {
                // searchVal(newVal,oldVal){
                //     // console.log(newVal,oldVal)
                //     //     axios.get(`http://localhost:3000/brands?like_name=${newVal}`)
                //     //     .then((res)=>{
                //     //         // console.log(res)
                //     //     })
                // this.searchVal=newVal
                // }

            },
            created() {
                // 检查权限
                this.checkPower()
                // 分析数据计算

            },

            mounted() {
                this.getData()
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
                // 获得用户信息
                geruserInfo() {
                    // JSON.pares(window.sessionStorage.getItem('key') || '{}')
                },
                // 判断权限
                checkPower() {
                    let flag = this.power === 'false' ? false : true

                    // ?false:true
                    // console.log(flag)
                    if (!flag) {
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

                    // const {data:{data}} =await axios.post('getModelList',this.reqParams)
                    // console.log(data)
                    // this.indexData=data.list
                    // this.indexTotal=data.total
                },
                // 打开详情页
                openDetail(val) {
                    this.detail = true
                    // console.log(val)
                    this.detailParams.modelName = val.modelName
                },
                // 查询维护页模型
                searchRepairConcetn() {
                    // this.repairParams.modelName=this.searchVal
                    // this.repairParams.page = 1
                    // this.getData()
                },
                // 维护页重置
                resetRepairContent() {
                    // this.repairParams.modelName="",
                    // this.repairParams.page=1,
                    // this.repairParams.size=10
                    // this.getData()
                },
                // 重建与编辑页方法
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
                uploadSectionFile(res) {
                    // console.log(res)
                    // this.fileNumberName=null
                },
                editUploadSectionFile(res) {
                    // console.log(res)
                    // this.fileNumberName=null
                },
                // 手动上传
                submitUpload() {
                    let upload = this.$refs.upload
                    // this.$refs.upload.submit();
                    // this.$refs.upload.clearFiles();
                    // console.log(upload)

                },
                editSubmitUpload() {
                    let editUpload = this.$refs.editUpload
                    // this.$refs.editUpload.submit();
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
                handleSuccess(res, file, filelist) {
                    // console.log(file)
                    console.log(res, file, filelist)
                    this.$message.success('上传成功')
                    this.fileName = null
                },
                editHandleSuccess(res, file, filelist) {
                    // console.log(file)
                    console.log(res, file, filelist)
                    this.$message.success('上传成功')
                    this.editFileName = null
                },
                // 发布
                publish() {
                    
                    this.formData.status = 1
                    // const { data } = aixos.post('saveModel', this.formData)
                    // console.log(data)
                    // this.formData.modelName='',
                    // this.formData.modelIntroduce='',
                    // this.formData.videoUrl='',
                    // this.formData.dataBoxId=''
                    // this.fileName=''
                },
                editPublish() {
                    this.editFormData.status = 1
                    // const { data } = aixos.post('updateModel', this.editFormData)
                    // console.log(data)
                    // this.formData.modelName='',
                    // this.formData.modelIntroduce='',
                    // this.formData.videoUrl='',
                    // this.formData.dataBoxId=''
                    // this.fileName=''
                },
                // 保存
                save() {
                    this.formData.status = 0
                    // const { data } = aixos.post('saveModel', this.formData)
                    // console.log(data)
                },
                editSave() {
                    this.editFormData.status = 0
                    // const { data } = aixos.post('updateModel', this.editFormData)
                    // console.log(data)
                },
                // 打开分析页
                openAya() {
                    this.analy = true
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
                    this.tableDataAna.forEach(item => {
                        item.trans = ((item.num / item.num2) * 100).toFixed(2)
                        // 录入打开
                        item.openfm = true
                        // 日志下拉
                        item.caretBottom = false
                        // 日志颜色加粗
                        item.logColor = false
                    })
                    // console.log(this.tableDataAna)
                },
                // 接口获取对表格处理
                getDataAna() {
                    // axios.get().then((res)=>{
                    //   const {data}=res.data
                    // this.tableDataAna=data
                    // })
                    // this.tableDataAna.forEach((item)=>{
                    //     item.openfm=true
                    // })
                    // console.log(this.tableDataAna.openfm)
                    // console.log(this.tableDataAna)
                },
                // 表格总计
                handleSummary({ columns, data }) {
                    // console.log(columns, data)
                    var sum = []
                    var totalnum = 0;
                    var totalnum2 = 0;
                    data.forEach((item, index) => {
                        totalnum += Number(item.num)
                        totalnum2 += Number(item.num2)
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
                    this.formAna.interventionNum = row.num2,
                    this.formAna.convertNum = row.num,
                    this.formAna.aumPromote = row.num
                    // console.log(row)
                    // console.log(this.tableDataAna)
                },
                // 录入完成
                onsubmit(row) {
                    let param = {
                        interventionNum: this.formAna.interventionNum,
                        convertNum: this.formAna.convertNum,
                        aumPromote: this.formAna.aumPromote,
                        // value: this.formAna.value,
                    }
                    // console.log(param)
                    // row.num=null
                    // row.num2=null
                    // this.formAna = {
                    //   trouble: null,
                    //   trasform: null,
                    //   incres: null,
                    //   value: '选项1',
                    // }



                    if (param.interventionNum == "" || isNaN(param.interventionNum)) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字，！亲')
                        return
                    }

                    if (param.convertNum == "" || isNaN(param.convertNum)) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字，！亲')
                        return
                    }

                    if (param.aumPromote == "" || isNaN(param.aumPromote)) {//进行数字校验，如果不是数字填出对话框进行提示
                        this.$message.error('请填写数字，！亲')
                        return
                    }


                    this.formAna.interventionNum = null
                    this.formAna.convertNum = null
                    this.formAna.aumPromote = null

                    row.openfm = true
                    // 调用接口
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
                },
                // 滑块开关事件
                changeSwich(val, row) {
                    console.log(val, row)
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
    