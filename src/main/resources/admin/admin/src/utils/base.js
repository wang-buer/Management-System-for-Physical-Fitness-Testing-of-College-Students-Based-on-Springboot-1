const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot6r8mn/",
            name: "springboot6r8mn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6r8mn/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "大学生体质测试管理系统"
        } 
    }
}
export default base
