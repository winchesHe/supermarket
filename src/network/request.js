import axios from 'axios'
export default function request(config){
  const instance = axios.create({
    // 1.创建实例
    baseURL:"http://152.136.185.210:7878/api/hy66",
    timeout:5000
  })

  // 2.设置响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
  })
  // 3.发送真正的请求
  return instance(config)
}