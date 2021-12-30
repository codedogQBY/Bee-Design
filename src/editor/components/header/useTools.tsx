import { Back, Copy, Delete, Download, Next, Phone, PreviewOpen, Refresh, Upload } from '@icon-park/vue-next'
import { ElMessage } from 'element-plus'

export const useTools = () => {
    return [
        {
            title: '导入JSON',
            icon: <Upload></Upload>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '导出JSON',
            icon: <Download></Download>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '复制页面',
            icon:  <Copy></Copy>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '撤销',
            icon: <Back></Back>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '恢复',
            icon:  <Next></Next>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '重做',
            icon:  <Refresh></Refresh>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '清空页面',
            icon:  <Delete></Delete>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '真机预览',
            icon:  <Phone></Phone>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        },
        {
            title: '预览',
            icon:  <PreviewOpen></PreviewOpen>,
            onClick: () => {
                ElMessage({
                    showClose: true,
                    type: 'info',
                    duration: 2000,
                    message: '敬请期待！'
                })
            }
        }
    ]
}
