<template>
    <div style="background:#eee;padding: 20px;margin-bottom:10px;overflow-y:scroll;overflow-x:hidden;height:100%">
        <div>
            <Card :bordered="false" style="margin-bottom:10px">
            <p id="title" slot="title"><Icon type="ios-contacts" ></Icon> </p>
            <p>常州天目湖的游客通常来自江苏省、浙江省和上海市，以青、中年群体为主，女性游客比例高于男性，出游时段暑期最多、平时和国庆次之。在游玩过程中，主要购买地方特产，花费在1000-2000元的比例最高，500-1000元次之，消费水平高于江苏景区一般水平。游玩次数上，多次游玩游客数更多。</p>
            </Card>
        </div>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="1" width="600px">
                <h3>出游方式</h3>
            </div>
        </Card>
        <Row>
            <Col span="10">
                <Card style="width:540px;margin-bottom:20px">
                <div>
                    <img id="2" width=500px >
                    <h3 style="text-align:center">地域来源</h3>
                </div>
                </Card>
            </Col>
            <Col span="12" offset="1">
                <Card style="width:650px;margin-bottom:20px;height=450px">
                <div>
                    <img id="3" width=620px height=385px >
                    <h3 style="text-align:center">购物品类</h3>
                </div>
                </Card>
            </Col>
        </Row>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="4" width="600px">
                <h3>景区游玩次数分布</h3>
            </div>
        </Card>
        <Row>
            <Col span="10">
                <Card style="width:540px;margin-bottom:20px">
                <div>
                    <img id="5" width=500px >
                    <h3 style="text-align:center">性别比例</h3>
                </div>
                </Card>
            </Col>
            <Col span="12" offset="1">
                <Card style="width:650px;margin-bottom:20px;height=450px">
                <div>
                    <img id="6" width=620px height=385px >
                    <h3 style="text-align:center">旅游时段选择</h3>
                </div>
                </Card>
            </Col>
        </Row>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="7" width="600px">
                <h3>年龄分布</h3>
            </div>
        </Card>
        <Card style="width:1200px;margin-bottom:20px">
            <p slot="title">
            <Icon type="ios-pricetags-outline" ></Icon>
            事实标签
            </p>
            <div style="text-align:center">
                <img id="8" width="600px">
                <h3>消费水平</h3>
            </div>
        </Card>
        <div>
            <Card :bordered="false" style="margin-bottom:30px">
            <p id="advice" slot="title"><Icon type="ios-pin-outline" ></Icon> </p>
            <p>天目湖作为江苏省首批生态旅游示范区，风景秀美，有“江南明珠”、“绿色仙境”的美称。物产丰富，有“沙河桂茗”绿茶、“乌龙茶”、“珍珠栗”、“桂元栗”、“砂锅鱼头”等等，人文底蕴深厚。目前旅游业整体发展较好，在未来应注重增加特色，扩大辐射范围。</p>
            </Card>
        </div>

        <!--表格部分-->
        <div>
            <table style="width: 100%;margin-bottom:30px">
                <tr style="float:left;margin-bottom:20px">
                    <td>
                        <Button style="margin-right:20px" shape="circle" icon="ios-add-circle" @click='insert' >新增</Button>
                    </td>
                    <td>
                        <Button style="margin-right:20px" shape="circle" icon="md-cloud-upload" @click='uploadExcel'>从Excel导入</Button>
                    </td>
                    <td>
                        <Button style="margin-right:400px" shape="circle" icon="ios-download" @click='exportExcel' >导出到Excel</Button>
                    </td>
                    <td>
                        <Input placeholder="请输入要查询的内容" v-model="inputName" style="width: 300px;" />
                    </td>
                    <td>
                        <Button style="margin-right:10px" shape="circle" icon="ios-search" @click="select"></Button>
                    </td>
                    <td>
                        <Button style="margin-right:20px" shape="circle" icon="md-refresh" @click="refresh"></Button>
                    </td>
                </tr>
                <tr>
                    <Table style="margin-bottom:20px" border :columns="columns" :data="showdata"></Table>
                </tr>
                <tr>
                    <Page :total="dataCount" :current="pageCurrent"  :page-size="pagesize" show-total show-elevator @on-change="changepage"></Page>
                </tr>
            </table>

            <!--新增和编辑评论的弹窗-->
            <Modal v-model="modalConfig_table.window_udpTable" :footer-hide=true v-bind:title="modalConfig_table.title"
                v-bind:ok-text='modalConfig_table.okText' v-bind:cancel-text='modalConfig_table.cancelText' width="700"
                @on-ok="save('formData_table')" @on-cancel="cancel" @on-visible-change="reset('formData_table')">
                <Form :model="formData_table" :label-width="80" ref="formData_table" :rules="ruleValidate">
                    <!--表单验证， 给 Form 设置属性 rules-->
                    <Row>
                        <FormItem label="姓名:" prop="name">
                            <Input v-model="formData_table.name" placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem label="链接:" prop="link">
                            <Input v-model="formData_table.link" placeholder="请输入链接"></Input>
                        </FormItem>
                        <FormItem label="评分:" prop="rating">
                            <InputNumber :min="1" v-model.number="formData_table.rating"></InputNumber>
                        </FormItem>
                    </Row>
                    <Row>
                        <FormItem label="日期:" prop="date">
                            <Input v-model="formData_table.date" placeholder="请输入日期" />
                        </FormItem>
                        <FormItem label="评论:" prop="review">
                            <Input v-model="formData_table.review" type="textarea" :rows="3" placeholder="请输入评论内容" />
                        </FormItem>
                        <FormItem v-if="showButton">
                            <Button type="primary" @click="save('formData_table')">提交</Button>    
                            <Button @click="reset('formData_table')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                    </Row>
                </Form>
            </Modal>
    
            <!--导入csv的弹窗-->
            <Modal v-model="exportConfig.value" :title="exportConfig.title" :footer-hide="exportConfig.footerHide"
                :width="exportConfig.width">
                <div class="layout">
                    <Layout>
                            <Header style="background-color:white">
                                <table>
                                    <tr>
                                        <td>
                                            <Button style="text-align:center margin:0 auto" type="primary" @click='uploadSave' ghost>保存</Button>
                                        </td>
                                    </tr>
                                </table>
                            </Header>
                            <Footer>
                                <input type="file" id="upload-excel-file">
                            </Footer>
                    </Layout>	
                </div>
            </Modal>
	    </div>
    </div>
    
</template>
<script>
    import { resorts_data } from '../Home.vue';
    import LAY_EXCEL from 'lay-excel';
import { json } from 'body-parser';
    export default {      
        mounted(){
            this.CreatePath()
            this.showRev()
        },
        data() {
			return {
				columns: [{
						title: '用户名',
						key: 'name',
                        width: 100,
						render: (h, params) => {
							return h('div', [
								h('strong', params.row.name)
							]);
						}
					},
					{
						title: '链接',
						key: 'link'
					},
					{
						title: '评分',
                        width: 90,
						key: 'rating',
                        sortable: true,
					},
					{
						title: '日期',
                        width: 100,
						key: 'date',
                        sortable: true,
					},
                    {
						title: '评论',
						key: 'review'
					},
					{
						title: '操作',
						key: 'action',
						width: 220,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show(params.row, params.index)
										}
									}
								}, '详情'),
								h('Button', {
									props: {
										type: 'success',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.edit(params.row, params.index)
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									on: {
										click: () => {
											this.remove(params.row,params.index)
										}
									}
								}, '删除')
							]);
						}
					}
				],
				data: [],
                showdata: [],
				ruleValidate: { //表单验证
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}],
                    link:[{
                        required: true,
                        message: '请输入链接',
                        trigger: 'blur'
                    }],
					rating: [{
						required: true,
						type: 'number',
						message: '请输入评分',
						trigger: 'blur'
					}],
					date: [{
						required: true,
						message: '请输入日期',
						trigger: 'blur'
					}],
                    review: [{
						required: true,
						message: '请输入评论内容',
						trigger: 'blur'
					}],
				},
				modalConfig_table: { //弹窗属性设置
					window_udpTable: false, //更新table弹窗的显示状态
					okText: '确定按钮',
					cancelText: '取消按钮',
					title: '标题'
				},
				formData_table: { //表单数据
					name: '',
					link: '',
					rating: 5,
					date: '',
                    review: '',
				},
				showButton: true, //是否显示提交、重置按钮
				inputName: '', //查询输入框的值
				temp: {}, //用于查找时表格数据临时存放
				exportConfig: { //导入弹窗设置
					value: false,
					title: '导入数据',
					width: '300',
					footerHide: true,
				},
                IP: 'http://localhost:3001/api/resorts/',
                idx: 0,
                city: '',
                resort_name: '',
                dataCount: 0,
                pagesize: 10,
                pageCurrent: 1,
			}
		},
        methods: {
            CreatePath() {
                let img_name = ["出游方式", "地域来源", "购物品类","景区游玩次数", "性别比例","旅游时段选择","年龄分布", "消费水平"];
                var resort_idx = this.$route.name.slice(-1) - 1
                this.idx = resort_idx + 1
                let division = resort_idx > 0 && resort_idx < 3 ? 3 : 2;
                var city = resorts_data[resort_idx].name.slice(0, division);
                var resort_name = resorts_data[resort_idx].name.slice(division);
                this.city = city
                this.resort_name = resort_name
                //document.getElementById("1").src = require("../../assets/imgs/常州/常州天目湖/事实标签/出游方式/出游方式.png")
                img_name.forEach((value, index) => {
                    const file_path = "/static/imgs/" + city + "/" + city + resort_name + "/事实标签/" + value + "/" + value + ".png";
                    //console.log(file_path);
                    let pic_id = index + 1
                    document.getElementById(pic_id.toString()).src = file_path
                });
                document.getElementById("title").innerHTML = resort_name + ": 游客画像"
                document.getElementById("advice").innerHTML = resort_name + ": 发展建议"
            },
            showRev(){
                let Revdata = []
                let idx = parseInt(this.$route.name.slice(-1))
                this.$axios.post(this.IP + 'showRev', {
                    idx: idx
                }).then(res => {
                    Revdata = res.data
                    this.data = Revdata //.sort((a, b) => b.rating - a.rating)
                }).then(() => {
                    this.dataCount = this.data.length
                    if (this.dataCount < this.pagesize)
                        this.showdata = this.data
                    else
                        this.showdata = this.data.slice(0, this.pagesize)
                    this.pageCurrent = 1
                })
            },
            changepage(index){
                let start = (index - 1) * this.pagesize
                let end = index * this.pagesize
                this.showdata = this.data.slice(start, end)
                this.pageCurrent = index;
            },
            show(row, index) {
                this.modalConfig_table.title = "评论详情"
                this.modalConfig_table.window_udpTable = true
                this.formData_table = JSON.parse(JSON.stringify(row)) // Deep Copy
                this.showButton = false
			},
			insert() { 
                this.showButton = true
				this.modalConfig_table.title = "新增评论"
				this.modalConfig_table.window_udpTable = true
			},
			save(name) {
				this.$refs[name].validate((valid) => {
                    if(!valid){console.log(valid)}
					if (valid) {
						let title = this.modalConfig_table.title;
						var params = JSON.parse(JSON.stringify(this.formData_table));
						if (title == "新增评论") {
                            this.$axios.post(
                                this.IP + 'addRev', {
                                    idx: this.idx,
                                    name: params.name,
                                    link: params.link,
                                    rating: params.rating,
                                    date: params.date,
                                    review: params.review,
                                }
                            ).then(response => {
                                this.showRev()
                            })
							this.$Message.success('新增成功');
						}
						if (title == "编辑评论") {
                            this.$axios.post(
                                this.IP + 'updateRev', {
                                    idx: this.idx,
                                    name: params.name,
                                    link: params.link,
                                    rating: params.rating,
                                    date: params.date,
                                    review: params.review,
                                }
                            ).then(response => {
                                this.showRev()
                            })
							this.$Message.success("修改成功!");
						}
						this.modalConfig_table.window_udpTable = false 
					} else {
						this.$Message.error('验证未通过!');
					}
				})
			},
			edit(row, index) { 
                this.showButton = true
				this.modalConfig_table.title = "编辑评论"
				this.modalConfig_table.window_udpTable = true 
				this.formData_table = JSON.parse(JSON.stringify(row));
			},
			remove(row, index) {
                this.$Modal.confirm({
                    title: '警告',
                    content: '<p>确定删除" '+ row.name +' "用户的该条评论吗？</p>',
                    onOk: () => {
						let params = JSON.parse(JSON.stringify(this.showdata[index]))
                        //console.log(params)
                        this.$axios.post(
                                this.IP + 'delRev', {
                                    idx: this.idx,
                                    name: params.name,
                                }
                            ).then(response => {
                                this.showRev()
                            })
						this.$Message.success("删除成功!");
                    },
                    onCancel: () => {
                        this.$Message.info('取消删除');
                    }
                });
			},
			select() {
				var tabledata = JSON.parse(JSON.stringify(this.data));
				// Initialization
				if (this.temp.length == undefined)
					this.temp = tabledata;
				//如果输入框为空 返回全部数据
				if (this.inputName == "") {
					this.data = this.temp;
				} else {
					let res = [];
                    let table_len = tabledata.length
					for (let i = 0; i < table_len; i++) {
						if (tabledata[i].name.indexOf(this.inputName) != -1 || tabledata[i].review.indexOf(this.inputName) != -1) 
                        {
							res.push(tabledata[i]);
						}
					}
					this.showdata = res;
				}
			},
            refresh() {
                this.inputName = ""
                this.showRev()
            },
			cancel() {
				console.log("取消");
			},
			reset(name) { 
				let title = this.modalConfig_table.title;
				if (title != "编辑评论") {
					this.$refs[name].resetFields(); 
					// this.formData_table = Object.assign({}, this.defaultForm);
				}
			},
			exportExcel() { 
                this.showRev()
                console.log(this.data)
				let tabledata = JSON.parse(JSON.stringify(this.data));
                var resort_idx = this.$route.name.slice(-1) - 1
                let division = resort_idx > 0 && resort_idx < 3 ? 3 : 2
                var city = resorts_data[resort_idx].name.slice(0, division)
                var resort_name = resorts_data[resort_idx].name.slice(division)
				let exceldata = LAY_EXCEL.filterExportData(tabledata, {
					username: 'name', //Sort & Field filter & Rename
					link: 'link',
                    rating: 'rating',
					date: 'date',
                    review: 'review'
				});
				exceldata.unshift({ //设置列名
					username: "姓名",
					link: '链接',
                    rating: '评分',
					date: '日期',
                    review: '评论'
				})
				LAY_EXCEL.exportExcel(exceldata, city + resort_name + '.xlsx', 'xlsx');
			},
			uploadExcel() {
				this.exportConfig.value = true;
			},
			uploadSave() { 
				let that = this; 
				let files = document.getElementById('upload-excel-file').files;
				try {
				  LAY_EXCEL.importExcel(files, {}, function (data) {
				    console.log('Imported JSON：' + JSON.stringify(data));
				    data = LAY_EXCEL.filterImportData(data, {
				      'name': 'A',
				      'link': 'B',
				      'rating': 'C',
				      'date': 'D',
                      'review': 'E',
				    })
				    console.log('Retrieved JSON：' + JSON.stringify(data)); 
					let Exceldata = data[0].Sheet1.slice(1);
                    if (data[0].Sheet1 == undefined)
                        Exceldata = data[0].sheet1.slice(1)
                    let values = []
                    Exceldata.forEach((value, index) => {
                        values[index] = Object.keys(Exceldata[index]).map(item => Exceldata[index][item])
                    })
                    that.$axios.post(
                                that.IP + 'insertRev', {
                                    idx: that.idx,
                                    values: values,
                                }
                            ).then(response => {
                                that.showRev()
                            })
				    that.exportConfig.value = false;
					that.$Message.success("导入成功!");
				  });
				} catch (e) {
					this.$Message.error('导入错误: ' + e.message);
				}
			}
		} 
    }
</script>