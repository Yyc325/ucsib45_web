export default {
    // 用于语言切换
    language: {
        chinese: "简体中文",
        english: "英文",
    },
    // 用于顶部导航栏
    header: {
        student: "学生",
        faculty: "教师职工",
        families: "家庭",
        alumni: "校友",
        search: "搜索",
        login: "登录",
        logout: "退出登录",
        backstage: "进入后台",
    },
    home: {
        slogan: "家国天下 无问西东",
        commitment1: "我们致力于培养具有科学精神、人文素养和强健体魄的人才。",
        commitment2: "",
        moreAbout: "了解更多关于 UCS IB",
    },

    // 用于主要导航栏
    primaryNav: {
        news: "新闻",
        academics: "学术",
        campusLife: "校园生活",
        collegeApplication: "大学申请",
        resource: "资源",
        admission: "入学",
        about: "关于",
    },
    foreground:{
        academics:{
            course:{
                preIb:'Pre-IB 课程',
                ibdp:'IBDP 课程',
                ibdpCore:'IBDP 核心主题'
            }
        }
    },
    login: {
        title: "学校官网",
        label: "登录",
        reIdentity: "重新选择登录身份"
    },
    register: {
        title: "返回登录",
        firstLabel: "没有账号？",
        secondLabel: "立即注册",
    },
    idSelection: {
        student: "学生",
        teacher: "老师",
        parent: "家长",
        admin: "管理员",
        title: "选择身份进行登录"
    },
    tip: {
        userName: "请输入用户名",
        account: "请输入账号",
        phone: "请输入手机号",
        password: "请输入密码",
        confirmPassword: "请确认密码",
        schoolName: "请输入学校名称",
        forgetPassword: "忘记密码？",
        name: "请输入姓名",
        authCode: "请输入验证码",
        signInNow: "已有账号，立即登录",
        agreement: "我已阅读并同意《用户协议》",
        sendCode: "获取验证码",
        reSendCode: "重新发送验证码",
        correctPhone: "请输入正确的手机号",
        correctCode: "请输入正确的验证码",
        passwordNotSame: "两次密码输入不一致",
        passwordNotEnough: "密码长度需在6-16位之间",
        throughAuthCode: "请确保密码已通过验证",
        agreementNotChecked: "请阅读并同意用户协议",
        newPassword: "请输入新密码",
        confirmNewPassword: "请确认新密码",
        registerSuccess: "注册成功，请登录",
        logout: "退出成功",
    },
    buttonText: {
        signIn: "登录",
        signUp: "注册",
        resetPassword: "重置密码",
        search: "搜索",
    },

    backstage: {
        title: "后台管理",
        User: {
            title: "用户管理",
            description: "用于管理所用用户信息",
            table: {
                user_name: "用户名",
                real_name: "真实姓名",
                phone: "手机号",
                identity: "identity",
            },
        },
        Notice: {
            title: "UCS IB 公告",
            description: "更多文化宣传，实时推送各类信息",
            table: {
                title: "标题",
                subtitle: "副标题",
                content: "内容",
                publisher: "发布人",
                status: "状态",
                publishTime: "发布时间",
                createTime: "创建时间",
                publishLocation:"发布位置"
            },
            popup: {
                cover: "上传封面",
                uploadTip: "上传封面常见格式为JPG、PNG，部分平台支持GIF。尺寸因场景而异,需按平台要求调整分辨率（72-300dpi）和文件大小。",
                required: {
                    title: "标题不能为空",
                    subtitle: "副标题不能为空",
                    publish_location:"发布位置不能为空",
                    cover:"封面不能为空"
                },
                tip: {
                    publish:{
                        title:'发布位置',
                        placeholder:'请选择发布位置',
                        form:{
                            position:'展示位置',
                            positionIndex:'展示编号'
                        }
                    },
                    delete: {
                        title: "删除提示",
                        description: "确定要删除该公告吗？"
                    },
                    revoke: {
                        title: "撤销提示",
                        description: "确定要撤销该公告吗？"
                    },
                    publish_location: {
                        title: "发布提示",
                        description: "确定要发布该公告吗？"
                    },
                    success:'操作成功',
                    warning:{
                        limitOne:'请选择一条数据进行操作',
                        onlyOne:'仅可对一条数据进行操作'
                    }
                }
            }
        },
    },
    message: {
        success: "操作成功",
        error: "操作失败",
    },
    messageBox: {
        title: "提示信息",
        confirm_prefix: "确认要将",
        confirm_center: "设置为"
    },
    operator: {
        add: '新增',
        publish: '发布',
        edit: '编辑',
        delete: '删除',
        save:'保存',
        saveAndCreate: '保存并新增',
        submit: "提交",
        cancel: "取消",
        confirm: "确定",
        revoke:'撤销'
    },
    component: {
        table: {
            empty: "暂无数据"
        }
    },
    about: {
        teamTitle: "我们的团队成员",
        member1: { name: "赵怡墨", title: "用户界面组负责人", desc: "设计专家" },
        member2: { name: "蔡天宇", title: "网站项目总负责人", desc: "管理网站团队，搭建学校网站" },
        member3: { name: "戴震", title: "团队管理者", desc: "负责管理团队工作进度" }
    },
    
};
